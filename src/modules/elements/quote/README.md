# Element: Quote

Preview here: // add url

## Adding to a page:

### Adding to the .yml file:
```
layoutId:
  layoutType: ...
  layoutData: ...
  layoutContent:

    quoteElementId:
      elementType: text
      elementData:
        quote: Ludum mutavit. Verbum est ex. Et ... sunt occidat. Videtur quod est super omne oppidum.
        source:  Heisenberg
```

### Generated HTML output:
```
<div class = "isf-el isf-el_quote js--quote" id = "quoteElementId">
  <div class = "isf-el_quote__content">
    <h3 class = "isf-el_quote__content__quote">“Ludum mutavit. Verbum est ex. Et ... sunt occidat. Videtur quod est super omne oppidum. ”</h3>
    <small class = "isf-el_quote__content__source">
      - Heisenberg
    </small>
  </div>
</div>
```

## Files:

/modules/elements/quote/template.hbs
/modules/elements/quote/style.scss
