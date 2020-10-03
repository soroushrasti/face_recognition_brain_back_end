production: {
    client: 'pg',
    connection: {
      database: 'smart-brain',
      connection:process.env.DATABASE_URL
    }