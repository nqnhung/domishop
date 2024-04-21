let products =[
    {
        name: 'Nutrabolics Hydropure 100% Hydrolyzed <br> Whey Protein 4.5lbs',
        image1: './image/wheyinfo.jpg',
        image2: './image/whey2.jpg',
        old_price: '2.050.000d',
        curr_price: '1.650.000d'
    },
    {
        name: 'Sữa ngôi sao phương nam 1.284g',
        image1: './image/npn128.jpg',
        image2: './image/nsp.jpg',
        old_price: '78.000d',
        curr_price: '63.000d'
    },
    {
        name: 'Sữa ngôi sao phương nam lon 380g',
        image1: './image/nspn1.jpg',
        image2: './image/lonnspn.jpg',
        old_price: '24.000d',
        curr_price: '22.050d'
    },
    {
        name: 'Sữa ngôi sao phương nam giấy 380g',
        image1: './image/npsng.png',
        image2: './image/nspng.jpg',
        old_price: '24.000d',
        curr_price: '22.050d'
    },
    {
        name: 'Nạp trực tiếp <br> Mobifone OTP 50',
        image1: './image/mb50.jfif',
        image2: './image/mb50.jfif',
        old_price: '50.000d',
        curr_price: '48.500d'
    },
    {
        name: 'Nạp trực tiếp <br> Viettel 50',
        image1: './image/vt50k.jfif',
        image2: './image/vt50k.jfif',
        old_price: '50.000d',
        curr_price: '48.500d'
    },
    {
        name: 'Nạp trực tiếp <br> Vina 50',
        image1: './image/vina50.jfif',
        image2: './image/vina50.jfif',
        old_price: '50.000d',
        curr_price: '48.500d'
    },
    {
        name: 'Nạp trực tiếp Mobifone OTP 100',
        image1: './image/mobi100.jpg',
        image2: './image/mobi100.jpg',
        old_price: '100.000d',
        curr_price: '95.000d'
    },
    {
        name: 'Nạp trực tiếp <br> Viettel 100',
        image1: './image/viettel100.jpg',
        image2: './image/viettel100.jpg',
        old_price: '100.000d',
        curr_price: '95.000d'
    },
    {
        name: 'Nạp trực tiếp <br> Vina/Itelecom 100',
        image1: './image/vina100.jpg',
        image2: './image/vina100.jpg',
        old_price: '100.000d',
        curr_price: '93.000d'
    },
    {
        name: 'Nạp/Thẻ cào <br> Vietnamobile 100',
        image1: './image/vnmb100k.png',
        image2: './image/vnmb.jfif',
        old_price: '100.000d',
        curr_price: '95.000d'
    },
    {
        name: 'Lắp đặt hợp đồng <br> ưu đãi Wifi',
        image1: './image/wifi.png',
        image2: './image/wifi2.jpg',
        old_price: '100.000d',
        curr_price: '95.000d'
    },
]

let product_list = document.querySelector('#products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">MUA NGAY<a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart'></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                            ${e.name}
                        </div>
                        <div class="product-card-price">
                            <span><del>${e.old_price}</del></span>
                            <span class="curr-price">${e.curr_price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderProducts(products)

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))