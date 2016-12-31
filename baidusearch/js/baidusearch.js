$(function() {
    var ainput = $('#bd-search-input');
    var abtn = $('#bd-search-button');
    var asug = $('#bd-search-sug');
    var sug_a = $('#bd-search-sug a');
    var l = sug_a.length;
    $(document).click(function() {
        asug.hide();
    })
    //此处用keyup，如果用keydown的话获取不到单个字符
    ainput.focus().keyup(function(event) {
        var e = e || event;
        if ((e.keyCode == 38) || (e.keyCode == 40)) {
            return false;
        } else {
            //防特殊字符，做转义处理，这儿想了不少时间，打个感叹号吧！
           function enBase(str) {
				var astr=[];
			    for (var i = 0; i < str.length; i++) {
			        if (str.charCodeAt(i) <= 255) {
			        	var enchar='%' + str.charCodeAt(i).toString(16);
			            astr.push(enchar);
			        }
			        else{
			        	astr.push(str.charAt(i));
			        }
			    }
			    return astr.join('');
			}
            var bdval = $.trim(ainput.val());
            bdval = enBase(bdval);
            if (bdval != '') {
                $('script').remove('script[wd=wd]');
                var oscript = $('<script>');
                // bdval=bdval.replace(/\#/g,"%23");
                // %2B	%20	%2F	%3F	%25	%26	&3D	%23
                // 一开始想用正则替换的，发现还是要列出所有特殊字符项，索性转码好了，而且通用
                var bdurl = 'http://suggestion.baidu.com/su?wd=' + bdval + '&cb=bdsug';
                oscript.attr({
                    'src': bdurl,
                    'wd': 'wd'
                });
                $('head').append(oscript);
            } else {
                asug.hide();
            }
        }
    }).click(function(){
    	return false;
    });
    var n = 0;
    //用document呢,此处用keydown，keyup不能实现长按功能，两处键盘事件虽然较为相似，还是不合并了
    ainput.keydown(function(event) {
        var e = e || event;
        switch (e.keyCode) {
            //上：38下：40左：37右：39
        case 13:
            openBd($.trim(ainput.val()));
            break;
        case 40:
            n++;
            visited();
            if (n == l) {
                n = 0
            };
            break;
        case 38:
            n--;
            if (n == ( - 1)) {
                n = l
            };
            visited();
            e.preventDefault();
            break;
        }
    });
    sug_a.click(visited);
    abtn.click(function() {
        openBd($.trim(ainput.val()));
    });
    function visited() {
        sug_a.css('background-color', '#fff');
        $(sug_a[n - 1]).css('background-color', '#ccc');
        ainput.val($(sug_a[n - 1]).text())
    }
    function openBd(wd) {
        if (wd != '') {
            window.open('https://www.baidu.com/s?wd=' + wd);
            ainput.css('color', '#787878');
            sug_a.css('background-color', '#fff');
            asug.hide();
        } else {
            return false;
        }
        n = 0;
    }
})



// function enBase(str) {
// 	var astr=[];
//     for (var i = 0; i < str.length; i++) {
//         if (str.charCodeAt(i) <= 255) {
//         	var enchar='%' + str.charCodeAt(i).toString(16);
//             astr.push(enchar);
//         }
//         else{
//         	astr.push(str.charAt(i));
//         }
//     }
//     return astr.join('');
// }
// alert(enBase('#ss52成都'));