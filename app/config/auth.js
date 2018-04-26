const bcrypt = require('bcrypt');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'xxx',
    issuer: 'telerik',
    };

const init = (app, data) => {
    return new JwtStrategy(opts, function(jwtPayload, done) {
        const email = jwtPayload.email;
        const user = data.users.getUserByEmail(email);
        if (!user) {
            done(null, false, {
                message: 'Incorrect Email!',
            });
        } else {
            const password = jwtPayload.password;
            bcrypt.compare(password, user.password, (err, res) => {
                if (err) {
                    return done(err);
                }
                if (!res) {
                    return done(null, false, {
                        message: 'Incorrect Password!',
                    });
                }
                return done(null, user);
            });
        }
    });
};

module.exports = {
    init,
};
