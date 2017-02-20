const gulp = require("gulp");
const confWebpack = require("./webpack.conf");
const webpack = require("webpack");
const gutil  = require("gutil");


gulp.task("default", function () {
    console.log(confWebpack)
});



gulp.task("webpack", function () {
    webpack(confWebpack, function (err,stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
    })
});
gulp.task("new_task", function () {
    console.log("new_task");
})


