var phoneNum = /^1[34578]\d{9}$/;


//手机验证函数
function phoneValidate(){
	var phoneValue = $('#phoneNum').val();
	if(phoneValue.length != 0){
		if(phoneValue.match(phoneNum) == null){
			$('h1.doubLogin').after('<span class="red">你输入的手机号码不合法</span>');
			if($('h1.doubLogin').next().next().is('span')){
				$('h1.doubLogin').next().next().remove();
			}
		$('#phoneNum').attr('placeholder','11位纯数字');
		return;
		}else{
		$('h1.doubLogin').after('<span></span>');
		if($('h1.doubLogin').next().next().is('span')){
				$('h1.doubLogin').next().next().remove();
			}
		}
	}else{
		$('h1.doubLogin').after('<span class="red">手机号码不能为空</span>');
		if($('h1.doubLogin').next().next().is('span')){
				$('h1.doubLogin').next().next().remove();
			}
		$('#phoneNum').attr('placeholder','11位纯数字');
		return;
	}
}

//手机号码验证
$('#phoneNum').focus(function(){
	$(this).attr('placeholder','');
}).blur(function(){
	var numValue = $(this).val();
	if(numValue.length != 0){
		if(numValue.match(phoneNum) == null){
			$('h1.doubLogin').after('<span class="red">你输入的手机号码不合法</span>');
			if($('h1.doubLogin').next().next().is('span')){
				$('h1.doubLogin').next().next().remove();
			}
		$(this).attr('placeholder','11位纯数字');
		return;
		}else{
		$('h1.doubLogin').after('<span></span>');
		if($('h1.doubLogin').next().next().is('span')){
				$('h1.doubLogin').next().next().remove();
			}
		}
	}else{
		$('h1.doubLogin').after('<span class="red">手机号码不能为空</span>');
		if($('h1.doubLogin').next().next().is('span')){
				$('h1.doubLogin').next().next().remove();
			}
		$(this).attr('placeholder','11位纯数字');
		return;
	}
});

//验证码
$('#testNum').focus(function(){
	$(this).attr('placeholder','');
}).blur(function(){
	$(this).attr('placeholder','收到的验证码');
});

//提交按钮
$('button.loginTop').click(function(){
	var numValue = $('#phoneNum').val();
	if(numValue.length == 0){
		alert('请完善资料');
	}
});

//验证倒数
var count=10;
var time;

function timeStart(){
	document.getElementById('timeSpan').innerHTML = count;
	count--;
	time = setTimeout('timeStart()',1000)
	if(count == -1){
		clearTimeout(time);
		count = 10;
		$('button.aboutTop').next().remove();
		$('button.aboutTop').removeAttr('disabled');
	}
}

$('button.aboutTop').on('click',function(){
	$(this).attr('disabled','disbaled');
	$(this).after('<span class="sendSuccess">发送成功(<b id="timeSpan"></b>)</span>');
	timeStart();
})