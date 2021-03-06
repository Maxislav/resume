module.exports = function (grunt) {
    var dateFormat = require('./dateFormat');
    var uglyFiles = [
        'lib/leaflet/leaflet.js',
        'js/app.js',
        'js/controllers.js',
        'module/contact/contact.js',
        'js/dirrectiveSkill.js'
    ];


    var concatFiles = [
        'lib/angular/angular.min.js',
        'lib/angular/angular-cookies.min.js',
        'lib/angular/angular-route.min.js',
        'lib/angular/angular-animate.min.js',
        'lib/angular/angular-sanitize.min.js',
        'lib/jQuery/jquery-1.11.0.min.js',
        'lib/jQuery/jquery.scrollNav.min.js',
        'build/temp-uglify.min.js'
    ];


    grunt.initConfig({
        concat: {

            options: {
                separator: ';\n\n'
            },
            dist: {
                src: concatFiles,
                dest: 'build/scripts.min.js'
            }

        },
        uglify: {
            dev: {
                options: {
                    sourceMap: true,
                    mangle: false,
                    exportAll: true
                },
                files: {
                    'build/temp-uglify.min.js': uglyFiles
                }
            },
            prod: {
                options: {
                    sourceMap: false,
                    mangle: false,
                    exportAll: true
                },
                files: {
                    'build/temp-uglify.min.js': uglyFiles
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
                    "build/index.css": [
                        "css/main.less",
                        'css/animation.css',
                        "lib/jQuery/orbit-1.3.0.css",
                        "lib/leaflet/leaflet.css"
                    ]
                }
            }
        },
        'string-replace': {
            index: {
                files: {
                    'index.html': 'index.html'
                },
                options: {
                    replacements: [
                        {
                            pattern: /build\/scripts.min.js\?v=[^"]+/,
                            replacement: function () {
                                return 'build/scripts.min.js?v=' + dateProd('-')
                            }
                        },
                        {
                            pattern: /build\/index.css\?v=[^"]+/,
                            replacement: function () {
                                return 'build/index.css?v=' + dateProd('-')
                            }
                        }
                    ]
                }
            },
            ppd: {
                files: {
                    'lang/': [
                        'lang/ppd.ru.json',
                        'lang/ppd.en.json'
                    ]

                },
                options: {
                    replacements: [
                        {

                            pattern: /"(releaseDate":\s")[^"]+/,
                            replacement: function () {
                                return "\"releaseDate\": \"" + dateProd()
                            }
                        }
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
                files: uglyFiles,
                tasks: ['uglify:dev'],
                options: {
                    nospawn: true
                }
            }
        }

    });

    function dateProd(string) {
        string = string || ' '
        var date = dateFormat.format.date(new Date(), 'yyyy.MM.dd' + string + 'HH:mm:ss')
        return date;
    }


    grunt.loadNpmTasks('grunt-contrib-concat');//
    grunt.loadNpmTasks('grunt-contrib-uglify');//
    grunt.loadNpmTasks('grunt-contrib-less');//
    grunt.loadNpmTasks('grunt-contrib-watch');//
    grunt.loadNpmTasks('grunt-string-replace');


    grunt.registerTask('default', ['uglify:dev', 'less', 'watch' ]);
    grunt.registerTask('prod', ['uglify:prod', 'concat', 'less', 'string-replace']);
};