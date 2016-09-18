
var data = require('../config/endpoints'),
    request = require('supertest')(data().url);

describe('part search.', function() {

    this.timeout(10000);


	it('URL�� ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=questions&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //�û���½״̬�����ʴ�����
        request.get('/customized/home/search?page=1&per_page=20&q=uuu&search_type=questions&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
			.set('Token','WLTEQBJ8Xy1Qs6mcbxVN')
            .expect(200)
            .end(done);
    });
	it('URL�� ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=questions&stage_id=6001', function(done) {  //�ǵ�½״̬���ʴ��������
        request.get('/customized/home/search?page=1&per_page=20&q=uuu&search_type=questions&stage_id=6001')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL�� ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=questions&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //����q�������ؼ��ʵ�����£������ʴ�����
        request.get('/customized/home/search?page=1&per_page=20&q=uuu&search_type=questions&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL�� ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=questions&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //��û��q�������ؼ��ʵ�����£������ʴ�����
        request.get('/customized/home/search?page=1&per_page=20&q=test&search_type=questions&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });	
	it('URL�� ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=articles&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //�û���½״̬������Ѷ����
        request.get('/customized/home/search?page=1&per_page=20&q=uuu&search_type=articles&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
			.set('Token','WLTEQBJ8Xy1Qs6mcbxVN')
            .expect(200)
            .end(done);
    });
	it('URL�� ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=articles&stage_id=6001', function(done) {  //�ǵ�½״̬�½�����Ѷ����
        request.get('/customized/home/search?page=1&per_page=20&q=uuu&search_type=articles&stage_id=6001')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL�� ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=articles&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //����q�������ؼ��ʵ�����£�������Ѷ����
        request.get('/customized/home/search?page=1&per_page=20&q=uuu&search_type=articles&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL�� ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=articles&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //��û��q�������ؼ��ʵ�����£�������Ѷ����
        request.get('/customized/home/search?page=1&per_page=20&q=test&search_type=articles&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });	
	it('URL�� ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=service_items&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //�û���½״̬���з�������
        request.get('/customized/home/search?page=1&per_page=20&q=uuu&search_type=service_items&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
			.set('Token','WLTEQBJ8Xy1Qs6mcbxVN')
            .expect(200)
            .end(done);
    });
	it('URL�� ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=service_items&stage_id=6001', function(done) {  //�ǵ�½״̬�½��з�������
        request.get('/customized/home/search?page=1&per_page=20&q=uuu&search_type=service_items&stage_id=6001')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL�� ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=service_items&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //����q�������ؼ��ʵ�����£����з�������
        request.get('/customized/home/search?page=1&per_page=20&q=uuu&search_type=service_items&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL�� ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=service_items&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //��û��q�������ؼ��ʵ�����£����з�������
        request.get('/customized/home/search?page=1&per_page=20&q=test&search_type=service_items&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });	
	it('URL�� ' + data().url+'/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=doctors&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //�û���½״̬����ҽ������
        request.get('/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=doctors&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
			.set('Token','WLTEQBJ8Xy1Qs6mcbxVN')
            .expect(200)
            .end(done);
    });
	it('URL�� ' + data().url+'/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=doctors&stage_id=6001', function(done) {  //�ǵ�½״̬�½���ҽ������
        request.get('/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=doctors&stage_id=6001')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL�� ' + data().url+'/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=doctors&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //����q�������ؼ��ʵ�����£�����ҽ������
        request.get('/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=doctors&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL�� ' + data().url+'/customized/home/search?diseased_state_id=1&page=1&per_page=20&search_type=doctors&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //��û��q�������ؼ��ʵ�����£�����ҽ������
        request.get('/customized/home/search?diseased_state_id=1&page=1&per_page=20&search_type=doctors&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL�� ' + data().url+'/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=doctors&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //�û���½״̬����ҽԺ����
        request.get('/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=doctors&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
			.set('Token','WLTEQBJ8Xy1Qs6mcbxVN')
            .expect(200)
            .end(done);
    });
	it('URL�� ' + data().url+'/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=hospitals&stage_id=6001', function(done) {  //�ǵ�½״̬�½���ҽԺ����
        request.get('/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=hospitals&stage_id=6001')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL�� ' + data().url+'/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=hospitals&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //����q�������ؼ��ʵ�����£�����ҽԺ����
        request.get('/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=hospitals&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL�� ' + data().url+'/customized/home/search?diseased_state_id=1&page=1&per_page=20&search_type=hospitals&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //��û��q�������ؼ��ʵ�����£�����ҽԺ����
        request.get('/customized/home/search?diseased_state_id=1&page=1&per_page=20&search_type=hospitals&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });		
    console.log('You are in serch' + data().name);
});