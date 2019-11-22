
const ISFDATA = {
  LAYOUTS: {
    CHAPTER: {
      CLASSES: {
        EL: 'js--chapter',
        CONTENT: 'js--chapter__content',
        HEADER: 'js--chapter__header'
      },
      CONSTRUCTOR: 'ISF_Layout_Chapter'
    },
    SPLITSTICKY: {
      CLASSES: {
        EL: 'js--split-sticky',
        CONTENT: 'js--split-sticky__content',
        STICKY: 'js--split-sticky__sticky'
      },
      CONSTRUCTOR: 'ISF_Layout_SplitSticky'
    },
    SIMPLE: {
      CLASSES: {
        // no js classes really, and no constructor
      }
    }
  },
  ELEMENTS: {
    GALLERY: {
      CLASSES: {
        EL: 'js--gallery'
      },
      CONSTRUCTOR: 'ISF_Element_Gallery'
    }
  },
  NAV: {
    TABS: {
      CLASSES: {
        EL: 'js--tabs',
        TAB: 'js--tab'
      },
      CONSTRUCTOR: 'ISF_Nav_Tabs'
    }
  }
};

module.exports = ISFDATA;
