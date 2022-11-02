radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 112) {
    	
    }
    if (receivedNumber == 111) {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    shot = game.createSprite(4, 4)
    if (shot.isTouchingEdge()) {
        shot.change(LedSpriteProperty.Y, 1)
        shot.change(LedSpriteProperty.Y, 1)
        shot.change(LedSpriteProperty.Y, 1)
        shot.change(LedSpriteProperty.Y, 1)
    }
    if (shot.isTouching(blocks)) {
        blocks.delete()
        shot.delete()
    }
})
let shot: game.LedSprite = null
let blocks: game.LedSprite = null
radio.setGroup(1)
let _21 = game.createSprite(1, 0)
let _22 = game.createSprite(1, 1)
let _31 = game.createSprite(2, 0)
let _32 = game.createSprite(2, 1)
let _41 = game.createSprite(3, 0)
let _42 = game.createSprite(3, 1)
blocks = _21 || (_22 || (_31 || (_32 || (_41 || _42))))
let plr = game.createSprite(2, 4)
loops.everyInterval(0, function () {
    for (let index = 0; index < 2; index++) {
        _41.move(-3)
        basic.pause(500)
        if (_41.isTouchingEdge()) {
            _41.move(3)
            basic.pause(500)
            basic.pause(500)
            _21.move(3)
            basic.pause(500)
        }
        if (_21.isTouchingEdge()) {
            _21.move(-3)
            basic.pause(500)
        }
    }
    _21.change(LedSpriteProperty.Y, 1)
    _31.change(LedSpriteProperty.Y, 1)
    _41.change(LedSpriteProperty.Y, 1)
})
basic.forever(function () {
    for (let index = 0; index < 2; index++) {
        _42.move(-3)
        basic.pause(500)
        if (_42.isTouchingEdge()) {
            _42.move(3)
            basic.pause(500)
        }
        basic.pause(500)
        _22.move(3)
        basic.pause(500)
        if (_22.isTouchingEdge()) {
            _22.move(-3)
            basic.pause(500)
        }
    }
    _42.change(LedSpriteProperty.Y, 1)
    _22.change(LedSpriteProperty.Y, 1)
    _32.change(LedSpriteProperty.Y, 1)
})
