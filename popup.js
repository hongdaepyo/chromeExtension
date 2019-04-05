let changeColor = document.getElementById('changeColor');

document.body.addEventListener("click", function(e){
	if(e.target.tagName.toLowerCase() === "li") {
		alert('li');
	}
});

chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
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
		
		// chrome.tabs.get(122, function(tab){
			// chrome.tabs.remove(tab.id);
		// });
		
		// addTabListEvent();
		
		//디버깅용
		document.body.innerText += document.body.innerHTML;
	});
		
}

function addTabListEvent(){
	
	var tabList = document.querySelectorAll("#tabListUL li");
	[].forEach.call(tabList, function(tab){
		tab.addEventListener("click", tabClose);
	});
}

function tabClose(e){
	alert(e.target.name);
	var tabID = e.target.name.match(/\d+/g)[0];
	chrome.tabs.get(tabID, function(tab){
		chrome.tabs.remove(tab.id);
	});
}