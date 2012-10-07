;(function(global) {
    var nova = {};

    nova.extend = function(a, b) {
        for( p in b ) {
            if ( b.hasOwnProperty(p) ) {
                a[p] = b[p];
            }
        }
    }

    nova.Class = function(o) {

        var F = o.initialize || function() {},
            parent = o.extend,
            implement = o.implement;

        delete o.initialize;

        if ( parent ) {
            F.prototype.parent = function () {
                parent.apply(this, arguments);
            }           
            nova.extend(F.prototype, parent.prototype);
            delete o.extend;
        }

        if ( implement ) {
            var i=0, l = implement.length;
            for (; i < l; i++) {
                nova.extend(F.prototype, implement[i].prototype);
            }
            delete o.implement;
        }

        for( p in o ) {
            if ( o.hasOwnProperty(p) ) {
                F.prototype[p] = o[p];
            }
        }        

        return F;
    }

    global.nova = nova;
})( this );