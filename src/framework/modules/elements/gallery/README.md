# Element: Gallery

Preview here: // add url

```
./modules/gallery
  - template.hbs  // markup
  - style.scss // styles
  - script.js // main constructor
  - gallery-horizontal.js // module for horizontal layout
```

!!! The gallery module is still in development. It works, but the mobile version needs adjustments. Use with caution, or don't use at all.

## Adding to a page:

### Adding to the .yml file:

```
layoutId:
  layoutType: ...
  layoutData: ...
  layoutContent:

    galleryElementId:
      elementType: gallery
      elementData:
        layout: horizontal
        images:
          -
            src: 14
          -
            src: 15
          -
            src: 1
          -
            src: 2
```

A note about layout: when finished, this will be the way to differentiate between different gallery types, but for the time being, it only supports horizontal.

### Generated HTML output:
```
<div class = "isf-el_gallery js--gallery" id = "basic__gallery" data-layout = "horizontal">
    <div class = "isf-el_gallery--inner js--gallery--inner">

        <div class = "isf-el_gallery__items js--gallery__items">
            <div class = "isf-el_image js--image isf-el_gallery__item js--gallery__item">
                <div class = "isf-el_image--inner js--item--inner">
                    <picture class = "isf-el_picture js--picture">
                        <source srcset="assets/14-lg.jpg"
                            media="(min-width: 768px)">
                        <img src="assets/14-md.jpg" />
                    </picture>
                </div>
            </div>
            <div class = "isf-el_image js--image isf-el_gallery__item js--gallery__item">
                <div class = "isf-el_image--inner js--item--inner">
                    <picture class = "isf-el_picture js--picture">
                        <source srcset="assets/15-lg.jpg"
                            media="(min-width: 768px)">
                        <img src="assets/15-md.jpg" />
                    </picture>
                </div>
            </div>
            <div class = "isf-el_image js--image isf-el_gallery__item js--gallery__item">
                <div class = "isf-el_image--inner js--item--inner">
                    <picture class = "isf-el_picture js--picture">
                        <source srcset="assets/1-lg.jpg"
                            media="(min-width: 768px)">
                        <img src="assets/1-md.jpg" />
                    </picture>
                </div>
            </div>
            <div class = "isf-el_image js--image isf-el_gallery__item js--gallery__item">
                <div class = "isf-el_image--inner js--item--inner">
                    <picture class = "isf-el_picture js--picture">
                        <source srcset="assets/2-lg.jpg"
                            media="(min-width: 768px)">
                        <img src="assets/2-md.jpg" />
                    </picture>
                </div>
            </div>
        </div>

    </div>
</div
```

