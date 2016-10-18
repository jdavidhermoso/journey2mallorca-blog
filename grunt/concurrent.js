module.exports = {
	dev: {
		tasks: ['nodemon', 'node-inspector','sasslint', 'watch'],
		options: {
			logConcurrentOutput: true,
		},
	},
};
