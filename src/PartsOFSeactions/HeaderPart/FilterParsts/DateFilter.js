// import { ColorLensSharp } from "@mui/icons-material";

// DateFilter.js
const DateFilter = {
  categories: [
    { Title: "Category" }, // Category title
    { categoryName: "All" },
    { categoryName: "Walking" },
    { categoryName: "Basketball" },
    { categoryName: "Running" },
    { categoryName: "Boot" },
    { categoryName: "Scribin" },
    { categoryName: "Platform" },
  ],
  prices: [
    { Title2: "Price" }, // Price title
    { PriceName: "All" },
    { PriceName: "$1000-$2000" },
    { PriceName: "$3000-$4000" },
    { PriceName: "$5000-$6000" },
    { PriceName: "$7000-$8000" },
    { PriceName: "$8000-$9000" }, // Fixed typo ("$800" -> "$8000")
    { PriceName: "Over $9000" }, // Fixed spacing ("over $9000" -> "Over $9000")
  ],
  ColorLensSharp: [
    { Title3: "Color" }, // Color title
    { ColorName: "All" },
    { ColorName: "Black" },
    { ColorName: "Blue" },
    { ColorName: "Pink" },
    { ColorName: "Gray" },
    { ColorName: "Green" },
    { ColorName: "Orange" }, // Fixed typo ("Oreng" -> "Orange")
    { ColorName: "Brown" }, // Fixed typo ("Bron" -> "Brown")
    { ColorName: "White" }
  ],
};


export default DateFilter;
