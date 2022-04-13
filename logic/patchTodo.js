const { successHandle, errorHandle } = require('../handler');
const TODO = require('../models/todos');

const patchTodo = (req, res, body) => {
	const id = req.url.split('/').pop();
	req.on('end', async ()=>{
		const {title, status} = JSON.parse(body);
		if(title===undefined && status === undefined){
			errorHandle(res, '參數有缺');
			return;
		}
		try {
			// eslint-disable-next-line no-unused-vars
			const target = await TODO.findByIdAndUpdate(id , {
				title,
				status
			});
			successHandle(res, target);
		} catch (error) {
			errorHandle(res, '無此ID');
		}
	});
};

module.exports = patchTodo;
