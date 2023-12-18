import {Router, Request, Response} from 'express';
import Company from "../models/company";
import {v4 as uuid4, v3 as uuid3} from "uuid";


const oauthRouter = Router();


oauthRouter.post("/register", async (req: Request, res: Response) => {
    const requestBody = req.body;
    const client_id = uuid4();
    const secret_id = uuid3("secret_id", "6ba7b810-9dad-11d1-80b4-00c04fd430c8");

    try {
        const {redirect_url, company_logo, description, name} = requestBody;
        
        await Company.create({
            companyName: name,
            companyDescription: description, 
            companyLogo: company_logo,
            redirectUrl: redirect_url,
            clientId: client_id, 
            secretId: secret_id,

        })

        res.send({
            "message": "User successfully created", 
            "client_id": client_id,
            "client_secret": secret_id
        })

    } catch(error) {
        res.status(400).send({
            "error": `The error ${error} occurred`
        })
    }
})

export default oauthRouter;