module.exports = {
  apps: [
    {
      name: "maquetacion-internacion",
      script: "npm run start",
      instances: 1,
      exec_mode: "fork",
      watch: false,
      autorestart: true,
      max_memory_restart: "512M",
      env: {
        PORT: 3100,
        NODE_ENV: "development",
      },
    },
  ],
};
