package com.flyskywhy.fileserver;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.List;

public class HttpFileServerPackage implements ReactPackage {
    static final String TAG = "HttpFileServer";

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactApplicationContext) {
        HttpFileServerNativeModule httpFileServerModule = new HttpFileServerNativeModule(reactApplicationContext);

        List<NativeModule> nativeModules = new ArrayList<>();
        nativeModules.add(httpFileServerModule);
        return nativeModules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactApplicationContext) {
        return new ArrayList<>();
    }
}
