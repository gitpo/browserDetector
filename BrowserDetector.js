/*
 * A common way to detect modern browsers
 */
define('shared/utils/BrowserDetector', 
	[], 
	function(){
	
    	var _dataBrowser = [
    	    {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
	        {string: navigator.userAgent, subString: "Edge", identity: "MS Edge"}, 
			{string: navigator.userAgent, subString: "MSIE", identity: "Explorer"}, 
	    	{string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
			{string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
			{string: navigator.userAgent, subString: "Opera", identity: "Opera"},
			{string: navigator.userAgent, subString: "OPR", identity: "Opera"},
			{string: navigator.userAgent, subString: "Safari", identity: "Safari"}
        ];
	
		function _searchString(data){
	        for (var i = 0; i < data.length; i++) {
	            var dataString = data[i].string;
	            var dataProp = data[i].prop;
	            versionSearchString = data[i].versionSearch || data[i].identity;
	            if (dataString) {
	                if (dataString.indexOf(data[i].subString) != -1)
	                    return data[i].identity;
	            } else if (dataProp) {
	                return data[i].identity;
	            }
	        }
	    }
		
		function _featureDetector() {
			if (!!window.chrome && !window.opera) {
				return "Chrome";
			} else if (typeof InstallTrigger !== 'undefined') {
				return "Firefox";
			} else if (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0) {
				return "Safari";
			} else if (!!document.documentMode) {
				return "Explorer";
			} else if (!!window.opera) {
				return "Opera";
			}
		}

	    //window.browser = _featureDetector() || _searchString(_dataBrowser) || "An unknown browser";

		return _featureDetector() || _searchString(_dataBrowser) || "An unknown browser";
});
