package com.flyskywhy.fileserver;

import java.io.IOException;

import android.Manifest;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import android.os.Build;
import android.util.Log;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import webserver.WebServer;
import webserver.util.Config;

import static com.flyskywhy.fileserver.HttpFileServerPackage.TAG;

public class HttpFileServerNativeModule extends ReactContextBaseJavaModule implements ActivityEventListener, LifecycleEventListener {

    // Debugging
    private static final boolean D = true;

    private static final int STORAGE_RESULT_CODE = 7;

    private ReactApplicationContext mReactContext;
    private static Context mContext;

    private static WebServer webServer;
    protected static boolean serverflag = false;

    public static String version;

    public HttpFileServerNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mReactContext = reactContext;
        mContext = mReactContext.getApplicationContext();
        reactContext.addLifecycleEventListener(this);
    }

    @Override
    public String getName() {
        return "HttpFileServer";
    }

    public static Context getContext() {
        return mContext;
    }

    @Override
    public void onHostResume() {
    }

    @Override
    public void onHostPause() {
    }

    @Override
    public void onHostDestroy() {
        if (D) Log.d(TAG, "Host destroy");
        // APP 切到后台时也会调用此处，导致切回前台 Resume 时无法再正常使用本组件，因此使不在此处调用 stopServer
        // stopServer();
    }

    @Override
    public void onCatalystInstanceDestroy() {
        if (D) Log.d(TAG, "Catalyst instance destroyed");
        stopServer();
        super.onCatalystInstanceDestroy();
    }

    @ReactMethod
    public void setVersion(String ver) {
        version = ver;
    }

    @ReactMethod
    public void start(int port) {
        startServer(port);
    }

    @ReactMethod
    public void stop() {
        stopServer();
    }

    private void startServer(int port) {
        checkPermissions();

        if (webServer == null) {
            Config.getInstance().setPORT(port);
            Log.d(TAG, "Initializing HTTP file server...");
            webServer = new WebServer();
        }
        if(webServer != null && !serverflag) {
            try {
                Log.d(TAG, "Starting HTTP file server...");
                webServer.start();
                serverflag = true;
            } catch (IOException e) {
                Log.e(TAG, e.getMessage());
            }
        }
    }

    private void stopServer() {
        if(webServer != null) {
            Log.d(TAG, "Stopping HTTP file server...");
            webServer.closeAllConnections();
            webServer.stop();
        }
        serverflag = false;
    }

    @Override
    public void onNewIntent(Intent intent) {
        if (D) Log.d(TAG, "On new intent");
    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent intent) {
        if (D) Log.d(TAG, "On activity result request: " + requestCode + ", result: " + resultCode);
        if (requestCode == STORAGE_RESULT_CODE) {
            if (resultCode == Activity.RESULT_OK) {
                if (D) Log.d(TAG, "WRITE_EXTERNAL_STORAGE permission ok");
            } else {
                if (D) Log.d(TAG, "WRITE_EXTERNAL_STORAGE permission failed");
            }
        }
    }

    private void checkPermissions() {
        // ref to https://support.google.com/googleplay/android-developer/answer/10467955?hl=zh-Hans
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) { // R is Android API 30 (Android 11)
            if (ContextCompat.checkSelfPermission(getCurrentActivity(),
                    Manifest.permission.MANAGE_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED) {
                ActivityCompat.requestPermissions(getCurrentActivity(),
                        new String[]{Manifest.permission.MANAGE_EXTERNAL_STORAGE},
                        STORAGE_RESULT_CODE);
            }
        }

        // ref to https://commonsware.com/blog/2015/08/31/hey-where-did-my-permission-go.html
        // "For these permissions, not only does your targetSdkVersion 23+ app need to have the <uses-
        // permission> element(s), but you also have to ask for those permissions at runtime from the user on
        // Android 6.0+ devices, using methods like checkSelfPermission() and requestPermissions()."
        else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) { // M is Android API 23 (Android 6.0)
            if (ContextCompat.checkSelfPermission(getCurrentActivity(),
                    Manifest.permission.WRITE_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED) {
                ActivityCompat.requestPermissions(getCurrentActivity(),
                        new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE},
                        STORAGE_RESULT_CODE);
            }
        }
    }
}
