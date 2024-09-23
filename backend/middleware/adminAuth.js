 import jwt from 'jsonwebtoken'

const adminAuth = async (req,res,next) => {
    try {
        const { token } = req.headers
        if (!token) {
            return res.json({success:false,message:"Not Authorized Login Again"})
        }
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({success:false,message:"Not Authorized Login Again"})
        }
        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default adminAuth 



/* import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1]; // Get token from Authorization header

        if (!token) {
            return res.status(401).json({ success: false, message: "Not Authorized! Login Again" });
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        
        // Check if the user role is admin (assuming you have a role field in your token)
        if (token_decode.role !== 'admin') {
            return res.status(403).json({ success: false, message: "Not Authorized! Admins only" });
        }

        req.userId = token_decode.id; // Store user ID in request for later use
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

export default adminAuth; */