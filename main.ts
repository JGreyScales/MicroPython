let seed = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    //  creates LED screen
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    //  moves the motor and the servo
    while (input.buttonIsPressed(Button.A)) {
        servos.setServoPosition(servos.ServoPin.P8, Position.MIDDLE)
        motor.turnLeft(25)
        servos.setServoPosition(servos.ServoPin.P8, Position.HALF_DOWN)
        basic.pause(500)
        servos.setServoPosition(servos.ServoPin.P8, Position.MIDDLE)
    }
    motor.turnLeft(0)
    reset()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
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
    }
    reset()
})
function reset() {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}

