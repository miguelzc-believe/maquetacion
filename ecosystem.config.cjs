module.exports = {
  apps: [
    {
      name: "clinica-maquetacion",
      script: "npm run start",
      instances: 1,
      exec_mode: "fork",
      watch: false,
      autorestart: true,
      max_memory_restart: "512M",
      env: {
        PORT: 3050,
        NODE_ENV: "development",
      },
    },
  ],
};
