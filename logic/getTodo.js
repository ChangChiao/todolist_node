const Todo = require('../models/todos');
const { successHandle } = require('../handler');
const getTodo = async(res) => {
	try {
		const todoList = await Todo.find();
		successHandle(res, todoList);
	} catch (error) {
		console.warn('error', error);
	}
};

module.exports = getTodo;
