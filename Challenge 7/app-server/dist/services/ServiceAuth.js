"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.JWT_KEY = void 0;
const bcrypt_1 = __importStar(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ClientError_1 = __importDefault(require("../utils/ClientError"));
exports.JWT_KEY = 'RENTAL_CAR_JWT_KEY';
class ServiceAuth {
    constructor(repoUser) {
        this._repoUser = repoUser;
    }
    login(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this._repoUser.findByUsername(payload.username);
            if (!user) {
                throw new ClientError_1.default(404, 'User tidak ditemukan');
            }
            const validatePassword = bcrypt_1.default.compareSync(payload.password, user.password);
            if (!validatePassword) {
                throw new ClientError_1.default(403, 'Username dan Password tidak sesuai');
            }
            return this.generateToken(user);
        });
    }
    register(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const password = this.encryptPassword(payload.password);
            const create = yield this._repoUser.create(Object.assign(Object.assign({}, payload), { password }));
            return create;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this._repoUser.findById(id);
            return user;
        });
    }
    generateToken(user) {
        const token = jsonwebtoken_1.default.sign(Object.assign({}, user), exports.JWT_KEY);
        return token;
    }
    validateToken(token) {
        const decoded = jsonwebtoken_1.default.verify(token, exports.JWT_KEY);
        return decoded;
    }
    validateRole(user, role) {
        return user.role === role;
    }
    encryptPassword(password) {
        return bcrypt_1.default.hashSync(password, (0, bcrypt_1.genSaltSync)(5));
    }
}
exports.default = ServiceAuth;
