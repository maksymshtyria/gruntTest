/* jshint maxstatements: 20 */
module.exports = function (grunt) {
  grunt.loadTasks('node_modules/grunt-contrib-clean/tasks');
  grunt.loadTasks('node_modules//grunt-contrib-copy/tasks');
  grunt.loadTasks('node_modules//grunt-contrib-watch/tasks');
  grunt.loadTasks('node_modules//grunt-contrib-less/tasks');
  grunt.loadTasks('node_modules/grunt-contrib-jshint/tasks');
  grunt.loadTasks('node_modules/grunt-shell/tasks');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    entryPoint: './assets/js/index.js',
    bundleFile: './assets/js/bundle.js',

    entryPointLibs: './assets/js/libs.js',
    bundleFileLibs: './assets/js/vendors.js',

    shell: {
      options: {
        stdout: true,
        stderr: true
      },
      bundle: {
        command: 'browserify <%= entryPoint %> -d -o <%= bundleFile %>'
      },
      bundleLibs: {
        command: 'browserify <%= entryPointLibs %> -d -o <%= bundleFileLibs %>'
      }
    },

    jshint: {
      // define the files to lint , 'assets/zoob/app/**/*.js', 'test/**/*.js'
      files: ['gruntfile.js', 'assets/zoob/app/**/*.js', 'api/**/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        ignores: ['assets/zoob/app/bundle.js', 'assets/zoob/app/vendors.js'],
        'bitwise': true,
        'camelcase': false,
        'curly': true,
        'eqeqeq': true,
        'forin': true,
        'immed': true,
        'indent': 2,
        'latedef': true,
        'newcap': false,
        'noarg': true,
        'nonew': true,
        'plusplus': false,
        'quotmark': true,
        'regexp': true,
        'strict': false,
        'maxparams': 10, //fix in future
        'maxdepth': 3,
        'maxstatements': 20,
        'maxcomplexity': 5,
        'browser': true,
        'jquery': true,
        'node': true,
        'sub': true,
        'evil': true,
        'loopfunc': true,
        'boss': true,
        'noempty': true,
        'trailing': true,
        'undef': true,
        'unused': true,
        'shadow': true,
        'debug': true,
        'freeze': true,
        'supernew': true,
        'iterator': true,
        'proto': true,
        'asi': true,
        'funcscope': true,
        'expr': true,
        globals: {
          jQuery: true,
          console: true,
          module: true,
          angular: true,
          io: true,
          Appointment: true,
          LoginService: true,
          ProviderService: true,
          UserService: true,
          ImageService: true,
          User: true,
          AppointmentService: true,
          EmailService: true,
          Hook: true,
          MedicalAlert: true,
          MedicalAlertService: true
        }
      }
    },

    copy: {
      dev: {
        files: [{
          expand: true,
          cwd: './assets',
          src: ['js/vendors.js',
            'js/bundle.js',
            'styles/css/*'],
          dest: './public'
        }]
      }
    },

    clean: {
      options: { force: true },
      dev: ['public/**'],
      build: ['www']
    },

    less: {
      dev: {
        options: {
          dumpLineNumbers: 'comments'
        },
        files: [{
          expand: true,
          cwd: 'assets/styles/less',
          src: ['*.less'],
          dest: 'assets/styles/css',
          ext: '.css'
        }]
      }
    },

    watch: {
      assets: {
        // Assets to watch:
        files: [
          'assets/js/collections/**/*',
          'assets/js/models/**/*',
          'assets/js/routers/**/*',
          'assets/js/views/**/*',
          'assets/js/index.js'
        ],
        // When assets are changed:
        tasks: ['jshint', 'shell:bundle', 'clean', 'copy']
      },

      styles: {
        // Assets to watch:
        files: ['assets/styles/less/**/*'],
        // When assets are changed:
        tasks: ['clean', 'less', 'copy']
      }
    }
  });

  // When Sails is lifted:
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('dev', ['jshint', 'shell:bundleLibs', 'shell:bundle', 'clean', 'copy', 'less', 'watch']);
  grunt.registerTask('prod', ['jshint', 'shell:bundleLibs','shell:bundle', 'clean', 'copy', 'less']);

};
