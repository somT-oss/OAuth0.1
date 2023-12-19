import express, {Request, Response} from 'express';
import * as bodyParser from "body-parser";
import morgan from "morgan";
import oauthRouter from "../routes/oauthRoutes";
import userRouter from "../routes/user_register";
import photosRouter from "../routes/create_photos";
import sequelize from './sequelize';


const app = express();
const PORT = 3000;

// Set Middleware
app.use(bodyParser.json());

// Sync sequelize
sequelize.sync().then(() => {
    console.log("Database synchronised");
});

// Logger
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({"extended": true}));
app.use('/oauth', oauthRouter);
app.use('/user', userRouter);
app.use('/photos', photosRouter);


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
