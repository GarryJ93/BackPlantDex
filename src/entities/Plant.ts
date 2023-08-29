import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Plant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code_plante: number;

    @Column()
    nom: string;
    
    @Column()
    soleil: number;

    @Column()
    arrosage: number;

    @Column()
    categorie: string;

    @Column()
    image: string;
    
};