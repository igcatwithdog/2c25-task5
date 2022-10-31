let x_value = 0
let y_value = 0
input.onButtonPressed(Button.A, function () {
    x_value = 0
    y_value = 0
    for (let index = 0; index < 4; index++) {
        while (x_value <= 4) {
            led.plot(x_value, y_value)
            basic.pause(500)
            x_value += 1
        }
        y_value += 1
        x_value = 0
    }
})
input.onButtonPressed(Button.B, function () {
    x_value = 5
    y_value = 0
    for (let index = 0; index < 5; index++) {
        x_value += -1
        led.plot(x_value, y_value)
        basic.pause(500)
    }
    x_value = 0
    y_value = 1
    for (let index = 0; index < 5; index++) {
        led.plot(x_value, y_value)
        x_value += 1
        basic.pause(500)
    }
    x_value = 5
    y_value = 2
    for (let index = 0; index < 5; index++) {
        x_value += -1
        led.plot(x_value, y_value)
        basic.pause(500)
    }
    x_value = 0
    y_value = 3
    for (let index = 0; index < 5; index++) {
        led.plot(x_value, y_value)
        x_value += 1
        basic.pause(500)
    }
    x_value = 4
    y_value = 4
    for (let index = 0; index < 5; index++) {
        led.plot(x_value, y_value)
        x_value += -1
        basic.pause(500)
    }
})
