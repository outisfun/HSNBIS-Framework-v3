# Layout: Floater

Preview here: https://interactive-development.hsnb.io/hs-interactive-story-framework/floater.html

```
./modules/layouts/floater
  - template.hbs  // markup
  - style.scss // styles
  - script.js // main constructor
```

Floater is a cool but still very experimental layout that we developed for a custom story.
However, it can be useful for longer blocks of texts (for example interviews), or in projects where there is a lot of content and assets, but not all of them are essential.

It is still in progress, so use with caution, or don't use at all.

## Adding to a page:

```
floater__preview:
  layoutType: FLOATER
  layoutData:
    container: container
    floaterScenes:
      -
        floaterSceneData: snob-1
        floaterSceneItems:
          -
            src: hsnb1
            horizontal_pos: 25
      -
        floaterSceneData: snob-2
        floaterSceneItems:
          -
            src: hsnb2
            horizontal_pos: 75
      -
        floaterSceneData: snob-3
        floaterSceneItems:
          -
            src: hsnb3
            horizontal_pos: 15

  layoutContent:
    ...
```

Note how the floater includes an unlimited number of floaterScenes elements. Those are the images that get animated in the background as you scroll through the content. (It could have been just the src and the position, by the way, but in the beginning I was thinking that a scene might include more than one image).

For each of those:
```
floaterSceneData: snob-2 // unique identifier which will later be used to trigger the scene from within the content
floaterSceneItems:
  -
    src: hsnb2 // image
    horizontal_pos: 75 // where the image is located, in percent. with 75, the center of the image is 75% from left.
```

A scene is triggered from within the content. This is because if you have an interview, for example, it would make sense to show the picture of a sneaker at the moment the user has scrolled to the point where the sneaker is discussed. I'm not sure that's the best and most flexible approach, but I figured it's a start. To add a trigger within the content, just add a
span with a class "floater-trigger" and a data-scene attribute pointing to the target scene, zum Beispiel:
```
sometextelement:
  elementType: text
  elementData:
    paragraph:  "Sum expectantes. Ego hodie expectantes. Expectantes, et misit unum de pueris Gus interficere.
                Et suus vos. Nescio quis, qui est bonus usus liberi ad Isai? Qui nosti ... Quis dimisit filios
                ad necem ... hmm? Gus! Est, ante me factus singulis <span class = 'floater-trigger' data-scene='snob-2'>
                Tarantino.</span> gradibus. Et nunc ad aliud opus mihi."
```

!!! NOTE:
Because currently the code uses ScrollMagic's setPin method, the positioning of floater scene images gets mixed up if the scene is exited while any of them is on screen. There are workarounds, but until then, just try to have at least one window.innerHeight amount of content in the end of the layout without any triggers; e.g. they'd have all disappeared before you exit the scroll scene.

### Generated HTML output:
```
<div class = "isf-layout_floater js--floater">
  <div class = "isf-layout_floater__scenes js--floater__scenes">

    <div class = "isf-layout_floater__scene js--floater__scene" data-scene = "snob-1">
      <div class = "isf-layout_floater__scene--inner">
        <div class = "isf-layout_floater__scene__item js--floater__scene__item" data-horizontal_pos = "25">
          <picture class = "isf-el_picture js--picture">
            <source srcset="assets/hsnb1-lg.jpg"
                media="(min-width: 768px)">
            <img src="assets/hsnb1-md.jpg" />
          </picture>
        </div>
      </div>
    </div>

    <div class = "isf-layout_floater__scene js--floater__scene" data-scene = "snob-2">
      <div class = "isf-layout_floater__scene--inner">
        <div class = "isf-layout_floater__scene__item js--floater__scene__item" data-horizontal_pos = "75">
          <picture class = "isf-el_picture js--picture">
            <source srcset="assets/hsnb2-lg.jpg"
                media="(min-width: 768px)">
            <img src="assets/hsnb2-md.jpg" />
          </picture>
        </div>
      </div>
    </div>

    <div class = "isf-layout_floater__scene js--floater__scene" data-scene = "snob-3">
      <div class = "isf-layout_floater__scene--inner">
        <div class = "isf-layout_floater__scene__item js--floater__scene__item" data-horizontal_pos = "15">
          <picture class = "isf-el_picture js--picture">
            <source srcset="assets/hsnb3-lg.jpg"
                media="(min-width: 768px)">
            <img src="assets/hsnb3-md.jpg" />
          </picture>
        </div>
      </div>
    </div>

  </div>

  <div class = "isf-layout_floater__text js--floater__text">
    <div class = "isf-container">
      // the content with triggers
    </div>
  </div>
</div>
```
