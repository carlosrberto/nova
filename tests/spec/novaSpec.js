describe("Nova", function() {
    var C = nova.Class({
        'animate' : function() {}
    });

    var c = new C;


    it('should exist', function(){
        expect(window.nova).not.toBeUndefined();
    });

    describe('nova.Class', function(){
        it('should be a function', function(){
            expect(typeof nova.Class).toEqual('function');
        });

        it('should create a object with a prototype object', function(){
            expect(C.prototype).not.toBeUndefined();
        });

        it('instance should work', function(){
            expect(typeof c.animate).toEqual('function')
        }); 
    })
});