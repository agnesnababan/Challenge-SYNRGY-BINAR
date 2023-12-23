"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const objection_1 = require("objection");
objection_1.Model.knex(database_1.default);
class Cars extends objection_1.Model {
    static get tableName() {
        return "cars";
    }
    static get idColumn() {
        return "id";
    }
    $beforeInsert() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.created_at = new Date().toISOString();
    }
    $beforeUpdate() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        this.updated_at = new Date().toISOString();
    }
    static get timestamps() {
        return true;
    }
}
exports.default = Cars;
