	$(function(){
			var email = /\w{3,10}@\w{1,10}\.(com|com\.cn|net|org)$/;
			var phone = /^1[34578]\d{9}$/;
			$('input[name=username]').focus(function(){
				$(this).removeAttr('placeholder');
			}).blur(function(){
				var userValue = $(this).val();
				console.log(userValue);
				console.log($.isNumeric(userValue));
				if(userValue.length == 0){
					$(this).attr('placeholder','邮箱/手机号');
					if($(this).next().is('span')){
						$(this).next().remove();
					}
					return;
				}
				
				if($.isNumeric(userValue)){
					var ob = 'num';
				}else{
					var ob = 'email';
				}
				switch(ob){
					case 'email':
						var info = $(this).attr('info');
						if(userValue.match(email) == null){
							$(this).after('<span class="userNameSpan">邮箱不合法</span>');
								if(($('span').size()>1) && ($(this).next().next().is('span'))){
									$(this).next().next().remove();
									return;
								}
								return;
						}
						if($(this).next().is('span')){
							if($(this).next().hasClass('userNamSpan')){
									$(this).next().text('邮箱合法');
									$(this).next().toggleClass('userNameSpanOK');
								}else{
									$(this).next().text('邮箱合法');
									$(this).next().addClass('userNameSpanOK');
								}
						}else{
							$(this).after('<span class="userNameSpanOK">邮箱合法</span>');
						}
						break;
					case 'num':
						var info = $(this).attr('info');
							if(userValue.match(phone) == null){
								$(this).after('<span class="userNameSpan">手机不合法</span>');
									if(($('span').size()>1) && ($(this).next().next().is('span'))){
										$(this).next().next().remove();
										return;
									}
									return;
							}
							if($(this).next().is('span')){
								if($(this).next().hasClass('userNamSpan')){
									$(this).next().text('手机合法');
									$(this).next().toggleClass('userNameSpanOK');
								}else{
									$(this).next().text('手机合法');
									$(this).next().addClass('userNameSpanOK');
								}
							}else{
								$(this).after('<span class="userNameSpanOK">手机合法</span>');
							}
							break;
					default:
						$(this).attr('placeholder','邮箱/手机号');
						break;
				}
			});
		});