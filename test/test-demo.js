
var data = require('../config/endpoints'),
    request = require('supertest')(data().url);

describe('Test Demo.', function() {

    this.timeout(10000);

    it('Visit ' + data().url, function(done) {
        request.get('/customized/home')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
    console.log('You are in ' + data().name);
});
