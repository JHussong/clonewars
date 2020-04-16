const toggle = () => {
    let trailer = document.querySelector('.trailer');
    let video = document.querySelector('iframe')

    trailer.classList.toggle('active');
    video.currentTime = 0;
    
}