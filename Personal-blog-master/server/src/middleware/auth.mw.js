import passport from 'passport'


function isLoggedIn(req, res, next) {
    if(req.user) {
        next();
    } else {
        res.sendStatus(401); 
    }
}

function tokenMiddleware(req, res, next) {
    passport.authenticate('bearer', { sessions: false })(req, res, next)
}

export { isLoggedIn, tokenMiddleware };