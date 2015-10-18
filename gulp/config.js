var dest = "./public";
var src = "./src";

module.exports = {
  javascript: {
    entryPoint: src + "/app/entry.js",
    src: src + "/app/**/*.js",
    dest: dest + "/js/"
  },
  sass: {
    src: src + "/sass/**/*.scss",
    dest: dest + "/css/"
  },
  html: {
    src: src + "/app/**/*.html",
    dest: dest + "/views/",
  },
};
