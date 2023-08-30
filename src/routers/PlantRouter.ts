import { Request, Response, Router } from "express";
import { PlantController } from "../controllers/PlantController";
import checkIdNumber from "../middlewares/CheckIdNumber";
import checkObject from "../middlewares/CheckObject";
import checkToken from "../middlewares/CheckToken";

const plantRouter = Router();
const plantController = new PlantController();

plantRouter.get("/", (req: Request, res: Response) => {
    plantController.getAllPlants(req, res);
});

plantRouter.get("/:id", checkIdNumber, (req: Request, res: Response) => {
    plantController.getPlantById(req, res);
})

plantRouter.post("/", checkObject, checkToken, (req: Request, res: Response) => {
    plantController.createNewPlant(req, res);
})

plantRouter.put("/:id",checkIdNumber, checkToken, (req: Request, res: Response) => {
    plantController.updatePlant(req, res);
})

plantRouter.delete("/:id", checkIdNumber, checkToken, (req: Request, res: Response) => {
    plantController.deletePlant(req, res);
} )

export default plantRouter;