import { configureStore, createSlice } from "@reduxjs/toolkit";

// ---------------- Products Slice ----------------
const productsSlice = createSlice({
  name: "Products",
  initialState: {
    Veg: [
      { id: 1001, name: "Tomato", price: 12, discount: 10, Image: "images/picks/Tomato.jpeg", descrition: "This tomato" },
      { id: 1002, name: "Chilli", price: 24, discount: 15, Image: "Images/picks/chilli.jpeg", descrition: "To get good knowledge" },
      { id: 1003, name: "Sorakai", price: 24, discount: 20, Image: "Images/picks/sorakai.jpeg", descrition: "To get good knowledge" },
      { id: 1004, name: "Potato", price: 19, discount: 5, Image: "Images/picks/Potato.jpeg", descrition: "To get good knowledge" },
      { id: 1005, name: "Carrot", price: 24, discount: 25, Image: "Images/picks/carrot.jpeg", descrition: "To get good knowledge" },
      { id: 1006, name: "Greenpepper", price: 38, discount: 30, Image: "Images/picks/Greenpepper.jpeg", descrition: "To get good knowledge" },
      { id: 1007, name: "Lady's Finger", price: 32, discount: 18, Image: "Images/picks/Benda.jpeg", descrition: "To get good knowledge" },
      { id: 1008, name: "Cabbage", price: 28, discount: 12, Image: "Images/picks/cabbage.jpeg", descrition: "To get good knowledge" },
      { id: 1009, name: "Califlower", price: 30, discount: 5, Image: "Images/picks/califlower.jpg", descrition: "To get good knowledge" },
      { id: 1010, name: "BitterGuard", price: 20, discount: 5, Image: "Images/picks/Bitter guard.jpg", descrition: "To get good knowledge" },
      { id: 1011, name: "Bottle Gourd", price: 35, discount: 5, Image: "Images/picks/Bottle Gourd.jpg", descrition: "To get good knowledge" },
      { id: 1012, name: "Broad beans", price: 30, discount: 5, Image: "Images/picks/Broad beans.jpg", descrition: "To get good knowledge" },
      { id: 1013, name: "Broccoli", price: 28, discount: 5, Image: "Images/picks/Broccoli_.jpg", descrition: "To get good knowledge" },
      { id: 1014, name: "Drumstick", price: 35, discount: 5, Image: "Images/picks/DRUMSTICK.jpg", descrition: "To get good knowledge" },
      { id: 1015, name: "lucctue", price: 30, discount: 5, Image: "Images/picks/lucctue.jpg", descrition: "To get good knowledge" },
      { id: 1016, name: "Spinach", price: 29, discount: 5, Image: "Images/picks/Spinach.jpg", descrition: "To get good knowledge" },
      { id: 1017, name: "Zucchini", price: 30, discount: 5, Image: "Images/picks/Zucchini.jpg", descrition: "To get good knowledge" },


    ],

    nonVeg: [
      { id: 2001, name: "Fishfingers", price: 180, discount: 20, Image: "Images/picks/Fishfingers.jpg", descrption: "Chicken biryani" },
      { id: 2002, name: "Sausages", price: 180, discount: 25, Image: "Images/picks/Sausages.jpg", descrption: "Meat" },
      { id: 2003, name: "TempuraNuggets", price: 180, discount: 10, Image: "Images/picks/Tempura nuggets.jpg", descrption: "Fish" },
      { id: 2004, name: "chicken", price: 60, discount: 5, Image: "Images/picks/Sticky Garlic Chicken Bites _  Walmart Cookshop (1).jpg", descrption: "Eggs" },
      { id: 2005, name: "Prawns", price: 220, discount: 30, Image: "Images/picks/prawans.jpeg", descrption: "Prawns" },
      { id: 2006, name: "chickencrespy", price: 150, discount: 15, Image: "Images/picks/Chicken Crispy Middle Wings - Frozen.jpg", descrption: "Special biryani" },
      { id: 2007, name: "chicken breasts", price: 150, discount: 15, Image: "Images/picks/chciken breasts.jpg", descrption: "Special biryani" },
      { id: 2008, name: "Frozen-fish", price: 150, discount: 15, Image: "Images/picks/Frozen Fish Fillets.jpg", descrption: "Special biryani" },
      { id: 2009, name: "Shrimp-frozen", price: 150, discount: 15, Image: "Images/picks/Shrimp Package.jpg", descrption: "Special biryani" },
      { id: 2010, name: "Frozen-Legs", price: 150, discount: 15, Image: "Images/picks/frozen-legs.jpg", descrption: "Special biryani" },
      { id: 2011, name: "Fishes", price: 150, discount: 15, Image: "Images/picks/minifishes.jpg", descrption: "Special biryani" },
      { id: 2012, name: "Gralicbread", price: 150, discount: 15, Image: "Images/picks/Gralic bread.jpg", descrption: "Special biryani" },
      { id: 2013, name: "Taj frozen potatos", price: 150, discount: 15, Image: "Images/picks/Taj Frozen Original Paratha.jpg", descrption: "Special biryani" },
      { id: 2014, name: "Potato-Fry", price: 150, discount: 15, Image: "Images/picks/potaots frys.jpg", descrption: "Special biryani" },
      { id: 2015, name: "Shrimps", price: 150, discount: 15, Image: "Images/picks/shrimps.jpg", descrption: "Special biryani" },
      { id: 2016, name: "Half-legs", price: 150, discount: 15, Image: "Images/picks/halflegs.jpg", descrption: "Special biryani" },
      { id: 2017, name: "Royallu", price: 150, discount: 15, Image: "Images/picks/royallu.jpg", descrption: "Special biryani" },
    ],

    milk: [
      { id: 3001, name: "FULLCREAM Milk", price: 33, discount: 2, Image: "Images/picks/Creamed Milk.jpg", descrption: "Oreo milkshake" },
      { id: 3002, name: "Ultra Milk-Packet", price: 80, discount: 5, Image: "Images/picks/Ultra Milk.jpg", descrption: "Pista shake" },
      { id: 3003, name: "Toned-Milk", price: 75, discount: 12, Image: "Images/picks/Toned Milk.jpg", descrption: "Rosemilk" },
      { id: 3004, name: "Fairlife-Milk", price: 32, discount: 12, Image: "Images/picks/Fairlife milk.jpg", descrption: "Kiwi shake" },
      { id: 3005, name: "Akshy Milk packet", price: 28, discount: 4, Image: "Images/picks/Akshyakalpa milk.jpg", descrption: "Chocolate shake" },
      { id: 3006, name: "Amul", price: 29, discount: 1, Image: "Images/picks/Amul.jpg", descrption: "Mango shake" },
      { id: 3008, name: "Sooper cow-Milk", price: 34, discount: 2, Image: "Images/picks/Sooper Cow Milk - Packaging Design.jpg", descrption: "Brownie shake" },
      { id: 3009, name: "Milk pouch -packet", price: 38, discount: 3, Image: "Images/picks/Milk Pouch Design.jpg", descrption: "Brownie shake" },
      { id: 3010, name: "Straberry-Yougert", price: 38, discount: 3, Image: "Images/picks/straberry-Yogrt.jpg", descrption: "Brownie shake" },
      { id: 3011, name: "Yogurt-Mango", price: 32, discount: 3, Image: "Images/picks/Yoghurt mango.jpg", descrption: "Brownie shake" },
      { id: 3012, name: "Classic-Yogurt", price: 36, discount: 3, Image: "Images/picks/classic-yogurt.jpg", descrption: "Brownie shake" },
      { id: 3013, name: "Curd", price: 58, discount: 3, Image: "Images/picks/curd.jpg", descrption: "Brownie shake" },
    ],

    Drinks: [
      { id: 1, name: "Oreo", price: 180, discount: 20, Image: "/images/picks/Oreao.jpeg", descrption: "Oreo milkshake" },
      { id: 2, name: "Pista", price: 180, discount: 18, Image: "/images/picks/pista.jpeg", descrption: "Pista shake" },
      { id: 3, name: "Limca", price: 75, discount: 12, Image: "/images/picks/Limca.jpg", descrption: "Rosemilk" },
      { id: 4, name: "Maaza", price: 200, discount: 22, Image: "Images/picks/maaza.jpg", descrption: "Kiwi shake" },
      { id: 5, name: "7up", price: 180, discount: 25, Image: "Images/picks/never 7up.jpg", descrption: "Chocolate shake" },
      { id: 6, name: "Pepesi", price: 180, discount: 15, Image: "Images/picks/pepsi.jpg", descrption: "Mango shake" },
      { id: 7, name: "Redbull", price: 200, discount: 30, Image: "Images/picks/Redbull Photography.jpg", descrption: "Brownie shake" },
      { id: 8, name: "Schweppes", price: 200, discount: 30, Image: "Images/picks/schweppes.jpg", descrption: "Brownie shake" },
      { id: 9, name: "Sprite", price: 200, discount: 30, Image: "Images/picks/Sprite.jpg", descrption: "Brownie shake" },
      { id: 10, name: "Sting", price: 200, discount: 30, Image: "Images/picks/sting.jpg", descrption: "Brownie shake" },
      { id: 11, name: "Fizz", price: 200, discount: 30, Image: "Images/picks/Fizz.jpg", descrption: "Brownie shake" },
      { id: 12, name: "Mirindaa", price: 200, discount: 30, Image: "Images/picks/Mirindaa.jpg", descrption: "Brownie shake" },
      { id: 13, name: "Mountan Dew", price: 200, discount: 30, Image: "Images/picks/Mountain dew.jpg", descrption: "Brownie shake" },
      { id: 14, name: "Pepsi2", price: 200, discount: 30, Image: "Images/picks/pepesi2.jpg", descrption: "Brownie shake" },
      { id: 15, name: "Brownie", price: 200, discount: 30, Image: "Images/picks/Brown.jpeg", descrption: "Brownie shake" },
      { id: 16, name: "Brownie", price: 200, discount: 30, Image: "Images/picks/Brown.jpeg", descrption: "Brownie shake" },
    ],

    Chocolates: [
      { id: 21, name: "Kitkat", price: 57, discount: 2, Image: "Images/picks/Kitkat.jpg", descrption: "Oreo milkshake" },
      { id: 22, name: "Snickers", price: 180, discount: 18, Image: "Images/picks/Snickers.jpg", descrption: "Pista shake" },
      { id: 23, name: "Mars", price: 75, discount: 12, Image: "Images/picks/Mars.jpg", descrption: "Rosemilk" },
      { id: 24, name: "Feastables", price: 150, discount: 12, Image: "Images/picks/Feastables Milk Chocolate 60g.jpg", descrption: "Kiwi shake" },
      { id: 25, name: "Cadbury-oreao", price: 180, discount: 25, Image: "Images/picks/Cadbury Original Oreo.jpg", descrption: "Chocolate shake" },
      { id: 26, name: "Britannia", price: 30, discount: 1, Image: "Images/picks/Buy Britannia Biscuits - Marie Gold 43 gm Pouch Online at Best Price_ of Rs 5.jpg", descrption: "Mango shake" },
      { id: 27, name: "Parle-G", price: 26, discount: 2, Image: "Images/picks/Buy Parle G Original Gluco Biscuits at Waangoo….jpg", descrption: "Brownie shake" },
      { id: 28, name: "Good-Day Biscuit", price: 27, discount: 2, Image: "Images/picks/Goodday.jpg", descrption: "Brownie shake" },
      { id: 29, name: "50/50-Biscuit", price: 37, discount: 3, Image: "Images/picks/5050biscuits.jpg", descrption: "Brownie shake" },
      { id: 30, name: "Milk-Bikes", price: 43, discount: 3, Image: "Images/picks/Mikbikis.jpg", descrption: "Brownie shake" },
      { id: 31, name: "Amulbutter-cookie", price: 43, discount: 5, Image: "Images/picks/Amul butter cookies.jpg", descrption: "Brownie shake" },
      { id: 32, name: "Amul chocolate-Cookie", price: 49, discount: 4, Image: "Images/picks/Amul chocolate cookies.jpg", descrption: "Brownie shake" },
    ],

    desserts: [
      { id: 4001, name: "Chocolate Cake 1", price: 150, discount: 20, Image: "Images/picks/download (1).jpg", descrption: "Rich chocolate cake" },
      { id: 4002, name: "Chocolate Cake 2", price: 150, discount: 10, Image: "Images/picks/dessert-2img.jpg", descrption: "Rich chocolate cake" },
      { id: 4003, name: "Chocolate Cake 3", price: 150, discount: 15, Image: "Images/picks/Dessertsimg-3.jpg", descrption: "Rich chocolate cake" },
      { id: 4004, name: "Chocolate Cake 4", price: 150, discount: 25, Image: "Images/picks/Desserts4img.jpg", descrption: "Rich chocolate cake" },
      { id: 4005, name: "Chocolate Cake 5", price: 150, discount: 12, Image: "Images/picks/Desser5img.jpg", descrption: "Rich chocolate cake" },
      { id: 4006, name: "Chocolate Cake 6", price: 150, discount: 30, Image: "Images/picks/Dessertimg6.jpg", descrption: "Rich chocolate cake" },
      { id: 4007, name: "Chocolate Cake 7", price: 150, discount: 18, Image: "Images/picks/Dessertsimg7.jpg", descrption: "Rich chocolate cake" },
      { id: 4008, name: "Chocolate Cake 8", price: 150, discount: 15, Image: "Images/picks/Dessertimg8.jpg", descrption: "Rich chocolate cake" },
      { id: 4009, name: "Chocolate Cake 9", price: 150, discount: 22, Image: "Images/picks/Dessertimg9.jpg", descrption: "Rich chocolate cake" },
      { id: 4010, name: "Chocolate Cake 10", price: 150, discount: 10, Image: "Images/picks/Dessertimg10.jpg", descrption: "Rich chocolate cake" },
      { id: 4011, name: "Chocolate Cake 11", price: 150, discount: 25, Image: "Images/picks/Dessertimg11.jpg", descrption: "Rich chocolate cake" },
      { id: 4012, name: "Chocolate Cake 12", price: 150, discount: 20, Image: "Images/picks/Dessertimg12.jpg", descrption: "Rich chocolate cake" },
      { id: 4013, name: "Chocolate Cake 13", price: 150, discount: 30, Image: "Images/picks/Dessert13.jpg", descrption: "Rich chocolate cake" },
      { id: 4014, name: "Chocolate Cake 14", price: 150, discount: 15, Image: "Images/picks/Dessert14.jpg", descrption: "Rich chocolate cake" },
      { id: 4015, name: "Chocolate Cake 15", price: 150, discount: 18, Image: "Images/picks/Dessert15.jpg", descrption: "Rich chocolate cake" },
      { id: 4016, name: "Chocolate Cake 16", price: 150, discount: 12, Image: "Images/picks/Dessert16.jpg", descrption: "Rich chocolate cake" },
      { id: 4017, name: "Chocolate Cake 17", price: 150, discount: 22, Image: "Images/picks/Dessert17.jpg", descrption: "Rich chocolate cake" },
    ],
  },
  reducers: {},
});

