const { successHandle, errorHandle } = require('../handler');
const Todo = require('../models/todos');

const patchTodo = async(req, res, body) => {
	const id = req.url.split('/').pop();
	const { title, status } = JSON.parse(body);
	if (title === undefined && status === undefined) {
		errorHandle(res, '參數有缺');
		return;
	}
	try {
		// eslint-disable-next-line no-unused-vars
		const target = await Todo.findByIdAndUpdate(id, {
			title,
			status,
		});
		successHandle(res, target);
	} catch (error) {
		errorHandle(res, '無此ID');
	}
};

module.exports = patchTodo;
