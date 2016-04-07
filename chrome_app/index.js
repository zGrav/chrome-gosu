
onload = function() {
	var $ = function(sel) {
		return document.querySelector(sel);
	};

	var wv1=$('#web-view');

	function handlePermissionRequest(e) {
		var allowed = false;
	  if (e.permission==='pointerLock' || e.permission==='media' ||
	  		e.permission==='geolocation' || e.permission==='audioCapture' || e.permission==='audiocapture') {
	  	allowed = true;
    	e.request.allow();
  	} else {
  		e.request.deny();
  	}
		log("["+e.target.id+"] permissionrequest: permission="+e.permission+" "+
			(allowed?"allowed":"DENIED"));
	}

	wv1.addEventListener('permissionrequest', handlePermissionRequest);

	window.addEventListener('keydown', function () {
    if (event.keyIdentifier === 'F5') {
        //chrome.runtime.reload(); //resets entire app, can come in handy one day maybe?
		wv1.reload();
    }
});

}
