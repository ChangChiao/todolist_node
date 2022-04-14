const { successHandle, errorHandle } = require('../handler');
const Todo = require('../models/todos');
const postTodo = (req, res, body) => {
	console.log('end');
	try {
		const { title, status } = JSON.parse(body);
		const todo = Todo.create({
			title, 
			status,
		});
		successHandle(res, todo);
	} catch (error) {
		errorHandle(res, '參數有缺');
		console.log('error', error);
	}
};

module.exports = postTodo;
