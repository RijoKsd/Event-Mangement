import jwt from "jsonwebtoken";

const generateJwtToken = (user)=>{
    return jwt.sign({
        id: user._id,
        role: user.role,
    }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    })
}

export default generateJwtToken;