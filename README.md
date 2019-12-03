# HS Interactive Story Framework V3 (+ Prismic)

A framework to speed up development of Tier 3 Interactive Stories for Highsnobiety.


## Overview

Version 3 of the framework enables editors to dynamically add, remove or edit content (copy and images) through Prismic.
It's still somewhat beta, and major differences with the previous setup, as well as current questions and developments in progress will be outlined below.

Each story consists of two components:
- An interactive story post in Prismic, which has a unique ID and provides a JSON with all the content;
- Scripts and styles, as usual.

*The difference is that while in development/client preview mode, the markup is generated dynamically with the scripts, so the developer doesn't need to be involved. When the page goes live, it is important that the markup is added as the regular HTML to avoid any risks.*

**IMPORTANT**
In this version, developers are supposed to have very limited participation in the story build process. Even though we're in beta, it's important to let editors try out building and editing stories with the framework, so the developer should only be included if/when:
- The initial build files are setup and uploaded to Google Drive (See Creating a Story: Development / Client preview mode);
- The story goes live (See Creating a Story: Pushing the Story live);
- The editor / creative needs guidance which is not described in the HSISF for Editors documentation (link);
- There is a bug with a module or a story build script;
- A new module is required (please coordinate with Harry, Shaun and/or me).


## Getting Started

Clone & install dependencies & grunt:
```
$ npm install
$ npm install -g grunt-cli
```

Access our test Prismic account here: https://hsnbsttest.prismic.io/
user: katerina.vaseva@highsnobiety.com
pass: (Ask me :))


## Creating a story

### Development / Client preview mode

I. Create a new interactive story post in Prismic

Go to https://hsnbsttest.prismic.io/documents/working/ and click on "Create New", which will take you to the visual editor.
Add a title, press **Save** and then **Publish**.

Now you need the story's unique ID, which you will find in the story URL:
https://hsnbsttest.prismic.io/documents~b=working&c=published&l=en-gb/**XeZayBEAAI8DRhu**-*XeZayBEAAI8DRhu
**The first part of the unique string in the end of the URL before the * is your Prismic ID**.
In this case, that's **XeZayBEAAI8DRhu**.
It may or may not differ from the second one, but that's what you need.

// reference to ISF for Editors and how to add modules and elements from Prismic

II. Generate scripts and styles

1. Create a story, as usual:
```
$ grunt init-story --story=YYYY-MM-projectName
```

2. Go to YYYY-MM-projectName/build/scripts.js and add the PrismicId you got in the previous step. This allows the story to pull the correct JSON from Prismic.
```
const prismicDocumentId = 'XeZayBEAAI8DRhu';
```

For now we're using Prismic, so the utility script just transforms Prismic-style JSON into ISF-style object, but if in future we switch to another CMS, this is the utility that needs to be replaced:
```
const ISFDataConverter = require('utilities/prismic-to-isf.js');
```

3. Create a Development / Client preview folder in Google cloud, for example: https://interactive-development.hsnb.io/2019-02-vans-icysot, and upload index, scripts, and styles there. Your story is ready to preview!


### Pushing the Story live

As we're still in testing mode for Version 3, we publish stories in about the same way we did with Version 2 to avoid risks and surprises. However, it is strongly encouraged to transition to live only *after* all editorial and client changes have been made in preview / development, as the development build includes Highsnob elements like the header, which help clients imagine better how the story would look on the site.

Moreover, to properly test how to make the build as easy and intuitive for editors and creatives as possible, it is important to include developers in the process *only* if there's a bug or another problem, and not when regular content changes are made.

So, when all is said and done, upload the scripts and styles to the hs-interactive-stories repo, and add the generated HTML to Wordpress.

TO DO: Write a task that extracts the HTML into a standalone file to make it easier.


## Framework modules: what are they, and how to add or edit them.

The framework is based on modules, which are added to Prismic as custom slices. "Module" in that sense refers to an element that has a template, to which custom data is passed, and styles are applied. For example, a gallery module would require the URLs of the gallery images, and a few additional settings like gallery type ('horizontal', 'scroller', etc.) which are selected in Prismic.

See more here: // link to modules readme


## Common errors and troubles

### Forgot to add layout (layout-related errors) -> TO DO

### Cannot find module / template -> TO DO

### Problems with prismic-to-isf.js -> TO DO


