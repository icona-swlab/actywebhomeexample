
// Functions for calling Acty

function ACTYObjCall(companyCode, companyName) {
	var code = denullify(companyCode);
	var name = denullify(companyName);
	onCallbackNotSupported("ACTYObjCall", "[companyCode = '" + code + "'; companyName = '" + name + "']")
}

function ACTYObjChat(companyCode, companyName) {
	var code = denullify(companyCode);
	var name = denullify(companyName);
	onCallbackNotSupported("ACTYObjChat", "[companyCode = '" + code + "'; companyName = '" + name + "']")
}

function ACTYObjGetGPS() {
	onCallbackNotSupported("ACTYObjGetGPS")
}

function ACTYObjOpenWorkInstructions() {
	onCallbackNotSupported("ACTYObjOpenWorkInstructions")
}

function ACTYObjRetry() {
	onCallbackNotSupported("ACTYObjRetry")
}

function ACTYObjSetConfig(serverHost, disableMediaRec) {
	var host = denullify(serverHost);
	onCallbackNotSupported("ACTYObjSetConfig", "[serverHost = '" + host + "'; disableMediaRec = '" + disableMediaRec + "']")
}

// Functions called from Acty

function ACTYObjSetGPS(location) {
	document.getElementById("example3_gpsLocation").value = isEmpty(location) ? null : location;
}

function ACTYObjSetSession(sessionCode) {
	var element = document.getElementById("example1_sessionCode");
	if(sessionCode.length != 9) {
		element.value = null;
		return;
	}
	
	var slice1 = sessionCode.slice(0, 3);
	var slice2 = sessionCode.slice(3, 6);
	var slice3 = sessionCode.slice(6, 9);
	element.value = slice1 + " - " + slice2 + " - " + slice3;
}

function ACTYObjSetUnreadMessages(unreadMessages) {
	alert("ACTYObjSetUnreadMessages not implemented");
}

// Other functions

function denullify(string) {
	return isEmpty(string) ? "null" : string;
}

function isEmpty(string) {
	return string === null || string.trim() === "";
}

function onCallbackNotSupported(callbackName, parameters = null) {
	var text = callbackName + " not supported by this version of Acty.";
	if(!isEmpty(parameters)) {
		text += "\n" + parameters;
	}
	alert(text);
}

function onExample2FormSubmit() {
	var companyCode = document.getElementById("example2_companyCode").value;
	var companyName = document.getElementById("example2_companyName").value;
	ACTYObjChat(companyCode, companyName);
}

function onExample3FormSubmit() {
	ACTYObjGetGPS();
}

function onExample4FormSubmit() {
	ACTYObjOpenWorkInstructions();
}

function onExample5FormSubmit() {
	ACTYObjRetry();
}

function onExample6FormSubmit() {
	var serverHost = document.getElementById("example6_serverHost").value;
	var disableMediaRec = document.getElementById("example6_disableMediaRec").checked;
	ACTYObjSetConfig(serverHost, disableMediaRec);
}
