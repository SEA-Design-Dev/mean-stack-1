var dest = "./public";
var src = "./src";

module.exports = {
  javascript: {
    entryPoint: src + "/app/entry.js",
    src: src + "/app/**/*.js",
    // src: src + "/app/**/*.js",
    dest: dest + "/js/"
  },
  // assets: {
  //   src: src + "/assets/**/*",
  //   dest: dest + "/assets/""
  // },
  sass: {
    src: src + "/sass/**/*.{sass,scss}",
    // src: src + "/sass/**/*.scss",
    dest: dest + "/css/"
  },
  // html: {
  //   src: src + "/app/**/*.html",
  //   dest: dest + "/views/",
  // },
  // server: {
  //   src: dest,
  //   livereload: true,
  //   directoryListing: false,
  //   open: false,
  //   port: 9000
  // },
};
