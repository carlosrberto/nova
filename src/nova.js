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

        var parent = o.extend,
            implement = o.implement,
            F = o.initialize || ( parent ? parent.prototype.constructor : function() {} ); 

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

        F.extend = function(methods) {
            var props = { extend: F };
            nova.extend(props, methods);
            return nova.Class(props);
        }      

        return F;
    }

    global.nova = nova;
})( this );