const product = [
    {
        id:0,
        image: "https://m.media-amazon.com/images/I/51lyxbNMdmL._AC_UF1000,1000_QL80_.jpg",
        title:'Silk Fruit and Nuts',
        price: 120
    },
    {
        id:2,
        image: "https://m.media-amazon.com/images/I/51A11QM92LL._AC_UF1000,1000_QL80_.jpg",
        title:' Silk Oreo',
        price:150 
    },
    {
        id:3,
        image: "https://m.media-amazon.com/images/I/613+Pkd9ROL._AC_UF1000,1000_QL80_.jpg",
        title:' Silk Bubbly',
        price: 130
    },
    {
        id:4,
        image: "https://m.media-amazon.com/images/I/71CWxpJENhL._AC_UF1000,1000_QL80_.jpg",
        title:'Ferrero Rocher',
        price: 895
    },
    {
        id:5,
        image: "https://rukminim2.flixcart.com/image/850/1000/kfikya80/chocolate/7/g/z/450-dark-chocolate-made-from-finest-cocoa-beans-amul-original-imafvyggrsmkb5cr.jpeg?q=90" ,
        title:'Amul Dark Chocolate',
        price: 160
    },
    {
        id:6,
        image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/chocolate/z/c/2/150-white-limon-na-1-amul-original-imagzfzzyqgffvg7.jpeg?q=20" ,
        title:'Amul White Chocolate',
        price: 140
    },
    {
        id:7,
        image: "https://toppng.com/uploads/thumbnail/kitkat-4-fingers-kit-kat-11562942497vrtf5it4yd.png",
        title:'Kit Kat',
        price: 100
    },
    {
        id:8,
        image: "https://m.media-amazon.com/images/I/81MOG5D3HYL._AC_UF1000,1000_QL80_.jpg",
        title:'Perk Bites',
        price: 160
    },
    {
        id:9,
        image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/chocolate/q/5/w/-original-imagzjaksftsw78v.jpeg?q=90",
        title:'Munch Bites',
        price: 170
    },
    {
        id:10,
        image: "https://rukminim1.flixcart.com/image/850/1000/jwxuvm80/syrup/t/3/e/1300-syrup-hershey-s-original-imafhcn9v63zvyep.jpeg?q=90",
        title:`HERSHEY'S Syrup Chocolate`,
        price: 120
    },
    {
        id:11,
        image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/chocolate/i/w/f/-original-imagqrmbuxnqygpw.jpeg?q=90",
        title:'5 Star Bites',
        price: 140
    },
    {
        id:1,
        image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/chocolate/k/s/r/80-bournvile-rasin-and-nut-1-cadbury-original-imagpf79vfymhedm.jpeg?q=20",
        title:'BOURNVILE RASIN AND NUT',
        price:160 
    }
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2> ₹  ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
} 

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = " ₹  "+0+".00";
    }
    if(cart.length >8){
        alert("Maximum 8 chocolates allowed.");
        this.cart= false;
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = " ₹  "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'> ₹  ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}