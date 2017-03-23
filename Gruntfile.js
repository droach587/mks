/*
 * Generated on 2015-09-23
 * generator-rokkan v0.5.0
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2015 Rokkan Tech
 * Licensed under the MIT license.
 */
'use strict';
// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        config: {
            src: 'source',
            build: 'build',
            name: 'Rokkan Front End'
        },
        /**
         * Simple Assemble Task
         *
         *
         */
        assemble: {
            options: {
                layout: 'layout.hbs',
                layoutdir: '<%= config.src %>/views/layouts/',
                partials: '<%= config.src %>/views/partials/**/*.hbs',
                assets: '<%= config.build %>/assets'
            },
            pages: {
                files: [{
                    cwd: '<%= config.src %>/views/pages/',
                    dest: './<%= config.build %>/',
                    expand: true,
                    src: ['**/*.hbs']
                }]
            }
        },
        /**
         * Compass settings, watches with grunt command
         *
         *
         */
        compass: {
            dist: {
                options: {
                    sassDir: '<%= config.src %>/assets/scss',
                    cssDir: '<%= config.build %>/assets/css',
                    outputStyle: 'compressed',
                    imagesDir: "assets/img",
                    imagesPath: "<%= config.build %>/assets/img",
                    generatedImagesDir: 'img',
                    fontsDir: "assets/fonts",
                    fontsPath: "<%= config.build %>/assets/fonts",
                    require: ['breakpoint', 'sass-globbing'],
                    sourcemap: true
                }
            }
        },
        /**
         * Bower Concat
         *
         *
         */
        bower_concat: {
            app: {
                dest: '<%= config.src %>/assets/js/bower.js',
                exclude: ['modernizr', 'require'],
                bowerOptions: {
                    relative: false
                },
                dependencies: {
                    'enquire': 'jquery'
                },
                mainFiles: {
                    'require': 'build/require.js'
                },
                cssDest: '/assets/scss/vendor/bower'
            }
        },
        /**
         * Concat all JS
         *
         *
         */
        concat: {
            dist: {
                src: ['<%= config.src %>/assets/js/bower.js', '<%= config.src %>/assets/js/vendor-build/*.js', '<%= config.src %>/assets/js/modules/*.js', '<%= config.src %>/assets/js/app.js', '!<%= config.src %>/assets/js/vendor-non-build/*.js'],
                dest: '<%= config.src %>/assets/js/to-build/app.js',
            }
        },
        /**
         * Uglify Task
         *
         *
         */
        uglify: {
            build: {
                src: ['<%= config.src %>/assets/js/to-build/app.js'],
                dest: '<%= config.build %>/assets/js/build/app.min.js',
                options: {
                    banner: '/* <%= config.name %> Build Date: ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
                }
            }
        },
        /**
         * Sample ImageMin
         *
         *
         */
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '<%= config.src %>/assets/img/source',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: '<%= config.build %>/assets/img/',
                    optimizationLevel: 5
                }],
                png: {
                    options: {
                        optimizationLevel: 7
                    }
                }
            }
        },
        modernizr: {
            dist: {
                "devFile": "<%= config.src %>/assets/components/modernizr/src/Modernizr.js",
                "outputFile": "<%= config.build %>/assets/js/vendor-non-build/modernizr-custom.js",
                "extra": {
                    "shiv": true,
                    "printshiv": false,
                    "load": true,
                    "mq": true,
                    "cssclasses": true,
                    "enableClasses": true
                },
                "extensibility": {
                    "addtest": true,
                    "prefixed": true,
                    "teststyles": true,
                    "testprops": true,
                    "testallprops": true,
                    "hasevents": true,
                    "prefixes": true,
                    "domprefixes": true,
                    "cssclassprefix": ""
                },
                "uglify": true,
                "tests": [
                    'canvastext','csstransforms3d','flexbox','cssgradients','opacity','indexeddb','backgroundsize','borderimage','borderradius','boxshadow','cssanimations','csscolumns','cssreflections','csstransitions','flexbox-legacy','prefixed','csstransforms','mq','hashchange','draganddrop','generatedcontent','svg','inlinesvg','smil','svgclippaths','input','inputtypes','touch','fontface','testbundle','respond','websockets','a_download','audio_audiodata_api','audio_webaudio_api','battery_api','battery_level','canvas_todataurl_type','contenteditable','contextmenu','cookies','cors','css_backgroundcliptext','css_backgroundrepeat','css_backgroundsizecover','css_boxsizing','css_cubicbezierrange','css_displayrunin','css_displaytable','css_filters','css_hyphens','css_mask','css_mediaqueries','css_overflow_scrolling','css_pointerevents','css_remunit','css_resize','css_scrollbars','css_shapes','css_userselect','custom_protocol_handler','dataview_api','dom_classlist','dom_createElement_attrs','dom_dataset','dom_microdata','elem_datalist','elem_details','elem_output','elem_progress_meter','elem_ruby','elem_time','elem_track','emoji','es5_strictmode','event_deviceorientation_motion','file_api','file_filesystem','forms_placeholder','forms_speechinput','forms_validation','fullscreen_api','gamepad','getusermedia','ie8compat','img_apng','img_webp','json','lists_reversed','localstorage','mathml','network_connection','network_eventsource','notification','performance','quota_management_api','requestanimationframe','sessionstorage','script_async','script_defer','unicode','url_data_uri','userdata','web_intents','webgl_extensions','websockets_binary','window_framed','workers_blobworkers','workers_dataworkers','workers_sharedworkers','blob-constructor','css-backgroundcliptext','css-backgroundposition-fourvalues','css-backgroundposition-xy','css-calc','css-lastchild','css-regions','css-subpixelfont','network-xhr2','style-scoped','svg-filters','forms-fileinput','vibrate','vibration','contentsecuritypolicy','css-objectfit','css-positionsticky','css-supports','css-vhunit','css-vmaxunit','css-vminunit','css-vwunit','forms-formattribute','iframe-sandbox','iframe-seamless','iframe-srcdoc','pointerlock-api'
                ],
                "matchCommunityTests": false
            }
        },
        copy: {
            main: {
                files: [
                // includes files within path and its sub-directories
                {
                    expand: true,
                    cwd: '<%= config.src %>/assets/',
                    src: ['img/**', 'js/vendor-non-build/**', 'fonts/**', 'media/**', '!Gemfile', '!js/vendor-build', '!.sass-cache', '!img/source/**',  '!readme.md'],
                    filter: 'isFile',
                    dest: '<%= config.build %>/assets/'
                }],
            },
        },
        'string-replace': {
            dist: {
                files: {
                    '<%= config.build %>/': '<%= config.build %>/**/*.html'
                },
                options: {
                    replacements: [{
                        pattern: /(<@versionstamp>)/ig,
                        replacement: '<%= grunt.template.today("mmddyyyyhMMss") %>'
                    }]
                }
            }
        },
        /**
         * Notify Task
         *
         *
         */
        notify: {
            test: {
                options: {
                    title: '<%= config.name %>',
                    message: 'Initial build task initiated, commencing initial build.'
                }
            },
            testOk: {
                options: {
                    title: '<%= config.name %>',
                    message: 'Initial build task successful! Documentation available at /docs !'
                }
            },
            error: {
                options: {
                    title: '<%= config.name %>',
                    // optional
                    message: 'A build error has occured, please reference your source code.',
                    //required
                }
            }
        },
        /**
         * Documentation via Hologram
         *
         *
         */
        hologram: {
            generate: {
                options: {
                    config: 'config.yml'
                }
            }
        },
        // Before generating any new files,
        // remove any previously-created files.
        clean: ['<%= config.build %>/**/*.{html,xml}']
    });
    //Register Tasks
    //Default Set
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('assemble');
    //Additional
    grunt.loadNpmTasks("grunt-modernizr");
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-hologram');
    grunt.loadNpmTasks('grunt-notify');

    //Define Grunt Tasks
    grunt.registerTask('default', ['notify:test','clean', 'compass', 'newer:assemble', 'imagemin', 'copy', 'bower_concat:app', 'concat', 'uglify', 'modernizr', 'string-replace', 'notify:testOk']);
};
