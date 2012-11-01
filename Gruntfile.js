/*global module:false*/
module.exports = function(grunt) {
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  var mapToUrl = function(files, baseUrl) {
    return grunt.util._.map(
      grunt.file.expandFiles(files),
      function (file) {
        return baseUrl+file;
      }
    );
  };  

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    requirejs: {
      compile: {
        options: {
          dir: "build",
          appDir: "lib/",
          baseUrl: "./",
          mainConfigFile: "lib/config.js",
          modules: [
            { name: "main" }
          ],
          findNestedDependencies: true,
          optimize: "none"
        }
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'lib/**/*.js']
    },
    
    connect: {
      options: {
        port: 8000,
        base: '.'
      }
    },
    
    qunit: {
      all: [mapToUrl('tests/**.html', 'http://localhost:8000/')],
      options: {
        timeout: 5000,
        inject: false
      }
    },
    'update-tests': {
      src: ['tests/**/*Test.js']
    },
    concat: {
      options: {
        banner:
          '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
          '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
          '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
          ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */',
        stripBanners: true
      },
      dist: {
        src: ['lib/<%= pkg.name %>.js', 'lib/**/*.js'],
        dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.js'
      }
    },
    uglify: {
      dist: {
        src: ['dist/<%= pkg.name %>-<%= pkg.version %>.js'],
        dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.min.js'
      }
    }
  });

  // Default task.
  grunt.registerTask('pack', ['jshint', 'requirejs']);
  grunt.registerTask('default', ['jshint', 'connect', 'qunit', 'requirejs']);
  grunt.registerTask('test', ['connect', 'qunit']);

  grunt.registerMultiTask("update-tests", "updates the index for test files", function() {
    var filepaths = grunt.file.expandFiles(this.file.src);
    
    // all files are relative to the grunt.js file
    grunt.log.writeln("found "+filepaths.length+" testfiles.");
    grunt.file.write(
      "tests/all.js",
      
      "/* This file was auto-generated by grunt update-tests-task on "+grunt.template.today("yyyy-mm-dd hh:mm")+" */\n"+
      "define(function () {\n"+
      "  return "+JSON.stringify(
        grunt.utils._.map(filepaths, function (path) { return '/'+path; }),
        undefined,
        2
      )+";\n"+
      ");\n"
    );
    
    grunt.log.ok();
  });
};
