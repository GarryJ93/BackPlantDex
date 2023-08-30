import { NextFunction, Request, Response } from "express";

const checkObject = (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;

  if (!body.code_plante || isNaN(body.code_plante)) {
    return res.status(400).send({ status: "FAILED", message: "La propriété code_plante est obligatoire" });
  }

  if (!body.nom || body.nom.trim() === "") {
    return res.status(400).send({ status: "FAILED", message: "La propriété nom est obligatoire" });
  }

  if (!body.categorie || body.categorie.trim() === "") {
    return res.status(400).send({ status: "FAILED", message: "La propriété catégorie est obligatoire" });
  }

  if (!body.soleil || body.soleil.trim() === "") {
    return res.status(400).send({ status: "FAILED", message: "La propriété soleil est obligatoire" });
  }

  if (!body.arrosage || isNaN(body.arrosage)) {
    return res.status(400).send({ status: "FAILED", message: "La propriété arrosage est obligatoire" });
  }

  if (!body.image || body.image.trim() === "") {
    return res.status(400).send({ status: "FAILED", message: "La propriété image est obligatoire" });
  }

  next();
};

export default checkObject;