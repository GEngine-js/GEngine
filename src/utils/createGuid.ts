function createGuid() {
	// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0;
		const v = c === "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}
export default createGuid;
