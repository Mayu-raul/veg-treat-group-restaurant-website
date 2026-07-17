// ==========================================================================
// THE VEG TREAT GROUP - GLOBAL FRONTEND ENGINE
// ==========================================================================

// Helper functions for easy DOM selection
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// Initial Database Setup
const DEFAULT_OUTLETS = [
  {
    id: "solitaire-banquet",
    name: "Solitaire Banquet",
    type: "banquet",
    address: "Junction-Yogi Nagar & Link Road, Borivali West",
    phone: "070453 52782 / 022-2970 0711",
    cuisines: "Banquet Catering, Multi-Cuisine, Mocktails",
    timings: "09:00 AM - 11:30 PM",
    image: "assets/ambience_dining.png"
  },
  {
    id: "the-royale-banquets",
    name: "The Royale Banquets",
    type: "banquet",
    address: "Junction-Chandavarkar & Eksar Road, Borivali West",
    phone: "9967 933339 / 99 0303 6565 / 022-2898 7755",
    cuisines: "Banquet Catering, Continental, Traditional",
    timings: "09:00 AM - 11:30 PM",
    image: "assets/chef_special.png"
  },
  {
    id: "hotel-ravindra",
    name: "Hotel Ravindra",
    type: "restaurant",
    address: "S.V. Road, Dahisar East",
    phone: "09882 406 407 / 9097 265 265 / 022-2828 1122",
    cuisines: "South Indian, North Indian, Chinese",
    timings: "11:00 AM - 11:30 PM",
    image: "assets/hero_food.png"
  },
  {
    id: "veg-treat-1",
    name: "The Veg Treat I",
    type: "restaurant",
    address: "Kastur Park, Shimpoli, Borivali West",
    phone: "09882 417 418 / 9097 385 385 / 022-2899 5533",
    cuisines: "North Indian, Chinese, Tandoor Specials",
    timings: "11:00 AM - 11:30 PM",
    image: "assets/hero_food.png"
  },
  {
    id: "veg-treat-2",
    name: "The Veg Treat II",
    type: "restaurant",
    address: "L.T. Road, Vazira Naka, Borivali West",
    phone: "09882 418 419 / 9097 395 395 / 022-2833 9494",
    cuisines: "South Indian, Chinese, Fast Food",
    timings: "11:00 AM - 11:30 PM",
    image: "assets/hero_food.png"
  },
  {
    id: "veg-treat-royale",
    name: "The Veg Treat Royale",
    type: "restaurant",
    address: "Junction-Chandavarkar & Eksar Road, Borivali West",
    phone: "09882 421 422 / 9097 465 465 / 022-2898 9955",
    cuisines: "Luxury Fine Dining, Continental, Sizzlers",
    timings: "11:30 AM - 11:30 PM",
    image: "assets/ambience_dining.png"
  },
  {
    id: "veg-treat-regalia",
    name: "Veg Treat Regalia",
    type: "restaurant",
    address: "Junction-Yogi Nagar & Link Road, Borivali West",
    phone: "022-2970 0750 / 022-2970 0760",
    cuisines: "Veg Dining Restro Bar, Fusion, North Indian",
    timings: "11:30 AM - 12:30 AM",
    image: "assets/ambience_dining.png"
  },
  {
    id: "foodlord",
    name: "FoodLord",
    type: "restaurant",
    address: "Chandavarkar Road, Borivali West",
    phone: "098030 38989 / 022-2891 2222",
    cuisines: "The Veg Dining Bar, Italian, Continental, Chinese",
    timings: "12:00 PM - 12:30 AM",
    image: "assets/chef_special.png"
  },
  {
    id: "veg-treat-express",
    name: "The Veg Treat Express",
    type: "express",
    address: "Chikuwadi, Bhattad / Link Road, Borivali West",
    phone: "0985 985 3635 / 0985 985 3736 / 022-2833 5000",
    cuisines: "Quick Service, Street Food, Pav Bhaji, Chaat",
    timings: "08:00 AM - 11:00 PM",
    image: "assets/hero_food.png"
  },
  {
    id: "veg-treat-legacy",
    name: "The Veg Treat Legacy",
    type: "restaurant",
    address: "L.T. Road, Borivali West",
    phone: "9988 66 13 44 / 9988 33 14 55 / 022-2833 0642",
    cuisines: "Heritage Recipes, Traditional Thali, South Indian",
    timings: "11:00 AM - 11:30 PM",
    image: "assets/chef_special.png"
  },
  {
    id: "celebrations",
    name: "Celebrations by The Veg Treat",
    type: "banquet",
    address: "S.V. Road, Dahisar East",
    phone: "99881 18922 / 99882 29033 / 022-2848 6070",
    cuisines: "Banquet Catering, Corporate Events",
    timings: "09:00 AM - 11:00 PM",
    image: "assets/ambience_dining.png"
  },
  {
    id: "veg-treat-nx",
    name: "The Veg Treat NX",
    type: "restaurant",
    address: "Haridas Nagar, Borivali West",
    phone: "98 7710 9898 / 98 7712 9898",
    cuisines: "North Indian, Fast Food, Chinese",
    timings: "11:00 AM - 11:30 PM",
    image: "assets/hero_food.png"
  },
  {
    id: "grandeur-hotel",
    name: "The Grandeur Boutique Hotel",
    type: "hotel",
    address: "Junction-Yogi Nagar & Link Road, Borivali West",
    phone: "988 988 9096 / 704 5352 781 / 022-2970 0700",
    cuisines: "Premium Hotel Dining, Multi-Cuisine Buffet",
    timings: "24 Hours (Dining: 07:00 AM - 11:00 PM)",
    image: "assets/ambience_dining.png"
  }
];

const DEFAULT_MENUS = {
  restaurant: [
    { id: "p1", name: "Paneer Tikka Angara", category: "starters", price: 290, desc: "Cottage cheese chunks marinated in spiced yoghurt and tandoored to perfection.", veg: true },
    { id: "p2", name: "Tandoori Broccoli", category: "starters", price: 310, desc: "Fresh broccoli florets coated with cream cheese, cardamom, and grilled in clay oven.", veg: true },
    { id: "p3", name: "Veg Seekh Kebab", category: "starters", price: 270, desc: "Minced vegetables skewered with spices and charcoal roasted.", veg: true },
    { id: "p4", name: "Crispy Spring Rolls", category: "starters", price: 240, desc: "Stuffed crunchy wrappers served with sweet chilli sauce.", veg: true },
    { id: "p5", name: "Paneer Regalia Makhani", category: "mains", price: 340, desc: "Rich tomato-cashew gravy with soft paneer cubes and buttery finish.", veg: true },
    { id: "p6", name: "Veg Diwani Handi", category: "mains", price: 310, desc: "Assorted vegetables cooked in spinach and cashew nut based gravy.", veg: true },
    { id: "p7", name: "Dal Makhani Legacy", category: "mains", price: 280, desc: "Black lentils slow cooked overnight with butter and fresh cream.", veg: true },
    { id: "p8", name: "Subz Dum Biryani", category: "mains", price: 290, desc: "Fragrant basmati rice layered with spiced vegetables, served with raita.", veg: true },
    { id: "p9", name: "Butter Naan", category: "breads", price: 60, desc: "Soft leavened flatbread topped with butter.", veg: true },
    { id: "p10", name: "Garlic Naan", category: "breads", price: 70, desc: "Leavened bread seasoned with minced garlic.", veg: true },
    { id: "p11", name: "Tandoori Roti", category: "breads", price: 40, desc: "Whole wheat rustic flatbread cooked in clay oven.", veg: true },
    { id: "p12", name: "Sizzling Chocolate Brownie", category: "desserts", price: 220, desc: "Hot fudge brownie served with vanilla ice cream on a sizzler plate.", veg: true },
    { id: "p13", name: "Kesar Pista Kulfi", category: "desserts", price: 150, desc: "Traditional Indian frozen dessert flavored with saffron and pistachios.", veg: true }
  ],
  banquet: [
    { id: "b1", name: "Silver Celebration Package", category: "packages", price: 750, desc: "Includes 3 Starters, 3 Main Courses, 2 Desserts, Roti & Naan, Rice & Dal, and 1 Mocktail. Best for small gatherings.", veg: true },
    { id: "b2", name: "Gold Royale Package", category: "packages", price: 950, desc: "Includes 5 Starters, 4 Main Courses, 3 Desserts, Live Pasta Counter, Mocktail Station, and Premium Breads.", veg: true },
    { id: "b3", name: "Platinum Grandeur Package", category: "packages", price: 1250, desc: "Includes 7 Starters, 5 Main Courses, 4 Desserts, Live Tandoor & Chaat Counters, Exotic Desserts, and Premium Mocktails.", veg: true }
  ],
  express: [
    { id: "e1", name: "Special Pav Bhaji", category: "snacks", price: 150, desc: "Spiced mashed vegetable curry served with soft toasted buttery bread rolls.", veg: true },
    { id: "e2", name: "Cheese Masala Dosa", category: "snacks", price: 160, desc: "Crispy rice crepe stuffed with spiced potato mash and loaded with cheddar cheese.", veg: true },
    { id: "e3", name: "Veg Cheese Grilled Sandwich", category: "snacks", price: 140, desc: "Triple layered sandwich loaded with fresh veggies, herbs, and cheese, grilled golden.", veg: true },
    { id: "e4", name: "Paneer Chilli Dry", category: "chinese", price: 210, desc: "Stir-fried cottage cheese cubes with bell peppers, onions, and soya garlic sauce.", veg: true },
    { id: "e5", name: "Veg Hakka Noodles", category: "chinese", price: 180, desc: "Wok-tossed noodles with julienned vegetables and soya sauce.", veg: true },
    { id: "e6", name: "Thick Mango Lassi", category: "beverages", price: 90, desc: "Sweet, creamy mango yogurt drink garnished with almond slivers.", veg: true },
    { id: "e7", name: "Fresh Lime Soda", category: "beverages", price: 70, desc: "Refreshing sweet and salty sparkling lemon drink.", veg: true }
  ],
  hotel: [
    { id: "h1", name: "Grand Breakfast Buffet", category: "buffet", price: 450, desc: "Unlimited South Indian, North Indian, and continental breakfast options.", veg: true },
    { id: "h2", name: "Executive Lunch Buffet", category: "buffet", price: 650, desc: "Full course lunch with starter, soup, mains, salads, and premium desserts.", veg: true }
  ]
};

const DEFAULT_BLOGS = [
  { id: "1", title: "The Secrets of Perfect Tandoori Marinade", date: "May 15, 2026", excerpt: "Learn how our master chefs achieve the authentic smoky flavor using unique clay oven techniques.", img: "assets/chef_special.png" },
  { id: "2", title: "Why Pure Vegetarian Fine Dining is Growing", date: "April 28, 2026", excerpt: "Exploring the rise of contemporary vegetarian and plant-based gourmet styles in high-end dining.", img: "assets/hero_food.png" },
  { id: "3", title: "Hosting the Perfect Banquet Event", date: "March 12, 2026", excerpt: "Expert tips on planning seating, customized menus, and live counters for an unforgettable wedding banquet.", img: "assets/ambience_dining.png" }
];

