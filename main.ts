radio.onReceivedNumber(function (receivedNumber) {
    if (numeros == 1 && receivedNumber == 1) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # . .
            . # . . .
            . # # # .
            `)
    }
    if (numeros == 2 && receivedNumber == 2) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # . .
            . # . . .
            . # # # .
            `)
    }
    if (numeros == 3 && receivedNumber == 3) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # . .
            . # . . .
            . # # # .
            `)
    }
    if (numeros == 1 && receivedNumber == 3) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # . # # .
            # . . # .
            . # # # .
            `)
    }
    if (numeros == 1 && receivedNumber == 2) {
        basic.showLeds(`
            . # # # .
            . # . . #
            . # . . #
            . # # # .
            . # . . .
            `)
    }
    if (numeros == 2 && receivedNumber == 1) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # . # # .
            # . . # .
            . # # # .
            `)
    }
    if (numeros == 2 && receivedNumber == 3) {
        basic.showLeds(`
            . # # # .
            . # . . #
            . # . . #
            . # # # .
            . # . . .
            `)
    }
    if (numeros == 3 && receivedNumber == 1) {
        basic.showLeds(`
            . # # # .
            . # . . #
            . # . . #
            . # # # .
            . # . . .
            `)
    }
    if (numeros == 3 && receivedNumber == 2) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # . # # .
            # . . # .
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    radio.sendNumber(1)
    numeros = 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    radio.sendNumber(3)
    numeros = 3
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    radio.sendNumber(2)
    numeros = 2
})
let numeros = 0
radio.setGroup(10203040506070808)
basic.forever(function () {
	
})
