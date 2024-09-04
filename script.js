const LeftArrow=document.querySelector(".Left")
const RightArrow=document.querySelector(".Right")
const Slider=document.querySelector('.SliderImage')
const Images=document.querySelectorAll(".Image")
console.log(LeftArrow);
console.log(RightArrow);
console.log(Slider);

let SlideNumber=1
RightArrow.addEventListener('click',()=>{
    if(SlideNumber<Images.length){
        Slider.style.transform=`translateX(-${SlideNumber*800}px)`
    SlideNumber++
    }
    else{
        Slider.style.transform=`translateX(0px)`
        SlideNumber=1;
    }
})
LeftArrow.addEventListener("click",()=>{
    if(SlideNumber>1){
        Slider.style.transform=`translateX(-${(SlideNumber-2)*800}px)`
    SlideNumber--
    }
    else{
        Slider.style.transform=`translateX(-${(Images.length-1)*800}px)`
        SlideNumber=Images.length;
    }
})



