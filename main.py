# Variable definement
seed = 0

def reset():
# defines the blank LEDS (YES IK THERE IS A FUNCTION FOR IT ALREADY)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
# Mainloop
while True:

    # checks if button A is being pressed
    if input.button_is_pressed(Button.A):
        # creates LED display
        basic.show_leds("""
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        """)
        # checks if button is still being held down
        while input.button_is_pressed(Button.A):
            # begins moving the motor
            servos.set_servo_position(servos.ServoPin.P8, Position.MIDDLE)
            motor.turn_left(25)
            servos.set_servo_position(servos.ServoPin.P8, Position.HALF_DOWN)
            basic.pause(500)
            servos.set_servo_position(servos.ServoPin.P8, Position.MIDDLE)
        # stops the motor and resets the LED
        motor.stop()
        reset()
    
    # checks if button B is being pressed
    if input.button_is_pressed(Button.B):
        # creates LED display
        basic.show_leds("""
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        """)

        # checks if button B is still being pressed
        while input.button_is_pressed(Button.B):
            # moves the servo
            servos.set_servo_position(servos.ServoPin.P0, Position.MIDDLE)
            basic.pause(2000)
            servos.set_servo_position(servos.ServoPin.P0, Position.HALF_DOWN)
            basic.pause(500)
            servos.set_servo_position(servos.ServoPin.P0, Position.MIDDLE)
            seed += 1
            motor.stop()
        # resets the LEDS
        reset()
    
    # plays annoying sounds if logo touch sensor is pressed
    if input.logo_is_pressed():
        music.play_tone(Note.C, 10000)


