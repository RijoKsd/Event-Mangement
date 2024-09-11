import jwt from "jsonwebtoken";

const authMiddleware = (req,res, next)=> {
    try {
        const header = req.headers.authorization;
        if(!header) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const token = header.split(" ")[1];
        if(!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
         req.user = decoded;
        next();
        
    } catch (error) {
        console.error("Error in auth middleware", error);
        return res.status(401).json({ message: "Unauthorized" });
    }
}

 export default authMiddleware;