let myslide = document.querySelectorAll('.myslider');
let myslideArr = Array.from(myslide);

let dot = document.querySelectorAll('.dot');
let dotArr = Array.from(dot);

let counter = 1;
slidefun(counter);

let timer  = setInterval(autoslide, 8000);

function autoslide() {
    counter += 1;
    slidefun(counter);
}

function plusSlide(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}

function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}

function slidefun(n) {
//    for (let i = 0; i < myslideArr.length; i++) {
//        myslideArr[i].style.display = "none";  
//    }
    myslideArr.forEach((ele) => {
    ele.style.display = 'none';
    }); 
//    for ( i = 0; i < dotArr.length; i++) {
//         dotArr[i].classList.remove('active');  
//    }
   dotArr.forEach((ele) => {
    ele.classList.remove("active");
    }); 
   if (n > myslideArr.length) {
       counter = 1;
   }
   if(n < 1){
       counter = myslideArr.length;
   }
   myslideArr[counter - 1].style.display = "block";
   dotArr[counter - 1].classList.add('active');
}


let btns = document.querySelectorAll('.btns');
let btnArr = Array.from(btns);

let content = document.getElementById('text');

btnArr.forEach((ele) => {
    ele.addEventListener("click", function(e){
       // console.log(ele);
       btnArr.forEach((ele) => {
           ele.classList.remove("actif");
      });    
       switch (e.target) {
           case btnArr[0]:
            content.style.fontSize = '1em'; 
               break;
            case btnArr[1]:
                content.style.fontSize = '1.5em'; 
                   break;
           default:
            content.style.fontSize = '2em'; 
               break;
       }
       e.currentTarget.classList.add("actif");      
    });
});