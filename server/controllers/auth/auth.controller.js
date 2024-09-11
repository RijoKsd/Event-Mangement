import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../../models/user.model.js";
import generateJwtToken from "../../helper/generateJwtToken.js";

export const register = async(req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    if(!name || !email || !password || !confirmPassword) {
        return res.status(400).json({ message: "Please fill all the fields" });
    }

    if(password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
    }
    try {
        const user = await User.findOne({ email });
        if(user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User ({
            name,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        const token = generateJwtToken(newUser);
        return res.status(201).json({ message: "User registered successfully", token, role: newUser.role });
    
    } catch (error) {
        console.error("Error in registering user", error);
        return res.status(500).json({ message: "Error in registering user" });
        
    }
}

export const login = async(req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json({ message: "Please fill all the fields" });
    }
    try {
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(400).json({ message: "Invalid email" });
        }
        if(user.status === "removed"){
            return res.status(400).json({ message: "User is removed by admin" });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect) {
            return res.status(400).json({ message: "Incorrect password" });
        }
        const token = generateJwtToken(user);
        return res.status(200).json({ message: "Login successful", token, role: user.role });
        
    } catch (error) {
        console.error("Error in login", error);
        return res.status(500).json({ message: "Error in login" });
    }
}