basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(1000)
basic.forever(function () {
    basic.showNumber(input.temperature())
    basic.pause(100)
})
