//Redirect for heroku
module.exports = function(req, res, next) {
    console.log('req', req)
    console.log('header', req.header('x-forwarded-proto'))
    if (req.header('x-forwarded-proto') !== 'https') {
        console.log(`https://${req.header('host')}${req.url}`)
        res.redirect(`https://${req.header('host')}${req.url}`);
    }
    else {
        next();
    }
};