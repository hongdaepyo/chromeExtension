function callAlert(){
	alert(1);
}

chrome.extension.sendMessage({
	action:"scripts",
	source: callAlert()
});