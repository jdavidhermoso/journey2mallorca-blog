module.exports = {
	dist: {
		options: {
			compress: {
				drop_console: true
			}
		},
		files: {
			'public/js/main.js': 'public/js/*js',
		}
	}	
};
