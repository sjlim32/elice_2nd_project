// Target server hostname or IP address
const TARGET_SERVER_HOST = process.env.TARGET_SERVER_HOST ? process.env.TARGET_SERVER_HOST.trim() : '';
// Target server username
const TARGET_SERVER_USER = process.env.TARGET_SERVER_USER ? process.env.TARGET_SERVER_USER.trim() : '';
// Target server application path
const TARGET_SERVER_APP_PATH = `/home/${TARGET_SERVER_USER}/app`;
// Your repository
const REPO = 'git@kdt-gitlab.elice.io:ai_track/class_06/data_project/team01/backend.git';

module.exports = {
  apps: [
    {
      name: 'team01',
      script: 'npm run start:stage',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
  deploy: {
    stage: {
      user: TARGET_SERVER_USER,
      host: TARGET_SERVER_HOST,
      ref: 'dev',
      repo: REPO,
      ssh_options: 'StrictHostKeyChecking=no',
      path: TARGET_SERVER_APP_PATH,
      'post-deploy': 'git pull && npm install && npm run build && pm2 startOrGracefulReload pm2-ecosystem.config.js --env production && pm2 save',
    },
  },
};
