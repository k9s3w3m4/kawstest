
var data = require('../config/endpoints'),
    request = require('supertest')(data().url);

describe('Test Demo.', function() {

    this.timeout(10000);


	it('URL： ' + data().url+'/customized/home/search', function(done) {  //用户登陆状态进行搜索
        request.get('/customized/home/search?userkey=dd9d086254a94e3abb5bd14eb993441d&q=%E7%99%8C')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
			.set('Token','WLTEQBJ8Xy1Qs6mcbxVN')
            .expect(200)
            .end(done);
    });
	it('URL： ' + data().url+'/customized/home/search', function(done) {  //非登陆状态下进行搜索
        request.get('/customized/home/search?diseased_state_id=1&stage_id=6001&q=%E7%99%8C')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL： ' + data().url+'/customized/home/search', function(done) {  //在有q（搜索关键词的情况下）进行搜索
        request.get('/customized/home/search?diseased_state_id=1&stage_id=6001&q=%E7%99%8C')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL： ' + data().url+'/customized/home/search', function(done) {  //在没有有q（搜索关键词的情况下）进行搜索
        request.get('/customized/home/search?diseased_state_id=1&stage_id=6001')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });	
    console.log('You are in ' + data().name);
});
