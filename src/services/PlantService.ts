import AppDataSource from "../data-source";
import { Plant } from "../entities/Plant";

export class PlantService {

    private plantRepository = AppDataSource.getRepository(Plant);

    getAll() {
        return this.plantRepository.find();
    };

    getByID(id: number){
        return this.plantRepository.findOneBy({id: id});
    }

    create(plant: Plant) {
        const newPlant = this.plantRepository.create(plant);
        return this.plantRepository.save(newPlant);
    }

    async update(id: number, plant: Plant) {
        const plantToUpdate = await this.getByID(id);
    }
}