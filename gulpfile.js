const {src,dest,watch,series}=require('gulp')
const sass=require('gulp-sass')(require('sass'))
const purgecss= require('gulp-purgecss') //npm i gulp-purgecss --save -dev // it will compile only classes used already in html files which will make css file smaller and better 


function buildStyles () {

return src('compiledSass/**/*.scss') //every sub folders also inside sass folder **
       .pipe(sass({ outputStyle: 'compressed' }))
       .pipe(purgecss({ content: ['*.html'] })) 
       .pipe(dest('css'))


}

function watchTask (){
watch(['compiledSass/**/*.scss','*/.html'],buildStyles) //watch html files for purgecss
}

exports.default=series(buildStyles,watchTask)