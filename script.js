const slidercontainer = document.querySelector(".slider-container")
const rightslide = document.querySelector(".right-slide")
const leftslide = document.querySelector(".left-slide")
const upbutton = document.querySelector(".up-button")
const downbutton = document.querySelector(".down-button")
const slideslength = rightslide.querySelectorAll("div").length

let activeslideindex = 0

leftslide.style.top = `-${(slideslength - 1) * 100}vh`

upbutton.addEventListener("click", () => slidechange("up"))
downbutton.addEventListener("click", () => slidechange("down"))

const slidechange = (direction) => {
    const sliderheight = slidercontainer.clientHeight
    console.log(sliderheight)
    if (direction === "up") {
        activeslideindex++
        if (activeslideindex > slideslength - 1) {
            activeslideindex = 0
        }
    } else if (direction === "down") {
        activeslideindex--
        if (activeslideindex < 0) {
            activeslideindex = slideslength - 1
        }

    }
    rightslide.style.transform = `translateY(-${activeslideindex * sliderheight}px)`
    leftslide.style.transform = `translateY(${activeslideindex * sliderheight}px)`
}