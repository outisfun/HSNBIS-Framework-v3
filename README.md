# HS Interactive Story Framework V3 (+ Prismic)

A framework to speed up development of Tier 3 Interactive Stories for Highsnobiety.


## Overview

Version 3 of the framework enables editors to dynamically add, remove or edit content (copy and images) through Prismic.
It's still somewhat beta, and major differences with the previous setup, as well as current questions and developments in progress will be outlined below.

Each story consists of two components:
- An interactive story post in Prismic, which has a unique ID and provides a JSON with all the content;
- Scripts and styles, as usual.

*The difference is that while in development/client preview mode, the markup is generated dynamically with the scripts, so the developer doesn't need to be involved. When the page goes live, it is important that the markup is added as the regular HTML to avoid any risks.*


## Getting Started

Clone & install dependencies & grunt:
```
$ npm install
$ npm install -g grunt-cli
```

Access our test Prismic account here:
https://hsnbsttest.prismic.io/
user: katerina.vaseva@highsnobiety.com
pass: (Ask me :)


## Creating a story

### Development / Client preview mode

I. Create a new interactive story post in Prismic

Go to https://hsnbsttest.prismic.io/documents/working/ and click on "Create New", which will take you to the visual editor.
Add a title, press **Save** and then **Publish**.

Now you need the story's unique ID, which you will find in the story URL:
https://hsnbsttest.prismic.io/documents~b=working&c=published&l=en-gb/**XeZayBEAAI8DRhu**-*XeZayBEAAI8DRhu
The first part of the unique string in the end of the URL is your Prismic ID. In this case, that's **XeZayBEAAI8DRhu**.
It may or may not differ from the second one, but that's what you need.


II. Generate scripts and styles

Create a story, as usual:
```
$ grunt init-story --story=YYYY-MM-projectName
```

Go to YYYY-MM-projectName/build/scripts.js and add the PrismicId you got in the previous step. This allows the story to pull the correct JSON from Prismic.
```
const prismicDocumentId = 'XeZayBEAAI8DRhu';
```

