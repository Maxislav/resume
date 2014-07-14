module.exports = function (grunt) {

    // Задачи
    grunt.initConfig({
        // Склеиваем
        concat: {
            main: {
                src: [

                    'lib/angular/angular.min.js',


                    'lib/angular/angular-route.min.js',
                    'lib/angular/angular-animate.js',
                    'lib/angular/angular-sanitize.js',
                    'lib/jQuery/jquery-1.11.1.js',
                    'lib/jQuery/jquery.scrollNav.js',
                    'js/app.js',
                    'js/controllers.js'
                ],
                dest: 'build/scripts.js'
            }
        },
// сжимаем
        uglify: {
            options: {
                sourceMap: true,
                mangle: false,
                exportAll: true
            },
            main: {
                files: {
                    // Результат задачи concat
                    'build/scripts.min.js': '<%= concat.main.dest %>'
                }
            }
        },

        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2,
                    sourceMap: false
                    /*sourceMap: true,
                     sourceMapFilename: 'css/css.min.css.map',
                     sourceMapRootpath: '../'*/
                },
                files: {
                    //  "module/dtp/dtp.css": "module/dtp/dtp.less",
                    "build/index.css": [
                        "css/main.less",
                        'css/animation.css',
                        "lib/jQuery/orbit-1.3.0.css"

                    ]

                }
            }
        },

        watch: {
            styles: {
                // Which files to watch (all .less files recursively in the less directory)
                files: [
                    "css/main.less",
                    'css/animation.css'
                ],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            js: {
                files: [
                    'lib/angular/angular.min.js',
                    'lib/angular/angular-route.min.js',
                    'lib/angular/angular-animate.js',
                    'lib/angular/angular-sanitize.js',
                    'lib/jQuery/jquery-1.11.0.min.js',
                    'js/app.js',
                    'js/controllers.js'
                ],
                tasks: ['concat','uglify'],
                options: {
                    nospawn: true
                }
            }
        }

    });

    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-contrib-concat');//
    grunt.loadNpmTasks('grunt-contrib-uglify');//
    grunt.loadNpmTasks('grunt-contrib-less');//
    grunt.loadNpmTasks('grunt-contrib-watch');//

    // Задача по умолчанию
    grunt.registerTask('default', ['concat','uglify','less', 'watch' ]);
    //grunt.registerTask('default', ['uglify' ]);

};