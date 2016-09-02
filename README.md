# SuperTest+Glup+travis实现API自动化测试
 1· 测试计划
 2· 项目简介
 2· supertest简介
 3· glup网址
 4· travis简介
 5· 文件夹对应模块
#测试计划
 1·以swagger为指导划分模块,接口内容以最新版本swagger为准
 2·以文件夹来划分模块，不同文件夹放不同模块
 3·一个JS文件对应一个相应接口，接口内容在文件名上有所体现，一个文件仅对应一个接口
 4·一个it类只对应一个接口测试用例
# Kawstest 项目简介
Use [Gulp](http://gulpjs.com/) to run [SuperTest](https://github.com/visionmedia/supertest) API testing scripts

# Preview

## You just need to  clone this repo,that's all.

# Run
* Install node_module

```
npm install
```

* With command `gulp v4`,you can see the result:

```
[15:28:55] Using gulpfile ~/Downloads/SuperTestWithGulp/gulpfile.js
[15:28:55] Starting 'v4'...
[15:28:55] Finished 'v4' after 24 ms
You are in v4


  Test Demo.
    ✓  URL http://v4-stage-api.kangaiweishi.com/v4/customized/home


  1 passing (779ms)
```

# Enhance新分支拓展

* Modify the visit url,you just need to modify the `url` property in `master.js` or `branch.js`
* Add more environment,you just need to `three` steps:
 * add the gulp task in `gulpfile.js` like this
 
```
gulp.task('newBranch', function() {
	require('./config/endpoints')('newBranch');
	runTest();
});

```
 * add the host config in `endpoints.js`
 
```
...
var host = {
    master: require('./master.js'),
    branch: require('./branch.js'),
    newBranch: require('./newBranch.js')
};
...
```
 * add one javascript file named `newBranch` under `config` folder,and config this file like others
``` 
#SuperTest简介和写法
网址：http://www.imooc.com/article/2631

#gulp简介和写法
网址：http://www.gulpjs.com.cn/

#Travis简介和持续集成网站
网址：https://travis-ci.org/

#文件夹对应模块
test对应抗癌管家页
test1对应病历本页
