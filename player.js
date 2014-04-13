Player = function(game) {
    this.game = game;
    this.kiba = null;
    this.cursors = null;
    this.runKey = null;
}

Player.prototype = {

    preload: function() {

        // Load spritesheet and atlas
        this.game.load.atlas('kiba', 'assets/kiba.png', 'assets/kiba.json');
        
    
    },
    
    create: function() {
        
        // Add sprite
        this.kiba = game.add.sprite(0,0, 'kiba');
        
        // Add sprite animations
        //this.kiba.animations.add('walkLeft', Phaser.Animation.generateFrameNames('leftWalk', 1, 6), 10, true);
        this.kiba.animations.add('runLeft', Phaser.Animation.generateFrameNames('leftRun', 1, 6), 15, true);
        //this.kiba.animations.add('walkRight', Phaser.Animation.generateFrameNames('rightWalk', 1, 6), 10, true);
        this.kiba.animations.add('runRight', Phaser.Animation.generateFrameNames('rightRun', 1, 6), 15, true);
        this.kiba.animations.add('idle', Phaser.Animation.generateFrameNames('idle', 1, 6), 5, true);
        
        // Player Camera
        this.game.camera.follow(this.kiba);
        
        // Player Physics
        this.game.physics.arcade.enable(this.kiba);
        this.kiba.body.gravity.y = 300;
        this.kiba.body.collideWorldBounds = true;
        
        
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.runKey = this.game.input.keyboard.addKey(Phaser.Keyboard.CONTROL);
        
    },
    
    update: function() {
        
        this.kiba.body.velocity.x = 0;
        
        // Player movement
        if (this.cursors.left.isDown) {
            
            this.kiba.body.velocity.x = -150;
            this.kiba.animations.play('runLeft'); 
            
            if (this.runKey.isDown) {
                
                this.kiba.body.velocity.x = -250;;
                
            }
        }
        else if (this.cursors.right.isDown) {
            
            this.kiba.body.velocity.x = 150;
            this.kiba.animations.play('runRight');
            
            if (this.runKey.isDown) {
            
                this.kiba.body.velocity.x = 250;;
                
            }
            
        }
        else {
            
            this.kiba.animations.play('idle');
            
        }
        
        // Player jumping
        if (this.cursors.up.isDown && this.kiba.y > 330) {
            
            this.kiba.body.velocity.y = -200;
            
        }
    }
}