"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
exports.default = {
    development: {
        client: 'mysql2',
        connection: {
            host: 'sql10.freesqldatabase.com',
            user: 'sql10454601',
            password: 'pQBvlfTnXK',
            database: 'sql10454601'
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: path_1.default.resolve(__dirname, 'src', 'database', 'migrations'),
        },
        seeds: {
            directory: path_1.default.resolve(__dirname, 'src', 'database', 'seeds'),
        },
    },
};
