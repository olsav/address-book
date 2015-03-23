module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    vendor: {
      javascripts: [
        'vendor/assets/javascripts/angular/angular.js',
        'vendor/assets/javascripts/angular/angular-resource.js',
        'vendor/assets/javascripts/angular/angular-animate.js',
        'vendor/assets/javascripts/angular/angular-touch.js',
        'vendor/assets/javascripts/angular-ui/angular-ui-bootstrap.js',
        'vendor/assets/javascripts/angular-ui/angular-ui-router.js'
      ],

      stylesheets: [
        'vendor/assets/stylesheets/font-awesome/font-awesome.less',
        'vendor/assets/stylesheets/bootstrap/bootstrap.less'
      ]
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },

      javascripts: [
        'lib/assets/javascripts/**/*.js',
        'app/assets/javascripts/**/*.js'
      ]
    },

    concat: {
      options: {
        compress: false
      },

      javascripts: {
        src: [
          '<%= vendor.javascripts %>',

          'lib/assets/javascripts/*/*.js',
          'lib/assets/javascripts/*/**/*.js',
          'app/assets/javascripts/main.js',
          'app/assets/javascripts/*/*.js',
          'app/assets/javascripts/*/**/*.js'
        ],

        dest: 'public/assets/application.js'
      }
    },

    less: {
      options: {
        compress: true
      },

      stylesheets: {
        src: [
          '<%= vendor.stylesheets %>',

          'lib/assets/stylesheets/*.less',
          'app/assets/stylesheets/*.less'
        ],

        dest: 'public/assets/application.css'
      }
    },

    copy: {
      templates: {
        files: [{
          expand: true,
          cwd: 'vendor/assets/templates',
          src: ['**/*.html'],
          dest: 'public/assets/templates'
        }, {
          expand: true,
          cwd: 'lib/assets/templates',
          src: ['**/*.html'],
          dest: 'public/assets/templates'
        }, {
          expand: true,
          cwd: 'app/assets/templates',
          src: ['**/*.html'],
          dest: 'public/assets/templates'
        }]
      },

      images: {
        files: [{
          expand: true,
          cwd: 'vendor/assets/images',
          src: ['**/*.{gif,jpg,png}'],
          dest: 'public/assets/images'
        }, {
          expand: true,
          cwd: 'lib/assets/images',
          src: ['**/*.{gif,jpg,png}'],
          dest: 'public/assets/images'
        }, {
          expand: true,
          cwd: 'app/assets/images',
          src: ['**/*.{gif,jpg,png}'],
          dest: 'public/assets/images'
        }]
      },

      fonts: {
        files: [{
          expand: true,
          cwd: 'vendor/assets/fonts',
          src: ['**/*.{eot,svg,ttf,woff}'],
          dest: 'public/assets/fonts'
        }, {
          expand: true,
          cwd: 'lib/assets/fonts',
          src: ['**/*.{eot,svg,ttf,woff}'],
          dest: 'public/assets/fonts'
        }, {
          expand: true,
          cwd: 'app/assets/fonts',
          src: ['**/*.{eot,svg,ttf,woff}'],
          dest: 'public/assets/fonts'
        }]
      }
    },

    template: {
      options: {
        data: {
          version: '<%= pkg.version %>-<%= Date.now() %>'
        }
      },

      layouts: {
        files: [
          {
            expand: true,
            cwd: 'vendor',
            src: 'assets/templates/*.html',
            dest: 'public',
            flatten: true
          },
          {
            expand: true,
            cwd: 'lib',
            src: 'assets/templates/*.html',
            dest: 'public',
            flatten: true
          },
          {
            expand: true,
            cwd: 'app',
            src: 'assets/templates/*.html',
            dest: 'public',
            flatten: true
          }
        ]
      }
    },

    watch: {
      javascripts: {
        files: ['{vendor,lib,app}/assets/javascripts/**'],
        tasks: ['concat:javascripts']
      },

      stylesheets: {
        files: ['{vendor,lib,app}/assets/stylesheets/**'],
        tasks: ['less:stylesheets']
      },

      templates: {
        files: ['{vendor,lib,app}/assets/templates/**'],
        tasks: ['copy:templates']
      },

      images: {
        files: ['{vendor,lib,app}/assets/images/**'],
        tasks: ['copy:images']
      },

      fonts: {
        files: ['{vendor,lib,app}/assets/fonts/**'],
        tasks: ['copy:fonts']
      },

      release: {
        options: {
          livereload: true
        },

        files: ['public/**']
      }
    },

    connect: {
      options: {
        keepalive: true,
        debug: true,
        livereload: true
      },

      server: {
        options: {
          protocol: 'https',
          hostname: 'localhost',
          port: 8000,
          useAvailablePort: true,
          open: true,

          base: ['public']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-template');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('build', [
    'concat:javascripts',
    'template:layouts',
    'less:stylesheets',
    'copy:templates',
    'copy:images',
    'copy:fonts'
  ]);
};
