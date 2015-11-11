module.exports = {
  options: {
    sourceMap: true,
    sourceMapIn: function(path) { 
      if(path === "<%= config.srcFolder %>/app/javascripts/application.js") {
        return false;
      } else {
        return path.replace(/.js/,".js.map");
      }
    } 
  },
  build: {
    files: [{
      expand: true,
      cwd: '<%= config.buildFolder %>/app/javascripts',
      src: ['**/*.js'],
      dest: '<%= config.buildFolder %>/app/javascripts'
    }]
  }
}