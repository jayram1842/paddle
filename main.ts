namespace SpriteKind {
    export const Leftpaddle = SpriteKind.create()
    export const Leftpladdles = SpriteKind.create()
    export const Rightpaddles = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Rightpaddles, function (sprite, otherSprite) {
    Sprite2.vx = Spite.vx * -1
    info.player2.changeScoreBy(1)
})
function create_right_paddle () {
    right_paddle = sprites.create(img`
        . . . . . . 6 7 7 6 . . . . . . 
        . . . . . . 6 7 6 6 . . . . . . 
        . . . . . . 6 7 6 6 . . . . . . 
        . . . . . . 6 7 6 6 . . . . . . 
        . . . . . . 6 7 6 6 . . . . . . 
        . . . . . . 6 7 7 6 . . . . . . 
        . . . . . . 6 7 7 6 . . . . . . 
        . . . . . . 6 7 7 6 . . . . . . 
        . . . . . . 6 7 7 6 . . . . . . 
        . . . . . . 6 7 7 6 . . . . . . 
        . . . . . . 6 6 7 6 . . . . . . 
        . . . . . . 6 6 7 6 . . . . . . 
        . . . . . . 6 6 7 6 . . . . . . 
        . . . . . . 6 6 7 6 . . . . . . 
        . . . . . . 6 6 7 6 . . . . . . 
        . . . . . . 6 6 7 6 . . . . . . 
        `, SpriteKind.RightPaddles)
    controller.player2.moveSprite(right_paddle, 0, 150)
    right_paddle.right = 160
    right_paddle.setStayInScreen(true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Leftpladdles, function (sprite, otherSprite) {
    Sprite2.vx = Spite.vx * -1
    info.changeScoreBy(1)
})
function create_left_paddle () {
    left_paddle = sprites.create(img`
        . . . . . . 6 7 7 6 . . . . . . 
        . . . . . . 6 7 6 6 . . . . . . 
        . . . . . . 6 7 6 6 . . . . . . 
        . . . . . . 6 7 6 6 . . . . . . 
        . . . . . . 6 7 6 6 . . . . . . 
        . . . . . . 6 7 7 6 . . . . . . 
        . . . . . . 6 7 7 6 . . . . . . 
        . . . . . . 6 7 7 6 . . . . . . 
        . . . . . . 6 7 7 6 . . . . . . 
        . . . . . . 6 7 7 6 . . . . . . 
        . . . . . . 6 6 7 6 . . . . . . 
        . . . . . . 6 6 7 6 . . . . . . 
        . . . . . . 6 6 7 6 . . . . . . 
        . . . . . . 6 6 7 6 . . . . . . 
        . . . . . . 6 6 7 6 . . . . . . 
        . . . . . . 6 6 7 6 . . . . . . 
        `, SpriteKind.Leftpladdles)
    controller.moveSprite(left_paddle, 100, 150)
    left_paddle.left = 0
    left_paddle.setStayInScreen(true)
}
function create_ball () {
    ball = sprites.create(img`
        . . 6 6 6 6 . . 
        . 6 d 4 4 4 b . 
        . c b 1 1 4 4 b 
        . c b b 4 4 d b 
        . . c b b d 1 c 
        . . . c c b b . 
        `, SpriteKind.Player)
    ball.setVelocity(100, 100)
    ball.setBounceOnWall(true)
    ball.y = randint(0, 120)
}
let ball: Sprite = null
let left_paddle: Sprite = null
let right_paddle: Sprite = null
let Spite: Sprite = null
let Sprite2: Sprite = null
create_ball()
create_left_paddle()
create_right_paddle()
