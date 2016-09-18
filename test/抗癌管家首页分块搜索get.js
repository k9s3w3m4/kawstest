
var data = require('../config/endpoints'),
    request = require('supertest')(data().url);

describe('part search.', function() {

    this.timeout(10000);


	it('URL： ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=questions&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //用户登陆状态进行问答搜索
        request.get('/customized/home/search?page=1&per_page=20&q=uuu&search_type=questions&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
			.set('Token','WLTEQBJ8Xy1Qs6mcbxVN')
            .expect(200)
            .end(done);
    });
	it('URL： ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=questions&stage_id=6001', function(done) {  //非登陆状态下问答进行搜索
        request.get('/customized/home/search?page=1&per_page=20&q=uuu&search_type=questions&stage_id=6001')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL： ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=questions&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //在有q（搜索关键词的情况下）进行问答搜索
        request.get('/customized/home/search?page=1&per_page=20&q=uuu&search_type=questions&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL： ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=questions&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //在没有q（搜索关键词的情况下）进行问答搜索
        request.get('/customized/home/search?page=1&per_page=20&q=test&search_type=questions&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });	
	it('URL： ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=articles&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //用户登陆状态进行资讯搜索
        request.get('/customized/home/search?page=1&per_page=20&q=uuu&search_type=articles&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
			.set('Token','WLTEQBJ8Xy1Qs6mcbxVN')
            .expect(200)
            .end(done);
    });
	it('URL： ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=articles&stage_id=6001', function(done) {  //非登陆状态下进行资讯搜索
        request.get('/customized/home/search?page=1&per_page=20&q=uuu&search_type=articles&stage_id=6001')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL： ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=articles&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //在有q（搜索关键词的情况下）进行资讯搜索
        request.get('/customized/home/search?page=1&per_page=20&q=uuu&search_type=articles&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL： ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=articles&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //在没有q（搜索关键词的情况下）进行资讯搜索
        request.get('/customized/home/search?page=1&per_page=20&q=test&search_type=articles&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });	
	it('URL： ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=service_items&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //用户登陆状态进行服务搜索
        request.get('/customized/home/search?page=1&per_page=20&q=uuu&search_type=service_items&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
			.set('Token','WLTEQBJ8Xy1Qs6mcbxVN')
            .expect(200)
            .end(done);
    });
	it('URL： ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=service_items&stage_id=6001', function(done) {  //非登陆状态下进行服务搜索
        request.get('/customized/home/search?page=1&per_page=20&q=uuu&search_type=service_items&stage_id=6001')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL： ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=service_items&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //在有q（搜索关键词的情况下）进行服务搜索
        request.get('/customized/home/search?page=1&per_page=20&q=uuu&search_type=service_items&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL： ' + data().url+'/customized/home/search?page=1&per_page=20&q=uuu&search_type=service_items&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //在没有q（搜索关键词的情况下）进行服务搜索
        request.get('/customized/home/search?page=1&per_page=20&q=test&search_type=service_items&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });	
	it('URL： ' + data().url+'/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=doctors&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //用户登陆状态进行医生搜索
        request.get('/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=doctors&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
			.set('Token','WLTEQBJ8Xy1Qs6mcbxVN')
            .expect(200)
            .end(done);
    });
	it('URL： ' + data().url+'/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=doctors&stage_id=6001', function(done) {  //非登陆状态下进行医生搜索
        request.get('/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=doctors&stage_id=6001')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL： ' + data().url+'/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=doctors&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //在有q（搜索关键词的情况下）进行医生搜索
        request.get('/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=doctors&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL： ' + data().url+'/customized/home/search?diseased_state_id=1&page=1&per_page=20&search_type=doctors&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //在没有q（搜索关键词的情况下）进行医生搜索
        request.get('/customized/home/search?diseased_state_id=1&page=1&per_page=20&search_type=doctors&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL： ' + data().url+'/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=doctors&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //用户登陆状态进行医院搜索
        request.get('/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=doctors&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
			.set('Token','WLTEQBJ8Xy1Qs6mcbxVN')
            .expect(200)
            .end(done);
    });
	it('URL： ' + data().url+'/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=hospitals&stage_id=6001', function(done) {  //非登陆状态下进行医院搜索
        request.get('/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=hospitals&stage_id=6001')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL： ' + data().url+'/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=hospitals&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //在有q（搜索关键词的情况下）进行医院搜索
        request.get('/customized/home/search?diseased_state_id=1&page=1&per_page=20&q=%E6%9D%8E&search_type=hospitals&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });
	it('URL： ' + data().url+'/customized/home/search?diseased_state_id=1&page=1&per_page=20&search_type=hospitals&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2', function(done) {  //在没有q（搜索关键词的情况下）进行医院搜索
        request.get('/customized/home/search?diseased_state_id=1&page=1&per_page=20&search_type=hospitals&userkey=4ac04a96b11a44a7bcfd1007dd71aaf2')
			.set('User-Agent','Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3')
            .expect(200)
            .end(done);
    });		
    console.log('You are in serch' + data().name);
});