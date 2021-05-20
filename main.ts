radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        cuteBot.moveTime(cuteBot.Direction.right, 100, 0.001)
    } else if (receivedNumber == 1) {
        cuteBot.moveTime(cuteBot.Direction.left, 100, 0.001)
    } else if (receivedNumber == 2) {
        cuteBot.moveTime(cuteBot.Direction.backward, 100, 0.1)
    } else if (receivedNumber == 3) {
        cuteBot.moveTime(cuteBot.Direction.forward, 100, 0.1)
    } else if (receivedNumber == 4) {
        cuteBot.stopcar()
    } else if (receivedNumber == 5) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x0000ff)
    } else if (receivedNumber == 6) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0080)
    } else if (receivedNumber == 7) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffffff)
    } else if (receivedNumber == 8) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
    } else if (receivedNumber == 9) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    } else if (receivedNumber == 10) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ffff)
    } else if (receivedNumber == 11) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
    } else if (receivedNumber == 12) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff8000)
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(562)
