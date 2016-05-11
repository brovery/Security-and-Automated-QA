var connectionString = process.env.DATABASE_URL || 'postgres://postgres:test@localhost:5432/todo';

module.exports = connectionString;