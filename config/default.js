const fs = require('fs');
const path = require('path');

const appPath = fs.realpathSync(process.cwd());
const buildDir = 'dist';

module.exports = {
  server: {
    protocol: process.env.HTTPS ? 'https' : 'http',
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 3000
  },
  dir: {
    build: buildDir,
    assets: 'assets',
    static: 'static'
  },
  path: {
    app: appPath,
    src: path.resolve(appPath, 'src'),
    build: path.resolve(appPath, buildDir)
  },

  mailer: {
    to: 'mail@daks.pro',
    service: 'Yandex',
    user: 'default@daks.pro',
    password: '+1234567'
  },
  recaptcha: {
    key: '6Lem2jEUAAAAAKIV5DAJQQ-tli3FvCb8pga36Hfx',
    secret: '6Lem2jEUAAAAAHsJpBJlN5YZNWDsH5jflJV6EAJw'
  }
};
