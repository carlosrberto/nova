var DOMReady = nova.Class({
    initialize: function() {
        $($.proxy(this.domReady, this));
    },

    domReady: function() {
        
    }
});

var CustomEvents = nova.Class({
    addEvent: function( ev, fn ) {
        this.events = this.events || {};
        this.events[ev] = this.events[ev] || [];
        this.events[ev].push(fn);
    },

    trigger: function( ev, args ) {
        if ( this.events && this.events[ev] ) {
            var events = this.events[ev], i, l = events.length;
            for (;i < l; i++) {
                events[i].apply(null, args);
            };
        }
    }
});

var ContextSelector = nova.Class({
    $: function( selector ) {
        return $( selector, this.el );
    }
});

var ContextChange = nova.Class({
    bindAll: function( fns, o ) {
        var i=0; l = fns.length, fn;
        for(; i < l; i++) {
            fn = fns[i];
            this[fn] = function() {
                return this[fn].apply( o, arguments );
            }
        }
    },

    bindTo: function( fn, o ) {
        return function() {
            fn.apply(o, arguments);
        }
    }
})

var ElementView = nova.Class({
    extend: DOMReady,
    implement: [ CustomEvents, ContextSelector, ContextChange ]
});

var ProductDetail = nova.Class({
    extend: ElementView,
    domReady: function() {
        this.el = $('body');
        this.changeColor();
    },

    changeColor: function() {
        this.$('p').css('color', 'red');
    }
});

var product = new ProductDetail();