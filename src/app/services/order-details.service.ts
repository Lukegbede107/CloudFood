import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }



  // foodDetails
 foodDetails = [
  {
    Id:1,
    foodName: "paneer Grilled Sandwich",
    foodDetails:"Pan-fried masala paneer",
    foodPrice: 200,
    foodImg: "https://images.unsplash.com/photo-1485451456034-3f9391c6f769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFuZWVyJTIwR3JpbGxlZCUyMFNhbmR3aWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  {
    Id:2,
    foodName: "Veggie Supreme",
    foodDetails:"Onion| Green Capsicum | Mushroom | black olive, sweet corn , Red Paprika topped with cheese",
    foodPrice: 369,
    foodImg: "https://media.istockphoto.com/id/1522416006/photo/sourdough-pizza-with-pieces-of-prosciutto-arugula-cherry-tomatoes-and-grated-parmesan-pizza.webp?b=1&s=170667a&w=0&k=20&c=6HNdJqeZMO9AA7EhKiiACYG4ZJzSv8IER8u-CCbgLm4="
  },
  {
    Id:3,
    foodName: "Paneer Burger",
    foodDetails:"panner",
    foodPrice: 149,
    foodImg: "https://images.unsplash.com/photo-1525807227881-0472b718a639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFuZWVyJTIwQnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  {
    Id:4,
    foodName: "Veg Masala Roll In Naan",
    foodDetails:"A homely mix of mashed potato and veggies, seasoned with indian spices. A filling sure to take you back to mom's kitchen",
    foodPrice: 140,
    foodImg: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VmVnJTIwTWFzYWxhJTIwUm9sbCUyMEluJTIwTmFhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    Id:5,
    foodName: "Indulgence Browie",
    foodDetails:"(Eggless) Induge in richly chocolate brownie crafted with love & topped with bitter-sweet chocolate that provid",
    foodPrice: 105,
    foodImg: "https://media.istockphoto.com/id/1442209385/photo/cut-chocolate-cake.webp?b=1&s=170667a&w=0&k=20&c=hKoLqvE106bbcAomMh0HQJJ8GK-X903-Gnna4PPyl1k="
  },
  
  {
    Id:6,
    foodName: "Oreo Cheesecake Ice Cream",
    foodDetails:"Oreo ice cream",
    foodPrice: 219,
    foodImg: "https://media.istockphoto.com/id/533781115/photo/chocolate-cake.jpg?s=612x612&w=0&k=20&c=5PN26_jSGgGeAHFZwNcLAqUbV7-_NucuiPCtEhhdJBE="
  },
  
 ];
}
