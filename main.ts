radio.onReceivedNumber(function (receivedNumber) {
    if (number == receivedNumber) {
        radio.sendString("Yes")
        basic.showString(Yes)
    }
    if (number != receivedNumber) {
        radio.sendString("No")
        basic.showString(No)
    }
})
input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(number)
})
let number = 0
let Yes = ""
let No = ""
basic.showIcon(IconNames.Pitchfork)
radio.setGroup(50)
No = "No"
Yes = "Yes"
