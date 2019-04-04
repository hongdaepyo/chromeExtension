function callAlert(){
	chrome.tabs.executeScript("", {
		code: alert(1)
	});
}

/*chrome.browserAction.onClicked.addListener(
	function(tab){
		chrome.tabs.executeScript(tab.id, {
			source: callAlert();
		});
	}
);
*/


chrome.extension.sendMessage({
	action:"scripts",
	source: callAlert()
});