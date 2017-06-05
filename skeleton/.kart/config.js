{
	src: {
		root:  "./src",
		html:  "html/",
		sass:  "sass/style.scss",
		temp:  "template/",
		js:    "js/",
		lib:   "lib/",
		lnkt:  "links.htm",
		scrt:  "scripts.htm"
	},
	dist: {
		root:  "./dist",
		js:    "js/",
        css:   "css/",
        clib:  "css/",
        jlib:  "js/lib/",
        html:  "index.html",
        style: "css/style.css",
        app:   "js/app.js",
        temp:  "js/templates.js",
        seplc: "css/",
        seplj: "js/lib/"
	},
	envs: {
		"debug-hard": {
			css: {
				lib: {
					cat: false,
					min: false,
					smp: false
				},
				app: {
					min: false,
					smp: false
				}
			},
			js: {
				lib: {
					cat: false,
					min: false,
					smp: false,
				},
				app: {
					one: false,
					min: false,
					smp: false
				}
			}
		}
	}
}