document.addEventListener("DOMContentLoaded", ()=> {
    const ParentSlider = document.querySelector('.imgSliders');
    const sliders = ParentSlider.querySelectorAll('ul li');
    let count = 0;
    setInterval(()=>{
        if(count < sliders.length){
            sliders.forEach((slider, i) => {
                if(i === count){
                    slider.classList.add('inView');
                } else {
                    slider.classList.remove('inView');
                }
            });
            count++; // index番号(0スタート)とリンクさせるためにカウントアップは最後に行う
        } else {
            count = 0;
        }
    }, 1000);
});