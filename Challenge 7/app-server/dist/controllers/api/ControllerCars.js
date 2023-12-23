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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const responBuilder_1 = __importDefault(require("../../utils/responBuilder"));
const media_1 = __importDefault(require("../../config/media"));
class ControllerCars {
    constructor(serviceCars) {
        this._serviceCars = serviceCars;
    }
    upload() {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (req.file) {
                    const fileBase64 = req.file.buffer.toString("base64");
                    const file = `data:${req.file.mimetype};base64,${fileBase64}`;
                    const resultUpload = yield media_1.default.storage.uploader.upload(file, (err, result) => {
                        if (err) {
                            return responBuilder_1.default.response({
                                code: 403,
                                res,
                                data: "Gagal di upload ke dalam storage",
                            });
                        }
                        return result;
                    });
                    return responBuilder_1.default.response({
                        code: 200,
                        res,
                        data: resultUpload,
                    });
                }
                responBuilder_1.default.response({
                    code: 404,
                    res,
                    data: "file tidak ditemukan",
                });
            }
            catch (error) {
                responBuilder_1.default.response({
                    code: 500,
                    data: "upload gagal",
                    res,
                });
            }
        });
    }
    create() {
        const serviceCars = this._serviceCars;
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                serviceCars.setUser = req.user;
                console.log(req.body);
                const result = yield serviceCars.create(req.body);
                return responBuilder_1.default.response({
                    res,
                    code: 201,
                    data: result,
                    message: "Berhasil membuat data mobil",
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    update() {
        const serviceCars = this._serviceCars;
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
                serviceCars.setUser = req.user;
                const result = yield serviceCars.update(id, req.body);
                return responBuilder_1.default.response({
                    res,
                    code: 200,
                    data: result,
                    message: "Berhasil mengubah data mobil",
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    list() {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const query = req.query;
                console.log(query);
                const result = yield this._serviceCars.list(query);
                const totalPages = Math.floor(result.total / Number((_a = query === null || query === void 0 ? void 0 : query.size) !== null && _a !== void 0 ? _a : 9)) + 1;
                return responBuilder_1.default.response({
                    res,
                    code: 200,
                    data: result.results,
                    message: "Berhasil fetch data mobil",
                    meta: {
                        page: (query === null || query === void 0 ? void 0 : query.page) ? Number(query === null || query === void 0 ? void 0 : query.page) : 1,
                        size: (query === null || query === void 0 ? void 0 : query.size) ? Number(query === null || query === void 0 ? void 0 : query.size) : 9,
                        totalData: result.total,
                        totalPages,
                    },
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    remove() {
        const serviceCars = this._serviceCars;
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                serviceCars.setUser = req.user;
                const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
                const result = yield this._serviceCars.remove(id);
                return responBuilder_1.default.response({
                    res,
                    code: 200,
                    data: result,
                    message: "Berhasil menghapus data mobil",
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    show() {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
                const result = yield this._serviceCars.show(id);
                return responBuilder_1.default.response({
                    res,
                    code: 200,
                    data: result,
                    message: "Data mobil berhasil ditampilkan",
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = ControllerCars;
