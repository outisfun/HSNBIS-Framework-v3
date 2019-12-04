# HS Interactive Story Framework V3

A framework to speed up development of Tier 3 Interactive Stories for Highsnobiety.
Version 3 allows editors to add / edit content through Prismic. It's beta!


## Overview

The current framework setup uses Prismic to pull content (copy and images) and build the story.

Thus, each story consists of two components:
- An interactive story post in Prismic, which has a unique ID and provides a JSON with all the content;
- Scripts and styles, as usual.

**IMPORTANT**

Developers are supposed to have very limited participation in the story build process.
It's important to let editors try out building and editing stories with the framework, so the developer should only be included if/when:

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

### Building the test story

To get familiar with our current setup, you can use an [existing story](https://hsnbsttest.prismic.io/documents~b=working&c=published&l=en-gb/XeZayBEAAI8DRhu-*XedWFxEAAIUYSnmO/) as an example.

Please refer to the following section (Creating a story) to reproduce the story build on your local setup, and skip step I.
The PrismicId you need is **XeZayBEAAI8DRhu-**.


## Creating a story

### Development / Client preview mode

I. Create a new interactive story post in Prismic (or use the test one)

Go to [Prismic Documents](https://hsnbsttest.prismic.io/documents/working/) and click on "Create New", which will take you to the visual editor.
Add a title, press **Save** and then **Publish**.

Now you need the story's unique ID, which you will find in the story URL, for example:
https://hsnbsttest.prismic.io/documents~b=working&c=published&l=en-gb/**XeZayBEAAI8DRhu**-*XeZayBEAAI8DRhu
**The first part of the unique string in the end of the URL before the * is your Prismic ID**.
In this case, that's **XeZayBEAAI8DRhu-**. It may or may not differ from the second one, but that's what you need.

To learn more about building the story inside Prismic, please refer to [HSISF for Editors](https://github.com/outisfun/hsisf_v3/wiki).

**IMPORTANT**

To see updates in your story build, you need to press both **Save** and **Publish** every time you make a change.


II. Generate scripts and styles

1. Create a story:
```
$ grunt init-story --story=YYYY-MM-projectName
```
The task generates a build/ folder with scripts.js and styles.scss, and a dist/folder with index.html, scripts.js, styles.css.
View story at LOCALPATH/hsisf_v3/stories/YYYY-MM-projectName/dist/index.html


2. Go to YYYY-MM-projectName/build/scripts.js and add the PrismicId you got in the previous step.
This allows the story to pull the correct JSON from Prismic.
```
const prismicDocumentId = 'XeZayBEAAI8DRhu';
```

For now we're using Prismic, so the utility script just transforms Prismic-style JSON into ISF-style object, but if in future we switch to another CMS, this is the utility that needs to be replaced:
```
const ISFDataConverter = require('utilities/prismic-to-isf.js');
```

3. Create a Development / Client preview folder in Google Cloud, for example: https://interactive-development.hsnb.io/YYYY-MM-storyName, and upload index, scripts, and styles there. Your story is ready to preview at https://interactive-development.hsnb.io/YYYY-MM-storyName/index.html.

If you don't have access to Google Cloud, just ask!


4. Give access to editors and creatives to start the build / edit process.

Make sure editors have the correct Prismic link to the current story, as well as the Google Cloud preview link. The preview (live and local) is updated automatically everytime the story is saved and published in Prismic, so you don't need to reupload anything.


### Pushing the Story live

As we're still testing Version 3, stories are published in the same way as in Version 2 to avoid risks and surprises.
However, it is strongly encouraged to move the story to the live site only **after** all editorial and client changes have been made in preview / development. For this reason, the preview story on hsnb.io includes elements like the Highsnob header to make previews more realistic to clients and to avoid the need to transition to live before the story is finished. Moreover, to properly test how to make the build as easy and intuitive for editors and creatives as possible, it is important to include developers in the process *only* if there's a bug or another problem, and not when regular content changes are made.

So, when all is said and done, upload the scripts and styles to the hs-interactive-stories repo, and add the generated HTML to Wordpress.
(That should probably be its own task, or generated file).



## How does the framework work?

It might be helpful to get an overview of the build process, in case you need to debug something. It goes like this:

1. The framework uses the story Id to make a request to prismic for the story JSON;

2. The Prismic data is converted ISF-style via framework/utilities/prismic-to-isf.js (and that's where you need to add another utility in case the CMS changes);

The converted data is an object looking like that:
```
{

  layouts: {
    layout_simple_0: {
      data: {
        colorScheme: "light",
        layoutId: "layout_simple_0"
      }
      layoutContent: {
        **element_text_0: {
          type: "text",
          data: {
            paragraph: "This is a test story!", elementId: "element_text_0"}
            type: "text"
          }
        },
        element_images_1: {type: "images", data: {…}}
        element_images_3: {type: "images", data: {…}}
        element_quote_2: {type: "quote", data: {…}}
      },
    },
    layout_simple_1: { //same },
    layout_chapter_2: { // etc },
  },

  nav: {
    tabs_0: {
      type: 'tabs',
      data: {
        tabs: [
          {tabLabel: "Label One", tabTarget: "layout_simple_0"},
          {tabLabel: "Label Two", tabTarget: "layout_simple_1"}
        ]
      }
    }, // etc.
  },

  story: {
    image: "https://images.prismic.io/hsnbsttest/50cdff3b-bfca-40b1-9560-1140974883fb_img_9864.JPG?auto=compress,format"
    title: "Test"
  }
}
```

The object contains information about **what modules the story uses** and **what data is passed to them**. Layouts, for example, refers to the story content, as smaller modules like text, images, quotes, etc., are wrapped in layouts (or containers).

For example, have a look at layout_simple_0. The object contains two properties: data (including info about the style and the build of the container itself, like color scheme or background image and heading for more complex layouts like Chapter), and layoutContent, which contains all the modules that go inside that section.
Smaller modules, in turn, also include a data object which is used to build the module.

3. The data is passed to ISFStory, which uses it to build navigation, layouts, and elements of the story (see framework/common/js/isf-story.js).

ISFStory passes each module to ISFModuleBuilder (framework/common/js/isf-module-builder.js) which, in turn:

3.1. Accesses ISFDATA to check if the module exists (is defined correctly) and if it has a constructor (e.g. uses JavaScript), and if so...
3.2. Creates a new module (basic module without JS or the specific one), which it returns to ISF story.

Creating a module means compiling the module markup with Handlebars (see framework/common/js/isf-module.js) and, if the module uses JavaScript, using a custom class for a constructor (for example ISFModule__Chapter extends ISFModule by adding behavior specific to the Chapter layout).

4. ISFStory builds each layout, and adds content inside it; and so on.

After the story is built, ISFStory inits the individual modules that use JavaScript. It's important to do this *after* the markup is built, because some scripts require element heights or widths to function correctly.

See more about framework modules here.

Preview example story here.



## TO DOs (for devs):

⋅⋅* Write a task that extracts the HTML into a standalone file to make it easier;
⋅⋅* Add common errors and problems (test with another developer running the setup);




