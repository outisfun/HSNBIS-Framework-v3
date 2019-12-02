# Element: CTA

Preview here: // add url

```
./modules/elements/cta
  - template.hbs  // markup
  - style.scss // styles
  - script.js // main constructor
```

The CTA module inserts a button in the story. It's fairly simple, and it offers two color schemes. If you need to add more, do it in the style.scss file, similar to the .isf-el_cta--dark and .isf-el_cta--light classes.
TO DO: Hover effects consistent with the rest of the site.

## Adding to a page:

### Adding to the .yml file:

```
layoutId:
  layoutType: ...
  layoutData: ...
  layoutContent:
    cta_el:
      elementType: cta
      elementData:
        text: 'Shop now'
        url: https://highsnobiety.com
        colorScheme: light
```

### Generated HTML output:
```
<div class = "isf-el isf-el_cta isf-el_cta--light" id = "cta_el">
    <a class="shop-frontpage-new-button cta" href="https://highsnobiety.com" target = "_blank">
        Shop now
    </a>
</div>
```

