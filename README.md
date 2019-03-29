# EmbeddedPagePlugin-chrome
Chrome plugin to pop up iframes wherever href links are present in whole page


Description : 

Uses chrome plugin to montior incoming DOM and finds all the elements with href attributes. It then tags them with an event listener that corresponds to mouse hover. The 'mouseover' event triggers a dynamic Modal(floating) div insertion in the DOM that opens the href link in the page.

Still in development phase

Change the manifest.json to incorporate various hosts on which you want this plugin to work

"content_scripts":[
		{
			"matches":[https://abc.com/*"],
			"js":["watcher.js"]
		}
	]
  
  
  watcher.js performs the core functionality .
  
  Check if console logs prints "watcher loaded" log . Otherwise there may be some permission conflicts or bug.
  
  
