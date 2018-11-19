/*jshint node:true*/

'use strict';

module.exports = function(grunt) {
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks listed in package.json automatically
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // shell commands for use in Grunt tasks
    shell: {
      jekyllBuild: {
        command: "bundle exec jekyll build"
      },
      jekyllServe: {
        command: "bundle exec jekyll serve --baseurl ''"
      }
    },
    sass: {
      dist: {
        options: {
          sourceMap: true,
          relativeAssets: false,
          outputStyle: 'expanded',
          sassDir: '_scss',
          cssDir: '_site/css',
          includePaths: [
            'library/assets/_scss/',
            '_scss/'
          ],
        },
        files: [
          {
            src: '_scss/all.scss',
            dest: 'css/usajobs-design-system-base.css'
          },
          {
            src: '_scss/components.scss',
            dest: 'css/usajobs-design-system-components.css'
          },
          {
            expand: true,
            cwd: '_scss/layouts/',
            src: '*.scss',
            dest: 'css/layouts/',
            ext: '.css'
          }
        ]
      }
    },
    autoprefixer: {
      options: {
        map: true, // Use and update the sourcemap
        browsers: ["last 3 versions", "> 2% in US"]
      },
      project_css: {
        expand: true,
        flatten: true,
        src: 'css/*.css',
        dest: 'css/'
      },
      layouts_css: {
        expand: true,
        flatten: true,
        src: 'css/layouts/*.css',
        dest: 'css/layouts/'
      }
    },
    concat: {
      js_base: {
        src: [
          'js/vendor/modernizr.js',
          'library/assets/js/vendor/jquery-1.11.3.min.js'
        ],
        dest: 'js/usajobs-design-system-base.js'
      },
      js_ltie9: {
        src: [
          'library/assets/js/vendor/rem.min.js',
          'node_modules/lt-ie-9/lt-ie-9.min.js'
        ],
        dest: 'js/usajobs-design-system-lt-ie9.js'
      },
      js_components: {
        src: [
          'library/assets/js/components.js',
          'js/components/*.js'
        ],
        dest: 'js/usajobs-design-system-components.js'
      },
      js_docs: {
        src: [
          'library/assets-styleguide/js/vendor/prism.js',
          'library/assets-styleguide/js/styleguide.js'
        ],
        dest: 'js/usajobs-design-system-documentation.js'
      }
    },
    cssmin: {
      minify: {
        src: [
          'css/usajobs-design-system-base.css',
          'css/usajobs-design-system-components.css',
          'css/layouts/*.css'
        ],
        dest: 'css/usajobs-design-system.min.css'
      }
    },
    jshint: {
      jshintrc: true,
      all: [
        'Gruntfile.js',
        'js/**/*.js',
        '!js/vendor/*.js',
        '!js/usajobs-design-system-base.js',
        '!js/usajobs-design-system-components.js',
        '!js/usajobs-design-system-documentation.js',
        '!js/usajobs-design-system-lt-ie9.js'
      ],
      components: [
        'js/components/*.js',
        '!js/usajobs-design-system-components.js',
      ],
      gruntfile: 'Gruntfile.js'
    },
    notify_hooks: {
      options: {
        enabled: true,
        max_jshint_notifications: 5, // maximum number of notifications from jshint output
        success: false // whether successful grunt executions should be notified automatically
      }
    },
    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile']
      },
      sass: {
        files: [
          '_scss/**/*.scss'
        ],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },
      base: {
        files: [
          'js/*.js',
          '!js/vendor/*.js',
          '!js/usajobs-design-system-base.js',
          '!js/usajobs-design-system-components.js',
          '!js/usajobs-design-system-documentation.js',
          '!js/usajobs-design-system-lt-ie9.js'
        ],
        tasks: ['jshint:all', 'concat'],
        options: {
          debounceDelay: 250,
          livereload: true
        }
      },
      components: {
        files: [
          'js/components/*.js'
        ],
        tasks: ['jshint:components', 'concat:js_components'],
        options: {
          debounceDelay: 250,
          livereload: true
        }
      }
    },
    // run tasks in parallel
    concurrent: {
      serve: [
        'sass',
        'watch',
        'shell:jekyllServe'
      ],
      options: {
        logConcurrentOutput: true
      }
    }
  });

  grunt.registerTask('serve', ['concurrent:serve']);
  grunt.registerTask('build', ['shell:jekyllBuild', 'css', 'js']);
  grunt.registerTask('css', ['sass', 'autoprefixer', 'cssmin']);
  grunt.registerTask('js', ['jshint:all', 'concat']);
};
