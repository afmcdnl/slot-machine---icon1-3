radio.onReceivedNumber(function (receivedNumber) {
    while (wait_time < Total_time) {
        if (index < images2.length) {
            basic.pause(wait_time)
            images2[index].showImage(0)
            wait_time += 0.2
            index += 1
        } else {
            index = 0
        }
    }
    radio.setGroup(5)
    radio.sendValue("Icon3", index)
    Start()
})
function Start () {
    radio.setGroup(4)
    wait_time = 0
    Total_time = randint(3, 6)
    images2 = [images.iconImage(IconNames.Heart), images.iconImage(IconNames.Umbrella), images.iconImage(IconNames.Giraffe), images.iconImage(IconNames.Duck)]
}
input.onButtonPressed(Button.A, function () {
	
})
let images2: Image[] = []
let Total_time = 0
let wait_time = 0
let index = 0
index = 0
Start()
basic.showIcon(IconNames.Yes)
