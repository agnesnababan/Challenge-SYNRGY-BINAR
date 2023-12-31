import { Router } from "express";

// controllers
import ControllerAuth from "../../controllers/api/ControllerAuth";
import ControllerCars from "../../controllers/api/ControllerCars";

// middlewares
import MiddlewareAuth from "../../middlewares/Auth";

// services
import ServiceCars from "../../services/ServiceCars";
import ServiceAuth from "../../services/ServiceAuth";

// repositories
import RepoCars from "../../repositories/RepoCars";
import RepoUsers from "../../repositories/RepoUsers";

import media from "../../config/media";

const router = Router();

const middlewareAuth = new MiddlewareAuth();

// Auth
const repoUser = new RepoUsers();
const serviceAuth = new ServiceAuth(repoUser);
const controllerAuth = new ControllerAuth(serviceAuth);

// Cars
const repoCars = new RepoCars();
const serviceCars = new ServiceCars(repoCars);
const controllerCar = new ControllerCars(serviceCars);

// auth
router.post("/auth/login", controllerAuth.login());
router.post(
  "/auth/register-admin",
  middlewareAuth.authorizeSuperAdmin,
  controllerAuth.registerAdmin()
);

// Cars
router.get("/cars", controllerCar.list());
router.get("/cars/:id", controllerCar.show());
router.post("/cars", middlewareAuth.authorize, controllerCar.create());
router.put("/cars/:id", middlewareAuth.authorize, controllerCar.update());
router.delete("/cars/:id", middlewareAuth.authorize, controllerCar.remove());

// upload
router.post(
  "/cars/upload",
  [middlewareAuth.authorize, media.upload.single("image")],
  controllerCar.upload()
);

export default router;