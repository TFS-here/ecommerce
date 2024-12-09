import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers
        if (!token) {
            return res.json({ success: false, message: "NOT AUTHORIZED LOGIN AGAIN" })
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "NOT AUTHORIZED LOGIN AGAIN" })
        }
        next()
    } catch (error) {
        onsole.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default adminAuth
