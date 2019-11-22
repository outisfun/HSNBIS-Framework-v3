# Layout: Chapter

Preview here: https://interactive-development.hsnb.io/hs-interactive-story-framework/chapter.html

```
./modules/layouts/chapter
  - template.hbs  // markup
  - style.scss // styles
  - script.js // main constructor
  - *.scss // css for the different styles
```

## Adding to a page:

The chapter layout accepts a few custom data attributes that determine its behavior.

### Adding to the .yml file:
```
customLayoutId:
  layoutType: CHAPTER
  layoutData:
    colorScheme: dark
    chapterStyle: ralph-lauren // other options: ellie, black, mercedes
    chapterBackground: hsnb12
    chapterTitle: "Et suus vos. Nescio quis, qui est bonus usus liberi ad Isai?"

  layoutContent:
    ... // add elements like you would to any other layout.
```
To add a new style, add a stylename.scss file in ./modules/layouts/chapter, and import it in ./modules/layout/chapter/style.scss.
To see how the others work, check out ralph.scss or ellie.scss.

### Generated HTML output:
```
<div class = "isf-layout_chapter js--chapter style--ralph-lauren" id = "customLayoutId">
    <div class = "isf-layout_chapter__header js--chapter__header">
        <div class = "isf-layout_chapter__img">
            <div class = "isf-layout_chapter__mask">
                <div class = "isf-layout_chapter__background-img__wrapper">
                    <div class="isf-layout_chapter__background-img" style="background-image: url('assets/hsnb12.jpg')">
                    </div>
                </div>
            </div>
        </div>
        <div class = "isf-layout_chapter__title">
            <div class = "isf-container">
                <h1>Et suus vos. Nescio quis, qui est bonus usus liberi ad Isai?</h1>
            </div>
        </div>
    </div>

    <div class = "isf-layout_chapter__content js--chapter__content js--content">
        <div class = "isf-container-fluid">
          // the elements you added.
        </div>
    </div>
</div>
```

