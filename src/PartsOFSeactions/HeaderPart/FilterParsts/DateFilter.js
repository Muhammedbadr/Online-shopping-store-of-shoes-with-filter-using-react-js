// DateFilter.js
const DateFilter = {
  categories: [
    { Title: "Category" }, // Category title
    { categoryName: "All", value: "All", title: "All categories", name: "category-radio" },
    { categoryName: "Walking", value: "Walking", title: "Walking category", name: "category-radio" },
    { categoryName: "Basketball", value: "Basketball", title: "Basketball category", name: "category-radio" },
    { categoryName: "Running", value: "Running", title: "Running category", name: "category-radio" },
    { categoryName: "Boot", value: "Boot", title: "Boot category", name: "category-radio" },
    { categoryName: "Scribin", value: "Scribin", title: "Scribin category", name: "category-radio" },
    { categoryName: "Platform", value: "Platform", title: "Platform category", name: "category-radio" },
  ],
  prices: [
    { Title2: "Price" }, // Price title
    { PriceName: "All", value: "All", title: "All prices", name: "price-radio" },
    { PriceName: "$1000-$2000", value: "$1000-$2000", title: "Price range $1000-$2000", name: "price-radio" },
    { PriceName: "$3000-$4000", value: "$3000-$4000", title: "Price range $3000-$4000", name: "price-radio" },
    { PriceName: "$5000-$6000", value: "$5000-$6000", title: "Price range $5000-$6000", name: "price-radio" },
    { PriceName: "$7000-$8000", value: "$7000-$8000", title: "Price range $7000-$8000", name: "price-radio" },
    { PriceName: "$8000-$9000", value: "$8000-$9000", title: "Price range $8000-$9000", name: "price-radio" },
    { PriceName: "Over $9000", value: "Over $9000", title: "Price over $9000", name: "price-radio" },
  ],
  ColorLensSharp: [
    { Title3: "Color" }, // Color title
    { ColorName: "All", value: "All", title: "All colors", name: "color-radio" },
    { ColorName: "Black", value: "Black", title: "Black color", name: "color-radio", colorOfRadio: "text-black" },
    { ColorName: "Blue", value: "Blue", title: "Blue color", name: "color-radio", colorOfRadio: "text-blue-500" },
    { ColorName: "Pink", value: "Pink", title: "Pink color", name: "color-radio", colorOfRadio: "text-pink-500" },
    { ColorName: "Gray", value: "Gray", title: "Gray color", name: "color-radio", colorOfRadio: "text-gray-500" },
    { ColorName: "Green", value: "Green", title: "Green color", name: "color-radio", colorOfRadio: "text-green-500" },
    { ColorName: "Orange", value: "Orange", title: "Orange color", name: "color-radio", colorOfRadio: "text-orange-500" },
    { ColorName: "Brown", value: "Brown", title: "Brown color", name: "color-radio", colorOfRadio: "text-yellow-800" }, // using yellow-800 for a brown-like color
    { ColorName: "White", value: "White", title: "White color", name: "color-radio", colorOfRadio: "text-white" },
],


};

export default DateFilter;
