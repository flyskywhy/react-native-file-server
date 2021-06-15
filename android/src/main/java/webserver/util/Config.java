package webserver.util;

import android.os.Environment;
import android.util.Log;
import android.widget.Toast;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.ServerSocket;
import java.util.Properties;
import java.util.ResourceBundle;

public class Config {
    private static Config config = new Config();
    private int PORT = 8080;
    private String WEBDOC = null;
    private String DISKPATH = null;
    private String UPLOAD = null;

    private Config() {
        WEBDOC = "FileServerWEBDOC";
        DISKPATH = Environment.getExternalStorageDirectory().getPath();
        UPLOAD = Environment.getExternalStorageDirectory().getPath() + File.separator + "FileServerUpload";
        createDir(UPLOAD);
    }

    public static Config getInstance() {
        return config;
    }

    public int getPORT() {
        return PORT;
    }

    public void setPORT(int port) {
        if (port < 1024 || port > 65535) {
            renewPort();
        } else {
            PORT = port;
        }
    }

    public String getWEBDOC() {
        return WEBDOC;
    }

    public String getDISKPATH() {
        return DISKPATH;
    }

    public String getUPLOAD() {
        return UPLOAD;
    }

    public int renewPort(){
        ServerSocket serverSocket = null;
        try {
            serverSocket = new ServerSocket(0);
            PORT = serverSocket.getLocalPort(); //Integer.parseInt(resource.getString("PORT"));
            serverSocket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return getPORT();
    }

    public static boolean canavilable() {
        //首先判断外部存储是否可用
        if (Environment.getExternalStorageState().equals(Environment.MEDIA_MOUNTED)) {
            File sd = new File(Environment.getExternalStorageDirectory().getPath());
            return sd.canWrite();
        } else {
            return false;
        }
    }

    public static boolean createDir(String destDirName) {
        File dir = new File(destDirName);
        if (dir.exists()) {// 判断目录是否存在
            return false;
        }
        if (!destDirName.endsWith(File.separator)) {// 结尾是否以"/"结束
            destDirName = destDirName + File.separator;
        }
        if (dir.mkdirs()) {// 创建目标目录
            return true;
        } else {
            return false;
        }
    }
}
