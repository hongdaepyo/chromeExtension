let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
	let color = element.target.value;
	let testStr = "";
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
		for(var i = 0; tabs[i]; i++){
			testStr += (i + 1) + ". " + tabs[i].id + " : " + tabs[i].url + "<br>"
		}
		document.body.innerHTML = testStr;
	});
	
}