module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'cryptofeelz',
      script    : 'server.js',
      env: {
        REACT_APP_API_ROOT: "http://localhost:3000",
        PORT: 8080,
      },
      env_production : {
        NODE_ENV: "production",
        REACT_APP_API_ROOT: "http://api.cryptofeelz.com",
        PORT: 80,
      },
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'node',
      host : 'cryptofeelz.com',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production'
    },
  }
};
