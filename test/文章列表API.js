
var data = require('../config/endpoints'),
    request = require('supertest')(data().url);

describe('articles table', function() {

    this.timeout(10000);

	it('URL： ' + data().url+'/customized/articles?userkey=dd9d086254a94e3abb5bd14eb993441d&page=1&per_page=20&type=2', function(done) {  //用户登陆状态下获取文章列表
        request.get('/customized/articles?userkey=dd9d086254a94e3abb5bd14eb993441d&page=1&per_page=20&type=2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
			.set('Token','WLTEQBJ8Xy1Qs6mcbxVN')
            .expect(200)
            .end(done);
    });
	it('URL： ' + data().url+'/customized/articles?diseased_state_id=1&stage_id=6001&page=1&per_page=20&type=2', function(done) {  //非登陆状态下获取文章列表
        request.get('/customized/articles?diseased_state_id=1&stage_id=6001&page=1&per_page=20&type=2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL： ' + data().url+'/customized/articles?userkey=dd9d086254a94e3abb5bd14eb993441d&page=1&per_page=20&type=10002', function(done) {  //type转错
	request.get('/customized/articles?userkey=dd9d086254a94e3abb5bd14eb993441d&page=1&per_page=20&type=10002')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
			.set('Token','WLTEQBJ8Xy1Qs6mcbxVN')
            .expect(200)
            .end(done);
    })
    console.log('You are in 1' + data().name);
});
