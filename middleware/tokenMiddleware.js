const jwt = require('jsonwebtoken');
const tokenConfig = require('../config/token');
 
 
 
const token = async (req, res, next) => {
 
    if (!req.headers.authorization) {
        res.status(401).json({
            msg: "Acceso no autorizado"
        })
    } else {
        console.log(req.headers.authorization );
        let token = req.headers.authorization.split(" ")[1];
        console.log(token[1]);

        jwt.verify(token, tokenConfig.secret, (err, token) => {
            if (err) {
                res.status(500).json({
                    msg: "Token no valido",
                })
            } else {
                next();
            }
        })
    }
 
}
 
 
module.exports = {
    token
}