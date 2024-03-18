// SCROLL SECTION START
let scrollBtn = document.querySelector('.scrollBtn')
window.addEventListener('scroll',function(){
    if(this.window.pageYOffset > 800){
        scrollBtn.classList.add('show')
    }
    else{
        scrollBtn.classList.remove('show')
    }
})
// SCROLL SECTION END



// SEARCH BOX SECTION STAT
let searchBox =document.querySelector('.search_box');
let search = document.querySelector('#search');
let wrong = document.querySelector('#wrong');
search.addEventListener('click', function(){
    searchBox.classList.add('active');
    wrong.classList.add('active');
})
wrong.addEventListener('click', function(){
    searchBox.classList.remove('active');
    cardBox.classList.remove('active');
    wrong.classList.remove('active');
})
// SEARCH BOX SECTION END


// CARD BOX JS START
let cardBox = document.querySelector('#card_box');
let cardBtn = document.querySelector('#card_btn');
let wrong2 = document.querySelector('#wrong2');
cardBtn.addEventListener('click', function(){
    cardBox.classList.add('active');
    wrong2.classList.add('active');
})
wrong2.addEventListener('click', function(){
    cardBox.classList.remove('active');
    
})
// CARD BOX JS END

// Loader box start
$(window).on ("load", function(){
    $("#loader").fadeOut(3000);
})
// Loader box end
