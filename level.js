Level = function(game) {
    this.game = game;
};

Level.prototype = {

    preload: function() {
        
        this.game.load.image('background', 'assets/bg.png');
        
    },
    
    create: function() {
        
        this.game.add.sprite(0,0, 'background');
        
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        
    },
    
    update: function() {
    
    }
    
    
};