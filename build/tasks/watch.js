var path = require("path");
var gulp = require("gulp");

function r (target) {
  return path.resolve(__dirname, "../..", target);
}

gulp.task("watch", function () {
  gulp.watch([
    r("resume.json"),
    r("build/templates/**/*.html"),
    r("style/**/*.css")
  ], ["generate-resume-html"]);
});