// ---------------- Cart Slice ----------------

// Load from localStorage
const initialState = JSON.parse(localStorage.getItem("cart")) || []

//create cart slice
let cartSlice = createSlice({
  name: "cart",
  initialState, //here previouly empty
  reducers: {
    addToCart: (state, action) => {
      let item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    increaseQty: (state, action) => {
      let item = state.find((item) => item.id === action.payload.id);
      if (item) item.quantity += 1;
    },
    decreaseQty: (state, action) => {
      let item = state.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter((i) => i.id !== action.payload.id);
      }
    },
    clearCart: () => {
      return [];
    },
  },
});

export let { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } = cartSlice.actions;






let registerdetails = createSlice({
  name: "registers",
  initialState: {
    users: [],
    currentUser: null,
    isAuthenticated: false,
  },
  reducers: {
    register: (state, action) => {
      state.users.push(action.payload);
    },
    login: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        state.currentUser = user;
        state.isAuthenticated = true;
      } else {
        state.currentUser = null;
        state.isAuthenticated = false;
      }
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
  },
});

export let { register, login, logout } = registerdetails.actions;


// ---------------- Orders Slice ----------------
let OrdersSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    },
  },
});
export let { addOrder } = OrdersSlice.actions;


// ---------------- Store ----------------
const store = configureStore({
  reducer: {
    prod: productsSlice.reducer,
    cart: cartSlice.reducer,
    orders: OrdersSlice.reducer,
    registers: registerdetails.reducer,

  },
});

store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(store.getState().cart))
})

export default store;
