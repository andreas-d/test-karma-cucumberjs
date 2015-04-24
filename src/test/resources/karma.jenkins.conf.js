module.exports = function(config) {
	config.set({
		basePath : '../../../',
		frameworks : [ 'cucumberjs' ],
		files : [ {
			pattern : 'node_modules/karma-cucumberjs/vendor/cucumber-html.css',
			watched : false,
			included : false,
			served : true
		}, {
			pattern : 'src/main/webapp/resources/js/app.template',
			watched : false,
			included : false,
			served : true
		}, {
			pattern : 'src/test/features/**/*.feature',
			watched : true,
			included : false,
			served : true
		}, {
			pattern : 'src/test/features/step_definitions/**/*.js',
			watched : true,
			included : true,
			served : true
		} ],
		exclude : [],
		preprocessors : {
			'src/main/webapp/resources/js/**/*.js' : [ 'coverage' ]
		},
		// added `junit`
		reporters : [ 'progress', 'junit', 'coverage' ],
		port : 9876,
		colors : true,
		logLevel : config.LOG_INFO,
		// don't watch for file change
		autoWatch : false,
		// only runs on headless browser
		browsers : [ 'PhantomJS' ],
		// just run one time
		singleRun : true,
		// remove `karma-chrome-launcher` because we will be running on headless
		// browser on Jenkins
		plugins : [ 'karma-jasmine', 'karma-cucumberjs',
				'karma-phantomjs-launcher', 'karma-junit-reporter',
				'karma-coverage' ],
		// changes type to `cobertura`
		coverageReporter : {
			type : 'cobertura',
			dir : 'target/coverage-reports/'
		},
		// saves report at `target/surefire-reports/TEST-*.xml` because Jenkins
		// looks for this location and file prefix by default.
		junitReporter : {
			outputFile : 'target/surefire-reports/TEST-karma-results.xml'
		}
	});
};