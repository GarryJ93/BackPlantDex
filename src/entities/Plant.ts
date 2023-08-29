import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Plant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code_plant: number;

    @Column()
    nom: string;
    
    @Column()
    soleil: number;

    @Column()
    arrosage: number;

    @Column()
    catégorie: string;

    @Column()
    image: string;
    
};