import { Router } from "express";

export class AppRoutes {
    static get routes(): Router{
        const router = Router();

        //Definir todas tus tutas principales
        router.get('/', (req, res) => {
            res.status(200).json({
                message: 'Welcome to the API'
            });
        });
        
        return router;
    }
}