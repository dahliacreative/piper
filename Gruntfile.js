module.exports = function(grunt) {
    
    var config = grunt.file.readJSON('GruntConfig.json');
    config.cleanFolder = config.concrete5 ? config.buildFolder + '/app' : config.buildFolder;

    require('load-grunt-config')(grunt, {
        data: {
            config: config
        }
    });
}