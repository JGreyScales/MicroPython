seed = 0

def reset():
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)

while True:
    if input.button_is_pressed(Button.A):
        basic.show_leds("""
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        """)
        while input.button_is_pressed(Button.A):
            servos.set_servo_position(servos.ServoPin.P8, Position.MIDDLE)
            motor.turn_left(25)
            servos.set_servo_position(servos.ServoPin.P8, Position.HALF_DOWN)
            basic.pause(500)
            servos.set_servo_position(servos.ServoPin.P8, Position.MIDDLE)
        motor.stop()
        reset()
    
    if input.button_is_pressed(Button.B):
        basic.show_leds("""
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        """)
        while input.button_is_pressed(Button.B):
            servos.set_servo_position(servos.ServoPin.P0, Position.MIDDLE)
            basic.pause(2000)
            servos.set_servo_position(servos.ServoPin.P0, Position.HALF_DOWN)
            basic.pause(500)
            servos.set_servo_position(servos.ServoPin.P0, Position.MIDDLE)
            seed += 1
            motor.stop()
        reset()

