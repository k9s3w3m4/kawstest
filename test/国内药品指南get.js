
var data = require('../config/endpoints'),
    request = require('supertest')('http://v4-stage-api.kangaiweishi.com/');

describe('articles table', function() {

    this.timeout(10000);

	it('URL： ' +'v4/customized/generic_medicines?diseased_state_id=1&stage_id=6001&page=1&per_page=20&filter_diseased_state_id=1&filter_form_id=1&filter_category_id=1', function(done) {  //用户登陆状态下传filter获取药品指南列表
        request.get('v4/customized/generic_medicines?diseased_state_id=1&stage_id=6001&page=1&per_page=20&filter_diseased_state_id=1&filter_form_id=1&filter_category_id=1')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
			.expect(200)
            .end(done);
    });
	it('URL： ' + 'v4/customized/generic_medicines?userkey=dd9d086254a94e3abb5bd14eb993441d&per_page=20&filter_diseased_state_id=1&filter_form_id=1&filter_category_id=1', function(done) {  //用户未登陆状态下传filter获取药品指南列表
        request.get('v4/customized/generic_medicines?userkey=dd9d086254a94e3abb5bd14eb993441d&per_page=20&filter_diseased_state_id=1&filter_form_id=1&filter_category_id=1')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL： ' + 'v4/customized/generic_medicines?userkey=dd9d086254a94e3abb5bd14eb993441d&page=1&per_page=20', function(done) {  //用户登陆状态下不传filter获取药品指南列表
	request.get('v4/customized/generic_medicines?userkey=dd9d086254a94e3abb5bd14eb993441d&page=1&per_page=20')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
			.set('Token','WLTEQBJ8Xy1Qs6mcbxVN')
            .expect(200)
            .end(done);
    })
		it('URL： ' + 'v4/customized/generic_medicines?diseased_state_id=1&stage_id=6001&page=1&per_page=20', function(done) {  //用户未登陆状态下不传filter获取药品指南列表
	request.get('v4/customized/generic_medicines?diseased_state_id=1&stage_id=6001&page=1&per_page=20')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    })
    console.log('You are in generic_medicines' + data().name);
});
