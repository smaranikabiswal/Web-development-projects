const products = [
    {
        id:1,
        name:'Women Maxi Dress',
        price:2499,
        category:'women',
        img:'img/MaxiDress.jpeg',
        images:['img/MaxiDress.jpeg', 'img/MaxiDress2.jpeg', 'img/maxiDress3.jpeg'],
        colors:['#E0AC9D', '#FAF9F6', '#2C3E50'],
        desc:'Elegant flowing maxi dress with vintage floral patterns and airy chiffon sleeves.'
    },
    {
        id:2,
        name:'Men Leather Jacket',
        price:5999,
        category:'men',
        img:'img/leatherJacket.jpeg', 
        images:['img/leatherJacket.jpeg', 'img/LeatherJacket2.jpeg'],
        colors:['#1A1A1A', '#4A2C2A'],
        desc:'Premium genuine leather biker jacket with a tailored fit and silver hardware.'
    },
    {
        id:3,
        name:'Kids T-Shirt',
        price:799,
        category:'kids',
        img:'img/kidsCartoonShirt.jpeg',
        images:['img/kidsCartoonShirt.jpeg', 'img/kidsCartoonShirt2.jpeg'],
        colors:['#FFB6C1', '#98FB98'],
        desc:'Soft 100% organic cotton printed tee with playful illustrations.'
    },
    {
        id:4,
        name:'Sports Shoes',
        price:3499,
        category:'shoes',
        img:'img/SportsShoes.jpeg',
        images:['img/SportsShoes.jpeg', 'img/sportsShoes2.jpeg'],
        colors:['#F8F9FA', '#343A40'],
        desc:'Breathable high-performance mesh running shoes with responsive cushioning.'
    },
    {
        id:5,
        name:'Luxury Watch',
        price:12999,
        category:'women',
        img:'img/steelwatch.jpeg',
        images:['img/steelwatch.jpeg', 'img/SteelWatch2.jpeg', 'img/SteelWatch3.jpeg'],
        colors:['#C0C0C0', '#D4AF37'],
        desc:'Automatic mechanical timepiece featuring sapphire crystal and a steel bracelet.'
    },
    {
        id:6,
        name:'Women Perfume',
        price:2999,
        category:'women',
        img:'img/floralPerfume.jpeg',
        images:['img/floralPerfume.jpeg', 'img/floralPerfume2.jpeg'],
        colors:['#F8C8DC', '#DDA0DD'],
        desc:'Long-lasting floral fragrance with notes of fresh jasmine and pink rose.'
    },
    {
        id:7,
        name:'Slim Fit Jeans',
        price:1999,
        category:'men',
        img:'img/skinnyjeans.jpeg',
        images:['img/skinnyjeans.jpeg'],
        colors:['#212F3C', '#3498DB'],
        desc:'High-stretch slim fit denim designed for durability and daily comfort.'
    },
    {
        id:8,
        name:'Girls Dress',
        price:1899,
        category:'kids',
        img:'img/girlspartywear.jpeg',
        images:['img/girlspartywear.jpeg', 'img/girlspartywear2.jpeg'],
        colors:['#FFD1DC', '#FFFFFF'],
        desc:'Sequined party dress with a tiered tulle skirt for special celebrations.'
    },
    {
        id:11,
        name:'Denim Jacket',
        price:2799,
        category:'women',
        img:'img/denimjacket.jpeg',
        images:['img/denimjacket.jpeg', 'img/denimjacket2.jpeg'],
        colors:['#5D8AA8', '#1C1C1C'],
        desc:'Classic distressed denim jacket with a relaxed, vintage-inspired unisex fit.'
    },
    {
        id:9,
        name:'Formal Shoes',
        price:4499,
        category:'shoes',
        img:'img/formalboot.jpeg',
        images:['img/formalboot.jpeg', 'img/womenformalboot.jpeg'],
        colors:['#3E2723', '#000000'],
        desc:'Hand-polished Italian leather oxfords, ideal for professional office wear.'
    },
    {
        id:10,
        name:'Men Perfume',
        price:1799,
        category:'men',
        img:'img/menperfume.jpeg',
        images:['img/menperfume.jpeg'],
        colors:['#2C3E50', '#8B4513'],
        desc:'Sophisticated woody oriental fragrance with hints of amber and spice.'
    },
    {
        id:12,
        name:'Boys Shoes',
        price:1299,
        category:'kids',
        img:'img/schoolboot.jpeg',
        images:['img/schoolboot.jpeg', 'img/schoolboot2.jpeg'],
        colors:['#000000', '#4B3621'],
        desc:'Durable scuff-resistant leather school shoes built for everyday use.'
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentProducts = products;
let currentPage = 1;
const productsPerPage = 8;
let currentProduct = null;
let currentQty = 1;
let currentColor = '#000000';


function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    document.querySelector('.nav-menu').classList.remove('show');
    
    if (pageId === 'products') initProducts();
    if (pageId === 'home') loadFeatured();
    if (pageId === 'cart') loadCart();
    updateCartCount();
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function toggleMenu() {
    document.querySelector('.nav-menu').classList.toggle('show');
}


function initProducts() {
    filterCategory('all');
}

function filterCategory(category) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    currentProducts = category === 'all' ? products : products.filter(p => p.category === category);
    currentPage = 1;
    renderProducts();
}

function renderProducts() {
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const pageProducts = currentProducts.slice(start, end);
    
    document.getElementById('productGrid').innerHTML = pageProducts.map(product => `
        <div class="product-card" onclick="showProductDetail(${product.id})">
            <img src="${product.img}" alt="${product.name}" loading="lazy">
            <div class="product-card-content">
                <div class="category">${product.category.toUpperCase()}</div>
                <h3>${product.name}</h3>
                <div class="price">₹${product.price.toLocaleString('en-IN')}</div>
            </div>
        </div>
    `).join('');
    
    const totalPages = Math.ceil(currentProducts.length / productsPerPage);
    document.getElementById('pageInfo').textContent = `Page ${currentPage} of ${totalPages}`;
}

function changePage(direction) {
    const totalPages = Math.ceil(currentProducts.length / productsPerPage);
    currentPage += direction;
    if (currentPage < 1) currentPage = totalPages;
    if (currentPage > totalPages) currentPage = 1;
    renderProducts();
}


function showProductDetail(id) {
    currentProduct = products.find(p => p.id === id);
    if (!currentProduct) return;
    
    document.getElementById('prodName').textContent = currentProduct.name;
    document.getElementById('prodDesc').textContent = currentProduct.desc;
    document.getElementById('basePrice').textContent = `₹${currentProduct.price.toLocaleString('en-IN')}`;
    document.getElementById('mainImg').src = currentProduct.img;
    document.getElementById('mainImg').alt = currentProduct.name;
    
    currentQty = 1;
    currentColor = currentProduct.colors[0];
    document.getElementById('qty').textContent = currentQty;
 
    document.getElementById('thumbnails').innerHTML = currentProduct.images.map(img => 
        `<img src="${img}" alt="Thumbnail" onclick="changeMainImg('${img}')" style="border: 4px solid transparent;">`
    ).join('');
    
   
    document.getElementById('colors').innerHTML = currentProduct.colors.map(color => 
        `<span style="background-color:${color};" onclick="changeColor('${color}')"></span>`
    ).join('');
    
    updateTotalPrice();
    showPage('product-detail');
}

function changeMainImg(imgSrc) {
    document.getElementById('mainImg').src = imgSrc;
    document.querySelectorAll('#thumbnails img').forEach(img => {
        img.style.border = img.src === imgSrc ? '4px solid #ff6b6b' : '4px solid transparent';
    });
}

function updateQty(change) {
    currentQty = Math.max(1, currentQty + change);
    document.getElementById('qty').textContent = currentQty;
    updateTotalPrice();
}

function changeColor(color) {
    currentColor = color;
    document.querySelectorAll('#colors span').forEach((span, index) => {
        if (currentProduct.colors[index] === color) {
            span.classList.add('active');
        } else {
            span.classList.remove('active');
        }
    });
    updateTotalPrice();
}

function updateTotalPrice() {
    if (currentProduct) {
        const total = currentProduct.price * currentQty;
        document.getElementById('totalPrice').textContent = `₹${total.toLocaleString('en-IN')}`;
    }
}

function addToCartFromDetail() {
    if (!currentProduct) return;
    const item = {
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        qty: currentQty,
        color: currentColor,
        img: document.getElementById('mainImg').src
    };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${currentQty}x ${currentProduct.name} added to cart!`);
    updateCartCount();
}


function loadCart() {
    const cartItems = document.getElementById('cartItems');
    if (cart.length === 0) {
        cartItems.innerHTML = '<div style="text-align:center;padding:4rem;color:#666;"><h3>Your cart is empty</h3><p><button class="btn btn-primary" onclick="showPage(\'products\')">Continue Shopping</button></p></div>';
        document.getElementById('cartTotal').textContent = '0';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-item-content">
                <h3>${item.name}</h3>
                <p>₹${item.price.toLocaleString('en-IN')} × ${item.qty}</p>
                <p class="item-total">₹${(item.price * item.qty).toLocaleString('en-IN')}</p>
            </div>
            <div class="cart-actions">
                <button onclick="updateCartQty(${item.id}, -1)">−</button>
                <button onclick="updateCartQty(${item.id}, 1)">+</button>
                <button onclick="removeFromCart(${item.id})" class="remove-btn">Remove</button>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    document.getElementById('cartTotal').textContent = total.toLocaleString('en-IN');
}

function updateCartQty(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.qty = Math.max(1, item.qty + change);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
        updateCartCount();
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    updateCartCount();
}

function clearCart() {
    if (confirm('Clear all items from cart?')) {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
        updateCartCount();
    }
}

function proceedToOrder() {
    if (cart.length === 0) return alert('Your cart is empty!');
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    alert(`Order placed successfully!\nTotal: ₹${total.toLocaleString('en-IN')}\nThank you for shopping at Aurora!`);
    clearCart();
}

function loadFeatured() {
    const featured = products.slice(0, 4);
    document.getElementById('featuredProducts').innerHTML = featured.map(product => `
        <div class="product-card" onclick="showProductDetail(${product.id})">
            <img src="${product.img}" alt="${product.name}">
            <div class="product-card-content">
                <h3>${product.name}</h3>
                <div class="price">₹${product.price.toLocaleString('en-IN')}</div>
            </div>
        </div>
    `).join('');
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cartCount').textContent = count || 0;
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', () => filterCategory(btn.dataset.category));
    });
    
   
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! We will contact you within 24 hours.');
            contactForm.reset();
        });
    }
    
    showPage('home');
    updateCartCount();
});