const DEFAULT_JOBS = [
  { id: "j1", title: "Chef de Partie (Tandoor)", type: "Full Time", location: "Borivali West Outlets", salary: "₹30,000 - ₹40,000 / month" },
  { id: "j2", title: "Restaurant Captain / Supervisor", type: "Full Time", location: "Veg Treat Regalia", salary: "₹25,000 - ₹30,000 / month" },
  { id: "j3", title: "Banquet Sales Coordinator", type: "Full Time", location: "Solitaire Banquets", salary: "₹28,000 - ₹35,000 / month" }
];

// Dictionary for multi-language support (English, Hindi, Spanish)
const DICTIONARY = {
  en: {
    heroTag: "Pure Vegetarian Hospitality",
    heroTitle: "Delivering Pure Happiness Since 1967",
    heroDesc: "Indulge in contemporary vegetarian cuisine across our fine dining restaurants, banquets, and boutique hotel lounges.",
    reserveBtn: "Reserve A Table",
    orderBtn: "Order Online",
    exploreBtn: "Explore Locations",
    aboutTag: "Our Brand Story",
    aboutTitle: "Legacy of Culinary Excellence",
    aboutDesc: "The Veg Treat Group started with a single kitchen, driven by the philosophy of serving fresh, authentic, and delicious pure vegetarian delicacies. Today, we manage premium banquets, fine dining bistros, and express counters, creating unforgettable memories for our guests.",
    yearsExp: "50+ Years",
    expTag: "Serving Happiness",
    culinaryPhil: "Our Philosophy",
    phil1Title: "100% Pure Vegetarian",
    phil1Desc: "Strictly prepared with the freshest ingredients in clean, dedicated vegetarian kitchens.",
    phil2Title: "Modern Gastronomy",
    phil2Desc: "Merging classical Indian heritage recipes with modern presentation styles.",
    ourOutlets: "Our Outlets",
    outletDesc: "Find the nearest Veg Treat branch to experience exceptional dining, banquets, and comfort.",
    allCats: "All Locations",
    catRest: "Fine Dining",
    catBanquet: "Banquets",
    catExpress: "Express / Café",
    catHotel: "Boutique Hotel",
    bookTable: "Book Table",
    viewMenu: "View Menu & Order",
    cartTitle: "Your Dining Cart",
    cartEmpty: "Your cart is empty. Add delicious food from any outlet menu!",
    checkoutBtn: "Proceed to Order",
    subtotal: "Subtotal",
    taxCharges: "GST & Service Charges (18%)",
    grandTotal: "Grand Total",
    adminTitle: "Admin Access",
    adminPINLabel: "Enter 4-Digit Passcode to Unlock Panel:",
    adminPINPlaceholder: "PIN",
    adminUnlock: "Open Dashboard",
    adminNavHome: "Stats Summary",
    adminNavRes: "Manage Reservations",
    adminNavOrders: "Manage Orders",
    adminNavMenus: "Edit Menu Prices",
    adminNavJobs: "Applications",
    adminTitleHead: "Easy Restaurant Control Center",
    adminSubHead: "Super simple controls for managing reservations, orders, menus, and applications."
  },
  hi: {
    heroTag: "शुद्ध शाकाहारी आतिथ्य",
    heroTitle: "1967 से शुद्ध खुशियाँ बाँट रहे हैं",
    heroDesc: "हमारे बेहतरीन डाइनिंग रेस्तरां, बैंक्वेट और बुटीक होटल लाउंज में समकालीन शाकाहारी व्यंजनों का आनंद लें।",
    reserveBtn: "टेबल बुक करें",
    orderBtn: "ऑनलाइन ऑर्डर करें",
    exploreBtn: "स्थानों को देखें",
    aboutTag: "हमारी ब्रांड कहानी",
    aboutTitle: "पाक कला उत्कृष्टता की विरासत",
    aboutDesc: "द वेज ट्रीट ग्रुप की शुरुआत एक ही रसोई से हुई थी, जिसका उद्देश्य ताजा, प्रामाणिक और स्वादिष्ट शुद्ध शाकाहारी व्यंजन परोसना था। आज हम प्रीमियम बैंक्वेट, डाइनिंग बिस्ट्रो और एक्सप्रेस काउंटर का प्रबंधन करते हैं।",
    yearsExp: "50+ साल",
    expTag: "खुशियाँ परोसना",
    culinaryPhil: "हमारा दर्शन",
    phil1Title: "100% शुद्ध शाकाहारी",
    phil1Desc: "साफ-सुथरी, समर्पित शाकाहारी रसोइयों में सबसे ताजी सामग्री के साथ तैयार किया गया।",
    phil2Title: "आधुनिक पाक कला",
    phil2Desc: "शास्त्रीय भारतीय विरासत व्यंजनों को आधुनिक प्रस्तुति शैलियों के साथ जोड़ना।",
    ourOutlets: "हमारे आउटलेट",
    outletDesc: "असाधारण भोजन और दावतों का अनुभव करने के लिए निकटतम वेज ट्रीट शाखा खोजें।",
    allCats: "सभी स्थान",
    catRest: "डाइनिंग",
    catBanquet: "बैंक्वेट",
    catExpress: "एक्सप्रेस / कैफे",
    catHotel: "बुटीक होटल",
    bookTable: "टेबल बुक करें",
    viewMenu: "मेन्यू और ऑर्डर",
    cartTitle: "आपका कार्ट",
    cartEmpty: "आपका कार्ट खाली है। स्वादिष्ट व्यंजन जोड़ें!",
    checkoutBtn: "ऑर्डर सबमिट करें",
    subtotal: "उपयोग राशि",
    taxCharges: "जीएसटी और सेवा शुल्क (18%)",
    grandTotal: "कुल योग",
    adminTitle: "एडमिन एक्सेस",
    adminPINLabel: "पैनल अनलॉक करने के लिए 4-अंकीय पासकोड दर्ज करें:",
    adminPINPlaceholder: "पिन",
    adminUnlock: "डैशबोर्ड खोलें",
    adminNavHome: "सांख्यिकी सारांश",
    adminNavRes: "आरक्षण प्रबंधित करें",
    adminNavOrders: "ऑर्डर प्रबंधित करें",
    adminNavMenus: "मेन्यू कीमतें बदलें",
    adminNavJobs: "आवेदन देखें",
    adminTitleHead: "आसान रेस्तरां नियंत्रण केंद्र",
    adminSubHead: "आरक्षण, ऑर्डर, मेन्यू और आवेदनों को प्रबंधित करने के लिए बहुत ही सरल नियंत्रण।"
  },
  
};

// ==========================================================================
// APP STATE & LOCALSTORAGE STORAGE HANDLER
// ==========================================================================
class StateManager {
  constructor() {
    this.initData();
    this.currentLanguage = localStorage.getItem("VT_LANG") || "en";
    this.cart = JSON.parse(localStorage.getItem("VT_CART")) || [];
    this.currentOutletForCart = localStorage.getItem("VT_CART_OUTLET") || null;
    this.isAdminAuthenticated = sessionStorage.getItem("VT_ADMIN_AUTH") === "true";
    this.adminActiveTab = "stats";
  }

  initData() {
    if (!localStorage.getItem("VT_OUTLETS")) {
      localStorage.setItem("VT_OUTLETS", JSON.stringify(DEFAULT_OUTLETS));
    }
    if (!localStorage.getItem("VT_MENUS")) {
      localStorage.setItem("VT_MENUS", JSON.stringify(DEFAULT_MENUS));
    }
    if (!localStorage.getItem("VT_BLOGS")) {
      localStorage.setItem("VT_BLOGS", JSON.stringify(DEFAULT_BLOGS));
    }
    if (!localStorage.getItem("VT_JOBS")) {
      localStorage.setItem("VT_JOBS", JSON.stringify(DEFAULT_JOBS));
    }
    if (!localStorage.getItem("VT_RESERVATIONS")) {
      localStorage.setItem("VT_RESERVATIONS", JSON.stringify([
        { id: "RES-8392", customerName: "Rajesh Patel", phone: "9820012345", date: "2026-05-24", time: "20:00", guests: 4, outletId: "veg-treat-regalia", status: "pending" },
        { id: "RES-4921", customerName: "Neha Sharma", phone: "9876543210", date: "2026-05-25", time: "19:30", guests: 2, outletId: "foodlord", status: "completed" }
      ]));
    }
    if (!localStorage.getItem("VT_ORDERS")) {
      localStorage.setItem("VT_ORDERS", JSON.stringify([
        { id: "ORD-1102", customerName: "Amit Shah", phone: "9988776655", address: "Yogi Nagar, Borivali West", items: [{ name: "Paneer Tikka Angara", qty: 2, price: 290 }], total: 684, status: "pending", outletId: "veg-treat-regalia" }
      ]));
    }
    if (!localStorage.getItem("VT_APPLICATIONS")) {
      localStorage.setItem("VT_APPLICATIONS", JSON.stringify([
        { id: "APP-509", applicantName: "Vijay Kumar", phone: "9123456789", role: "Chef de Partie (Tandoor)", status: "pending" }
      ]));
    }
    if (!localStorage.getItem("VT_INQUIRIES")) {
      localStorage.setItem("VT_INQUIRIES", JSON.stringify([]));
    }
  }

  // Getters & Setters
  getOutlets() { return JSON.parse(localStorage.getItem("VT_OUTLETS")); }
  getMenus() { return JSON.parse(localStorage.getItem("VT_MENUS")); }
  getBlogs() { return JSON.parse(localStorage.getItem("VT_BLOGS")); }
  getJobs() { return JSON.parse(localStorage.getItem("VT_JOBS")); }
  getReservations() { return JSON.parse(localStorage.getItem("VT_RESERVATIONS")); }
  getOrders() { return JSON.parse(localStorage.getItem("VT_ORDERS")); }
  getApplications() { return JSON.parse(localStorage.getItem("VT_APPLICATIONS")); }
  getInquiries() { return JSON.parse(localStorage.getItem("VT_INQUIRIES")); }

  saveReservations(data) { localStorage.setItem("VT_RESERVATIONS", JSON.stringify(data)); }
  saveOrders(data) { localStorage.setItem("VT_ORDERS", JSON.stringify(data)); }
  saveMenus(data) { localStorage.setItem("VT_MENUS", JSON.stringify(data)); }
  saveOutlets(data) { localStorage.setItem("VT_OUTLETS", JSON.stringify(data)); }
  saveApplications(data) { localStorage.setItem("VT_APPLICATIONS", JSON.stringify(data)); }
  saveInquiries(data) { localStorage.setItem("VT_INQUIRIES", JSON.stringify(data)); }

  // Cart operations
  addToCart(item, outletId) {
    if (this.currentOutletForCart && this.currentOutletForCart !== outletId) {
      if (!confirm("Your cart contains items from another outlet. Clear cart and add this item?")) {
        return false;
      }
      this.clearCart();
    }
    
    this.currentOutletForCart = outletId;
    localStorage.setItem("VT_CART_OUTLET", outletId);
    
    const existing = this.cart.find(i => i.id === item.id);
    if (existing) {
      existing.qty += 1;
    } else {
      this.cart.push({ ...item, qty: 1 });
    }
    
    this.saveCart();
    return true;
  }

