var RacingCar = nova.Class({
    turbine: function() {
        this.stepKm = 2;
    }
});

var NeedForSpeedCar = nova.Class({
    nitro: function () {
        this.oldStepKm = this.stepKm || 1;
        this.stepKm = 20;
    },

    stopNitro: function () {
        this.stepKm = this.oldStepKm
    }
})

var Veicle = nova.Class({
    initialize: function(year) {
        this.year = year;
        this.manufacter = 'VW';
    },

    stop: function () {
        this.km = 0;
    }
})

var Car = nova.Class({
    extend: Veicle,
    implement: [RacingCar, NeedForSpeedCar],

    initialize : function(year) {
        this.parent(year);
        this.stepKm = 1;
        this.km = 0;
    },

    run: function(km) {
        return this.km += km || this.stepKm;
    }
});

var gol = new Car(2012);

for( p in gol ) {
    if ( gol.hasOwnProperty(p) ) {
        console.log( p );
    }
}