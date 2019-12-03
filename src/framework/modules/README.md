# HS ISF Modules


## Introduction

The framework is based on modules, which are added to Prismic as custom slices. "Module" in that sense refers to an element that has a template, to which custom data is passed, and styles are applied. For example, a gallery module would require the URLs of the gallery images, and a few additional settings like gallery type ('horizontal', 'scroller', etc.) which are selected in Prismic.

The modules are three main types: layouts, elements, navigation, and effects (TO DO). They are included in the framework and you don't need to include anything additional to make them work.

### Elements

Elements are the simplest building blocks of a story: text block, quote, image (or images), gallery, video, or a CTA button. Most of them don't include custom scripts (gallery does), and only include two files: *template.hbs* and *style.scss*.

### Layouts

Layouts refers to containers for smaller elements. A Simple layout, for example, provides a blank container with limited width with either light or dark color scheme. (provide links and preview).

### Navigation

Navigation modules are common for the entire story and are not limited to a layout. Those could, for example, be the tabs for internal navigation, or a progress bar.

### Effects (IN DEVELOPMENT)

Effects are currently limited to elements on page enter (for example fade in). In development, don't use for the time being.

### Premium Modules

Premium modules are modules reserved for Tier 2 stories that add some further value and customization. Don't use, we're still figuring out how to best include them.
