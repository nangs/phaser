/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

var BitmapText = require('./BitmapText');
var GameObjectFactory = require('../../GameObjectFactory');

/**
 * Creates a new Bitmap Text Game Object and adds it to the Scene.
 *
 * Note: This method will only be available if the Bitmap Text Game Object has been built into Phaser.
 *
 * @method Phaser.GameObjects.GameObjectFactory#bitmapText
 * @since 3.0.0
 *
 * @param {number} x - The x position of the Game Object.
 * @param {number} y - The y position of the Game Object.
 * @param {string} font - [description]
 * @param {string|string[]} [text] - [description]
 * @param {number} [size] - [description]
 * 
 * @return {Phaser.GameObjects.BitmapText} The Game Object that was created.
 */
GameObjectFactory.register('bitmapText', function (x, y, font, text, size)
{
    return this.displayList.add(new BitmapText(this.scene, x, y, font, text, size));
});

//  When registering a factory function 'this' refers to the GameObjectFactory context.
//  
//  There are several properties available to use:
//  
//  this.scene - a reference to the Scene that owns the GameObjectFactory
//  this.displayList - a reference to the Display List the Scene owns
//  this.updateList - a reference to the Update List the Scene owns
