let sliderContainer = document.getElementsByClassName('slider-container')[0]
let slides = Array.from(document.getElementsByClassName('slide'))
let arrowLeft = document.getElementsByClassName('arrow-left')[0]
let arrowRight = document.getElementsByClassName('arrow-right')[0]
let pInfo = sliderContainer.getBoundingClientRect();
let sWidth = pInfo.width
let newWidth = sWidth

//BOTH ARROW DOING THE SAME FOR NOW
arrowLeft.addEventListener('click', () => {
  slides.forEach(i => {
    if(newWidth < slides.length * sWidth) {
       i.style.transform = `translateX(-${newWidth}px)`
    } else {
      i.style.transform = 'translateX(0px)'
      newWidth = 0
    }
  })
  newWidth += sWidth
 console.log(newWidth, "n right")
})

arrowRight.addEventListener('click', () => {
  slides.forEach(i => {
    if(newWidth < slides.length * sWidth) {
       i.style.transform = `translateX(-${newWidth}px)`
    } else {
      i.style.transform = 'translateX(0px)'
      newWidth = 0
    }
  })
  newWidth += sWidth
 console.log(newWidth, "n right")
})