  updateCartQty(itemId, change) {
    const item = this.cart.find(i => i.id === itemId);
    if (item) {
      item.qty += change;
      if (item.qty <= 0) {
        this.cart = this.cart.filter(i => i.id !== itemId);
      }
      if (this.cart.length === 0) {
        this.currentOutletForCart = null;
        localStorage.removeItem("VT_CART_OUTLET");
      }
      this.saveCart();
    }
  }

  removeFromCart(itemId) {
    this.cart = this.cart.filter(i => i.id !== itemId);
    if (this.cart.length === 0) {
      this.currentOutletForCart = null;
      localStorage.removeItem("VT_CART_OUTLET");
    }
    this.saveCart();
  }

  clearCart() {
    this.cart = [];
    this.currentOutletForCart = null;
    localStorage.removeItem("VT_CART_OUTLET");
    this.saveCart();
  }

  saveCart() {
    localStorage.setItem("VT_CART", JSON.stringify(this.cart));
    updateCartIcon();
  }

  getCartTotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  // Translation fetcher
  translate(key) {
    return DICTIONARY[this.currentLanguage][key] || DICTIONARY['en'][key] || key;
  }
}

// Global state instance
const State = new StateManager();

// ==========================================================================
// NAVIGATION & ROUTING SYSTEM
// ==========================================================================
function router() {
  const hash = window.location.hash || "#home";
  
  // Close any overlays/drawers
  $(".cart-drawer").classList.remove("open");
  $(".cart-overlay").classList.remove("open");
  
  // Clean scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });
  
  const main = $("#app-viewport");
  main.classList.remove("fade-in");
  void main.offsetWidth; // Trigger reflow
  main.classList.add("fade-in");
  
  // Routing Logic
  if (hash === "#home") {
    renderHome();
  } else if (hash === "#locations") {
    renderLocations();
  } else if (hash.startsWith("#restaurant/")) {
    const id = hash.split("/")[1];
    renderRestaurant(id);
  } else if (hash === "#reservations") {
    renderReservationsPage();
  } else if (hash === "#checkout") {
    renderCheckoutPage();
  } else if (hash === "#blog") {
    renderBlogPage();
  } else if (hash === "#careers") {
    renderCareersPage();
  } else if (hash === "#contact") {
    renderContactPage();
  } else if (hash === "#rewards") {
    renderRewardsPage();
  } else if (hash === "#admin") {
    renderAdminPage();
  } else {
    renderHome();
  }
  
  // Update header active styling
  $$(".nav-link").forEach(link => {
    if (link.getAttribute("href") === hash) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Translate visible statically marked elements
function translateUI() {
  $$("[data-translate]").forEach(elem => {
    const key = elem.getAttribute("data-translate");
    elem.textContent = State.translate(key);
  });
  
  $$("[data-translate-placeholder]").forEach(elem => {
    const key = elem.getAttribute("data-translate-placeholder");
    elem.setAttribute("placeholder", State.translate(key));
  });
}

function updateCartIcon() {
  const count = State.cart.reduce((sum, item) => sum + item.qty, 0);
  $(".cart-badge").textContent = count;
  $(".cart-badge").style.display = count > 0 ? "flex" : "none";
}

// Open and Render Cart Drawer
function toggleCartDrawer() {
  const drawer = $(".cart-drawer");
  const overlay = $(".cart-overlay");
  
  drawer.classList.toggle("open");
  overlay.classList.toggle("open");
  
  if (drawer.classList.contains("open")) {
    renderCartItems();
  }
}

function renderCartItems() {
  const itemsContainer = $(".cart-items");
  itemsContainer.innerHTML = "";
  
  if (State.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div style="text-align:center; padding: 40px 0; color:var(--text-secondary);">
        <div style="font-size:2.5rem; margin-bottom:12px; color:var(--text-muted);">🛒</div>
        <p>${State.translate('cartEmpty')}</p>
      </div>
    `;
    $(".cart-total-val").textContent = "₹0";
    $(".cart-tax-val").textContent = "₹0";
    $(".cart-grand-val").textContent = "₹0";
    $(".cart-footer .btn").style.display = "none";
    return;
  }
  
  $(".cart-footer .btn").style.display = "block";
  const subtotal = State.getCartTotal();
  const tax = Math.round(subtotal * 0.18);
  const grand = subtotal + tax;
  
  State.cart.forEach(item => {
    const card = document.createElement("div");
    card.className = "cart-item";
    card.innerHTML = `
      <img src="assets/hero_food.png" class="cart-item-img" alt="${item.name}">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price}</div>
        <div class="cart-item-qty">
          <button class="qty-btn dec-qty" data-id="${item.id}">-</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn inc-qty" data-id="${item.id}">+</button>
          <span class="cart-item-remove remove-cart-item" data-id="${item.id}">Remove</span>
        </div>
      </div>
    `;
    itemsContainer.appendChild(card);
  });
  
  $(".cart-total-val").textContent = `₹${subtotal}`;
  $(".cart-tax-val").textContent = `₹${tax}`;
  $(".cart-grand-val").textContent = `₹${grand}`;
  
  // Set drawer bindings
  $$(".inc-qty").forEach(btn => btn.onclick = () => { State.updateCartQty(btn.dataset.id, 1); renderCartItems(); });
  $$(".dec-qty").forEach(btn => btn.onclick = () => { State.updateCartQty(btn.dataset.id, -1); renderCartItems(); });
  $$(".remove-cart-item").forEach(btn => btn.onclick = () => { State.removeFromCart(btn.dataset.id); renderCartItems(); });
}

// ==========================================================================
// VIEWS RENDERERS
// ==========================================================================

// --- HOME PAGE ---
function renderHome() {
  const main = $("#app-viewport");
  main.innerHTML = `
    <!-- Hero Banner -->
    <section class="hero" style="background-image: url('assets/hero_food.png');">
      <div class="container">
        <div class="hero-content">
          <div class="hero-tagline"><span class="veg-badge"><span class="veg-dot"></span>Only Veg</span> <span data-translate="heroTag"></span></div>
          <h1 class="hero-title" data-translate="heroTitle"></h1>
          <p class="hero-desc" data-translate="heroDesc"></p>
          <div class="hero-buttons">
            <a href="#reservations" class="btn btn-primary" data-translate="reserveBtn"></a>
            <a href="#locations" class="btn btn-outline" data-translate="orderBtn"></a>
            <a href="#locations" class="btn btn-outline" data-translate="exploreBtn"></a>
          </div>
        </div>
      </div>
    </section>

    <!-- Brand Story Section -->
    <section class="about-section">
      <div class="container">
        <div class="about-grid">
          <div class="about-image-wrapper">
            <img src="assets/ambience_dining.png" class="about-img about-img-tall" alt="Restaurant Interior">
            <img src="assets/chef_special.png" class="about-img" alt="Gourmet plating">
            <img src="assets/hero_food.png" class="about-img" alt="Delightful Starter">
            <div class="about-badge">
              <span class="about-badge-num">13</span>
              <span class="about-badge-txt">Outlets</span>
            </div>
          </div>
          <div class="about-content">
            <h4 class="section-subtitle" data-translate="aboutTag"></h4>
            <h2 class="section-title" data-translate="aboutTitle"></h2>
            <p data-translate="aboutDesc" style="margin-bottom: 24px;"></p>
            <div style="border-left: 2px solid var(--primary-gold); padding-left: 20px; font-style: italic; color: var(--text-secondary); margin-bottom: 30px;">
              "Pure vegetarian cuisine is not about options; it is an art of delivering pure happiness on every single plate."
            </div>
            
            <div class="about-philosophy">
              <div class="philosophy-item">
                <h4 data-translate="phil1Title"></h4>
                <p data-translate="phil1Desc"></p>
              </div>
              <div class="philosophy-item">
                <h4 data-translate="phil2Title"></h4>
                <p data-translate="phil2Desc"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Highlighted Outlets -->
    <section class="locations-section">
      <div class="container">
        <div class="text-center">
          <h4 class="section-subtitle">Our Signature Venues</h4>
          <h2 class="section-title">The Veg Treat Experience</h2>
          <p style="max-width: 600px; margin: 0 auto 40px; color: var(--text-secondary);">
            Whether hosting a grand grand banquet celebration, dining with family, or grabbing a quick pure veg bite, we have a specialized location for you.
          </p>
        </div>
        <div class="locations-grid" id="home-featured-grid"></div>
        <div class="text-center" style="margin-top: 48px;">
          <a href="#locations" class="btn btn-outline">Explore All 13 Locations</a>
        </div>
      </div>
    </section>

    <!-- Chef Special Banner -->
    <section style="padding: 100px 0; border-bottom: 1px solid var(--border-color); background: radial-gradient(circle at center, #1b1613 0%, var(--bg-deep) 100%);">
      <div class="container">
        <div class="chef-showcase">
          <img src="assets/chef_special.png" class="chef-img" alt="Executive Chef">
          <div>
            <h4 class="section-subtitle">Culinary Masterpiece</h4>
            <h2 class="section-title">Curated Chef Specials</h2>
            <div class="chef-quote">"We fuse ancestral flavors with contemporary presentation to elevate vegetarian gastronomy to fine art."</div>
            <p style="margin-bottom: 24px; color: var(--text-secondary);">
              Our Executive Chefs meticulously research age-old spices and combine them with modern plating styles. Try our Paneer Regalia Makhani or the signature Tandoori Gold Broccoli at our outlets today.
            </p>
            <a href="#locations" class="btn btn-primary">Find Nearest Dining</a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Loyalty / Rewards Program Banner -->
    <section class="container">
      <div class="promo-banner">
        <div>
          <span class="promo-tag">Veg Treat Club</span>
          <h2>Join Our Exclusive Loyalty Circle</h2>
          <p style="margin-top: 10px; color: var(--text-secondary); max-width: 550px;">
            Sign up for the Veg Treat Loyalty Club to earn points on every dine-in or online order. Get welcome benefits, early booking access, and special birthday vouchers!
          </p>
          <div class="rewards-features">
            <div class="rewards-item">
              <h4>10% Points</h4>
              <p style="font-size:0.75rem;">On every visit & order</p>
            </div>
            <div class="rewards-item">
              <h4>Priority Reservations</h4>
              <p style="font-size:0.75rem;">Skip the queue weekends</p>
            </div>
            <div class="rewards-item">
              <h4>Birthday Treats</h4>
              <p style="font-size:0.75rem;">Complimentary dining vouchers</p>
            </div>
          </div>
        </div>
        <div style="text-align: center;">
          <a href="#rewards" class="btn btn-primary" style="margin-top:20px;">Join Club Now</a>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <div class="container">
        <div class="text-center">
          <h4 class="section-subtitle">Guest Testimonials</h4>
          <h2 class="section-title">Loved by Generations</h2>
        </div>
        <div class="testi-grid">
          <div class="testi-card">
            <div class="testi-stars">★★★★★</div>
            <p class="testi-text">"Veg Treat Regalia is our family go-to. The Paneer Tikka Angara melts in the mouth and the service is incredibly warm and premium. Best pure veg dining!"</p>
            <div class="testi-author">
              <div class="testi-avatar">SP</div>
              <div>
                <h4 style="font-size:0.95rem;">Siddharth Patel</h4>
                <p style="font-size:0.75rem; color:var(--text-secondary);">Regular Diner at Yogi Nagar</p>
              </div>
            </div>
          </div>
          <div class="testi-card">
            <div class="testi-stars">★★★★★</div>
            <p class="testi-text">"We hosted our daughter's wedding reception at Solitaire Banquets. Exceptional management, grand decor, and the food options left all our guests amazed."</p>
            <div class="testi-author">
              <div class="testi-avatar">MK</div>
              <div>
                <h4 style="font-size:0.95rem;">Meera Kothari</h4>
                <p style="font-size:0.75rem; color:var(--text-secondary);">Event Host at Solitaire</p>
              </div>
            </div>
          </div>
          <div class="testi-card">
            <div class="testi-stars">★★★★★</div>
            <p class="testi-text">"Veg Treat Express delivers the fastest Pav Bhaji in Borivali. Tastes consistently brilliant. They deliver extremely hot food within minutes!"</p>
            <div class="testi-author">
              <div class="testi-avatar">JD</div>
              <div>
                <h4 style="font-size:0.95rem;">Jatin Dave</h4>
                <p style="font-size:0.75rem; color:var(--text-secondary);">Frequent Online Buyer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Render 3 featured locations on Home Page
  const featured = State.getOutlets().filter(o => ["veg-treat-regalia", "solitaire-banquet", "foodlord"].includes(o.id));
  const grid = $("#home-featured-grid");
  grid.innerHTML = "";
  
  featured.forEach(loc => {
    const card = document.createElement("div");
    card.className = "location-card";
    card.innerHTML = `
      <div class="location-card-img" style="background-image: url('${loc.image}'); background-size: cover; background-position: center;">
        <span class="location-cuisine-tag">${loc.cuisines.split(',')[0]}</span>
      </div>
      <div class="location-card-content">
        <h3 class="location-title">${loc.name}</h3>
        <p class="location-address">📍 ${loc.address}</p>
        <div class="location-details">
          <div class="loc-detail-row">
            <span>Timings:</span>
            <span class="loc-detail-val">${loc.timings}</span>
          </div>
          <div class="loc-detail-row">
            <span>Call:</span>
            <span class="loc-detail-val">${loc.phone.split('/')[0]}</span>
          </div>
        </div>
        <div class="location-card-footer">
          <a href="#restaurant/${loc.id}" class="btn btn-outline">Explore Venue</a>
          <a href="#restaurant/${loc.id}" class="btn btn-primary">Menu & Order</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  
  translateUI();
}

// --- LOCATIONS PAGE ---
function renderLocations(filterType = "all") {
  const main = $("#app-viewport");
  main.innerHTML = `
    <section style="padding: 60px 0;">
      <div class="container">
        <div class="text-center">
          <h4 class="section-subtitle" data-translate="ourOutlets"></h4>
          <h2 class="section-title">Discover Our 13 Locations</h2>
          <p class="section-desc" data-translate="outletDesc" style="max-width: 600px; margin: 0 auto;"></p>
        </div>
        
        <div class="location-filters">
          <button class="filter-btn ${filterType === 'all' ? 'active' : ''}" data-type="all" data-translate="allCats"></button>
          <button class="filter-btn ${filterType === 'restaurant' ? 'active' : ''}" data-type="restaurant" data-translate="catRest"></button>
          <button class="filter-btn ${filterType === 'banquet' ? 'active' : ''}" data-type="banquet" data-translate="catBanquet"></button>
          <button class="filter-btn ${filterType === 'express' ? 'active' : ''}" data-type="express" data-translate="catExpress"></button>
          <button class="filter-btn ${filterType === 'hotel' ? 'active' : ''}" data-type="hotel" data-translate="catHotel"></button>
        </div>
        
        <div class="locations-grid" id="locations-page-grid"></div>
      </div>
    </section>
  `;

  const outlets = State.getOutlets();
  const filtered = filterType === "all" ? outlets : outlets.filter(o => o.type === filterType);
  const grid = $("#locations-page-grid");
  
  filtered.forEach(loc => {
    const card = document.createElement("div");
    card.className = "location-card";
    card.innerHTML = `
      <div class="location-card-img" style="background-image: url('${loc.image}'); background-size: cover; background-position: center;">
        <span class="location-cuisine-tag">${loc.type.toUpperCase()}</span>
      </div>
      <div class="location-card-content">
        <h3 class="location-title">${loc.name}</h3>
        <p class="location-address">📍 ${loc.address}</p>
        <div class="location-details">
          <div class="loc-detail-row">
            <span>Cuisines:</span>
            <span class="loc-detail-val" style="text-align: right; max-width: 60%;">${loc.cuisines}</span>
          </div>
          <div class="loc-detail-row">
            <span>Timings:</span>
            <span class="loc-detail-val">${loc.timings}</span>
          </div>
          <div class="loc-detail-row">
            <span>Contact:</span>
            <span class="loc-detail-val" style="font-size: 0.8rem; text-align: right; max-width: 60%;">${loc.phone}</span>
          </div>
        </div>
        <div class="location-card-footer">
          <a href="#restaurant/${loc.id}" class="btn btn-outline">Explore Menu</a>
          <a href="#reservations" class="btn btn-primary" onclick="sessionStorage.setItem('PRE_SELECTED_OUTLET', '${loc.id}')">Reserve Table</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Bind filter button click events
  $$(".filter-btn").forEach(btn => {
    btn.onclick = () => {
      renderLocations(btn.dataset.type);
    };
  });

  translateUI();
}

// --- INDIVIDUAL RESTAURANT DETAIL VIEW ---
function renderRestaurant(id) {
  const loc = State.getOutlets().find(o => o.id === id);
  if (!loc) {
    window.location.hash = "#home";
    return;
  }
  
  const main = $("#app-viewport");
  main.innerHTML = `
    <!-- Top Hero -->
    <section class="restaurant-hero" style="background-image: url('${loc.image}');">
      <div class="container restaurant-hero-content">
        <span class="veg-badge" style="margin-bottom: 12px; border-color:var(--primary-gold); color:var(--primary-gold);"><span class="veg-dot" style="background-color:var(--primary-gold);"></span>${loc.type.toUpperCase()}</span>
        <h1 class="hero-title" style="font-size: 3rem; margin-bottom: 10px;">${loc.name}</h1>
        <p style="color:var(--text-secondary); max-width:600px; margin-bottom:20px;">📍 ${loc.address}</p>
        <div style="display:flex; gap:16px;">
          <a href="#reservations" class="btn btn-primary" onclick="sessionStorage.setItem('PRE_SELECTED_OUTLET', '${loc.id}')">Reserve Table</a>
          <a href="#contact" class="btn btn-outline">Private Catering Inquiry</a>
        </div>
      </div>
    </section>

    <!-- Subpage Navigation Tabs -->
    <section class="container" style="padding: 40px 0 80px;">
      <div class="rest-nav-tabs">
        <div class="rest-tab-btn active" data-tab="menu">Online Ordering Menu</div>
        <div class="rest-tab-btn" data-tab="ambience">Ambience & Story</div>
        <div class="rest-tab-btn" data-tab="reviews">Guest Reviews</div>
        <div class="rest-tab-btn" data-tab="details">Timings & Directions</div>
      </div>

      <!-- TAB 1: MENU -->
      <div class="tab-pane active" id="pane-menu">
        <div class="menu-controls">
          <input type="text" class="menu-search" id="item-search-input" placeholder="Search menu item...">
          <div class="menu-cats-nav" id="menu-categories-bar"></div>
        </div>
        <div class="menu-items-grid" id="outlet-menu-items"></div>
      </div>

      <!-- TAB 2: AMBIENCE & STORY -->
      <div class="tab-pane" id="pane-ambience">
        <div class="chef-showcase" style="margin-top:0;">
          <img src="assets/ambience_dining.png" class="chef-img" alt="Ambience View">
          <div>
            <h3 class="section-title" style="font-size:1.8rem; margin-bottom:16px;">Premium Contemporary Atmosphere</h3>
            <p style="margin-bottom: 16px;">
              Designed with bespoke glassmorphic gold paneling, warm crimson seating fabrics, and hand-crafted metal lighting structures, our seating zones invite you to drop back, relax, and savor each course.
            </p>
            <p>
              We accommodate romantic date nights, large family gatherings, corporate get-togethers, and private buffet celebrations with equal poise.
            </p>
          </div>
        </div>
        <div class="gallery-grid" style="margin-top:40px;">
          <div class="gallery-item" style="background-image: url('assets/hero_food.png'); background-size: cover;"></div>
          <div class="gallery-item" style="background-image: url('assets/ambience_dining.png'); background-size: cover;"></div>
          <div class="gallery-item" style="background-image: url('assets/chef_special.png'); background-size: cover;"></div>
        </div>
      </div>

      <!-- TAB 3: REVIEWS -->
      <div class="tab-pane" id="pane-reviews">
        <div class="booking-grid">
          <!-- Submit Review -->
          <div class="form-card">
            <h3 class="form-title">Write a Review</h3>
            <form id="submit-review-form">
              <div class="form-group">
                <label class="form-label">Full Name</label>
                <input type="text" class="form-control" required placeholder="John Doe">
              </div>
              <div class="form-group">
                <label class="form-label">Rating (1 to 5 Stars)</label>
                <select class="form-control" id="review-stars-select">
                  <option value="5">★★★★★ (5 Stars)</option>
                  <option value="4">★★★★☆ (4 Stars)</option>
                  <option value="3">★★★☆☆ (3 Stars)</option>
                  <option value="2">★★☆☆☆ (2 Stars)</option>
                  <option value="1">★☆☆☆☆ (1 Star)</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Your Review Comments</label>
                <textarea class="form-control" rows="4" required placeholder="How was your dining experience?"></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width:100%;">Post Review</button>
            </form>
          </div>
          <!-- Review List -->
          <div>
            <h3 style="margin-bottom: 20px;">What Our Diners Say</h3>
            <div style="display:flex; flex-direction:column; gap:16px;" id="location-reviews-list">
              <div class="testi-card" style="padding: 20px;">
                <div class="testi-stars">★★★★★</div>
                <p class="testi-text" style="font-size:0.85rem;">"We visited this location for family dinner. The soup was outstanding. Staff was incredibly polite. Quick service!"</p>
                <div style="font-size:0.8rem; font-weight:600; color:var(--primary-gold);">Gaurav Trivedi (2 days ago)</div>
              </div>
              <div class="testi-card" style="padding: 20px;">
                <div class="testi-stars">★★★★★</div>
                <p class="testi-text" style="font-size:0.85rem;">"The ambience is perfect. Classic warm theme with comfortable seats. Ordered Paneer Regalia, it was soft and spicy."</p>
                <div style="font-size:0.8rem; font-weight:600; color:var(--primary-gold);">Anjali Mehta (1 week ago)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 4: DETAILS & DIRECTIONS -->
      <div class="tab-pane" id="pane-details">
        <div class="booking-grid">
          <div class="info-panel">
            <div class="info-row">
              <div class="info-icon">🕒</div>
              <div>
                <h4 style="font-size:0.95rem;">Opening Timings</h4>
                <p style="font-size:0.85rem; color:var(--text-primary);">${loc.timings}</p>
              </div>
            </div>
            <div class="info-row">
              <div class="info-icon">📞</div>
              <div>
                <h4 style="font-size:0.95rem;">Contact Reservation</h4>
                <p style="font-size:0.85rem; color:var(--text-primary);">${loc.phone}</p>
              </div>
            </div>
            <div class="info-row">
              <div class="info-icon">✉️</div>
              <div>
                <h4 style="font-size:0.95rem;">Private Gatherings Inquiry</h4>
                <p style="font-size:0.85rem; color:var(--text-primary);">events@vegtreat.com</p>
              </div>
            </div>
          </div>
          
          <div class="map-placeholder">
            <div style="position: absolute; text-align: center; z-index: 2;">
              <span style="font-size:2rem; display:block; margin-bottom:8px;">📍</span>
              <strong>Google Map Route</strong>
              <p style="font-size:0.75rem; color:var(--text-secondary); margin-top:4px;">${loc.address}</p>
              <a href="https://maps.google.com" target="_blank" class="btn btn-primary btn-sm" style="margin-top:12px;">Get Directions</a>
            </div>
            <!-- Glassy background -->
            <div style="position: absolute; top:0; left:0; width:100%; height:100%; opacity:0.15; background-image: url('assets/ambience_dining.png'); background-size:cover; filter: blur(3px);"></div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Dynamic menu loading based on location type (e.g. banquet, express, standard restaurant)
  let menuType = "restaurant";
  if (loc.type === "banquet") menuType = "banquet";
  else if (loc.type === "express") menuType = "express";
  else if (loc.type === "hotel") menuType = "hotel";

  const allMenus = State.getMenus();
  const outletMenu = allMenus[menuType] || allMenus["restaurant"];

  // Render categories filter pills
  const categories = ["all", ...new Set(outletMenu.map(i => i.category))];
  const catsBar = $("#menu-categories-bar");
  catsBar.innerHTML = "";
  
  categories.forEach(cat => {
    const pill = document.createElement("div");
    pill.className = `menu-cat-pill ${cat === 'all' ? 'active' : ''}`;
    pill.dataset.category = cat;
    pill.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    pill.onclick = () => {
      $$(".menu-cat-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      filterMenuItems(outletMenu, cat, $("#item-search-input").value, loc.id);
    };
    catsBar.appendChild(pill);
  });

  // Render Menu Items
  filterMenuItems(outletMenu, "all", "", loc.id);

  // Bind menu search
  $("#item-search-input").oninput = (e) => {
    const activeCat = $(".menu-cat-pill.active").dataset.category;
    filterMenuItems(outletMenu, activeCat, e.target.value, loc.id);
  };

  // Bind sub-tabs switching
  $$(".rest-tab-btn").forEach(btn => {
    btn.onclick = () => {
      $$(".rest-tab-btn").forEach(b => b.classList.remove("active"));
      $$(".tab-pane").forEach(tp => tp.classList.remove("active"));
      btn.classList.add("active");
      $(`#pane-${btn.dataset.tab}`).classList.add("active");
    };
  });

  // Handle Review Post Submission
  $("#submit-review-form").onsubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements[0].value;
    const rating = parseInt($("#review-stars-select").value);
    const text = e.target.elements[2].value;
    
    // Append to UI list
    const list = $("#location-reviews-list");
    const starsStr = "★".repeat(rating) + "☆".repeat(5 - rating);
    const card = document.createElement("div");
    card.className = "testi-card";
    card.style.padding = "20px";
    card.innerHTML = `
      <div class="testi-stars">${starsStr}</div>
      <p class="testi-text" style="font-size:0.85rem;">"${text}"</p>
      <div style="font-size:0.8rem; font-weight:600; color:var(--primary-gold);">${name} (Just Now)</div>
    `;
    list.insertBefore(card, list.firstChild);
    
    // Save to inquiries or locally inside State for reviews if we had structured DB
    alert("Thank you for your feedback! Review posted.");
    e.target.reset();
  };
}

function filterMenuItems(menuList, category, query, outletId) {
  const container = $("#outlet-menu-items");
  container.innerHTML = "";
  
  let filtered = menuList;
  if (category !== "all") {
    filtered = filtered.filter(i => i.category === category);
  }
  if (query.trim() !== "") {
    filtered = filtered.filter(i => i.name.toLowerCase().includes(query.toLowerCase()));
  }
  
  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: span 2; text-align:center; padding: 40px; color:var(--text-secondary);">No menu items found.</div>`;
    return;
  }
  
  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-item-card";
    card.innerHTML = `
      <img src="assets/hero_food.png" class="menu-item-img" alt="${item.name}">
      <div class="menu-item-details">
        <div class="menu-item-header">
          <div class="menu-item-name">${item.name} <span class="veg-badge"><span class="veg-dot"></span></span></div>
          <div class="menu-item-price">₹${item.price}</div>
        </div>
        <p class="menu-item-desc">${item.desc}</p>
        <div class="menu-item-action">
          <span style="font-size:0.7rem; color:var(--text-muted);">Freshly Prepared</span>
          <button class="btn btn-primary btn-sm add-to-cart-btn" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}">Add to Order</button>
        </div>
      </div>
    `;
    
    card.querySelector(".add-to-cart-btn").onclick = () => {
      const added = State.addToCart(item, outletId);
      if (added) {
        // Show subtle notification
        const btn = card.querySelector(".add-to-cart-btn");
        const originalText = btn.textContent;
        btn.textContent = "Added ✓";
        btn.style.backgroundColor = "var(--accent-green)";
        btn.style.borderColor = "var(--accent-green)";
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.backgroundColor = "var(--primary-gold)";
          btn.style.borderColor = "var(--primary-gold)";
        }, 1500);
      }
    };
    
    container.appendChild(card);
  });
}

