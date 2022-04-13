const { successHandle, errorHandle } = require('../handler');
const TODO = require('../models/todos');
const postTodo = (req, res, body) => {
	req.on('end', async () => {
		try {
			const { title, status } = JSON.parse(body);
			const todo = TODO.create({
				title, 
				status,
			});
			successHandle(res, todo);
		} catch (error) {
			errorHandle(res, '參數有缺');
			console.log('error', error);
		}
	});
};

module.exports = postTodo;
