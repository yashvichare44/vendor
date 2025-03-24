import { create } from 'zustand';

// Create Zustand store for state management
export const useSupplierStore = create((set) => ({
  selectedSupplier: null,
  selectedWarehouse: null,
  activeTab: 'suppliers',
  setSelectedSupplier: (id) => set({ selectedSupplier: id }),
  setSelectedWarehouse: (id) => set({ selectedWarehouse: id }),
  setActiveTab: (tab) => set({ activeTab: tab })
}));

// Sample suppliers data
export const suppliers = [
  { id: 1, name: "Home Essentials", type: "Crockery Products" },
  { id: 2, name: "Textile & Apparel Hub", type: "Wearables" },
  { id: 3, name: "Mobile Accessories Traders", type: "Electronics" },
  { id: 4, name: "Stationery Suppliers", type: "Stationery products" },
];

// Warehouse data
export const warehouses = [
  {
    id: 1,
    name: "Shree Storage",
    owner: "Rajesh Sharma",
    location: "Andheri, Mumbai",
    area: "465 sq.m",
    rent: "₹1,50,000/month",
    image: "https://imagecdn.99acres.com/media1/23353/7/467067400M-1737618462281.jpg"
  },
  {
    id: 2,
    name: "Mehta Logistics",
    owner: "Priya Mehta",
    location: "Whitefield, Bangalore",
    area: "604 sq.m",
    rent: "₹1,85,000/month",
    image: "https://imagecdn.99acres.com/media1/28934/10/578690401M-1742379035920.jpg"
  },
  {
    id: 3,
    name: "Suraksha Hub",
    owner: "Vikram Patel",
    location: "Gurgaon, Haryana",
    area: "446 sq.m",
    rent: "₹1,35,000/month",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWOU35izyCPvOGugHUW7ccZ3kCxMgOQwOrg&s"
  },
  {
    id: 4,
    name: "SafeWare India",
    owner: "Anjali Desai",
    location: "Ambattur, Chennai",
    area: "483 sq.m",
    rent: "₹1,60,000/month",
    image: "https://www.gurgaonapartments.in/admin/upload/project/1617259425-warehouse-for-rent-in-gurgaon.jpg"
  },
  {
    id: 5,
    name: "Krishna Depot",
    owner: "Arjun Reddy",
    location: "Uppal, Hyderabad",
    area: "650 sq.m",
    rent: "₹2,10,000/month",
    image: "https://bsmedia.business-standard.com/_media/bs/img/article/2021-03/10/full/1615397966-5551.jpg?im=FeatureCrop,size=(826,465)"
  },
];

