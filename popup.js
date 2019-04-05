let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});

document.body.addEventListener("click", function(e){
	if(e.target.tagName.toLowerCase() == 'li'){
			tabClose(e.target);
	}
});

changeColor.onclick = function(element) {
	let color = element.target.value;
	let testStr = "";
	let popupMainDiv = document.getElementById("popupMainDiv");
	// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		// chrome.tabs.executeScript(
			// tabs[0].id,
			// {code: 'document.body.style.backgroundColor = "' + color + '";'}
		// );
		// chrome.tabs.get(
			// tabs[0].id,
			// function(tab){document.body.innerHTML = tabs.length}
		// );
	// });
	

	chrome.tabs.query({}, function(tabs) {
		testStr += "<ul id='tabListUL'>";
		for(var i = 0; tabs[i]; i++){
			testStr += "<li id='tabListLi_" + i + "' name='" + tabs[i].id + "'>" 
						+ (i + 1) + ". " + tabs[i].id + " : " + tabs[i].url + "</li>";
		}
		testStr += "</ul>"
		popupMainDiv.innerHTML = testStr;
		
		//디버깅용
		// document.body.innerText += document.body.innerHTML;
	});
		
}

function createTabList(){
	
}

function addTabListEvent(){
	
	var tabList = document.querySelectorAll("#tabListUL li");
	[].forEach.call(tabList, function(tab){
		tab.addEventListener("click", tabClose);
	});
}

function tabClose(elem){
	var tabID = elem.getAttribute("name") * 1;
	chrome.tabs.remove(tabID);
}