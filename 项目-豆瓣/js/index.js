//搜索框
$('input[id=search1]').focus(function(){
	$(this).attr('placeholder','');
}).blur(function(){
	$(this).attr('placeholder','书籍/电影/音乐');
})

//登录框
$('input[id=login_account]').focus(function(){
	$(this).attr('placeholder','');
}).blur(function(){
	$(this).attr('placeholder','邮箱/手机号');
})

$('input[id=login-passwd]').focus(function(){
	$(this).attr('placeholder','');
}).blur(function(){
	$(this).attr('placeholder','请输入密码');
})

//回到顶部底部功能
var speed = 800;//滚动速度
var hight=document.body.clientHeight;
var windowHeight = parseInt($("body").css("height"));//整个页面的高度

console.log(hight);
$(window).scroll(function(){
	if($(window).scrollTop() == 0){
		$('#toTop').css('visibility','hidden');
	}else{
		$('#toTop').css('visibility','visible');
	}
	if($(window).scrollTop() > 1500){
		$('#toBottom').css('display','none');
	}else{
		$('#toBottom').css('display','block');
	}
});

	//回到顶部
	$("#toTop").click(function () {
	$('html,body').animate({
		scrollTop: '0px'},speed);			
	});
	//回到底部
	$("#toBottom").click(function () {
	$('html,body').animate({
		scrollTop: hight+'px'},speed);	
	});