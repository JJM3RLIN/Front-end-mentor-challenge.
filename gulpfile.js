const {dest, src} = require('gulp');
const terser = require('gulp-terser-js');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
function minificarJs(){
    return src('main.js')
    .pipe(sourcemaps.init())
    .pipe( terser ())
    .pipe( sourcemaps.write("."))
    .pipe ( dest ('./build/js'))
}
function minificarCss(){
    return src('styles/**/*.css')
    .pipe( sourcemaps.init())
    .pipe( cleanCSS() )
    .pipe( sourcemaps.write('.'))
    .pipe( dest('./build/css') )
}

exports.minificarCss = minificarCss;
exports.minificarJs = minificarJs;