// --- STANDALONE RESERVATION PAGE ---
function renderReservationsPage() {
  const main = $("#app-viewport");
  
  // Pre-selected option handling
  const preSelectedId = sessionStorage.getItem("PRE_SELECTED_OUTLET") || "";
  sessionStorage.removeItem("PRE_SELECTED_OUTLET");

  let optionsHTML = '<option value="" disabled selected>Choose a restaurant branch...</option>';
  State.getOutlets().forEach(o => {
    optionsHTML += `<option value="${o.id}" ${o.id === preSelectedId ? 'selected' : ''}>${o.name} (${o.type.toUpperCase()})</option>`;
  });

  main.innerHTML = `
    <section style="padding: 60px 0;">
      <div class="container">
        <div class="text-center" style="margin-bottom: 40px;">
          <h4 class="section-subtitle">Real-time Bookings</h4>
          <h2 class="section-title">Online Table Reservations</h2>
          <p style="color:var(--text-secondary); max-width:600px; margin:0 auto;">Instant table reservation. Simply fill in details and get your booking confirmation code.</p>
        </div>
        
        <div class="booking-grid">
          <div class="form-card">
            <h3 class="form-title">Enter Details</h3>
            <form id="create-booking-form">
              <div class="form-group">
                <label class="form-label">Select Restaurant Outlet</label>
                <select class="form-control" id="booking-outlet-select" required>
                  ${optionsHTML}
                </select>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Your Full Name</label>
                  <input type="text" class="form-control" required placeholder="Rajesh Patel">
                </div>
                <div class="form-group">
                  <label class="form-label">Mobile Number</label>
                  <input type="tel" class="form-control" required placeholder="98200XXXXX">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Booking Date</label>
                  <input type="date" class="form-control" required min="2026-05-23">
                </div>
                <div class="form-group">
                  <label class="form-label">Booking Time</label>
                  <select class="form-control" required>
                    <option value="12:00">12:00 PM (Lunch)</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="19:00" selected>07:00 PM (Dinner)</option>
                    <option value="20:00">08:00 PM</option>
                    <option value="21:00">09:00 PM</option>
                    <option value="22:00">10:00 PM</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Number of Guests</label>
                <select class="form-control">
                  <option value="2">2 Guests</option>
                  <option value="4" selected>4 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="8">8 Guests</option>
                  <option value="12">Grand Banquet (10+)</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Seating Preference</label>
                <select class="form-control">
                  <option value="standard">Standard Seating</option>
                  <option value="window">Window Side Lounge</option>
                  <option value="booth">Cozy Private Booth</option>
                  <option value="banquet">Banquet Hallway</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary" style="width:100%;">Confirm Instant Booking</button>
            </form>
          </div>

          <div style="display:flex; flex-direction:column; gap:20px;">
            <div class="form-card" style="border-style:dashed;">
              <h3 style="color:var(--primary-gold); margin-bottom:12px;">Why Book Online?</h3>
              <ul style="list-style: none; display:flex; flex-direction:column; gap:12px; font-size:0.9rem;">
                <li>✓ <strong>Zero Booking Fees</strong> - Reserve table for free.</li>
                <li>✓ <strong>Instant Confirmation</strong> - Ticket code sent immediately.</li>
                <li>✓ <strong>Custom Seating</strong> - Pick booths or banquet halls.</li>
                <li>✓ <strong>Admin Connected</strong> - Realtime update directly on outlet dashboard.</li>
              </ul>
            </div>
            <div class="map-placeholder">
              <img src="assets/ambience_dining.png" style="width:100%; height:100%; opacity:0.3; position:absolute; top:0; left:0; object-fit:cover;">
              <div style="position:relative; z-index:2; text-align:center; padding: 20px;">
                <span style="font-size:1.8rem; display:block; margin-bottom:4px;">✨</span>
                <strong>Live Floor Plan Sync</strong>
                <p style="font-size:0.8rem; color:var(--text-secondary); margin-top:4px;">Table details synchronized with local outlet systems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Submit Booking Form
  $("#create-booking-form").onsubmit = (e) => {
    e.preventDefault();
    const selectOutlet = $("#booking-outlet-select").value;
    const name = e.target.elements[1].value;
    const phone = e.target.elements[2].value;
    const date = e.target.elements[3].value;
    const time = e.target.elements[4].value;
    const guests = parseInt(e.target.elements[5].value);
    
    const code = "RES-" + Math.floor(1000 + Math.random() * 9000);
    
    // Save to State DB
    const list = State.getReservations();
    list.unshift({
      id: code,
      customerName: name,
      phone: phone,
      date: date,
      time: time,
      guests: guests,
      outletId: selectOutlet,
      status: "pending"
    });
    State.saveReservations(list);
    
    // Trigger Success Modal
    showStatusModal(
      "Table Reserved!",
      `Your table reservation at <strong>${State.getOutlets().find(o => o.id === selectOutlet).name}</strong> has been successfully booked. Present the code below at the reception entrance.`,
      code
    );
    e.target.reset();
  };
}

// --- ORDER CHECKOUT / PAYMENT SIMULATOR ---
function renderCheckoutPage() {
  const main = $("#app-viewport");
  
  if (State.cart.length === 0) {
    main.innerHTML = `
      <section style="padding: 100px 0; text-align: center;">
        <div class="container">
          <h2>Your Cart is Empty</h2>
          <p style="margin:16px 0 32px; color:var(--text-secondary);">Go to any outlet's menu to add items for online ordering.</p>
          <a href="#locations" class="btn btn-primary">Browse Outlets</a>
        </div>
      </section>
    `;
    return;
  }

  const subtotal = State.getCartTotal();
  const tax = Math.round(subtotal * 0.18);
  const grand = subtotal + tax;

  const outlet = State.getOutlets().find(o => o.id === State.currentOutletForCart);

  main.innerHTML = `
    <section style="padding: 60px 0;">
      <div class="container">
        <h2 class="section-title text-center" style="margin-bottom:40px;">Complete Your Order</h2>
        <div class="checkout-grid">
          <!-- Billing Details -->
          <div class="form-card">
            <h3 class="form-title">Delivery Details (from ${outlet ? outlet.name : 'Outlet'})</h3>
            <form id="checkout-payment-form">
              <div class="form-group">
                <label class="form-label">Full Name</label>
                <input type="text" class="form-control" required placeholder="Amit Shah">
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Contact Phone</label>
                  <input type="tel" class="form-control" required placeholder="99887XXXXX">
                </div>
                <div class="form-group">
                  <label class="form-label">Email Address</label>
                  <input type="email" class="form-control" required placeholder="amit@gmail.com">
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Complete Delivery Address</label>
                <textarea class="form-control" rows="3" required placeholder="Flat No, Wing, Society, Road, Area (Borivali West)"></textarea>
              </div>
              <div class="form-group">
                <label class="form-label">Payment Method</label>
                <select class="form-control" id="pay-method-select">
                  <option value="upi">UPI (GPay / PhonePe) - Live Simulator</option>
                  <option value="card">Credit / Debit Card</option>
                  <option value="cod">Cash on Delivery</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary" style="width:100%; padding:14px 0;">Submit Order & Pay ₹${grand}</button>
            </form>
          </div>

          <!-- Checkout Cart Summary -->
          <div>
            <div class="summary-card">
              <h3 style="margin-bottom:20px; color:var(--primary-gold);">Order Summary</h3>
              <div style="display:flex; flex-direction:column; gap:16px; margin-bottom:24px;" id="checkout-summary-list"></div>
              
              <div style="border-top: 1px solid rgba(255,255,255,0.05); padding-top:16px;">
                <div class="cart-summary-row">
                  <span>Subtotal:</span>
                  <span>₹${subtotal}</span>
                </div>
                <div class="cart-summary-row">
                  <span>GST & Service Charge (18%):</span>
                  <span>₹${tax}</span>
                </div>
                <div class="cart-summary-row cart-total">
                  <span>Total Amount:</span>
                  <span class="gold-text">₹${grand}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Render items in summary
  const summaryList = $("#checkout-summary-list");
  State.cart.forEach(item => {
    const d = document.createElement("div");
    d.style.display = "flex";
    d.style.justify = "space-between";
    d.style.fontSize = "0.9rem";
    d.innerHTML = `
      <span>${item.name} <strong>x ${item.qty}</strong></span>
      <span>₹${item.price * item.qty}</span>
    `;
    summaryList.appendChild(d);
  });

  // Submit Checkout Form
  $("#checkout-payment-form").onsubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements[0].value;
    const phone = e.target.elements[1].value;
    const address = e.target.elements[3].value;
    
    const code = "ORD-" + Math.floor(1000 + Math.random() * 9000);
    
    // Save to Orders database
    const orders = State.getOrders();
    orders.unshift({
      id: code,
      customerName: name,
      phone: phone,
      address: address,
      items: State.cart.map(i => ({ name: i.name, qty: i.qty, price: i.price })),
      total: grand,
      status: "pending",
      outletId: State.currentOutletForCart
    });
    State.saveOrders(orders);
    
    // Clear shopping cart
    State.clearCart();
    
    // Modal notification
    showStatusModal(
      "Payment Successful!",
      `Your order has been registered at <strong>${outlet ? outlet.name : 'our kitchens'}</strong>. The chefs have started preparation. Track your ID below.`,
      code
    );
  };
}

