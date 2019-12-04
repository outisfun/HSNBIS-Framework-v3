module.exports = function(grunt) {

  var story = grunt.option('story') || 'preview'; // if no story is specified, run on the
  var customModule = grunt.option('customModule') || 'change_name'; // if no story is specified, run on the

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    shell: {
      options: {
        stderr: false
      },
      buildStory: {
        command: story => `node src/builder/build-story ${story}`
      },
      initStory: {
        command: story => `node src/builder/init-story ${story}`
      },
      initCustomModule: {
        command: story => `node src/builder/init-custom-module ${story} ${customModule}`
      }
    },

    browserify: {
      options: {
        transform: [['babelify', { presets: ["@babel/preset-env"] }]],
        browserifyOptions: {
          paths: [ './stories/' + story + '/build/',
                    './stories/' + story + '/build/js/',
                    './src/framework/',
                    './src/framework/modules/',
                    './src/'],
          debug: true
        }
      },
      stories: {
        files: [{
          src: (story === 'preview') ? './preview/build/scripts.js' : './stories/' + story + '/build/scripts.js',
          expand: true,
          rename: function(dest, src) {
            return src.replace('build', 'dist');
          }
        }]
      },
    },

    handlebars: {
      compile: {
        options: {
          namespace: 'modules',
          processName: function(filePath) {
            var pieces = filePath.split('/');
            return pieces[pieces.length - 2];
          },
          wrapped: true,
          node: true
        },
        files: {
          './src/builder/templates.js': ['./src/framework/modules/**/**/*.hbs'],
        }
      }
    },

    uglify: {
      options: {
        compress: {
          drop_console: true
        }
      },
      pages: {
        files: {
          './stories/{$story}/dist/scripts.min.js': ['./stories/' + story + '/dist/scripts.js']
        }
      }
    },

    sass: {
      options: {
        loadPath: [
          './src/framework/',
          './src/framework/modules/',
          './stories/**/'
        ]
      },
      stories: {
        src: (story === 'preview') ? './preview/build/styles.scss' : './stories/' + story + '/build/styles.scss',
        expand: true,
        rename: function(dest, src) {
          var newPath = src.replace('build', 'dist');
          var customDest = newPath.replace('scss', 'css');
          return customDest;
        }
      }
    },

    autoprefixer: {
      stories: {
        './stories/**/dist/styles.css' : './stories/' + story + '/dist/styles.css'
      },
      preview: {
        './preview/dist/styles.css' : './preview/dist/styles.css'
      }
    },

    eslint: {
      options: {
        configFile: '.eslintrc.json',
        fix: true
      },
      story: ['./build-files.js', './src/modules/**/*.js']
    },

    watch: {
      sass: {
        files: [
          './stories/**/build/*.scss',
          './src/framework/common/scss/*.scss',
          './src/framework/modules/**/**/*.scss'
        ],
        tasks: ['sass:stories']
      },
      js: {
        files: [
          './src/framework/utilities/*.js',
          './src/framework/common/js/*.js',
          './src/framework/modules/**/**/*.js',
          './src/framework/premium/**/**/*.js',
          './stories/**/build/*.js'],
        tasks: ['browserify:stories']
      },
      hbs: {
        files: ['./src/framework/modules/**/**/template.hbs'],
        tasks: ['handlebars']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('lintall', ['eslint']);

  grunt.registerTask('init-custom-module', ['shell:initCustomModule:' + story]);
  grunt.registerTask('init-story', ['shell:initStory:' + story, 'browserify:stories', 'sass:stories', 'watch']);
  grunt.registerTask('build-story', ['browserify:stories', 'sass:stories', 'autoprefixer:stories', 'uglify']);

  grunt.registerTask('default', ['watch']); //test
};
