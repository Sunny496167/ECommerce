const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "AIR FORCE",
        price: 199,
        colors: [
            {
                code: "white",
                img: "./IMG/air.png",
            },
            {
                code: "red",
                img: "./IMG/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "JORDON",
        price: 149,
        colors: [
            {
                code: "white",
                img: "./IMG/jordan.png",
            },
            {
                code: "blue",
                img: "./IMG/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "BLAZER",
        price: 139,
        colors: [
            {
                code: "white",
                img: "./IMG/blazer.png",
            },
            {
                code: "black",
                img: "./IMG/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "CRATER",
        price: 129,
        colors: [
            {
                code: "white",
                img: "./IMG/creter.png",
            },
            {
                code: "teal",
                img: "./IMG/creter2.png",
            },
        ],
    },
    {
        id: 5,
        title: "HIPPI",
        price: 169,
        colors: [
            {
                code: "white",
                img: "./IMG/hippi.png",
            },
            {
                code: "black",
                img: "./IMG/hippi2.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // change the chosen product
        choosenProduct = products[index];

        // change texts of current products
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        // assign new colors
        currentProductColors.forEach((color, idx) => {
            color.style.backgroundColor = choosenProduct.colors[idx].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener('click', () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((s) => {
            s.style.backgroundColor = "white";
            s.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButtons = document.querySelectorAll(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButtons.forEach((button) => {
    button.addEventListener("click", () => {
        payment.style.display = "flex";
    });
});

payment.addEventListener("click", (e) => {
    if (e.target === payment || e.target === close) {
        payment.style.display = "none";
    }
});