// --- LOYALTY CLUB VIEW ---
function renderRewardsPage() {
  const main = $("#app-viewport");
  main.innerHTML = `
    <section style="padding: 60px 0;">
      <div class="container" style="max-width: 600px;">
        <div class="form-card text-center" style="border: 1px solid var(--primary-gold);">
          <span style="font-size:3rem; display:block; margin-bottom:12px;">✨</span>
          <h2 class="section-title" style="margin-bottom:8px;">Veg Treat Loyalty Club</h2>
          <p style="color:var(--text-secondary); margin-bottom:28px;">Sign up today to earn instant reward points, free desserts, and VIP table slots.</p>
          
          <form id="rewards-enroll-form">
            <div class="form-group" style="text-align: left;">
              <label class="form-label">Full Name</label>
              <input type="text" class="form-control" required placeholder="John Doe">
            </div>
            <div class="form-group" style="text-align: left;">
              <label class="form-label">Mobile Number (For Points login)</label>
              <input type="tel" class="form-control" required placeholder="98200XXXXX">
            </div>
            <div class="form-group" style="text-align: left;">
              <label class="form-label">Your Birthday</label>
              <input type="date" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%; padding:12px 0;">Enroll & Get 100 Welcome Points</button>
          </form>
        </div>
      </div>
    </section>
  `;

  $("#rewards-enroll-form").onsubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements[0].value;
    showStatusModal(
      "Welcome to the Club!",
      `Hello ${name}, you have successfully enrolled in the Veg Treat Loyalty program. 100 Reward Points have been credited to your mobile number.`,
      "MEMBER-OK"
    );
    e.target.reset();
  };
}

