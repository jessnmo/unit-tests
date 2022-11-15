export const isEmpty = (stringArrayOrObject) => {
	const type = typeof stringArrayOrObject;

	if (type === string) {
		if (stringArrayOrObject === '') {
			return true;
		}
	} else if (type === object) {
		if (stringArrayOrObject === {}) return true;
	} else if (type === {}) {
		return true;
	} else return false;
	/* console.log(type);
	return type.length === 0 ? true : false; */
};
