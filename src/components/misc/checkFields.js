export const checkFields = (form) => {
	if (form.password.isValid && form.email.isValid) {
		return true;
	}
	return false;
};