// --- BLOG PAGE ---
function renderBlogPage() {
  const main = $("#app-viewport");
  main.innerHTML = `
    <section style="padding: 60px 0;">
      <div class="container">
        <div class="text-center" style="margin-bottom: 40px;">
          <h4 class="section-subtitle">Food & Recipes</h4>
          <h2 class="section-title">The Culinary Blog</h2>
          <p style="color:var(--text-secondary); max-width:600px; margin:0 auto;">Stories, secret recipes, and banquet event ideas straight from our expert kitchens.</p>
        </div>
        <div class="blog-grid" id="blog-posts-grid"></div>
      </div>
    </section>
  `;

  const grid = $("#blog-posts-grid");
  State.getBlogs().forEach(post => {
    const col = document.createElement("div");
    col.className = "blog-card";
    col.innerHTML = `
      <img src="${post.img}" class="blog-img" alt="${post.title}">
      <div class="blog-content">
        <span class="blog-date">${post.date}</span>
        <h3 class="blog-title">${post.title}</h3>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:16px;">${post.excerpt}</p>
        <a href="javascript:void(0)" class="blog-link read-post-btn" data-id="${post.id}">Read Article →</a>
      </div>
    `;
    
    col.querySelector(".read-post-btn").onclick = () => {
      showStatusModal(
        post.title,
        `<div style="text-align:left; font-size:0.9rem; line-height:1.6;">
          <p style="margin-bottom:12px; font-weight:600; color:var(--primary-gold);">Published: ${post.date}</p>
          <p style="margin-bottom:12px;">This is a detailed article discussing culinary secrets, ingredients, and the culinary philosophy of our restaurants. At The Veg Treat, we ensure premium spice mixtures, fresh farm-sourced vegetables, and dedicated kitchen setups to serve pure happiness.</p>
          <p>Read more interesting recipes on our social media handles or check our chef special items in the restaurant menu tabs!</p>
         </div>`,
        `BLOG-ID-${post.id}`
      );
    };
    grid.appendChild(col);
  });
}

