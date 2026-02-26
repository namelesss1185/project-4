let links = document.querySelector(".auth-links");
let user = document.querySelector(".username2");
let main = document.querySelector(".main_login");
let rows = document.querySelectorAll(".card_main");
let cart_rows = document.querySelectorAll(".cart_card_main");
let card_added = document.querySelector(".added_cart");
let logoutBtn = document.querySelector(".logout");
let active = document.querySelector(".kart_active");
let price2 = document.querySelector(".cart_price")
let shop = document.querySelectorAll(".shop");
let check = localStorage.getItem("check") === "true"
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let cart_btn = document.querySelectorAll(".card_button")
let count_cart = document.querySelector(".shop_cart span");
let search = document.querySelector(".search_catagory");
let search_i = document.querySelector(".seach_input");
let selectedCategory = "all";
let cart_total = 0;
const dropBtn = document.querySelector(".s_b");
const dropMenu = document.querySelector(".drop_search");
let count = 0;
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let card_item = [
    {
        id : 1,
        title : "Resident Evil Requiem",
        descreption : "Requiem for the dead. Nightmare for the living. Prepare to escape death in a heart-stopping experience that will chill you to your core.",
        genre1 : "Action",
        genre2 : "Horror",
        genre3 : "Survival",
        price : 70,
        imgurl : "images/img1_1.png"
    },
    {
        id : 2,
        title : "Devil May Cry 5",
        descreption : "The ultimate Devil Hunter is back in style, in the game action fans have been waiting for.",
        genre1 : "Action",
        genre2 : "Slash",
        genre3 : "Gore",
        price : 60,
        imgurl : "images/img1_2.png"
    },
    {
        id : 3,
        title : "Mega Man Mavrick Hunter X",
        descreption : "Mega Man Maverick Hunter X is a remake of the original Mega Man X title that first appeared on the Super Nintendo Entertainment System.",
        genre1 : "Action",
        genre2 : "Platfromer",
        genre3 : "Classic",
        price : 60,
        imgurl : "images/img1_3.png"
    },
    {
        id : 4,
        title : "Monster Hunter Wilds",
        descreption : "The unbridled force of nature runs wild and relentless, with environments transforming drastically from one moment to the next. This is a story of monsters and humans and their struggles to live in harmony in a world of duality.",
        genre1 : "Action",
        genre2 : "Hunting",
        genre3 : "Co-op",
        price : 70,
        imgurl : "images/img1_4.png"
    },
    {
        id : 5,
        title : "PRAGMATA",
        descreption : "Capcom’s newest IP—PRAGMATA. An all-new Science Fiction action adventure with its own unique hacking twist! It is the near future, and protagonists Hugh and his android companion Diana, must work together as they make their way through the cold lunar research station.",
        genre1 : "Action",
        genre2 : "Adventure",
        genre3 : "Sci-fi",
        price : 70,
        imgurl : "images/img1_5.png"
    },
    {
        id : 6,
        title : "Dragon's Dogma 2",
        descreption : "Dragon’s Dogma 2 is a single player, narrative driven action-RPG that challenges the players to choose their own experience – from the appearance of their Arisen, their vocation, their party, how to approach different situations and more - in a truly immersive fantasy world.",
        genre1 : "Action RPG",
        genre2 : "RPG",
        genre3 : "Open World",
        price : 70,
        imgurl : "images/img1_6.png"
    },
    {
        id : 7,
        title : "Apollo Justice: Ace Attorney Trilogy",
        descreption : "Join rookie attorney Apollo Justice and his mentor, the legendary Phoenix Wright, in this collection of 3 games! This title features 16 episodes (including previously DLC-only episodes) and supports English, French, German, Japanese Korean, and Traditional and Simplified Chinese.",
        genre1 : "Adventure",
        genre2 : "Detective",
        genre3 : "Anime",
        price : 60,
        imgurl : "images/img1_7.png"
    },
    {
        id : 8,
        title : "Onimusha: Way of the Sword",
        descreption : "Fight through bloodstained battlefields of intense swordplay action. Explore the historic Japanese capital of Edo-era Kyoto, twisted by malevolent clouds of Malice.With every stage cloaked in mystery, danger and intrigue. Battle against monstrosities from the underworld known as Genma in a tale of dark fantasy.",
        genre1 : "Action",
        genre2 : "Action RPG",
        genre3 : "Gore",
        price : 70,
        imgurl : "images/img1_8.png"
    },
    {
        id : 9,
        title : "Street Fighter™ 6",
        descreption : "Here comes Capcom’s newest challenger! Street Fighter™ 6 launches worldwide on June 2nd, 2023 and represents the next evolution of the Street Fighter™ series! Street Fighter 6 spans three distinct game modes, including World Tour, Fighting Ground and Battle Hub.",
        genre1 : "Action",
        genre2 : "Fighting",
        genre3 : "PVP",
        price : 70,
        imgurl : "images/img1_9.png"
    }
]

