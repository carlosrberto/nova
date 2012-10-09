nova.js
=======

A small library with utilities for class based JavaScript programming

Creating Classes
----------------
	
```javascript

var DOMReady = nova.Class({
    initialize: function() {
        $($.proxy(this.domReady, this));
    },

    domReady: function() {
        
    }
});
```

```javascript

var CustomEvents = nova.Class({
    addEvent: function(ev, fn) {
        this.events = this.events || {};
        this.events[ev] = this.events[ev] || [];
        this.events[ev].push(fn);
    },

    trigger: function(ev, args) {
        if ( this.events && this.events[ev] ) {
            var events = this.events[ev], i, l = events.length;
            for (;i < l; i++) {
                events[i].apply(null, args);
            };
        }
    }
});
```

```javascript

var ContextSelector = nova.Class({
    $: function(selector) {
        return $(selector, this.el);
    }
});
```

Extending and Implementing Classes
----------------------------------

```javascript

var ElementView = nova.Class({
    extend: DOMReady,
    implement: [CustomEvents, ContextSelector]
});
```

```javascript

var ProductDetail = ElementView.extend({
    domReady: function() {
        this.el = $('body');
        this.changeColor();
    },

    changeColor: function() {
        this.$('p').css('color', 'red');
    }    
})

var product = new ProductDetail();
```