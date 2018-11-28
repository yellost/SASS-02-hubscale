//------------burger navbar------------//
let burger = document.querySelector(".burger");
let navbar = document.querySelector("nav");

burger.addEventListener("click", () => {
    navbar.classList.toggle('active');
});

//-----------SCROLL------------//
let selector = document.querySelectorAll(".greyBanner li");
let title = document.querySelectorAll(".category");
let scroll = document.querySelector(".scrollContainer>div");
console.log(selector);
console.log(title);
console.log(scroll);

//--------------automatic------------//
let dataList = [];
for (i=0; i<selector.length;i++) {
    dataList.push(selector[i].dataset.type);
};
function scrollTimer() {
    u = dataList.indexOf(scroll.className);
    if (u+1 == dataList.length) {
    u = 0
    } else {
        u++
    }
    scroll.className = dataList[u];
    title.forEach((element) => {
        if (element.dataset.type != dataList[u]) {
            element.classList.toggle('hidden',true);
        } else  {
            element.classList.toggle('hidden',false);
        }
        selector.forEach((bullet) => {
            if (bullet.dataset.type == dataList[u]) {
                bullet.classList.toggle('active',true);
            } else  {
                bullet.classList.toggle('active',false);
            }
        });
    });
}
let timer = setInterval(scrollTimer,5000);
//-------------end automatic------------//

//---------------clic---------------//
selector.forEach((bullet) => {
    bullet.addEventListener("click", () => {
        if (bullet.classList.contains("active")==false) {
        let active = document.querySelector("li.active");
        active.classList.toggle("active");
        bullet.classList.toggle("active");
        scroll.className = bullet.dataset.type;
        title.forEach((element) => {
            if (element.dataset.type!=bullet.dataset.type) {
                element.classList.toggle('hidden',true);
            } else  {
                element.classList.toggle('hidden',false);
                }
        });
        }
        clearInterval(timer); // arrete le scroll automatique pour remettre le timer à 0
        timer = setInterval(scrollTimer,5000);//relance le scroll automatique à partir de la nouvelle position
    });
});
//----------------end clic------------//
//------------END SCROLL--------//
