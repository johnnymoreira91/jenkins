/**
 * @type {import('pm2')}
 */
 module.exports = {
    apps: [
      {
        name: 'teste-jenkins',
        script: './index.js',
        watch: false, // never set true
        max_memory_restart: '2048M',
        env: {
          NODE_ENV: "prod",
        }
      }, 
    //   {
    //   name: 'ebrain-server',
    //   script: './dist/index.js',
    //   watch: false,
    //   max_memory_restart: '2048M',
    //   env: {
    //     NODE_ENV: "prod",
    //   }
    // }, {
    //   name: 'updater-g2',
    //   script: './dist/services/WebUpdater.js',
    //   watch: false,
    //   max_memory_restart: '1536M',
    //   args: ['exec'],
    //   env: {
    //     NODE_ENV: "prod",
    //     city: 'g2',
    //   }
    // }, 
    // {
    //   name: 'updater-cv',
    //   script: './dist/services/WebUpdater.js',
    //   watch: false,
    //   max_memory_restart: '2048M',
    //   args: ['exec'],
    //   env: {
    //     NODE_ENV: "prod",
    //     city: 'cv'
    //   }
    // }, {
    //   name: 'updater-tb2',
    //   script: './dist/services/WebUpdater.js',
    //   watch: false,
    //   max_memory_restart: '1536M',
    //   args: ['exec'],
    //   env: {
    //     NODE_ENV: "prod",
    //     city: 'tb2'
    //   }
    // }
  ],
  
    // deploy : {
    //   production : {
    //     user : 'SSH_USERNAME',
    //     host : 'SSH_HOSTMACHINE',
    //     ref  : 'origin/master',
    //     repo : 'GIT_REPOSITORY',
    //     path : 'DESTINATION_PATH',
    //     'pre-deploy-local': '',
    //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
    //     'pre-setup': ''
    //   }
    // }
  };
  