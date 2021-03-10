//  Variable definement
let seed = 0
function reset() {
    //  defines the blank LEDS (YES IK THERE IS A FUNCTION FOR IT ALREADY)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}

//  Mainloop
while (true) {
    //  checks if button A is being pressed
    if (input.buttonIsPressed(Button.A)) {
        //  creates LED display
        basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
        //  checks if button is still being held down
        while (input.buttonIsPressed(Button.A)) {
            //  begins moving the motor
            servos.setServoPosition(servos.ServoPin.P8, Position.MIDDLE)
            motor.turnLeft(25)
            servos.setServoPosition(servos.ServoPin.P8, Position.HALF_DOWN)
            basic.pause(500)
            servos.setServoPosition(servos.ServoPin.P8, Position.MIDDLE)
        }
        //  stops the motor and resets the LED
        motor.stop()
        reset()
    }
    
    //  checks if button B is being pressed
    if (input.buttonIsPressed(Button.B)) {
        //  creates LED display
        basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
        //  checks if button B is still being pressed
        while (input.buttonIsPressed(Button.B)) {
            //  moves the servo
            servos.setServoPosition(servos.ServoPin.P0, Position.MIDDLE)
            basic.pause(2000)
            servos.setServoPosition(servos.ServoPin.P0, Position.HALF_DOWN)
            basic.pause(500)
            servos.setServoPosition(servos.ServoPin.P0, Position.MIDDLE)
            seed += 1
            motor.stop()
        }
        //  resets the LEDS
        reset()
    }
    
    //  plays annoying sounds if logo touch sensor is pressed
    if (input.logoIsPressed()) {
        music.playTone(Note.C, 10000)
    }
    
}
