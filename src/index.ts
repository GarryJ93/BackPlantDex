import express from "express";
import plantRouter from "./routers/PlantRouter";
import AppDataSource from "./data-source";
import userRouter from "./routers/UserRouter";
import cors from 'cors';


AppDataSource.initialize().then(() => {
    const cors = require('cors')
    const app = express();
    app.use(cors());
    //permet à l'api d'accepter des données en entrée en json (utile pour créer des nouvelles données POST)
    app.use(express.json());
    // Add a list of allowed origins.
    // If you have more origins you would like to add, you can add them to the array below.
    const allowedOrigins = ['http://localhost:3000'];

    const options: cors.CorsOptions = {
    origin: allowedOrigins
};
    app.use('/api/plants', plantRouter);
    app.use('/api/users', userRouter)
    
    app.listen(3000, () => {
        console.log("Application correctement lancée sur le port 3000");
    });
})
    .catch((error) => console.log(error));