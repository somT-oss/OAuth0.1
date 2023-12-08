import {Router, Request, Response} from 'express';
import {v4 as uuid4} from "uuid";

const oauthRouter = Router();


oauthRouter.post("/register", (req: Request, res: Response) => {
    const requestBody = req.body;
    const redirect_url = requestBody['redirect_url'];
    const app_logo = requestBody['app_logo'];
    const client_id = uuid4();
    const description = requestBody['description'];

    res.send({
        "message": "Company registered successfully",
        "client_id": client_id
    })
    
    return;
})

export default oauthRouter;