// --- CAREERS PAGE ---
function renderCareersPage() {
  const main = $("#app-viewport");
  main.innerHTML = `
    <section style="padding: 60px 0;">
      <div class="container">
        <div class="text-center" style="margin-bottom: 40px;">
          <h4 class="section-subtitle">Join Our Team</h4>
          <h2 class="section-title">Hiring Opportunities</h2>
          <p style="color:var(--text-secondary); max-width:600px; margin:0 auto;">Grow your hospitality career with one of the most trusted pure-veg hospitality brands.</p>
        </div>
        
        <div class="booking-grid">
          <!-- Job List -->
          <div>
            <h3 style="margin-bottom:20px;">Open Openings</h3>
            <div class="jobs-list" id="jobs-vacancies-list"></div>
          </div>
          
          <!-- Apply Form -->
          <div class="form-card">
            <h3 class="form-title">Submit Application</h3>
            <form id="careers-apply-form">
              <div class="form-group">
                <label class="form-label">Full Name</label>
                <input type="text" class="form-control" required placeholder="Vijay Kumar">
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Mobile Number</label>
                  <input type="tel" class="form-control" required placeholder="91234XXXXX">
                </div>
                <div class="form-group">
                  <label class="form-label">Position Applying For</label>
                  <select class="form-control" id="job-role-select" required>
                    <option value="" disabled selected>Choose role...</option>
                    <option value="Chef de Partie (Tandoor)">Chef de Partie (Tandoor)</option>
                    <option value="Restaurant Captain / Supervisor">Restaurant Captain / Supervisor</option>
                    <option value="Banquet Sales Coordinator">Banquet Sales Coordinator</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Brief Experience Summary</label>
                <textarea class="form-control" rows="4" required placeholder="Describe your hospitality background..."></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width:100%;">Submit Resume details</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;

  const listContainer = $("#jobs-vacancies-list");
  State.getJobs().forEach(job => {
    const card = document.createElement("div");
    card.className = "job-item";
    card.innerHTML = `
      <div class="job-info">
        <h3>${job.title}</h3>
        <div class="job-tags">
          <span>💼 ${job.type}</span> | 
          <span>📍 ${job.location}</span> | 
          <span>💰 ${job.salary}</span>
        </div>
      </div>
      <button class="btn btn-outline btn-sm apply-job-btn" data-role="${job.title}">Apply Now</button>
    `;
    card.querySelector(".apply-job-btn").onclick = () => {
      $("#job-role-select").value = job.title;
      $("#job-role-select").scrollIntoView({ behavior: "smooth" });
    };
    listContainer.appendChild(card);
  });

  // Handle Application Submit
  $("#careers-apply-form").onsubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements[0].value;
    const phone = e.target.elements[1].value;
    const role = $("#job-role-select").value;
    
    // Save application to database
    const appList = State.getApplications();
    const code = "APP-" + Math.floor(100 + Math.random() * 900);
    appList.unshift({
      id: code,
      applicantName: name,
      phone: phone,
      role: role,
      status: "pending"
    });
    State.saveApplications(appList);

    showStatusModal(
      "Application Sent!",
      `Thank you ${name}. Your application for <strong>${role}</strong> has been registered. Our HR department will review and contact you shortly.`,
      code
    );
    e.target.reset();
  };
}

// --- CONTACT PAGE ---
function renderContactPage() {
  const main = $("#app-viewport");
  main.innerHTML = `
    <section style="padding: 60px 0;">
      <div class="container">
        <div class="text-center" style="margin-bottom: 40px;">
          <h4 class="section-subtitle">Reach Us</h4>
          <h2 class="section-title">Contact & Catering Inquiries</h2>
          <p style="color:var(--text-secondary); max-width:600px; margin:0 auto;">Have a question about our banquets, fine dining restaurants, or catering? Get in touch.</p>
        </div>
        
        <div class="booking-grid">
          <div class="form-card">
            <h3 class="form-title">Send Message</h3>
            <form id="contact-inquiry-form">
              <div class="form-group">
                <label class="form-label">Full Name</label>
                <input type="text" class="form-control" required placeholder="Enter name">
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Phone Number</label>
                  <input type="tel" class="form-control" required placeholder="Phone number">
                </div>
                <div class="form-group">
                  <label class="form-label">Inquiry Type</label>
                  <select class="form-control" required>
                    <option value="General Support">General Inquiry</option>
                    <option value="Banquet Booking">Banquet Hall Booking</option>
                    <option value="Outdoor Catering">Outdoor Party Catering</option>
                    <option value="Feedback">Feedback / Suggestions</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Your Message</label>
                <textarea class="form-control" rows="4" required placeholder="Detail your requirements (date, venue, headcount)..."></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width:100%;">Submit Inquiry</button>
            </form>
          </div>

          <div class="info-panel">
            <div class="info-row">
              <div class="info-icon">🏢</div>
              <div>
                <h4 style="font-size:0.95rem;">Corporate Head Office</h4>
                <p style="font-size:0.85rem; color:var(--text-secondary);">The Veg Treat Group Hotels, Yogi Nagar, Borivali West, Mumbai.</p>
              </div>
            </div>
            <div class="info-row">
              <div class="info-icon">📞</div>
              <div>
                <h4 style="font-size:0.95rem;">General Helpline</h4>
                <p style="font-size:0.85rem; color:var(--text-secondary);">+91 22 2970 0700 / info@vegtreat.com</p>
              </div>
            </div>
            <div class="info-row" style="border-style:dashed; border-color:var(--primary-gold);">
              <div class="info-icon">💻</div>
              <div>
                <h4 style="font-size:0.95rem;">Testing Tip</h4>
                <p style="font-size:0.85rem; color:var(--text-secondary);">Submitted inquiries will show up instantly in the Admin Dashboard for processing!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Submit Inquiry Form
  $("#contact-inquiry-form").onsubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements[0].value;
    const phone = e.target.elements[1].value;
    const type = e.target.elements[2].value;
    const text = e.target.elements[3].value;
    
    // Save to Database
    const list = State.getInquiries();
    const code = "INQ-" + Math.floor(100 + Math.random() * 900);
    list.unshift({
      id: code,
      name: name,
      phone: phone,
      type: type,
      message: text,
      date: new Date().toLocaleDateString()
    });
    State.saveInquiries(list);

    showStatusModal(
      "Inquiry Submitted!",
      `Thanks ${name}. Your inquiry about <strong>${type}</strong> has been logged in our system. We will contact you soon.`,
      code
    );
    e.target.reset();
  };
}

// ==========================================================================
// MOCK AUTHENTICATION & SUPER SIMPLE VISUAL ADMIN DASHBOARD
// ==========================================================================
function renderAdminPage() {
  const main = $("#app-viewport");
  
  if (!State.isAdminAuthenticated) {
    // Render Passcode Screen
    main.innerHTML = `
      <div class="admin-login-overlay">
        <div class="admin-login-card">
          <div class="logo-icon" style="margin: 0 auto 16px;">VT</div>
          <h2 style="font-family:var(--font-heading); margin-bottom:12px;" data-translate="adminTitle"></h2>
          <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:24px;" data-translate="adminPINLabel"></p>
          <form id="admin-login-form">
            <div class="admin-pin-inputs">
              <input type="password" maxlength="4" class="admin-pin-field" id="admin-pin-input" placeholder="••••" required autofocus style="width:120px; font-size:2rem; letter-spacing:8px;">
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%; margin-top:10px;" data-translate="adminUnlock"></button>
            <p style="margin-top:16px; font-size:0.75rem; color:var(--text-muted);">Enter default passcode: <strong>1234</strong> to demo controls.</p>
          </form>
        </div>
      </div>
    `;
    
    $("#admin-login-form").onsubmit = (e) => {
      e.preventDefault();
      const val = $("#admin-pin-input").value;
      if (val === "1234") {
        State.isAdminAuthenticated = true;
        sessionStorage.setItem("VT_ADMIN_AUTH", "true");
        renderAdminPage();
      } else {
        alert("Incorrect passcode! Hint: Enter 1234");
        $("#admin-pin-input").value = "";
      }
    };
    
    translateUI();
    return;
  }
  
  // Render Dashboard structure
  main.innerHTML = `
    <div class="admin-layout">
      <!-- Left sidebar with navigation -->
      <aside class="admin-sidebar">
        <div style="padding:0 24px 20px; border-bottom:1px solid rgba(255,255,255,0.05); margin-bottom:16px;">
          <strong style="color:var(--primary-gold); font-size:1.1rem; display:block;">VT Manager</strong>
          <span style="font-size:0.7rem; color:var(--text-muted);">EASY CONTROLS</span>
        </div>
        <div class="admin-nav-item active" data-tab="stats">📊 Stats Summary</div>
        <div class="admin-nav-item" data-tab="reservations">📅 Reservations</div>
        <div class="admin-nav-item" data-tab="orders">🍔 Online Orders</div>
        <div class="admin-nav-item" data-tab="menus">✏️ Edit Prices</div>
        <div class="admin-nav-item" data-tab="jobs">💼 Job Applicants</div>
        <div class="admin-nav-item" data-tab="inquiries">✉️ Inquiries</div>
        <div class="admin-nav-item" style="color:var(--accent-crimson); margin-top:auto;" id="admin-logout-btn">🚪 Exit Admin</div>
      </aside>

      <!-- Right content pane -->
      <main class="admin-content" id="admin-tab-viewport"></main>
    </div>
  `;

  // Bind Sidebar Navigation clicks
  $$(".admin-nav-item").forEach(item => {
    if (item.id === "admin-logout-btn") {
      item.onclick = () => {
        State.isAdminAuthenticated = false;
        sessionStorage.removeItem("VT_ADMIN_AUTH");
        window.location.hash = "#home";
      };
      return;
    }
    
    item.onclick = () => {
      $$(".admin-nav-item").forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      State.adminActiveTab = item.dataset.tab;
      renderAdminTab();
    };
  });

  // Render initial tab
  renderAdminTab();
}

