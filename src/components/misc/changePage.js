export const changePage = (currentPage, pageSize, array) => {
	const start = (currentPage - 1) * pageSize;
	const end = start + pageSize;
	const list = [ ...array ].slice(start, end);
	return list;
};
