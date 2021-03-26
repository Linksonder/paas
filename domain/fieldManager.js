let manager = {

    setSeed: function(seed){
        this.seed = seed;
    },

    hideEggs: function(){
        //normaliter seed * random * iets cools ofzow
        return [
            { x:0, y: 0},
            { x:12,y: 13}
        ]
    },

    searchEgg: function(place){

    }
}

module.exports = manager;