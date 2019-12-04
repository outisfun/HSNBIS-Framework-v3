# Premium ISF Module: Progress Bar

Preview here: (add for all of them)

The XPR Progress bar is a simple progress bar module that can be attached to either the entire story, or a section with a unique ID (for example, an endlessly long chapter, in order to give an indication that it will all eventually end :)).

## Adding to a page

Require module in build/scripts.js:
```
const XPRProgressBar = require('premium/progressbar/script.js');
```

And init with an optional opts object:
```
var pb = new XPRProgressBar();
```

If you don't provide opts, the script resorts to the default options, which look like this:
```
const _defaultOpts = {
  container: storyContainer,  // ("#isf-interactive-story")
  progressBarStyles: {
    position: 'fixed',
    top: hsnbHeaderHeight, // a var - refactor
    left: 0,
    width: '100%',
    height: '3px',
    backgroundColor: 'transparent',
    zIndex: 20
  },
  progressBarIndicatorStyles: {
    position: 'absolute',
    width: '0%',
    height: '100%',
    backgroundColor: 'black'
  }
};
```

Any of those can be overwritten. If you pass another container (for example, you want the progress bar to work only on a scene), it will create a ScrollMagic scene tied to this section and the progress bar will track the progress inside the section only.
If you don't pass a container, it will use the default story container.

## Editing

There's just one script.js file, it's pretty straightforward ;).
