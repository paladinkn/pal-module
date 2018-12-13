


require.config({
	baseUrl: './require',
	path: {
		'com': './com',
		'util': './util',
		'handle': './handle',
	}
})
//reqire 执行某个模块  define 定义模块  如果遇到模块循环调用，先调用的成功，后调用的undefined
require(['handle'], function() {
	console.log(222);
})