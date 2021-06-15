import {NativeModules} from 'react-native';
import packageJson from './package.json';
const Server = NativeModules.HttpFileServer;

module.exports = {
  start({port = 8080}) {
    Server.setVersion(packageJson.version);

    if (port == 80) {
      console.warn('Invalid server port specified. Port 80 is reserved. Using default 8080 now');
    }

    Server.start(port);
  },

  stop() {
    Server.stop();
  },
};
