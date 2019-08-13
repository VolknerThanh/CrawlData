/*
README

tool 					: Crawl Sendo Website's Q&A
description 	: cào dữ liệu từ trang sendo để lấy các bình luận hỏi đáp làm dữ liệu train cho chatbot
author				: RainSilver
contributer		: 
github				: https://github.com/VolknerThanh
NOTE 					: tool thao tác trên nền front-end, chỉ get dữ liệu, không tác động đến cơ sở dữ liệu

===========================================
RUNNING
===========================================
1. vào bất kỳ sản phẩm của sendo.
2. bấm Ctrl+Shift+J để mở cửa sổ console ở devtool.
3. copy toàn bộ code dưới đây và paste vào console đó và nhấn Enter.
4. Sau đó gõ " init() " để tải file về máy.

*/

const comments_list = [];

// direct to tab "danh gia"
var linkContainer = document.getElementById('productTab');
var tabLink = linkContainer.querySelectorAll('a.nav-link')[2];
tabLink.click(); // trigger link tab

var crawlData = () => {
	// get list comments container
	var listComments = document.getElementsByClassName('sectionProductComment_2e02')[0];
	// array comments
	// var comments = listComments.querySelectorAll('div.feedback_20Kb');
	var comments = listComments.querySelectorAll('div:not(.subComment_kMb0).commentItem_KXGR > div.content_1kWt > div.feedback_20Kb'); // reject reply comments

	for(let i = 0; i < comments.length; i++) {
		// crawl text content of each comment
		comments_list.push(comments[i].innerText);
	}
}

var saveData = () => {
	data = JSON.stringify(comments_list);
	let a = document.createElement("a");
  a.href = window.URL.createObjectURL(
      new Blob([data],{type:"text/plain;charset=UTF-8"})
  	)
  a.setAttribute("download", "Data");
  a.click();
} 

var init = () => {
	crawlData();
	saveData();
}