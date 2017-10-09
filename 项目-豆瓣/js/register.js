var PWD = /.{4,16}/i;
var email = /\w{3,10}@\w{1,10}\.(com|com\.cn|net|org)$/;
var phoneNum = /^1[34578]\d{9}$/;
var Result = showTestNum();


//账号
$('input[name=username]').focus(function(){
	$(this).after('<span class="userNameSpan">请输入邮箱格式账号</span>')
		if(($('span').size()>1) && ($(this).next().next().is('span'))){
								$(this).next().next().remove();
								return;
							}
	}).blur(function(){
		var userValue = $(this).val();
		if(userValue.length != 0){
			var info = $(this).attr('info');
			if(userValue.match(email) == null){
						$(this).after('<span class="userNameSpan">你输入的'+info+'不合法</span>');
						if($('span').size() > 1 && $(this).next().next().is('span')){
							$(this).next().next().remove();
							return;
							}
						return;
							}else{
								$(this).next().text('账号合法');
								$(this).next().toggleClass('userNameSpanOK');
								return;
							}
			}
			$(this).next().remove();
	});

	
//密码
$('input[name=pwd]').focus(function(){
	$(this).after('<span class="userNameSpan">请输入4至16位字符</span>')
		if(($('span').size()>1) && ($(this).next().next().is('span'))){
								$(this).next().next().remove();
								return;
							}
	}).blur(function(){
		var userValue = $(this).val();
		if(userValue.length != 0){
			var info = $(this).attr('info');
			if(userValue.match(PWD) == null){
						$(this).after('<span class="userNameSpan">你的'+info+'含不法字符</span>');
						if($('span').size() > 1 && $(this).next().next().is('span')){
							$(this).next().next().remove();
							return;
							}
						return;
							}else{
								$(this).next().text('密码合法');
								$(this).next().toggleClass('userNameSpanOK');		
								return;
							}
			}
			$(this).next().remove();
	});
	
	
//手机号
$('input[name=num]').focus(function(){
	$(this).after('<span class="userNameSpan">请输入手机号</span>')
		if(($('span').size()>1) && ($(this).next().next().is('span'))){
								$(this).next().next().remove();
								return;
							}
	}).blur(function(){
		
		var userValue = $(this).val();
		if(userValue.length != 0){
			var info = $(this).attr('info');
			if(userValue.match(phoneNum) == null){
						$(this).after('<span class="userNameSpan">你输入的'+info+'不合法</span>');
						if($('span').size() > 1 && $(this).next().next().is('span')){
							$(this).next().next().remove();
							return;
							}
						return;
							}else{
								$(this).next().text('手机号码合法');
								$(this).next().toggleClass('userNameSpanOK');		
								return;
							}
			}
			$(this).next().remove();	
	});

	
//名号
$('input[name=name]').focus(function(){	
}).blur(function(){
	var userValue = $(this).val();
	if(userValue.length == 0){
		$(this).after('<span class="userNameSpan">起个名字吧</span>');
		if($('span').size() > 1 && $(this).next().next().is('span')){
			$(this).next().next().remove();
				return;
				}
			return;
	}else if($(this).next().is('span')){
		
		$(this).next().remove();
	}
})


//验证码
$('input[name=numtest]').focus(function(){
}).blur(function(){
	var bool = testNumResult();
	if(bool == false){
		$('#testNum').after('<span class="userNameSpan">验证码有误</span>');
		if($('span').size() > 1 && $('#testNum').next().next().is('span')){
			$('#testNum').next().next().remove();
				return;
				}
			return;
	}else if($('#testNum').next().is('span')){
			if($('#testNum').next().hasClass('userNameSpanOK')){
				return;
			}
		$('#testNum').next().text('验证码正确');
		$('#testNum').next().toggleClass('userNameSpanOK');		
		return;
		}else{
			$('#testNum').after('<span class="userNameSpanOK">验证码正确</span>');
			return;
		}
})



//全局验证
$('input[name="agree"]').on('click',function(){
	var userOK = $('input[name=username]').next().hasClass('userNameSpanOK');	
	var pwdOK = $('input[name=pwd]').next().hasClass('userNameSpanOK');
	var phoneOK = $('input[name=num]').next().hasClass('userNameSpanOK');
	var name = $('input[name=name]').val();
	var numTest = $('#testNum').next().hasClass('userNameSpanOK');
	console.log(name);
		if(userOK && pwdOK && phoneOK && name != '' && numTest && $(this).is(':checked')){
			$('input[name="register"]').removeAttr('disabled');
			$('input[name="register"]').toggleClass('Register');
		}else{
			$('input[name="register"]').attr('disabled','disabled');
			$('input[name="register"]').removeClass('Register');
		}
		return;
})


//验证码验证
function showTestNum(){
	var box = document.getElementById("testNum");
	var num = Math.floor(Math.random()*100);
	var num2 = Math.floor(Math.random()*100);
	box.value = num +'+'+ num2;
	return num+num2;
}

function testNumResult(){
	var userResult = $('input[name=numtest]').val();
	userFinalResult = parseInt(userResult);
	if(userFinalResult == Result){
		return true;
	}else{
		return false;
	}
}
