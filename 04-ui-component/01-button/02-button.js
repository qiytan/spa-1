var $btn,timer,i=9;$(function(){var t=$('<input type="button" value="同意">');$("div.box").append(t),($btn=$('input[type="button"]')).val("同意 ("+i+" s)"),$btn.attr("disabled","disabled"),timer=window.setInterval(function(){$btn.val("同意 ("+i--+" s)"),-1===i&&(window.clearInterval(timer),$btn.val("同意"),$btn.removeAttr("disabled"))},1e3),$btn.click(function(){alert("就知道你会同意的！")})});