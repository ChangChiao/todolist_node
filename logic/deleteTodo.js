const { successHandle, errorHandle } = require('../handler');
const Todo = require('../models/todos');
const deleteTodoAll = async (res) => {
	// eslint-disable-next-line no-unused-vars
	await Todo.deleteMany({});
	// console.log('list', list);
	successHandle(res, []);
};
const deleteTodoSingle = async (req, res) => {
	const id = req.url.split('/').pop();
	try {
		// eslint-disable-next-line no-unused-vars
		const target = await Todo.findByIdAndDelete(id);
		successHandle(res, {});
	} catch (error) {
		errorHandle(res, '無此id');
	}
};
module.exports = {
	deleteTodoAll,
	deleteTodoSingle,
};
