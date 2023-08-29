import { NextFunction, Request, Response } from "express";

const checkIdNumber = (req: Request, res: Response, next: NextFunction) => {
    const paramId = Number(req.params.id);

    if (isNaN(paramId)) {
        res.status(400).send({ status: "FAILED", message: "L'id doit être un nombre" });
        return;
    };
    next();
};

export default checkIdNumber;