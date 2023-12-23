"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
    }
}
exports.default = ClientError;
