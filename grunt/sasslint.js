module.exports = {
	options: {
		configFile: '.sass-lint.yml',
		formatter: 'junit',
		outputFile: 'report.xml'
	},
	target: ['public/styles/*.scss']
};

