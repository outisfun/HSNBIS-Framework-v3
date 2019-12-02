# Element: Images

Preview here: // add url

## Adding to a page:

The images element can contain anywhere from 1 to 4 images, depending on the layout, with or without captions.
So you would use it also in case you just want to add a single image.

### Adding to the .yml file:

```
layoutId:
  layoutType: ...
  layoutData: ...
  layoutContent:

    imagesElementId:
      elementType: images
      elementData:
        images:
          -
            src: https://interactive-development.hsnb.io/2019-08-ugg/image.jpg // use absolute paths to google cloud
            caption: Non solum autem illa, sed te tractantur in se trahens felis. // you can skip this
            effect: parallax // you can skip this
          -
            src: anotherpicture
```
If you don't need captions, just don't add them to the .yml file.
To do: a workaround, or an option for .png images.

### Generated HTML output:
```
<div class = "isf- isf-el_images" id = "imagesElementId">
  <div class = "isf-el_images__inner">

    <div class = "isf-el_image js--image" data-effect = "parallax">
      <picture class = "isf-el_picture js--picture">
        <source srcset="assets/14-lg.jpg"
            media="(min-width: 768px)">
        <img src="assets/14-xs.jpg" />
      </picture>
        <small class = "isf-el_caption">
          Non solum autem illa, sed te tractantur in se trahens felis.
        </small>
    </div>

    <div class = "isf-el_image js--image">
      <picture class = "isf-el_picture js--picture">
        <source srcset="https://interactive-development.hsnb.io/2019-08-ugg/image.jpg"
            media="(min-width: 768px)">
        <img src="https://interactive-development.hsnb.io/2019-08-ugg/image.jpg" />
      </picture>
    </div>

  </div>
</div>
```

### Effects

The images (and all elements) currently only support the parallax and fade-on-enter effect.
Parallax can work well with two images, where the portrait one is parallaxing on scroll.

It's in progress, and you can see how they currently work in ./builder/templates/script.js.

### Layouts

The images element is kept pretty simple, but you can add any further customizations in the custom.scss and custom.js files.

## Files:

```
/modules/elements/quote/template.hbs
/modules/elements/quote/style.scss
```

### Important! - replacing on the live site
