var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationType: 'fraction',
    paginationFractionRender: function (swiper, currentClassName, totalClassName) {
	    return '<span class="' + currentClassName + '"></span>' +
	        '/' + '<span class="' + totalClassName + '"></span>';
	    },
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 4000,
    autoplayDisableOnInteraction: false
}); 