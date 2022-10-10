function loadcoupon(){
    document.getElementById('coupon').style.visibility='visible';
}
function closeCoupon(){
    document.getElementById('coupon').style.visibility='hidden';
}
function changemode()
{
    let mybody = document.body;
    mybody.classList.toggle('mydark')
}