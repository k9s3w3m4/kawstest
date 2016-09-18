var host = {
    v4: require('./master.js'),
    v3: require('./branch.js'),
	online: require('./online.js')

};

var ENV;

module.exports = function(env) {
    if (env) {
        ENV = host[env];
        return;
    }
    return ENV;
};
