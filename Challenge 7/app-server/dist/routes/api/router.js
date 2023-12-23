"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// controllers
const ControllerAuth_1 = __importDefault(require("../../controllers/api/ControllerAuth"));
const ControllerCars_1 = __importDefault(require("../../controllers/api/ControllerCars"));
// middlewares
const Auth_1 = __importDefault(require("../../middlewares/Auth"));
// services
const ServiceCars_1 = __importDefault(require("../../services/ServiceCars"));
const ServiceAuth_1 = __importDefault(require("../../services/ServiceAuth"));
// repositories
const RepoCars_1 = __importDefault(require("../../repositories/RepoCars"));
const RepoUsers_1 = __importDefault(require("../../repositories/RepoUsers"));
const media_1 = __importDefault(require("../../config/media"));
const router = (0, express_1.Router)();
const middlewareAuth = new Auth_1.default();
// Auth
const repoUser = new RepoUsers_1.default();
const serviceAuth = new ServiceAuth_1.default(repoUser);
const controllerAuth = new ControllerAuth_1.default(serviceAuth);
// Cars
const repoCars = new RepoCars_1.default();
const serviceCars = new ServiceCars_1.default(repoCars);
const controllerCar = new ControllerCars_1.default(serviceCars);
// auth
router.post("/auth/login", controllerAuth.login());
router.post("/auth/register-admin", middlewareAuth.authorizeSuperAdmin, controllerAuth.registerAdmin());
// Cars
router.get("/cars", controllerCar.list());
router.get("/cars/:id", controllerCar.show());
router.post("/cars", middlewareAuth.authorize, controllerCar.create());
router.put("/cars/:id", middlewareAuth.authorize, controllerCar.update());
router.delete("/cars/:id", middlewareAuth.authorize, controllerCar.remove());
// upload
router.post("/cars/upload", [middlewareAuth.authorize, media_1.default.upload.single("image")], controllerCar.upload());
exports.default = router;
