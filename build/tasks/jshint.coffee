module.exports = ->
  @loadNpmTasks "grunt-contrib-copy"

  # Move bower_components and app logic during a build.
  @config "copy",
    release:
      files: [
        {
          expand: true,
          src: "client/bower_components/**",
          dest: "public/js/spa/"
        },
        {
          expand: true,
          cwd: "build/",
          src: ["**/*.js"],
          dest: "public/js/spa/"
        }
      ]
