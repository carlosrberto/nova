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

        if ( parent ) {
            F.prototype.parent = function () {
                parent.apply(this, arguments);
            }           
            nova.extend(F.prototype, parent.prototype);
        }

        for( p in o ) {
            if ( o.hasOwnProperty(p) &&  !p.match(/implement|initialize|extend/) ) {
                F.prototype[p] = o[p];
            }
        }

        if ( implement ) {
            var i=0, l = implement.length;
            for (; i < l; i++) {
                nova.extend(F.prototype, implement[i].prototype);
            };
        }

        return F;
    }

    global.nova = nova;
})( this );