const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Human Hair (Curly)",
        price: 270,
        colors: [
            {
                code: "rgb(125, 10, 10",
                img: "./img/curly1.jpg",
            },
            {
                code: "black",
                img: "./img/curly2.jpg",
            },
        ],
    },
    {
        id: 1,
        title: "Human Hair (Straight)",
        price: 240,
        colors: [
            {
                code: "rgb(240, 206, 154)",
                img: "./img/straight1.jpg",
            },
            {
                code: "black",
                img: "./img/straight2.jpg",
            },
        ],
    },
    {
        id: 1,
        title: "Human Hair (Wavy)",
        price: 250,
        colors: [
            {
                code: "rgb(154, 78, 24)",
                img: "./img/IMG_5.jpg",
            },
            {
                code: "black",
                img: "./img/wavey2.jpg",
            },
        ],
    },
    {
        id: 1,
        title: "Synthetic Hair (Straight)",
        price: 140,
        colors: [
            {
                code: "blanchedalmond",
                img: "./img/sstraight1.jpg",
            },
            {
                code: "rgb(234, 210, 175)",
                img: "./img/sstraight2.jpg",
            },
        ],
    },
    {
        id: 1,
        title: "Synthetic Hair (Wavy)",
        price: 150,
        colors: [
            {
                code: "rgb(231, 192, 135)",
                img: "./img/swavey1.jpg",
            },
            {
                code: "rgb(250, 219, 172)",
                img: "./img/swavey2.jpg",
            },
        ],
    },
    
]
// app.js

const cartItems = [];
let cartTotal = 0;

// Function to update the cart UI
function updateCartUI() {
    const cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.title} - $${item.price}`;
        cartItemsElement.appendChild(li);
    });

    const cartTotalElement = document.getElementById('cartTotal');
    cartTotalElement.textContent = `$${cartTotal}`;
}

// Function to add an item to the cart
function addToCart(item) {
    cartItems.push(item);
    cartTotal += item.price;
    updateCartUI();
}

document.querySelectorAll('.buyButton').forEach((button, index) => {
    button.addEventListener('click', () => {
        const selectedItem = products[index];
        addToCart(selectedItem);
    });
});



// Your other existing JavaScript code...

let chossenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //chnage the current slide
        wrapper.style.transform = `translatex(${-100 * index}vw)`;

        // change the choosen product
        choosenProduct = products[index]

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img

        // assing new colors
        currentProductColors.forEach((color,index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black"
        size.style.color = "white"
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});

// JavaScript content remains the same for existing functionality

// Function to handle review form submission
document.querySelector('.reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const rating = document.getElementById('rating').value;
    const reviewText = document.getElementById('reviewText').value;
    if (rating && reviewText) {
        // Assuming there's a function to add review to the DOM
        addReview(rating, reviewText);
        // Reset form fields after submission
        document.getElementById('rating').value = '5';
        document.getElementById('reviewText').value = '';
    } else {
        alert('Please provide both rating and review text.');
    }
});

// Function to add review to the DOM
function addReview(rating, reviewText) {
    const reviewsContainer = document.querySelector('.reviews');
    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');
    reviewDiv.innerHTML = `
        <div class="reviewRating">${'★'.repeat(parseInt(rating))}</div>
        <p class="reviewText">${reviewText}</p>
    `;
    reviewsContainer.appendChild(reviewDiv);
}

