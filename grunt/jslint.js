module.exports = {
  jslint: { // configure the task 
    files: [ // some example files 
      '<%= config.srcFolder %>/app/javascript/**/*.js'
    ],
    options: {
      edition: 'latest', // specify an edition of jslint or use 'dir/mycustom-jslint.js' for own path 
      errorsOnly: true, // only display errors 
      failOnError: false // defaults to true 
    }
  }
}