const jwt = require('jsonwebtoken');

const mod = async function(req, res){
    const auth = req.headers.auth;
    if(!auth){
        res.status(401).json({
            status: 'fail',
            message: 'Unauthorized!',
            
        });
    }

    const token = authHeader.split(' ')[1];
    try{
        const user = jwt.verify(token, 'SECRET');
        req.user = user;
        next();
    }catch(error){
        res.status(401).json({
            status: 'fail',
            message: 'Unauthorized!',
        });
    }
}

module.exports = mod;