function renderAdminTab() {
  const viewport = $("#admin-tab-viewport");
  const tab = State.adminActiveTab;
  
  if (tab === "stats") {
    const resCount = State.getReservations().length;
    const orderCount = State.getOrders().length;
    const totalSales = State.getOrders().reduce((sum, o) => sum + o.total, 0);
    const inqCount = State.getInquiries().length;

    viewport.innerHTML = `
      <div class="admin-header-row">
        <div>
          <h2>Stats Summary</h2>
          <p style="font-size:0.85rem; color:var(--text-secondary);">Quick look at restaurant performance details.</p>
        </div>
      </div>

      <div class="admin-dashboard-stats">
        <div class="admin-stat-card">
          <div class="admin-stat-num">${resCount}</div>
          <div class="admin-stat-label">Reservations booked</div>
        </div>
        <div class="admin-stat-card">
          <div class="admin-stat-num">${orderCount}</div>
          <div class="admin-stat-label">Orders Received</div>
        </div>
        <div class="admin-stat-card">
          <div class="admin-stat-num">₹${totalSales}</div>
          <div class="admin-stat-label">Online Sales (MOCK)</div>
        </div>
        <div class="admin-stat-card">
          <div class="admin-stat-num">${inqCount}</div>
          <div class="admin-stat-label">Customer Queries</div>
        </div>
      </div>

      <div class="admin-help-box">
        <div class="admin-help-icon">💡</div>
        <div>
          <strong>System Status Check:</strong> Everything is working correctly. Bookings and orders placed by customers update in real-time. Use the sidebar to complete pending tasks.
        </div>
      </div>
    `;
  }
  
  else if (tab === "reservations") {
    viewport.innerHTML = `
      <div class="admin-header-row">
        <div>
          <h2>Table Reservations</h2>
          <p style="font-size:0.85rem; color:var(--text-secondary);">Manage table bookings. Click the green button when guests arrive.</p>
        </div>
      </div>
      
      <div class="admin-table-container">
        <div class="admin-list" id="admin-res-list"></div>
      </div>
    `;
    
    const list = $("#admin-res-list");
    const reservations = State.getReservations();
    
    if (reservations.length === 0) {
      list.innerHTML = `<div style="padding:40px; text-align:center; color:var(--text-secondary);">No table reservations found.</div>`;
      return;
    }
    
    reservations.forEach((res, index) => {
      const outletName = State.getOutlets().find(o => o.id === res.outletId)?.name || res.outletId;
      const item = document.createElement("div");
      item.className = "admin-list-item";
      item.innerHTML = `
        <div class="admin-item-main">
          <div class="admin-item-info">
            <h4 style="display:flex; align-items:center; gap:8px;">${res.customerName} <span class="admin-badge-status ${res.status === 'pending' ? 'status-pending' : 'status-completed'}">${res.status}</span></h4>
            <p>Outlet: <strong>${outletName}</strong> | Code: <strong>${res.id}</strong></p>
            <p>Mobile: ${res.phone} | Date: ${res.date} | Time: ${res.time} | Guests: <strong>${res.guests}</strong></p>
          </div>
        </div>
        <div class="admin-item-actions">
          ${res.status === 'pending' ? `<button class="btn btn-primary btn-sm mark-arrived-btn" style="background-color:var(--accent-green); border-color:var(--accent-green);" data-index="${index}">Mark Arrived</button>` : ''}
          <button class="btn btn-crimson btn-sm delete-res-btn" data-index="${index}">Delete Record</button>
        </div>
      `;
      
      const arrivedBtn = item.querySelector(".mark-arrived-btn");
      if (arrivedBtn) {
        arrivedBtn.onclick = () => {
          reservations[index].status = "completed";
          State.saveReservations(reservations);
          renderAdminTab();
        };
      }
      
      item.querySelector(".delete-res-btn").onclick = () => {
        if (confirm("Delete this reservation record permanently?")) {
          reservations.splice(index, 1);
          State.saveReservations(reservations);
          renderAdminTab();
        }
      };
      
      list.appendChild(item);
    });
  }
  
  else if (tab === "orders") {
    viewport.innerHTML = `
      <div class="admin-header-row">
        <div>
          <h2>Online Food Orders</h2>
          <p style="font-size:0.85rem; color:var(--text-secondary);">Track home delivery/takeaway orders. Click "Complete" when food is delivered.</p>
        </div>
      </div>
      
      <div class="admin-table-container">
        <div class="admin-list" id="admin-orders-list"></div>
      </div>
    `;
    
    const list = $("#admin-orders-list");
    const orders = State.getOrders();
    
    if (orders.length === 0) {
      list.innerHTML = `<div style="padding:40px; text-align:center; color:var(--text-secondary);">No orders received yet.</div>`;
      return;
    }
    
    orders.forEach((ord, index) => {
      const itemsText = ord.items.map(i => `${i.name} x${i.qty}`).join(", ");
      const outletName = State.getOutlets().find(o => o.id === ord.outletId)?.name || "Main Kitchen";
      const item = document.createElement("div");
      item.className = "admin-list-item";
      item.innerHTML = `
        <div class="admin-item-main">
          <div class="admin-item-info">
            <h4 style="display:flex; align-items:center; gap:8px;">Order #${ord.id} <span class="admin-badge-status ${ord.status === 'pending' ? 'status-pending' : 'status-completed'}">${ord.status}</span></h4>
            <p>Customer: <strong>${ord.customerName}</strong> | Outlet: <strong>${outletName}</strong></p>
            <p>Items: <strong style="color:var(--primary-gold);">${itemsText}</strong> | Total: <strong>₹${ord.total}</strong></p>
            <p>Mobile: ${ord.phone} | Address: ${ord.address}</p>
          </div>
        </div>
        <div class="admin-item-actions">
          ${ord.status === 'pending' ? `<button class="btn btn-primary btn-sm mark-delivered-btn" style="background-color:var(--accent-green); border-color:var(--accent-green);" data-index="${index}">Mark Delivered</button>` : ''}
          <button class="btn btn-crimson btn-sm delete-ord-btn" data-index="${index}">Delete Order</button>
        </div>
      `;
      
      const delBtn = item.querySelector(".mark-delivered-btn");
      if (delBtn) {
        delBtn.onclick = () => {
          orders[index].status = "completed";
          State.saveOrders(orders);
          renderAdminTab();
        };
      }
      
      item.querySelector(".delete-ord-btn").onclick = () => {
        if (confirm("Delete this order record permanently?")) {
          orders.splice(index, 1);
          State.saveOrders(orders);
          renderAdminTab();
        }
      };
      
      list.appendChild(item);
    });
  }
  
  else if (tab === "menus") {
    viewport.innerHTML = `
      <div class="admin-header-row">
        <div>
          <h2>Edit Menu Prices</h2>
          <p style="font-size:0.85rem; color:var(--text-secondary);">Select a menu catalog below, enter a new price, and click "Save Price".</p>
        </div>
        <select class="form-control" style="width:220px;" id="admin-menu-selector-dropdown">
          <option value="restaurant">Standard Fine Dining Menu</option>
          <option value="banquet">Banquet Packages Menu</option>
          <option value="express">Express Outlet Menu</option>
          <option value="hotel">Boutique Hotel Buffet Menu</option>
        </select>
      </div>
      
      <div class="admin-table-container">
        <div class="admin-list" id="admin-menu-edit-list"></div>
      </div>
    `;
    
    const selector = $("#admin-menu-selector-dropdown");
    selector.onchange = () => renderMenuPriceEditor(selector.value);
    
    // Initial load
    renderMenuPriceEditor("restaurant");
  }
  
  else if (tab === "jobs") {
    viewport.innerHTML = `
      <div class="admin-header-row">
        <div>
          <h2>Job Applications</h2>
          <p style="font-size:0.85rem; color:var(--text-secondary);">Review resumes and details submitted on the Careers page.</p>
        </div>
      </div>
      
      <div class="admin-table-container">
        <div class="admin-list" id="admin-applicants-list"></div>
      </div>
    `;
    
    const list = $("#admin-applicants-list");
    const apps = State.getApplications();
    
    if (apps.length === 0) {
      list.innerHTML = `<div style="padding:40px; text-align:center; color:var(--text-secondary);">No job applications received yet.</div>`;
      return;
    }
    
    apps.forEach((app, index) => {
      const item = document.createElement("div");
      item.className = "admin-list-item";
      item.innerHTML = `
        <div class="admin-item-main">
          <div class="admin-item-info">
            <h4 style="display:flex; align-items:center; gap:8px;">${app.applicantName} <span class="admin-badge-status ${app.status === 'pending' ? 'status-pending' : 'status-completed'}">${app.status}</span></h4>
            <p>Position: <strong>${app.role}</strong> | Contact: <strong>${app.phone}</strong></p>
          </div>
        </div>
        <div class="admin-item-actions">
          ${app.status === 'pending' ? `<button class="btn btn-primary btn-sm review-app-btn" style="background-color:var(--accent-green); border-color:var(--accent-green);" data-index="${index}">Mark Reviewed</button>` : ''}
          <button class="btn btn-crimson btn-sm delete-app-btn" data-index="${index}">Remove Application</button>
        </div>
      `;
      
      const revBtn = item.querySelector(".review-app-btn");
      if (revBtn) {
        revBtn.onclick = () => {
          apps[index].status = "completed";
          State.saveApplications(apps);
          renderAdminTab();
        };
      }
      
      item.querySelector(".delete-app-btn").onclick = () => {
        if (confirm("Remove this applicant?")) {
          apps.splice(index, 1);
          State.saveApplications(apps);
          renderAdminTab();
        }
      };
      
      list.appendChild(item);
    });
  }
  
  else if (tab === "inquiries") {
    viewport.innerHTML = `
      <div class="admin-header-row">
        <div>
          <h2>Contact Inquiries</h2>
          <p style="font-size:0.85rem; color:var(--text-secondary);">General and catering messages submitted by website visitors.</p>
        </div>
      </div>
      
      <div class="admin-table-container">
        <div class="admin-list" id="admin-inquiries-list"></div>
      </div>
    `;
    
    const list = $("#admin-inquiries-list");
    const inqs = State.getInquiries();
    
    if (inqs.length === 0) {
      list.innerHTML = `<div style="padding:40px; text-align:center; color:var(--text-secondary);">No customer inquiries found. Form submissions appear here automatically.</div>`;
      return;
    }
    
    inqs.forEach((inq, index) => {
      const item = document.createElement("div");
      item.className = "admin-list-item";
      item.innerHTML = `
        <div class="admin-item-main">
          <div class="admin-item-info">
            <h4 style="display:flex; align-items:center; gap:8px;">${inq.name} <span class="admin-badge-status status-pending">${inq.type}</span></h4>
            <p>Mobile: <strong>${inq.phone}</strong> | Date: <strong>${inq.date}</strong></p>
            <p style="margin-top:8px; color:var(--text-primary); background:var(--bg-deep); padding:8px 12px; border-radius:4px; border:1px solid rgba(255,255,255,0.03);">${inq.message}</p>
          </div>
        </div>
        <div class="admin-item-actions">
          <button class="btn btn-crimson btn-sm delete-inq-btn" data-index="${index}">Delete Entry</button>
        </div>
      `;
      
      item.querySelector(".delete-inq-btn").onclick = () => {
        if (confirm("Delete this inquiry entry?")) {
          inqs.splice(index, 1);
          State.saveInquiries(inqs);
          renderAdminTab();
        }
      };
      
      list.appendChild(item);
    });
  }
}

function renderMenuPriceEditor(menuKey) {
  const container = $("#admin-menu-edit-list");
  container.innerHTML = "";
  
  const allMenus = State.getMenus();
  const items = allMenus[menuKey];
  
  items.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "admin-list-item";
    card.innerHTML = `
      <div class="admin-item-main">
        <img src="assets/hero_food.png" class="admin-item-thumb">
        <div class="admin-item-info">
          <h4>${item.name}</h4>
          <p>Category: <strong>${item.category.toUpperCase()}</strong></p>
        </div>
      </div>
      <div class="admin-item-actions" style="align-items:center;">
        <span style="font-size:0.9rem; color:var(--text-secondary);">Price: ₹</span>
        <input type="number" class="form-control price-edit-input" style="width:90px; text-align:center; padding:6px;" value="${item.price}" data-index="${index}">
        <button class="btn btn-primary btn-sm save-price-btn" data-index="${index}">Save Price</button>
      </div>
    `;
    
    card.querySelector(".save-price-btn").onclick = () => {
      const input = card.querySelector(".price-edit-input");
      const newPrice = parseInt(input.value);
      if (isNaN(newPrice) || newPrice <= 0) {
        alert("Please enter a valid price!");
        return;
      }
      
      // Update values
      allMenus[menuKey][index].price = newPrice;
      State.saveMenus(allMenus);
      
      // Visual feedback
      const btn = card.querySelector(".save-price-btn");
      btn.textContent = "Saved!";
      btn.style.backgroundColor = "var(--accent-green)";
      btn.style.borderColor = "var(--accent-green)";
      setTimeout(() => {
        btn.textContent = "Save Price";
        btn.style.backgroundColor = "var(--primary-gold)";
        btn.style.borderColor = "var(--primary-gold)";
      }, 1000);
    };
    
    container.appendChild(card);
  });
}

// ==========================================================================
// CENTRAL STATUS MODAL OVERLAY (FOR TICKET CONFIRMATIONS, ETC.)
// ==========================================================================
function showStatusModal(title, message, code) {
  const overlay = $(".modal-overlay");
  
  overlay.querySelector(".modal-title").textContent = title;
  overlay.querySelector(".modal-message").innerHTML = message;
  
  const codeBox = overlay.querySelector(".modal-code-box");
  if (code) {
    codeBox.style.display = "block";
    codeBox.textContent = code;
  } else {
    codeBox.style.display = "none";
  }
  
  overlay.classList.add("open");
}

function closeStatusModal() {
  $(".modal-overlay").classList.remove("open");
}

// ==========================================================================
// INITIAL SETUP ON DOM LOAD
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Bind Language selector changes
  $("#header-lang-switcher").onchange = (e) => {
    State.currentLanguage = e.target.value;
    localStorage.setItem("VT_LANG", e.target.value);
    
    // Re-render and update UI immediately
    router();
  };
  
  // Set language selector value from state
  $("#header-lang-switcher").value = State.currentLanguage;
  
  // Cart toggle hooks
  $(".cart-toggle").onclick = toggleCartDrawer;
  $(".cart-close").onclick = toggleCartDrawer;
  $(".cart-overlay").onclick = toggleCartDrawer;
  
  // Modal overlay close click hook
  $(".modal-close-btn").onclick = closeStatusModal;
  
  // Direct router links click setup
  window.addEventListener("hashchange", router);
  
  // Trigger initial routing & icon badges
  router();
  updateCartIcon();
  
  // Connect newsletter signups
  $(".newsletter-form").onsubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    showStatusModal(
      "Subscribed!",
      `Thank you for joining our newsletter. Seasonal dining deals and banquet promotions will be sent to <strong>${email}</strong>.`,
      "NEWS-OK"
    );
    e.target.reset();
  };
});
