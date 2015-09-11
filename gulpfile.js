var gulp = require('gulp'),
    run = require('gulp-run');

var cmd_opts = {verbosity: 1};
var git_opts = {cwd: 'gh-pages'}

gulp.task('build', function(){
  return run('ember build -prod', cmd_opts).exec();
});

gulp.task('clean', function(){
  return run('rm -rf gh-pages/*', cmd_opts).exec();
});

gulp.task('copy', ['build', 'clean'], function(){
  return gulp.src('dist/**/*')
             .pipe(gulp.dest('gh-pages'));
});

gulp.task('git-add', ['copy'], function(){
  return run('git add .', git_opts).exec();
});

gulp.task('git-commit', ['git-add'], function(){
  var now = new Date().toString();
  return run('git commit -m"gh-pages updated at: '+now+'"', git_opts).exec();
});

gulp.task('git-push', ['git-commit'], function(){
  return run('git push origin gh-pages', git_opts).exec();
});

gulp.task('default', ['build', 'clean', 'copy', 'git-push'], function(){});
