
var data = require('../config/endpoints'),

    request = require('supertest')(data().url);
describe('oversea_treatment table', function() {

    this.timeout(10000);

	it('URL： ' + data().url+'/customized/overseas_treatments?diseased_state_id=1&stage_id=6001&page=1&per_page=20', function(done) {  //用户非登陆状态下获取海外就医列表
        request.get('/customized/overseas_treatments?diseased_state_id=1&stage_id=6001&page=1&per_page=20')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL： ' + data().url+'/customized/overseas_treatments?userkey=dd9d086254a94e3abb5bd14eb993441d&stage_id=6001&page=1&per_page=20', function(done) {  //用户登陆状态下获取列表
        request.get('/customized/overseas_treatments?userkey=dd9d086254a94e3abb5bd14eb993441d&stage_id=6001&page=1&per_page=20')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
			.set('Token','WLTEQBJ8Xy1Qs6mcbxVN')
            .expect(200)
            .end(done);
    });
    console.log('You are in 1' + data().name);
});
// /customized/overseas_treatments?diseased_state_id=1&stage_id=6001&page=1&per_page=20
// /customized/overseas_treatments?userkey=dd9d086254a94e3abb5bd14eb993441d&stage_id=6001&page=1&per_page=20

