export const hashIt = (value) => {
	let key = value.toString();
	let hash = 0;
	if (key.length < 1) {
		return;
	}
	for (let i = 0; i < key.length; i++) {
		hash += key.charCodeAt(i);
	}
	return hash;
};
