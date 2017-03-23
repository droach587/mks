##Front End Documentation - Fresh Build - Sample Document##

#SAMPLE - SAMPLE#

**Last updated 9.23.15**

**Overview:**

This is your project's overview. List all relevant project background and details here. Be sure to include important project specifications, contributors, and information related to this build. 

**Requirements/Build Specification:**

[ This is where you list all of the project's tech ]

	•	Grunt
	•	Assemble
	•	SASS/Compass
	•	Breakpoint (http://breakpoint-sass.com/)
	•	jQuery
	•	Foundation 5 (responsive grid, alignment, visibility) 
	•	Bower (jQuery dependency, plugin dependencies)
	•	Enquire JS Media Queries (http://wicky.nillia.ms/enquire.js/)

**Installation / Tasks**

[ These are the installation tasks as user would need to run]

1. Run **NPM install** to install project dependencies and packages:`npm install`(requires npm and node).
2. Once NPM completes installation, run the default Grunt task to ensure the site properly builds `grunt build` or `grunt`. (*some systems may not locate the GRUNT CLI, to install this, simply install the GRUNT CLI through NPM with a `-g` flag, therefore making it a global directive.*)
3. From there, grunt will assemble the site into a /build folder. If the build executes withour error, you should be able to point your virtual host, or localhost to that folder (`/build`) for browser review.

This task, the default task, is the only build task provided. It also instantiate a **watch** and **notification** when the build is **complete**, so you **won’t need to run this every time** you wish to build. The only other task included within this build is the **[Hologram documentation task](#hologram)**, noted below.

**Project Specification:**

[ How to buiid the project and author it ]

This build is authored by way of Assemble and Handlebars templates.

([http://assemble.io](http://assemble.io)/) — ([http://handlebarsjs.com](http://handlebarsjs.com)/)

Source files, templates, styles and partials can be located in the `/source` folder.

**The primary construct, or anatomy of a page is as follows**:

	•	head.hbs 	<-Partial
	•	{{body}} 	<- index.hbs or template stored in the /pages directory
	•	foot.hbs 	<-Partial

**Directory Structure for /source:**

The `/source` directory is the main generative file directory for this project, the folder contains the following:

	•	/assets		: HTML, JS, CSS and IMAGE assets
	•	index.md	: index file for hologram markup
	•	/layouts	: all site layouts are stored here
	•	/pages		: all page layouts are store here, headless, footless
	•	/partials	: all partials are stored here
	•	readme.md	: default read me for this folder, ignore

**SASS/Compass:**

This build uses Compass on top of SASS to compile stylesheets. ([http://compass-style.org](http://compass-style.org)/)

**Note:** some systems may require ruby gem “compass” to be installed, simply enter `sudo gem install compass` within your command line to install SASS and Compass to your system. 

Class-naming and inheritance is based off of BEM (`block block__element block—modifier`) convention. Please follow this rule for future development.

Styles and components are broken out into site context and compartmentalized modularity. This is done to keep classes short and sweet, while improving time to debug issues and where their symptoms persist. 

**Primary style elements consist of:**

	•	/base		: base styles, global fonts, colors, sizes
	•	/modules	: all site modules
	•	/vendor		: vendor CSS

	•	/modules/container/		: all global omnipresent container elements (base level)
	•	/modules/content/		: all content based elements, specific, rich styles, thematic
	•	/modules/layout/		: all general mainstay layout objects: navigation, footer (specific)
	•	/modules/utilities/		: all global utilities and reusable classes

**Javascript:**

JS within this front end [sample] is relatively short and sweet. The JS application consists of a main.js file which includes all modules on a plugin-type instantiation. There is no formal JS framework in place other than using a rigid revealing module pattern to craft custom event types and plugins for each module of functionality.

Plugins are store by name in the `/modules` folder. Utilities and communication are provided through simple custom event triggers to and from modules.

Javascript is minified and compressed into a single app.js file on build.

**Bower:**

Bower is used to load various dependancies, by default, all of these deps. are merged on build to produce a single app.js file. Once you install a Bower dep. no other work is required, the build with automatically merge and compress a single file for immediate use.

**Vendor JS / Vendor Non Build:**

Some JS files that need to be called outside of a single file, within the `<head>` or otherwise can be added to the excluded `/vendor-non-build` folder for single use cased within the build. Refer to the `/build` path when referring to these files.

Additional JS files that cannot be included from Bower, can be added to the `/vendor-build` folder. These will be merged into a single JS file on watch or build. No additional work will be required therein once build detects a new file. 

### <a name="hologram"></a>
**Hologram Documentation:**

Documentation for this build is assembled through Hologram and Grunt. Documentation is present in CSS and Javascript and generated through inline css comments by way of a specific comment hook. To learn more visit: [http://trulia.github.io/hologram](http://trulia.github.io/hologram)/

To assemble documentation, simply run `grunt build-docs` in your command line, hologram will then assemble documentation in the preset order/fashion provided in: `config.yml` and `Gruntfile.js`. 

Documentation formating can be located from the link above as this markdown file cannot parse it's contents. Additionally, formatting is present within the .scss files located in this build.

**Any additional concerns can be directed to Rokkan Tech.** [Rokkan Tech USA / NY](mailto:TECH_RKN_TEAM_USA@rokkan.com)