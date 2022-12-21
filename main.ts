tiles.setCurrentTilemap(assets.tilemap`level`)
let mySprite = sprites.create(assets.image`bigDonut`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
