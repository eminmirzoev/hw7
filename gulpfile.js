const { src, dest, series} = require('gulp');

function copyJs() {
    return src('src/**/*.js')
    .pipe(dest('build', {overwrite: true}));
}

function copyCss() {
    return src('src/**/*.css')
    .pipe(dest('build', {overwrite: true}));
}

function copyHtml() {
    return src('src/**/*.html')
    .pipe(dest('build', {overwrite: true}));
}

exports.default = series(copyJs, copyCss, copyHtml);