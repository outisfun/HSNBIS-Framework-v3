# Element: Text

Preview here: // add url

## Adding to a page:

### Adding to the .yml file:

The text element accepts as data three strings, which are formatted differently.
If you don't need either of them, just don't add it in the .yml file.

```
layoutId:
  layoutType: ...
  layoutData: ...
  layoutContent:

    textElementId:
      elementType: text
      elementData:
        headline: Gus! Est, ante me factus singulis decem gradibus. // can remove this line
        highlight:  "Gus sit amet suum motum. Nescio quando, aut quomodo, nescio quo. Illud scio, amet tortor."
        paragraph:  "Sum expectantes. Ego hodie expectantes. Expectantes, et misit unum de pueris Gus interficere.
                    Et suus vos. Nescio quis, qui est bonus usus liberi ad Isai? Qui nosti ... Quis dimisit filios
                    ad necem ... hmm? Gus! Est, ante me factus singulis decem gradibus. Et nunc ad aliud opus mihi
                    tandem tollendum est puer ille consensus et nunc fugit. Ipse suus obtinuit eam. Non solum
                    autem illa, sed te tractantur in se trahens felis."
```

### Generated HTML output:

```
<div class = "isf-el isf-el_text js--text" id = "basic__text"  >
  <h4 class = "isf-el_text__highlight">
      Gus sit amet suum motum. Nescio quando, aut quomodo, nescio quo. Illud scio, amet tortor.
  </h4>
  <p class = "isf-el_text__paragraph">
      Sum expectantes. Ego hodie expectantes. Expectantes, et misit unum de pueris Gus interficere.
      Et suus vos. Nescio quis, qui est bonus usus liberi ad Isai? Qui nosti ... Quis dimisit filios
      ad necem ... hmm? Gus! Est, ante me factus singulis decem gradibus. Et nunc ad aliud opus mihi
      tandem tollendum est puer ille consensus et nunc fugit. Ipse suus obtinuit eam. Non solum
      autem illa, sed te tractantur in se trahens felis.
  </p>
</div>
```

## Files:

/modules/elements/text/template.hbs
/modules/elements/text/style.scss

