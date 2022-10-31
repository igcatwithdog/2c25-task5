x_value = 0

def on_button_pressed_a():
    global x_value
    x_value = 0
    while x_value <= 4:
        led.plot(x_value, 0)
        basic.pause(500)
        x_value += 1
input.on_button_pressed(Button.A, on_button_pressed_a)
