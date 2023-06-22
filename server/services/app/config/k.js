module.exports = {
  apps: [
    {
      name: "app",
      script: "./app.js",
      env_production: {
        NODE_ENV: "production",
        JWTSECRET: "hehe",
        PORT: 80,
        DATABASE_URL:
          "postgresql://postgres:tezji0-vadher-sijhuQ@db.ziokyhgdnyklkuovuxdf.supabase.co:5432/postgres",
      },
    },
  ],
};
