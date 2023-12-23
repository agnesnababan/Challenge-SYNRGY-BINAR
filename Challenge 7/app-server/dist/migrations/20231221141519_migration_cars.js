"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield knex.schema.createTable("cars", (builder) => {
            builder.increments("id").primary().notNullable();
            builder.string("plate").notNullable();
            builder.string("manufacture").notNullable();
            builder.string("model").notNullable();
            builder.json("image").defaultTo(null).nullable();
            builder.integer("rentPerDay").defaultTo(0);
            builder.integer("capacity").defaultTo(0);
            builder.string("description").notNullable();
            builder.timestamp("availableAt").defaultTo(knex.fn.now());
            builder.string("transmission").notNullable();
            builder.boolean("available").defaultTo(false);
            builder.string("type").notNullable();
            builder.integer("year").defaultTo(0);
            builder.specificType("options", "text ARRAY");
            builder.specificType("specs", "text ARRAY");
            builder.integer("created_by").references("id").inTable("users");
            builder.integer("updated_by").references("id").inTable("users");
            builder.boolean("deleted").defaultTo(false);
            builder.timestamp("created_at").notNullable();
            builder.timestamp("updated_at").nullable();
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield knex.schema.dropTable("cars");
    });
}
exports.down = down;
