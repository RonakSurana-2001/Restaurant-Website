
// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});




let options = document.querySelector('.options-section');
let srch = document.querySelector('#search-icon');
let srchBox = document.querySelector('.search-box');
function func2() {
    options.classList.toggle('disp');
}

srch.addEventListener('click', () => {
    srchBox.classList.toggle('menu1-disp');
})

let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (scrollY > 47) {
        navbar.classList.add('sticky');
        navbar.style.backgroundColor = "black";
    }
    else {
        navbar.classList.remove('sticky');
        navbar.style.backgroundColor = "transparent";
    }
})



let menu = [
    {
        name: "OLD TIMER'S BREAKFAST",
        price: "$22.00",
        description: "( Two eggs cooked to order with grits, sawmill gravy, homemade buttermilk biscuits & real butter )",
        meal: "BREAKFAST"
    },
    {
        name: "TURKEY MILANESE",
        price: "$22.00",
        description: "( Stuffed with prosciutto & provolone, breadcrumbed & topped with a free-range egg & black summer truffle. )",
        meal: "LUNCH"
    },
    {
        name: "OUR FAMOUS PRAWN LINGUINE",
        price: "$22.00",
        description: "( Fried garlicky prawns, fennel, tomatoes, chilli, saffron, fish broth & lemony rocket. )",
        meal: "DINNER"
    },
    {
        name: "FRESH START SAMPLER",
        price: "$37.00",
        description: "( Start your day with a mix of low fat vanilla yogurt, fresh seasonal fruit topped with our honey mix )",
        meal: "BREAKFAST"
    },
    {
        name: "ITALIAN STEAK FRITES",
        price: "$42.00",
        description: "( Flash-grilled prime beef steak, served with Italian-spiced skinny fries & crunchy vegetable slaw. )",
        meal: "LUNCH"
    },
    {
        name: "MONTEPULCIANO D’ABRUZZO",
        price: "$19.00",
        description: " Cherry & chocolate flavours are typical of this well-known grape )",
        meal: "DINNER"
    },
]

let items = document.querySelector('.menu-items');
let all = document.querySelector('.funcAll');
let breakFast = document.querySelector('.funcBreakfast');
let lunch = document.querySelector('.funcLunch');
let dinner = document.querySelector('.funcDinner');
let list;


window.addEventListener('DOMContentLoaded', funcall);

all.addEventListener('click', funcall);
breakFast.addEventListener('click', funcbreak);
lunch.addEventListener('click', funclunch);
dinner.addEventListener('click', funcdinner);

function funcall() {
    list = "";
    menu.forEach((menu) => {
        list += `<span class="menu-items-add">
        <p class="menu-items-add-header">${menu.name}.......${menu.price}</p>
        <p class="menu-items-add-description">${menu.description}</p>
    </span>`
    });
    items.innerHTML = list;
    // console.log("HYY");
}
function funcbreak() {
    list = "";
    menu.forEach((menu) => {
        if (menu.meal == 'BREAKFAST') {
            list += `<span class="menu-items-add">
        <p class="menu-items-add-header">${menu.name}.......${menu.price}</p>
        <p class="menu-items-add-description">${menu.description}</p>
    </span>`
        }
    });
    items.innerHTML = list;
    // console.log("HYY");
}
function funclunch() {
    list = "";
    menu.forEach((menu) => {
        if (menu.meal == 'LUNCH') {
            list += `<span class="menu-items-add">
        <p class="menu-items-add-header">${menu.name}.......${menu.price}</p>
        <p class="menu-items-add-description">${menu.description}</p>
    </span>`
        }
    });
    items.innerHTML = list;
    // console.log("HYY");
}
function funcdinner() {
    list = "";
    menu.forEach((menu) => {
        if (menu.meal == 'DINNER') {
            list += `<span class="menu-items-add">
        <p class="menu-items-add-header">${menu.name}.......${menu.price}</p>
        <p class="menu-items-add-description">${menu.description}</p>
    </span>`
        }
    });
    items.innerHTML = list;
    // console.log("HYY");
}

let imageContainer = document.querySelector('.img-container-pop');
let image = document.querySelector('.image-box-img');
let gal = document.querySelector('.gallery');
function openImg(pic) {
    imageContainer.classList.remove('display-box');
    gal.classList.add('display-box');
    image.src = pic;
}
function closeImg() {
    imageContainer.classList.add('display-box');
    gal.classList.remove('display-box');
}


let reviews = [
    {
        name: "- ALEX MERPHY",
        description: "This is one of the best restaurants I have visited. Everything was excellent. The food was served in a very creative way. Would recommend to all."
    },
    {
        name: "- JULY MAO",
        description: "Your Restaurant is the best family place for me. It is already a tradition for us to visit this place every Friday evening. I really enjoy everything."
    },
    {
        name: "- JOHN DOE",
        description: "This is where I go every time I feel overwhelmed with nostalgia or just want to taste the real pasta one more time. Highly recommend"
    }
]

let sec1 = document.querySelector('.section-21');
let sec2 = document.querySelector('.section-22');

let k=0;
function funcReviews() {
    if(k>2)
    {
        k=0;
    }
    sec1.innerText = reviews[k].description;
    sec2.innerText = reviews[k].name;
    k++;
    console.log(k);
    setTimeout(funcReviews,3000);
}
funcReviews();