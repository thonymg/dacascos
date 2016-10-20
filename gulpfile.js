var gulp = require('gulp');
var gutil = require('gulp-util');
var markdownToJSON = require('gulp-markdown-to-json');
var marked = require('marked');
 
var blogSource = './content/blog/**/*.md';
var blogOut = 'data/blog.json';

var pagesSource = './content/pages/**/*.md';
var pagesOut = 'data/pages.json';


gulp.task('blog', function(done) {
  debugger;
  gulp.src(blogSource )
    .pipe(gutil.buffer())
    .pipe(markdownToJSON(marked, blogOut))
    .pipe(gulp.dest('./'));
    done();
});

gulp.task('page', function(done){
  debugger;
  gulp.src(pagesSource)
    .pipe(gutil.buffer())
    .pipe(markdownToJSON(marked, pagesOut))
    .pipe(gulp.dest('./'));
    done();
});

// gulp.task('watch', () => {
//   gulp.watch(blogSource).on('change', (path, stats)=> {
//       console.log(path);
//       console.log(stats);
//     })
//   gulp.watch(pagesSource ,  gulp.series('newpage'));

// });

// gulp.task('default', ['newblog', 'newpage', 'watch']);

// gulp.task('mdw', (done) => {
//   gulp.src('./*.md')
//     .pipe(markdownToJSON(marked))
//     .pipe(gulp.dest('./'));
    
//     done()
// });