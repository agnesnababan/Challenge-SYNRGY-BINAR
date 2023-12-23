"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const api_1 = __importDefault(require("./routes/api"));
const responBuilder_1 = __importDefault(require("./utils/responBuilder"));
const cors_1 = __importDefault(require("cors"));
const { PORT = 8888 } = process.env;
const PUBLIC_DIR = path_1.default.join(__dirname, "public");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.static(PUBLIC_DIR));
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)({
            origin: "http://localhost:5173",
        }));
        this.app.use("/api", api_1.default);
        // Handle not found errors
        this.app.use(this.notFoundHandler);
        // Handle other errors
        this.app.use(this.errorHandler);
    }
    notFoundHandler(req, res, next) {
        return responBuilder_1.default.response({
            res,
            code: 404,
            message: "resource not found",
            data: "not found",
        });
    }
    errorHandler(err, req, res, next) {
        var _a;
        console.log(err.stack);
        return responBuilder_1.default.response({
            res,
            code: (_a = err === null || err === void 0 ? void 0 : err.statusCode) !== null && _a !== void 0 ? _a : 500,
            message: err.message,
            data: err.name,
        });
    }
    run() {
        this.app.listen(PORT, () => {
            console.log("Server running on http://localhost:%d", PORT);
        });
    }
}
new Server().run();
