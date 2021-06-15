package com.flyskywhy.fileserver;

import java.io.IOException;

import android.content.Context;
import android.util.Log;

import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import webserver.WebServer;
import webserver.util.Config;

import static com.flyskywhy.fileserver.HttpFileServerPackage.TAG;

public class HttpFileServerNativeModule extends ReactContextBaseJavaModule implements LifecycleEventListener {

    // Debugging
    private static final boolean D = true;

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
}
