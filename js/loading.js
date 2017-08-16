// 加载图

document.writeln("<div id=\"shadowDiv\" style=\"display: none\">");
document.writeln("    <img src=\"images/loading.gif\" />");
document.writeln("</div>");

function loading(opt) {
    if (opt) {
        $("#shadowDiv").show();
        var left = 0;
        var _top = 0;
        if (window.innerHeight) {
            left = (window.innerWidth - $("#shadowDiv img").width()) / 2;
            _top = (window.innerHeight - $("#shadowDiv img").height()) / 2;
        } else if (document.documentElement.clientHeight) {
            left = (document.documentElement.clientWidth - $("#shadowDiv img").width()) / 2;
            _top = (document.documentElement.clientHeight - $("#shadowDiv img").height()) / 2;
        }
        $("#shadowDiv img").css({ "position": "fixed", left: left + "px", top: _top + "px" });
    } else {
        $("#shadowDiv").hide()
    }
}

var urlall = "http://test.7wanl.com/7wanlsoa/"