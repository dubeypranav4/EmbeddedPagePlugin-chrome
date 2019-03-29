var tag_modal_map = new Map();


var all_href = document.querySelectorAll('a[href]');
console.log("watcher loaded");
var len = all_href.length;
for (var i = 0; i<len;++i){
	all_href[i].addEventListener("mouseover",processMouseOver(all_href[i]));
	// all_href[i].addEventListener("mouseout",processMouseOut(all_href[i]));
}
function processMouseOver(tag_obj){
	return function(){
		var div_item;
		if (tag_modal_map.has(tag_obj) ) {
			div_item = tag_modal_map.get(tag_obj);
		}else{
			div_item = document.createElement("div");
			
			var iframeElement = document.createElement("iframe")
			iframeElement.src = tag_obj['href'];

			var close_button = document.createElement("input");
			close_button.type = "button";
			close_button.value = "close";
			close_button.addEventListener("click",processMouseOut(tag_obj));

			div_item.appendChild(iframeElement);
			div_item.appendChild(close_button);
			tag_obj.insertAdjacentElement("afterend",div_item);	

			tag_modal_map.set(tag_obj,div_item);
			div_item.hidden = true;
		}
		var tag_rects = tag_obj.getClientRects()[0];
		var x_rect = tag_rects.x;
		var y_rect = tag_rects.y;
		div_item.style.position = "absolute";
		div_item.style.left = x_rect + 'px';
		div_item.style.right = y_rect + 'px';
		div_item.hidden = false;


	}
}


function processMouseOut(tag_obj){
	return function(){
		if (tag_modal_map.has(tag_obj)) {
			tag_modal_map.get(tag_obj).hidden = true;	
		}else{
			console.error("check why element not created for : " + tag_obj['href']);
		}
	}
}