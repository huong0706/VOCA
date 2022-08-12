// Remove header-box have position:fixed when scrolling 
$(window).scroll(function(){
    if($(this).scrollTop()>= 100){
        $('.header__account-logged').addClass('scrolled');
    }else{
        $('.header__account-logged').removeClass('scrolled');
    }
});
  
// Scrolling animations
function scrollAnimation() {
    var reveals = document.querySelectorAll('.benefit-content-item');
    for (let i=0; i<reveals.length; i++) {
        var item = reveals[i].querySelector('.benefit-content-left');
        var windowHeight = window.innerHeight; //chiều cao của khung hình
        var elementTop = reveals[i].getBoundingClientRect().top // cung cấp khoảng cách của phần tử reveal từ đỉnh khung hỉnh/ chiều dài đã được cuộn
        var elementVisible = 70; //chiều cao mà phần tử sẽ được hiển thị
        if (elementTop <= windowHeight - elementVisible) {
            if ((i+1)%2 != 0) {
                item.classList.add('animationLeft');    
            }
            else {
                item.classList.add('animationRight');    

            }
        }
        // Lặp lại animation khi kéo xuống
        // else {
        //     item.classList.remove('animationLeft');
        //     item.classList.remove('animationRight');


        // }
    }
}
window.addEventListener('scroll', scrollAnimation);
