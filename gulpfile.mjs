import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import * as dartSass from 'sass'; 

const sassCompiler = gulpSass(dartSass);

const paths = {
    scss: {
        src: 'styles/index.scss',
        dest: '/'
    }
};

function styles() {
    return gulp.src(paths.scss.src)
        .pipe(sourcemaps.init()) 
        .pipe(sassCompiler().on('error', sassCompiler.logError)) 
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.scss.dest));
}

function watch() {
    gulp.watch(paths.scss.src, styles);
}

const build = gulp.series(styles, watch);
export default build;