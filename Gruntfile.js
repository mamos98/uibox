module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'src/css/uibox.css' : 'src/sass/style.sass'
				}
			}
		},
		shell: {
	        options: {
	            stderr: false
	        },
	        target: {
	            command: 'sass-convert bower_components/normalize-css/normalize.css src/sass/_normalize.sass'
	        }
		},
		cssmin: {
		  combine: {
		    files: {
		      'src/css/uibox.min.css': ['src/css/uibox.css']
		    }
		  }
		},
		watch: {
			css: {
				files: '**/*.sass',
				tasks: ['sass', 'cssmin']
			}
		}
		});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-shell');
	grunt.registerTask('default', ['watch']);
};
