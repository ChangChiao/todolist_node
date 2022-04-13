const { successHandle, errorHandle } = require('../handler');
const TODO = require('../models/todos');
const deleteTodoAll = (res) => {
	// eslint-disable-next-line no-unused-vars
	const list = TODO.deleteMany({});
	successHandle(res, []);
};
const deleteTodoSingle = async (req, res) => {
	const id = req.url.split('/').pop();
	try {
		// eslint-disable-next-line no-unused-vars
		const target = await TODO.findByIdAndDelete(id);
		successHandle(res, {});
	} catch (error) {
		errorHandle(res, '無此id');
	}
};
module.exports = {
	deleteTodoAll,
	deleteTodoSingle,
};
