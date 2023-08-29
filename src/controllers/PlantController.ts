import { Request, Response } from "express";
import { PlantService } from "../services/PlantService";

export class PlantController {
    private plantService = new PlantService();

    async getAllPlants(req: Request, res: Response) {
        const allPlants = await this.plantService.getAll();
        res.send({ status: "OK", data: allPlants });
    };

    async getPlantById(req: Request, res: Response) {
        const id = Number(req.params.id);
        const plant = await this.plantService.getByID(id);

        if (!plant) {
            res.status(404).send({ status: "FAILED", message: `La plante avec l'id ${id} n'existe pas.` });
            return;
        }
        res.send({ status: "OK", data: plant });
    };

    async createNewPlant(req: Request, res: Response) {
        const body = req.body;
        const createdPlant = await this.plantService.create(body);
        res.status(201).send({ status: "OK", data: createdPlant });
    };
}