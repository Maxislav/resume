module.exports = function (grunt) {

    // Задачи
    var uglyFiles = [
        'lib/angular/angular.min.js',
        'lib/angular/angular-route.min.js',
        'lib/angular/angular-animate.js',
        'lib/angular/angular-sanitize.js',
        'lib/jQuery/jquery-1.11.0.min.js',
        'lib/jQuery/jquery.scrollNav.min.js',
        'js/app.js',
        'js/controllers.js'
    ];

    grunt.initConfig({
        uglify: {
            dev: {
                options: {
                    sourceMap: true,
                    mangle: false,
                    exportAll: true
                },
                files: {
                    'build/scripts.min.js': uglyFiles
                }
            },
            prod:{
                options: {
                    sourceMap: false,
                    mangle: false,
                    exportAll: true
                },
                files: {
                    'build/scripts.min.js': uglyFiles
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
        'string-replace':{
            index: {
                files: {
                    'index.html': 'index.html'
                },
                options: {
                    replacements: [ {
                        pattern: /build\/scripts.min.js\?v=[^"]+/,
                        replacement: function(){
                            return 'build/scripts.min.js?v='+dateProd()
                        }
                    }]
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
                tasks: ['uglify:dev'],
                options: {
                    nospawn: true
                }
            }
        }

    });

    function dateProd(){
        var d = new Date()
        return d.getFullYear()+'.'+ (d.getMonth()+1)+'.'+ d.getDate()+'-'+
        d.getHours()+':'+ d.getMinutes()+':'+ d.getSeconds();
    }

    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-contrib-concat');//
    grunt.loadNpmTasks('grunt-contrib-uglify');//
    grunt.loadNpmTasks('grunt-contrib-less');//
    grunt.loadNpmTasks('grunt-contrib-watch');//
    grunt.loadNpmTasks('grunt-string-replace');

    // Задача по умолчанию
    grunt.registerTask('default', ['uglify:dev','less', 'watch' ]);
    grunt.registerTask('prod', ['uglify:prod','less','string-replace']);
    //grunt.registerTask('default', ['uglify' ]);

};