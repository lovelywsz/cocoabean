;(function(window){
    var agent = navigator.userAgent.toLowerCase() ;
    var version;
    var root = document.documentElement;
    var deviceWidth = parseInt(root.clientWidth);
    if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)||agent.indexOf("like mac os x") > 0){
        var regStr_saf = /os [\d._]*/gi ;
        var verinfo = agent.match(regStr_saf) ;
        version = (verinfo+"").replace(/[^0-9|_.]/ig,"").replace(/_/ig,".");
    }

    var version_str = version+"";
    if(version_str != "undefined" && version_str.length >0){
        version=version.substring(0,1);
        if(version>=8 && (deviceWidth == 375 || deviceWidth == 667 || deviceWidth == 320 || deviceWidth == 568 || deviceWidth == 480)){
            root.className = 'iosx2';
        }else if(version>=8&& deviceWidth == 414 || deviceWidth == 736){
            root.className = 'iosx3';
        }
    }
})(window);