// Unique products for each supplier
export const supplierProjects = {
  // Home Essentials - Crockery Products
  1: [
    {
      "title": "Premium Cookware Set",
      "description": "Professional-grade stainless steel cookware set with non-stick coating and heat-resistant handles.",
      "imageURL": "https://m.media-amazon.com/images/I/91vWeAHa6mL._AC_UF894,1000_QL80_.jpg",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 763,
      "cost": 1000,
      "progressPercentage": 76.3
    },
    {
      "title": "Ceramic Dinner Set",
      "description": "Elegant 24-piece ceramic dinner set with hand-painted designs for special occasions.",
      "imageURL": "https://img.etimg.com/thumb/width-1200,height-900,imgsize-668486,resizemode-75,msid-114823142/top-trending-products/kitchen-dining/dinner-set/best-ceramic-dinner-sets-to-elevate-your-dining-experience.jpg",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 283,
      "cost": 1000,
      "progressPercentage": 28.3
    },
    {
      "title": "Glass Bakeware Collection",
      "description": "Tempered glass bakeware collection including casserole dishes, pie plates, and loaf pans.",
      "imageURL": "https://m.media-amazon.com/images/I/61J3guiLl1L._AC_UF894,1000_QL80_.jpg",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 990,
      "cost": 1000,
      "progressPercentage": 99.0
    },
    {
      "title": "Cast Iron Skillet Set",
      "description": "Pre-seasoned cast iron skillet set in three different sizes for versatile cooking.",
      "imageURL": "https://static.toiimg.com/thumb/msid-103863867,width-400,resizemode-4/103863867.jpg",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 352,
      "cost": 1000,
      "progressPercentage": 35.2
    },
    {
      "title": "Coffee Mug Collection",
      "description": "Set of 6 artisanal ceramic coffee mugs with unique designs and comfortable handles.",
      "imageURL": "https://images.saymedia-content.com/.image/t_share/MTc4MjQyMTY2MzI4Nzk2Nzc2/four-reasons-to-collect-coffee-mugs.jpg",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 526,
      "cost": 1000,
      "progressPercentage": 52.6
    },
    {
      "title": "Kitchen Utensil Set",
      "description": "Complete set of bamboo and silicone kitchen utensils that are heat-resistant and eco-friendly.",
      "imageURL": "https://m.media-amazon.com/images/I/71ZyF793oUL.jpg",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 524,
      "cost": 1000,
      "progressPercentage": 52.4
    }
  ],
  // Textile & Apparel Hub items
  2: [
    {
      "title": "Organic Cotton T-Shirts",
      "description": "Pack of 5 organic cotton t-shirts in various colors with sustainable production methods.",
      "imageURL": "https://mms-images.out.customink.com/mms/images/catalog/styles/176100/catalog_detail_image_medium.jpg?digest=1741869157",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 173,
      "cost": 1000,
      "progressPercentage": 17.3
    },
    {
      "title": "Winter Jacket Collection",
      "description": "Water-resistant and thermal-insulated winter jackets for extreme weather conditions.",
      "imageURL": "https://img.pikbest.com/wp/202345/winter-jackets-the-design-for-a-new-coat-or-jacket_9575583.jpg!w700wp",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 318,
      "cost": 1000,
      "progressPercentage": 31.8
    },
    {
      "title": "Handcrafted Leather Belts",
      "description": "Genuine leather belts with handcrafted designs and premium metal buckles.",
      "imageURL": "https://www.bullhidebelts.com/cdn/shop/files/bullhidebelts_homepagemini_hero1-min_1080x.jpg?v=1664216045",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 133,
      "cost": 1000,
      "progressPercentage": 13.3
    },
    {
      "title": "Eco-friendly Swimwear",
      "description": "Swimwear made from recycled ocean plastic with UV protection technology.",
      "imageURL": "https://www.thegoodtrade.com/wp-content/uploads/2024/07/sustainable-mens-swim-trunks-industry-of-all-nations-edited.jpeg",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 390,
      "cost": 1000,
      "progressPercentage": 39.0
    },
    {
      "title": "Performance Athletic Socks",
      "description": "Moisture-wicking athletic socks with arch support and blister prevention technology.",
      "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfymzNcf-NDpSC77K-1Gt9vDqJsieENdwTiQ&s",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 718,
      "cost": 1000,
      "progressPercentage": 71.8
    },
    {
      "title": "Silk Scarves Collection",
      "description": "Hand-painted pure silk scarves with artistic designs and premium finish.",
      "imageURL": "https://m.media-amazon.com/images/I/71E0wq5TA-L._AC_UY1100_.jpg",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 673,
      "cost": 1000,
      "progressPercentage": 67.3
    }
  ],
  // Mobile Accessories Traders - Electronics
  3: [
    {
      "title": "Wireless Earbuds Pro",
      "description": "Noise-cancelling wireless earbuds with 24-hour battery life and water resistance.",
      "imageURL": "https://hips.hearstapps.com/hmg-prod/images/wireless-earbuds-001-6792869accae0.jpg?crop=0.587xw:0.782xh;0.199xw,0.179xh&resize=640:*",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 202,
      "cost": 1000,
      "progressPercentage": 20.2
    },
    {
      "title": "Phone Camera Lens Kit",
      "description": "Professional-grade camera lens attachments for smartphone photography enthusiasts.",
      "imageURL": "https://www.electroniksindia.com/cdn/shop/files/apexel-10-in-1-phone-camera-lens-kit-fisheye-wide-angle-macro-lens-cpl-filter-kaleidoscope-and-2x-telescope-lens-for-smartphone-by-electroniksindia-121.webp?v=1739159087&width=1080",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 642,
      "cost": 1000,
      "progressPercentage": 64.2
    },
    {
      "title": "Fast Charging Power Bank",
      "description": "20,000mAh power bank with fast charging capability and multiple device support.",
      "imageURL": "https://www.hindustantimes.com/ht-img/img/2024/01/24/1600x900/power_banks_1706089348897_1706089433591.png",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 374,
      "cost": 1000,
      "progressPercentage": 37.4
    },
    {
      "title": "Premium Phone Cases",
      "description": "Military-grade protection phone cases with stylish designs and anti-bacterial coating.",
      "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2wrZVRHBICnLv7juf74AbazR_8QFg8sU3w&s",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 812,
      "cost": 1000,
      "progressPercentage": 81.2
    },
    {
      "title": "Tablet Stand with Speakers",
      "description": "Adjustable tablet stand with built-in Bluetooth speakers for enhanced media experience.",
      "imageURL": "https://images.jdmagicbox.com/buying_guide/tablet_stand_rep_5.jpg",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 174,
      "cost": 1000,
      "progressPercentage": 17.4
    },
    {
      "title": "Smart Watch Bands",
      "description": "Collection of premium material smart watch bands compatible with multiple watch models.",
      "imageURL": "https://i01.appmifile.com/webfile/globalimg/products/m/mi-smart-band-6/section08.png",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 19,
      "cost": 1000,
      "progressPercentage": 1.9
    }
  ],
  // Stationery Suppliers - Stationery products
  4: [
    {
      "title": "Fountain Pen Collection",
      "description": "Set of luxury fountain pens with smooth ink flow and elegant designs for professionals.",
      "imageURL": "https://images.squarespace-cdn.com/content/v1/5349ba13e4b095a3fb0ba65c/06ac2fe5-e3e2-4ae6-a609-676728d31656/Recent-vintage-pen-finds.jpg",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 378,
      "cost": 1000,
      "progressPercentage": 37.8
    },
    {
      "title": "Leather-bound Journals",
      "description": "Hand-crafted leather-bound journals with premium paper and customizable covers.",
      "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToPLPw4YqFbbYTgYPdfVrR7sdREQXw7B_3YQ&s",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 641,
      "cost": 1000,
      "progressPercentage": 64.1
    },
    {
      "title": "Ergonomic Office Set",
      "description": "Complete ergonomic desk organizer set with adjustable components for workspace efficiency.",
      "imageURL": "https://www.moglix.com/blog/wp-content/uploads/2020/11/blog-banner-office-chairs.jpg",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 275,
      "cost": 1000,
      "progressPercentage": 27.5
    },
    {
      "title": "Artist Sketch Kit",
      "description": "Professional artist sketch kit with varied pencils, charcoals, and specialized papers.",
      "imageURL": "https://m.media-amazon.com/images/I/91IU3wis5aL._AC_UF1000,1000_QL80_.jpg",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 895,
      "cost": 1000,
      "progressPercentage": 89.5
    },
    {
      "title": "Calligraphy Starter Set",
      "description": "Complete calligraphy starter set with pens, nibs, inks, and instructional guide.",
      "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7Wvv0WAuFSHJKNsyy7-v2yupGPnXasvXdQ&s",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 143,
      "cost": 1000,
      "progressPercentage": 14.3
    },
    {
      "title": "Eco-friendly Planner",
      "description": "Sustainable planner made from recycled materials with monthly, weekly, and daily sections.",
      "imageURL": "https://marketplace.canva.com/EAFOWOercM0/1/0/1131w/canva-beige-simple-minimalist-daily-planner-Arln5OBnbS8.jpg",
      "expiresAt": 1711238400,
      "statusText": "Open",
      "raised": 527,
      "cost": 1000,
      "progressPercentage": 52.7
    }
  ],
  5: [] // Urban Gardens items (empty)
};

// Default projects when no supplier is selected (using first supplier's projects)
export const defaultProjects = [
  supplierProjects[1][0],
  supplierProjects[1][1],
  supplierProjects[1][2],
  supplierProjects[1][3],
  supplierProjects[1][4],
  supplierProjects[1][5]
];