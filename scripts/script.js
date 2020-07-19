function myFunction(){

    // creating variables for read more
    var dots=document.getElementsByID("dots");
    var moreText= document.getElementsByID("more");
    var btnText=document.getElementsByID("button");



    if (dots.style.display === 'none'){
        dots.style.display='inline';
        btnText.innerHTML='Read more';
        moreText.style.display= 'none';
    }
    else{
        dots.style.display = 'none';
        btnText.innerHTML = 'Read less';
        moreText.display='block'
    }



}