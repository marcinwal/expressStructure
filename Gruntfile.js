module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      unit:{
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
    mocha_casperjs: {
      options: {
      },
      files: {
        src: ['test/**/*']
      }
    },

    express: {
      options: {
      },
      dev: {
        options: {
          script: './server.js'
        }
      },
      prod: {
        options: {
          script: './server.js',
          node_env: 'production'
        }
      },
      test: {
        options: {
          script: './server.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-karma');  

  grunt.registerTask('default', ['express:test', 'mocha_casperjs','karma:unit']);
};