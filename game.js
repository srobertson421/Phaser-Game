var game = new Phaser.Game(1024, 400, Phaser.AUTO, 'game');

var player = null;
var level = null;
var enemy = null;

// Main state loaded on game start
var main_state = {
    
    preload: function() {
        
        level = new Level(game);
        level.preload();
        
        player = new Player(game);
        player.preload();
        
        enemy = new Enemy(game);
        enemy.preload();
    },
    
    create: function() {
        
        level.create();
        
        player.create();
        
        enemy.create();
    
    },
    
    update: function() {
        
        level.update();
        
        player.update();
        
        enemy.update();
    
    }
};

game.state.add('main', main_state);
game.state.start('main');