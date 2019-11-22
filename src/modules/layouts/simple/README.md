# Layout: Simple

Preview here: https://interactive-development.hsnb.io/hs-interactive-story-framework/simple.html

```
./modules/layouts/simple
  - template.hbs
  - style.scss
```

## Adding to a page:

The simple layout provides a plain container for elements. It only takes two layoutData attributes, colorScheme and container.
You'd mostly be using 'light' and 'container'.

### Adding to the .yml file:
```
simple_preview:
  layoutType: SIMPLE
  layoutData:
    colorScheme: light // or dark
    container: container // or container-fluid, or none
  layoutContent:
```

### Generated HTML output:
```
<div class = "isf-layout_simple isf-padding-tb-md isf-color-scheme--light" id = "simple_preview">
    <div class = "isf-container">
        ...
    </div>
</div>
```

