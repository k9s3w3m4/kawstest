
var data = require('../config/endpoints'),
    request = require('supertest')(data().url);

describe('nutritional_supports table', function() {

    this.timeout(10000);

	it('URL�� ' + data().url+'/customized/nutritional_supports?diseased_state_id=1&stage_id=6001&page=1&per_page=20', function(done) {  //�ǵ�½״̬�»�ȡӪ��֧���б�
        request.get('/customized/nutritional_supports?diseased_state_id=1&stage_id=6001&page=1&per_page=20')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL�� ' + data().url+'/customized/nutritional_supports?userkey=dd9d086254a94e3abb5bd14eb993441d&page=1&per_page=20', function(done) {  // �û���½״̬�»�ȡӪ��֧���б�
        request.get('/customized/nutritional_supports?userkey=dd9d086254a94e3abb5bd14eb993441d&page=1&per_page=20')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
			.set('Token','WLTEQBJ8Xy1Qs6mcbxVN')
            .expect(200)
            .end(done);
    });
    console.log('You are in 1231231' + data().name);
});