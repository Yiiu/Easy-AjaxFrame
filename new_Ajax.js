/**
 * Ajax
 * @authors yu (yu.gintoki@gmail.com)
 * @date    2014-11-01 21:25:56
 * @version $Id$
 */

 // new Date().getTime() ==>毫秒
function Ajax(url,fun){
	// 1.创建Ajax对象
	/* 不兼容IE
	var oAjax = new XMLHttpRequest();
	*/
	if (window.XMLHttpRequest) {
		var oAjax = new XMLHttpRequest();
	}
	else{
		var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	// 2.连接服务器
	// open(方法，url，是否异步)
	oAjax.open('GET', url, true);
	
	// 3.发送请求
	oAjax.send();

	// 4.接受返回信息
	// 当数据发生变化的时候调用
	oAjax.onreadystatechange = function(){
		// readyState => 代表是否结束，并不代表成功
		// status => 代表是否成功
		if(oAjax.readyState == 4){
			if(oAjax.status == 200){
				fun(oAjax.responseText);
			}else{
				alert('失败');
			}
		}
	}
}
