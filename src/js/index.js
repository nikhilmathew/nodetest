(function () {
    'use strict';
    var pageName = "chart.html";


	/** This function redirect url to the new page.
	 * @param  {String} pageName - Name of the page to be redirected to
	 */
    function redirectTo(pageName) {
        window.location.href = pageName;
    }


redirectTo(pageName);


} ());