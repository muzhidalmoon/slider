let imagesSrc = [
    '../Image/maldives-island.jpg',
    '../Image/maldives-island.jpg',
    '../Image/maldives-island.jpg',
    '../Image/straza-hill-lake-bled-slovenia-blue-sky.jpg',
    '../Image/straza-hill-lake-bled-slovenia-blue-sky.jpg',
    '../Image/straza-hill-lake-bled-slovenia-blue-sky.jpg',
    '../Image/straza-hill-lake-bled-slovenia-blue-sky.jpg',
    '../Image/summer-time-lake-looks-gorgeous.jpg',
    '../Image/summer-time-lake-looks-gorgeous.jpg',
    '../Image/summer-time-lake-looks-gorgeous.jpg'
]


const slider = document.querySelector('.slider');


imagesSrc.forEach((imgSrc)=>{
    
    let tag = `<li class="card" onclick="showImage(this)">
    <img src="${imgSrc}" alt="">
    </li>`
    
    slider.insertAdjacentHTML('beforeend',tag)
})

const arrow = document.querySelectorAll('.slider_wrapper i');

Array.from(arrow).forEach((arrow)=>{
    arrow.addEventListener('click',function(){
        slider.scrollLeft += arrow.id == 'left' ? -150 : 150;
    })
})

function showImage(card){
    let displayImg = document.querySelector('.display_img img');

    let img = card.querySelector('img');

    let imgSrc = img.getAttribute('src');

    displayImg.src = imgSrc;


}