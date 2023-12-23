"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Update with your config settings.
const config = {
    development: {
        client: 'pg',
        connection: {
            database: 'postgres',
            user: 'postgres',
            password: 'docker',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
    staging: {
        client: 'pg',
        connection: {
            database: 'postgres',
            user: 'postgres',
            password: 'docker',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
    production: {
        client: 'pg',
        connection: {
            database: 'postgres',
            user: 'postgres',
            password: 'docker',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
};
module.exports = config;
