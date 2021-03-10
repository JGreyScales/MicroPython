seed = 0

def on_button_pressed_a():
    # creates LED screen
    basic.show_leds("""
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        """)
    # moves the motor and the servo
    while input.button_is_pressed(Button.A):
        servos.set_servo_position(servos.ServoPin.P8, Position.MIDDLE)
        motor.turn_left(25)
        servos.set_servo_position(servos.ServoPin.P8, Position.HALF_DOWN)
        basic.pause(500)
        servos.set_servo_position(servos.ServoPin.P8, Position.MIDDLE)
    motor.turn_left(0)
    reset()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global seed
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
    reset()
input.on_button_pressed(Button.B, on_button_pressed_b)

def reset():
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)