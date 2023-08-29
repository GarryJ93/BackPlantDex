import { Request, Response, Router } from "express";
import { PlantController } from "../controllers/PlantController";
import checkIdNumber from "../middlewares/CheckIdNumber";
import checkObject from "../middlewares/CheckObject";

const plantRouter = Router();
const plantController = new PlantController();

plantRouter.get("/", (req: Request, res: Response) => {
    plantController.getAllPlants(req, res);
});

plantRouter.get("/:id", checkIdNumber, (req: Request, res: Response) => {
    plantController.getPlantById(req, res);
})

plantRouter.post("/", checkObject, (req: Request, res: Response) => {
    plantController.createNewPlant(req, res);
})

export default plantRouter;