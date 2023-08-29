import express from "express";
import plantRouter from "./routers/PlantRouter";
import AppDataSource from "./data-source";
import userRouter from "./routers/UserRouter";

AppDataSource.initialize().then(() => {
    const app = express();
    //permet à l'api d'accepter des données en entrée en json (utile pour créer des nouvelles données POST)
    app.use(express.json());
    app.use('/api/plants', plantRouter);
    app.use('/api/users', userRouter)
    app.listen(3000, () => {
        console.log("Application correctement lancée sur le port 3000");
    });
})
    .catch((error) => console.log(error));