let catagory = [
    {
        id : 1,
        title : "All Categories"
    },
    {
        id : 2,
        title : "Search by name"
    },
    {
        id : 3,
        title : "Search by genre"
    }
]

function placecatagory(){
    let x = catagory.map((i) => {
        return `
        <li><a class="dropdown-item text-secondary drop_search2" href="#">${i.title}</a></li>
        `
    })
    search.innerHTML = x.join("");
}

if (search){
    placecatagory();
}

function placeitem(data){
    rows.forEach(row => row.innerHTML = "");

    data.forEach((item, index) => {

        let existing = cart.find(cartItem => cartItem.id === item.id); // check if in cart
        let btnText = existing ? "Remove from Cart" : "Add to Cart";
        let btnClass = existing ? "remove_cart" : "";
        let isFav = favorites.includes(item.id);
        let heartClass = isFav ? "fa-solid" : "fa-regular";

        let card = `
            <div class="card_image">
                <img src="${item.imgurl}" alt="">
                <div class="card_overlay"></div>
                <div class="card_text">
                    <h2 style="color: rgb(255, 255, 255);">${item.title}</h2>
                    <p class="text-secondary">${item.descreption}</p>
                    <div class="card_genres">
                        <div class="card_genre " catagory="action">
                            <span>${item.genre1}</span>
                        </div>
                        <div class="card_genre " catagory="horror">
                            <span>${item.genre2}</span>
                        </div>
                        <div class="card_genre " catagory="survival">
                            <span>${item.genre3}</span>
                        </div>
                    </div>
                    <div class="card_buttons w-100 mt-4 d-flex justify-content-center gap-2">
                        <button class="card_button btn rounded-5 w-75 search_button2 ${btnClass}" onClick="addToCart(${item.id}, this)">${btnText}</button>
                        <a href="#" class="card_button heart" data-id="${item.id}">
                            <i class="${heartClass} fa-heart"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;

        let rowIndex = Math.floor(index / 3);

        if(rows[rowIndex]){
            rows[rowIndex].innerHTML += card;
        }
        if(check){
            let newHearts = rows[rowIndex].querySelectorAll(".heart");
        newHearts.forEach(h => {
            h.addEventListener("click", function(e){
                e.preventDefault()
                let icon = this.querySelector("i")
                let id = Number(this.dataset.id)
                let itemObj = card_item.find(obj => obj.id === id);
                
                if(favorites.includes(id)){
                    favorites= favorites.filter(f => f !== id)
                }else{
                    favorites.push(id)
                }
                localStorage.setItem("favorites", JSON.stringify(favorites));
                icon.classList.toggle("fa-regular");
                icon.classList.toggle("fa-solid");
            })
        })
        }
        
    });
    
}

function renderCart(){

    cart_total = 0;

    cart_rows.forEach(row => row.innerHTML = "");

    card_added.innerHTML = "<hr><a href='personal_cart.html'>Show your carts</a>";

    let totalQuantity = 0;

    cart.forEach((cartItem, index) => {

        let product = card_item.find(p => p.id === cartItem.id);

        totalQuantity += 1;

        card_added.insertAdjacentHTML(
            "afterbegin",
            `<div class="shop" data-id="${product.id}">
                <div class="shop_title">
                    <p style="font-weight: bold;">${product.title}</p>
                    <div class="shop_button">
                        <button onclick="decrease_count(${product.id})">-</button>
                        <p class="item_count">${cartItem.quantity}</p>
                        <button onclick="increase_count(${product.id})">+</button>
                    </div>
                </div>
                <div class="shop_price">
                    <span>Total : </span>
                    <p class="item_total">$${product.price * cartItem.quantity}</p>
                </div>
            </div>`
        );

        cart_bar(cartItem, index);
    });

    count_cart.innerHTML = totalQuantity;

    if (price2) {
        price2.innerHTML = "$" + cart_total;
    }
}

renderCart();

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

if (rows.length > 0) {
    placeitem(card_item);
}

function cart_bar(cartItem, index){

    let product = card_item.find(p => p.id === cartItem.id);
    let product_price = product.price * cartItem.quantity
    let cartHTML = `
        <div class="cart_card">
            <div class="cart_card_img">
                <img src="${product.imgurl}" alt="">
            </div>
            <div class="cart_card_text">
                <h2>${product.title}</h2>
                <p>$${product_price}</p>

                <div class="card_genres">
                    <div class="card_genre">
                        <span>${product.genre1}</span>
                    </div>
                    <div class="card_genre">
                        <span>${product.genre2}</span>
                    </div>
                    <div class="card_genre">
                        <span>${product.genre3}</span>
                    </div>
                </div>

                <div class="shop_button">
                    <button onclick="decrease_count(${product.id})">-</button>
                    <p>${cartItem.quantity}</p>
                    <button onclick="increase_count(${product.id})">+</button>
                    <button class="remove_cart card_button btn rounded-5 search_button2" onClick="addToCart(${product.id}, this)">Remove from Cart</button>
                </div>
            </div>
        </div>
    `;
    cart_total += product_price

    if (price2) {
    price2.innerHTML = "$" + cart_total;
    }

    let rowIndex = Math.floor(index / 2);

    if(cart_rows[rowIndex]){
        cart_rows[rowIndex].innerHTML += cartHTML;
    }
}

function placeFavorites() {

    let rows2 = document.querySelectorAll(".card_main2");
    rows2.forEach(row => row.innerHTML = "");

    let favoriteItems = favorites
        .map(id => card_item.find(item => item.id === id))
        .filter(item => item);

    favoriteItems.forEach((item, index) => {

        let card = `
        <div class="card_image">
            <img src="${item.imgurl}" alt="">
            <div class="card_overlay"></div>
            <div class="card_text">
                <h2 style="color: white;">${item.title}</h2>
                <p class="text-secondary">${item.descreption}</p>
                <div class="card_genres">
                    <div class="card_genre"><span>${item.genre1}</span></div>
                    <div class="card_genre"><span>${item.genre2}</span></div>
                    <div class="card_genre"><span>${item.genre3}</span></div>
                </div>
                <div class="card_buttons w-100 mt-4 d-flex justify-content-center gap-2">
                    <a href="#" class="card_button heart" data-id="${item.id}">
                        <i class="fa-solid fa-heart"></i>
                    </a>
                </div>
            </div>
        </div>
        `;

        let rowIndex = Math.floor(index / 3);

        if (rows2[rowIndex]) {
            rows2[rowIndex].innerHTML += card;
        }
    });

    let hearts = document.querySelectorAll(".card_main2 .heart");

    hearts.forEach(h => {
        h.addEventListener("click", function(e){
            if (!check) {
            window.location.href = "log_in.html";
            } else  {
            e.preventDefault();

            let id = Number(this.dataset.id);

            favorites = favorites.filter(f => f !== id);

            localStorage.setItem("favorites", JSON.stringify(favorites));

            placeFavorites();
    }
        });
    });
}
let clicked = document.addEventListener("click", function (e) {e.target.closest(".heart")})

placeFavorites();

let clicked2 = document.addEventListener("click", function (e) {e.target.closest(".card_button")})


function addToCart(id, btn){
     if (!check) {
        window.location.href = "log_in.html";
    } else  {
    let existing = cart.find(item => item.id === id);

    if(existing){
        cart = cart.filter(item => item.id !== id);

        btn.classList.remove("remove_cart");
        btn.textContent = "Add to Cart";

    } else {
        cart.push({
            id: id,
            quantity: 1
        });

        btn.classList.add("remove_cart");
        btn.textContent = "Remove from Cart";
    }

    saveCart();
    renderCart();
}
}

function increase_count(id){
    let item = cart.find(i => i.id === id);

    if(item){
        item.quantity++;
        saveCart();
        renderCart();
    }
}

function decrease_count(id){
    let item = cart.find(i => i.id === id);

    if(item){
        item.quantity--;

        if(item.quantity <= 0){
            cart = cart.filter(i => i.id !== id);
        }

        saveCart();
        renderCart();
    }
}




if (active && card_added) {
    active.addEventListener("click", () => {
        card_added.classList.toggle("show");
    });
}

if (search) {
    search.addEventListener("click", function (e) {

    if (e.target.classList.contains("drop_search2")) {

        dropBtn.innerHTML = e.target.innerText;

        let text = e.target.innerText.toLowerCase();

        if (text.includes("all")) {
            selectedCategory = "all";
        } 
        else if (text.includes("name")) {
            selectedCategory = "name";
        } 
        else if (text.includes("genre")) {
            selectedCategory = "genre";
        }
    }
});
}

if (search_i){
    search_i.addEventListener("input", function () {

    let value = this.value.toLowerCase().trim();

    let filtered = card_item.filter(item => {

        if (selectedCategory === "all") {
            return (
                item.title.toLowerCase().includes(value) ||
                item.genre1.toLowerCase().includes(value) ||
                item.genre2.toLowerCase().includes(value) ||
                item.genre3.toLowerCase().includes(value)
            );
        }

        else if (selectedCategory === "name") {
            return item.title.toLowerCase().includes(value);
        }

        else if (selectedCategory === "genre") {
            return (
                item.genre1.toLowerCase().includes(value) ||
                item.genre2.toLowerCase().includes(value) ||
                item.genre3.toLowerCase().includes(value)
            );
        }

    });

    placeitem(filtered);
});
}
if (logoutBtn) {
    logoutBtn.addEventListener("click", function(e) {
        e.preventDefault();
        localStorage.clear();
        location.reload();
    });
}


if(localStorage.getItem("username")){
    links.remove();
    main.style.display ="flex";
    user.style.display ="block";
    user.innerHTML += "Hello, "
    user.innerHTML += localStorage.getItem("username");
}