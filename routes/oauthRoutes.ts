import {Router, Request, Response} from 'express';
import Company from "../models/company";
import {v4 as uuid4, v3 as uuid3} from "uuid";


const oauthRouter = Router();


oauthRouter.post("/register", async (req: Request, res: Response) => {
    const requestBody = req.body;
    const redirect_url = requestBody['redirect_url'];
    const company_logo = requestBody['app_logo'];
    const client_id = uuid4();
    const secret_id = uuid3("secret_id", "6ba7b810-9dad-11d1-80b4-00c04fd430c8");
    const description = requestBody['description'];

    try {
        const {redirect_url, company_logo, client_id, description, name} = requestBody;
        
        const company = Company.create({
            companyName: name,
            companyDescription: description, 
            companyLogo: company_logo,
            redirectUrl: redirect_url,
            clientId: client_id, 
            secretId: secret_id,

        })

        res.status(201).json({
            "message": "User successfully created", 
            "client_id": client_id,
            "client_secret": secret_id
        })

    } catch(error) {
        res.status(400).json({
            "error": `The error ${error} occurred`
        })
    }

    res.send({
        "message": "Company registered successfully",
        "client_id": client_id
    })
})

export default oauthRouter;