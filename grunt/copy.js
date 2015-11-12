module.exports = {
  build: {
    files: [
      {
        expand: true, 
        cwd: '<%= config.srcFolder %>/app/fonts', 
        src: ['**/*.*'], 
        dest: '<%= config.buildFolder %>/app/fonts'
      },
      {
        expand: true, 
        cwd: '<%= config.srcFolder %>/app/images', 
        src: ['**/*.*'], 
        dest: '<%= config.buildFolder %>/app/images'
      },
      {
        expand: true, 
        cwd: '<%= config.srcFolder %>/app/javascripts/data', 
        src: ['assets.json'], 
        dest: '<%= config.buildFolder %>/app/javascripts/data'
      },
      {
        expand: true, 
        cwd: '<%= config.srcFolder %>/app/data', 
        src: ['assets.json'], 
        dest: '<%= config.buildFolder %>/app/data'
      },
      {
        expand: true, 
        cwd: '<%= config.srcFolder %>/app/handlebars', 
        src: ['assets.json'], 
        dest: '<%= config.buildFolder %>/app/handlebars'
      }
    ]
  }
}