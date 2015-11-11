module.exports = {
    build: {
    options: {
        sourceMap: true
    },
    files: {
            '<%= config.buildFolder %>/app/javascripts/application.js' : [
            '<%= config.srcFolder %>/app/javascripts/config.js',
            '<%= config.srcFolder %>/app/vendor/**/*.js',
            '<%= config.srcFolder %>/app/javascripts/modules/*.js',
            '<%= config.srcFolder %>/app/javascripts/application.js'
            ],
        }
    }
}