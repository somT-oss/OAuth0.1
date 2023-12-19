import {Router, Response, Request} from "express";
import * as EmailValidator from 'email-validator';
import Users from "../models/users";



// generated with bard.
const usedUsernames: Set<string> = new Set(); // Store used usernames for uniqueness checks
const userRouter = Router();


// generated with bard.
function generateUsername(firstName: string, lastName: string): string {
    // Combine first and last name, separated by a dot for better readability
    const baseUsername = `${firstName.toLowerCase()}.${lastName.toLowerCase()}`;

    // Add a random number if the base username is already taken
    let username = baseUsername;
    let number = 1;
    while (usedUsernames.has(username)) {
        username = `${baseUsername}${number++}`;
    }

    // Add the generated username to the used usernames set
    usedUsernames.add(username);

    return username;
}


userRouter.post("/register", async  (req: Request, res: Response) => {
    
    try {
        const {first_name, last_name, email} = req.body;
        
        const validatedEmail = EmailValidator.validate(email);
        
        const mainUsername = generateUsername(first_name, last_name);
        
        if (validatedEmail != true) {
            res.status(400).send({
                "error": `The email ${email} is not valid. Enter a valid email`
            })
        }
        
        await Users.create({
            username: mainUsername,
            first_name: first_name,
            last_name: last_name,
            email: email
        })
        
        res.send({
            "message": "User created successfully",
            "username": mainUsername
        })
    } catch (error) {
        res.status(400).send({
            "error": `The error ${error} occurred`
        })
    }
})

export default userRouter;