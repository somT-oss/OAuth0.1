import Photo from "../models/photos";
import { Router, Response, Request } from 'express';

const photosRouter = Router();
const currentDate = new Date();

photosRouter.post('/create', async (req: Request, res: Response) => {
    
    try {
        const {name, description, photo_url} = req.body;
        
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();
        
        let updatedName = `${name}_${hours}_${minutes}_${seconds}`;
        
        await Photo.create({
            name: updatedName,
            description: description,
            photo_url: photo_url
        })
        
        res.send({
            "message": "Photo created successfully",
        })
        
    } catch (error) {
        res.status(400).send({
            "error": `The error ${error} occurred`
        })
    }
    
})

export default photosRouter;