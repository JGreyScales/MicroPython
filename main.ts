let seed = 0
function reset() {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}

while (true) {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
        while (input.buttonIsPressed(Button.A)) {
            servos.setServoPosition(servos.ServoPin.P8, Position.MIDDLE)
            motor.turnLeft(25)
            servos.setServoPosition(servos.ServoPin.P8, Position.HALF_DOWN)
            basic.pause(500)
            servos.setServoPosition(servos.ServoPin.P8, Position.MIDDLE)
        }
        motor.stop()
        reset()
    }
    
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
        while (input.buttonIsPressed(Button.B)) {
            servos.setServoPosition(servos.ServoPin.P0, Position.MIDDLE)
            basic.pause(2000)
            servos.setServoPosition(servos.ServoPin.P0, Position.HALF_DOWN)
            basic.pause(500)
            servos.setServoPosition(servos.ServoPin.P0, Position.MIDDLE)
            seed += 1
            motor.stop()
        }
        reset()
    }
    
}
