export const validate = (element) => {
	const { type, value } = element;
	let error = [ true, '' ];

	if (type === 'email') {
		const valid = /\S+@\S+\.\S+/.test(value);
		const message = !valid ? 'enter your email' : '';
		error = !valid ? [ valid, message ] : error;
	}

	if (type === 'password') {
		let valid = true;
		let message = '';
		if (value.trim().length < 6) {
			valid = false;
			message = !valid ? 'min length is 6 chars' : '';
		}
		if (value.trim().length > 16) {
			valid = false;
			message = !valid ? 'max length is 16 chars' : '';
		}
		error = !valid ? [ valid, message ] : error;
	}

	return error;
};
