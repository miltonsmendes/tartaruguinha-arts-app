import path from 'path';

export default {
    development : {
        client: 'mysql2',
        connection: {
            host: 'sql10.freesqldatabase.com',
            user: 'sql10454601',
            password: 'pQBvlfTnXK',
            database: 'sql10454601'
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
        },
        seeds: {
            directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
        },
    },
};
