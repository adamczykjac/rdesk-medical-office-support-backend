module.exports = ->
  @loadNpmTasks "grunt-contrib-copy"

  # Move bower_components and app logic during a build.
  @config "copy",
    release:
      files: [
        {
          expand: true,
          cwd: "client/bower_components",
          src: ["**/*.js"],
          dest: "app/"
        }
#        {
#          expand: true,
#          src: ["build/templates/**/*.js"],
#          dest: "public/js/spa/"
#        }
      ]
