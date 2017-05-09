var gulp = require('gulp');
var less = require('gulp-less');
var sftp = require('gulp-sftp');
var path = require('path');
var fs = require('fs');

gulp.task('less', function() {
    fs.stat('./src/css/app.less', function(err, stat) {
        if (err != null) {
            console.log('Error:' + err.code);
        }
    });
    gulp.src('./src/css/app.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./src/css/'));
});

gulp.task('default', function() {
    gulp.watch('./src/css/*.less', ['less']);
});

gulp.task('default', function() {
    return gulp.src('src/*')
        .pipe(sftp({
            host: 'abc-shop-online.neto.com.au',
            auth: 'keyMain',
            port: 2022,
            src: 'src',
            dest: '/httpdocs/assets/themes/abcshop'
        }));
});
