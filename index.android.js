import {NativeModules} from 'react-native';
const Server = NativeModules.HttpFileServer;

module.exports = {
  start({port = 8080}) {
    if (port == 80) {
      console.warn('Invalid server port specified. Port 80 is reserved. Using default 8080 now');
    }

    Server.start(port);
  },

  stop() {
    Server.stop();
  },
};
