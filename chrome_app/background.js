chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    'outerBounds': {
      'width': screen.availWidth,
      'height': screen.availHeight,
      'minWidth': 480,
      'minHeight': 320
    }
  });
});
