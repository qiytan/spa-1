$(function(){var t,i=$(".main img"),a=$('input[type="submit"]');function n(){var t=localStorage.getItem("img");t&&i.attr("src",t)}(t=$("<img>")).attr("crossOrigin","anonymous"),n(),a.click(function(){t.attr("src",$('input[type="url"]').val())}),t.load(function(){var t=$("<canvas>").get(0),i=t.getContext("2d");t.width=this.width,t.height=this.height,i.drawImage(this,0,0,t.width,t.height);var a=t.toDataURL();localStorage.setItem("img",a),n()})});