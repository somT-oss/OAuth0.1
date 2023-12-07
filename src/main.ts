import express, {Request, Response} from 'express';
import * as bodyParser from "body-parser";
import {v4 as uuid4} from "uuid";

const app = express();
const PORT = 3000;

// Set Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": true}));


app.post("/ouath/register-app", (req: Request, res: Response) => {
    const requestBody = req.body;
    const redirect_url = requestBody['redirect_url'];
    const app_logo = requestBody['app_logo'];
    const client_id = uuid4();
    const description = requestBody['description'];

    if (req.statusCode != 200) {
        res.send({
            "message": "An error occurred",
            "e": requestBody
        })
    }

    res.send({
        "message": "Company registered successfully",
        "client_id": client_id
    })
})


app.post("/test", (req: Request, res: Response) => {
    const requestBody = req.body;
    res.json({
        "message": "Received json data",
        "data": requestBody
    })
})

app.get("/", (req: Request, res: Response) => {
    res.send("Beginning of Oauth!!");
})


app.listen(PORT || 5000, () => {
    console.log(`Server is running on port: ${PORT}`);
});
