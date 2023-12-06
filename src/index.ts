import express, {Request, Response} from 'express';

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Beginning of Oauth!!");
})


app.listen(PORT || 5000, () => {
    console.log(`Server is running on port: ${PORT}`);
});
