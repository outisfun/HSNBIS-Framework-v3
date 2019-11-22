# Layout: Split Sticky

Preview here: https://interactive-development.hsnb.io/hs-interactive-story-framework/splitsticky.html

```
./modules/layouts/splitsticky
  - template.hbs  // markup
  - style.scss // styles
  - script.js // main constructor
```

## Adding to a page:

The split sticky layout accepts a few custom data attributes that determine its behavior.
You can specify position (left or right) if you want to have alternating split stickys, and unlike the other elements, you should add the filenames
for XS and LG images separately, like in the example below.

That was necessary, because we had to use GIFs for one of the stories, and they can't be processed by the responsive images task. It's not ideal, and
maybe we'll change it in the future.

### Adding to the .yml file:
```
nbeu__splitsticky1:
  layoutType: SPLITSTICKY
  layoutData:
    stickyPosition: left
    stickyImage: gif/nb_1.gif
    stickyImageXS: gif/nb_1_xs.gif
  layoutContent:
    ...
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

