import { NextFunction, Request, Response } from "express";

const checkObject = (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    if (!body.code_plante || isNaN(body.code_plante)) {
        res.status(400).send({ status: "FAILED", message: "La propriété code_plante est obligatoire" });
        return;
    };
    if (!body.nom|| body.nom.trim() === "") {
        res.status(400).send({ status: "FAILED", message: "La propriété nom est obligatoire" });
        return;
    };
    if (!body.categorie|| body.categorie.trim() === "") {
        res.status(400).send({ status: "FAILED", message: "La propriété catégorie est obligatoire" });
        return;
    };
    if (!body.soleil|| body.soleil.trim() === "") {
        res.status(400).send({ status: "FAILED", message: "La propriété soleil est obligatoire" });
        return;
    };
    if (!body.arrosage || isNaN(body.arrosage)) {
        res.status(400).send({ status: "FAILED", message: "La propriété arrosage est obligatoire" });
        return;
    };
    if (!body.image|| body.image.trim() === "") {
        res.status(400).send({ status: "FAILED", message: "La propriété image est obligatoire" });
        return;
    };
    next();
};

export default checkObject;