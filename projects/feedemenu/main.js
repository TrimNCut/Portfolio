const items = [
	{
		id : 1,
		title: "French Toast",
		price: "5 99",
		image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQAmpAPPrg8pmQSyg-_sMOnd-XPvJh1Bxc2xb84hslsZztHenLa",
		category: "Breakfast",
	},
	{
		id : 2,
		title: "Creamy Chicken Pasta",
		price: "14 99",
		image: "https://thecozycook.com/wp-content/uploads/2023/05/Creamy-Chicken-Pasta-f.jpg",
		category: "Lunch",
	},
	{
		id : 3,
		title: "Cookies",
		price: "2 99",
		image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/12/11/0/12Days_Chocolate_Chip_Cooki.jpg.rend.hgtvcom.1280.1280.suffix/1391394585748.jpeg",
		category: "Snacks",
	},
	{
		id : 4,
		title: "Orange Juice",
		price: "2 99",
		image: "https://healthmylifestyle.com/wp-content/uploads/2023/01/Fresh-squeezed-orange-juice-featured-500x375.jpg",
		category: "Drinks",
	},
	{
		id : 5,
		title: "Ice Cream",
		price: "4 99",
		image: "https://www.twopeasandtheirpod.com/wp-content/uploads/2021/07/banana-split-9-500x500.jpg",
		category: "Drinks",
	},
	{
		id : 6,
		title: "Pancakes",
		price: "9 99",
		image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/american-style-pancakes-87119e3.jpg?quality=90&webp=true",
		category: "Breakfast",
	},
	{
		id : 7,
		title: "Sandwhich",
		price: "4 99",
		image: "https://www.miagreenfood.com/wp-content/uploads/2023/03/sandwich.jpg",
		category: "Breakfast",
	},
	{
		id : 8,
		title: "Chicken Burger",
		price: "9 99",
		image: "https://mccormick.widen.net/content/u0bnjmyzzw/jpeg/redhot_spicy_chicken_sandwich38649%20copy.jpg?crop=true&anchor=476,0&q=80&color=ffffffff&u=eelhgb&w=1365&h=1365",
		category: "Lunch",
	},
	{
		id : 9,
		title: "Coffee",
		price: "4 99",
		image: "https://justlovecoffeecafe.com/wp-content/uploads/2023/08/our_coffee-2.webp",
		category: "Drinks",
	},
	{
		id : 10,
		title: "Doughnut",
		price: "4 99",
		image: "https://handletheheat.com/wp-content/uploads/2015/03/cake-doughnut-recipe-SQUARE.jpg",
		category: "Snacks",
	},
];

let category = "All"

function drawItems(){
	items.map((item) =>{
		if (category == "All"){
			let con = document.createElement("div");
			let price = item.price.split(" "); 
			con.className = " item-con"
			con.innerHTML = `
				<img src=${item.image}>
				<span class="item-con-info">
					<label class="item-name">${item.title}</label>
					<p class="item-price"><label class="item-price-sign">$</label>${price[0]}<label class="item-price-rem">${price[1]}</label></p>
				</span>`;

			document.getElementById("items").append(con);
		} else if(category == "Breakfast"){
			if (item.category == "Breakfast"){
				let con = document.createElement("div");
				let price = item.price.split(" "); 
				con.className = " item-con"
				con.innerHTML = `
					<img src=${item.image}>
					<span class="item-con-info">
						<label class="item-name">${item.title}</label>
						<p class="item-price"><label class="item-price-sign">$</label>${price[0]}<label class="item-price-rem">${price[1]}</label></p>
					</span>`;

				document.getElementById("items").append(con);
			}
		} else if(category == "Lunch"){
			if (item.category == "Lunch"){
				let con = document.createElement("div");
				let price = item.price.split(" "); 
				con.className = " item-con"
				con.innerHTML = `
					<img src=${item.image}>
					<span class="item-con-info">
						<label class="item-name">${item.title}</label>
						<p class="item-price"><label class="item-price-sign">$</label>${price[0]}<label class="item-price-rem">${price[1]}</label></p>
					</span>`;

				document.getElementById("items").append(con);
			}
		} else if(category == "Drinks"){
			if (item.category == "Drinks"){
				let con = document.createElement("div");
				let price = item.price.split(" "); 
				con.className = " item-con"
				con.innerHTML = `
					<img src=${item.image}>
					<span class="item-con-info">
						<label class="item-name">${item.title}</label>
						<p class="item-price"><label class="item-price-sign">$</label>${price[0]}<label class="item-price-rem">${price[1]}</label></p>
					</span>`;

				document.getElementById("items").append(con);
			}
		} else if(category == "Snacks"){
			if (item.category == "Snacks"){
				let con = document.createElement("div");
				let price = item.price.split(" "); 
				con.className = " item-con"
				con.innerHTML = `
					<img src=${item.image}>
					<span class="item-con-info">
						<label class="item-name">${item.title}</label>
						<p class="item-price"><label class="item-price-sign">$</label>${price[0]}<label class="item-price-rem">${price[1]}</label></p>
					</span>`;

				document.getElementById("items").append(con);
			}
		}
	});
}

function removeItems() {
	let elements = document.querySelectorAll(".item-con");
	elements.forEach(element => {
		element.remove();
	});
}

let types = document.getElementsByClassName("types");

function checkClicked(){
	for(let type of types){
		type.onclick = () =>{
			if (type.innerHTML == "All"){
				category = "All";
				removeItems();
				drawItems();
			} else if (type.innerHTML == "Breakfast"){
				category = "Breakfast";
				removeItems();
				drawItems();
			} else if (type.innerHTML == "Lunch"){
				category = "Lunch";
				removeItems();
				drawItems();
			} else if (type.innerHTML == "Drinks"){
				category = "Drinks";
				removeItems();
				drawItems();
			} else if (type.innerHTML == "Snacks"){
				category = "Snacks";
				removeItems();
				drawItems();
			}
		}
	}
}

drawItems();
document.addEventListener('click', checkClicked);