module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'src/js/index.js',
        dest: 'dist/js/index.min.js'
      }
    },
    htmlmin:{
      dist:{
        options:{
          removeComments:true,
          collapseWhitespace :true 
        },
        files:{
          'dist/index.html':'src/index.html'
        }
      }
    },
    cssmin: {
      target: {
        files: [{
         'dist/css/index.min.css':'src/css/index.css'
        }]
      }
    },
    imagemin: {  
        /* 压缩图片大小 */  
        dist: {  
            options: {  
                optimizationLevel: 3 //定义 PNG 图片优化水平  
            },  
            files: [  
                   {  
                expand: true,  
                cwd: 'src/img',  // 路径
                src: ['**/*.{png,jpg,jpeg}'], // 优化 img 目录下所有 png/jpg/jpeg 图片  
                dest: 'images/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示  
                }  
                ]  
            }  
        },
        watch: {  
          copy: {  
              files: '<%=config.app%>/**/*.html',  
              tasks: ['copy:dest']  
          }  
        }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
 /* grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');*/
  // 默认被执行的任务列表。
 
  grunt.registerTask('default', ['cssmin','uglify','htmlmin']);
};