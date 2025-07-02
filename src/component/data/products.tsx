// src/data/productData.tsx

export interface Product {
    id: number;
    category: string;
    title: string;
    price: number;
    oldPrice?: number;
    image: string;
    description?: string;
}

export const productList: Product[] = [
    {
        id: 1,
        title: "Samsung Air Conditioner – 24000 BTU Inverter AC – (Wi-Fi) (SMGAR50F24DJ)",
        price: 334990,
        oldPrice: 399990,
        image: "/images/1.png",
        category: "AC Units 1",
        description: "Experience powerful and energy-efficient cooling with smart features."
    },
    {
        id: 2,
        title: "Samsung Air Conditioner – 24000 BTU Inverter AC – (Wi-Fi) (SMGAR50F24DJ)",
        price: 289990,
        oldPrice: 325000,
        image: "/images/2.png",
        category: "AC Units 1",
        description: "Fast cooling and Wi-Fi connectivity for effortless climate control."
    },
    {
        id: 3,
        title: "Samsung Air Conditioner – 24000 BTU Inverter AC – (Wi-Fi) (SMGAR50F24DJ)",
        price: 199990,
        oldPrice: 219990,
        image: "/images/3.png",
        category: "AC Units 1",
        description: "Reliable performance and energy savings with inverter technology."
    },
    {
        id: 4,
        title: "Samsung Air Conditioner – 24000 BTU Inverter AC – (Wi-Fi) (SMGAR50F24DJ)",
        price: 144990,
        oldPrice: 169990,
        image: "/images/4.png",
        category: "AC Units 2",
        description: "Advanced cooling in a compact form with low noise operation."
    },
    {
        id: 5,
        title: "Samsung Air Conditioner – 24000 BTU Inverter AC – (Wi-Fi) (SMGAR50F24DJ)",
        price: 139990,
        oldPrice: 155000,
        image: "/images/new1.jpeg",
        category: "AC Units 2",
        description: "Economical and effective air conditioning with smart controls."
    },
    {
        id: 6,
        title: "Samsung Air Conditioner – 24000 BTU Inverter AC – (Wi-Fi) (SMGAR50F24DJ)",
        price: 84990,
        oldPrice: 95000,
        image: "/images/new2.jpeg",
        category: "AC Units 3",
        description: "Affordable cooling solution with quality performance."
    },
    {
        id: 7,
        title: "Samsung Air Conditioner – 24000 BTU Inverter AC – (Wi-Fi) (SMGAR50F24DJ)",
        price: 59990,
        oldPrice: 69990,
        image: "/images/new3.jpeg",
        category: "AC Units 3",
        description: "Compact and quiet inverter AC ideal for smaller rooms."
    },
    {
        id: 8,
        title: "Samsung Air Conditioner – 24000 BTU Inverter AC – (Wi-Fi) (SMGAR50F24DJ)",
        price: 234990,
        oldPrice: 259990,
        image: "/images/new4.jpeg",
        category: "AC Units 1",
        description: "Stylish design with fast cooling and low power usage."
    },
    {
        id: 9,
        title: "Samsung Air Conditioner – 24000 BTU Inverter AC – (Wi-Fi) (SMGAR50F24DJ)",
        price: 129990,
        oldPrice: 149000,
        image: "/images/new5.jpeg",
        category: "AC Units 2",
        description: "Dependable inverter AC with efficient airflow and comfort."
    },
    {
        id: 10,
        title: "Samsung Air Conditioner – 24000 BTU Inverter AC – (Wi-Fi) (SMGAR50F24DJ)",
        price: 334990,
        oldPrice: 399990,
        image: "/images/1.png",
        category: "AC Units 1",
        description: "Powerful air conditioner with premium features and quiet operation."
    },
    {
        id: 11,
        title: "Samsung Air Conditioner – 24000 BTU Inverter AC – (Wi-Fi) (SMGAR50F24DJ)",
        price: 334990,
        oldPrice: 399990,
        image: "/images/1.png",
        category: "AC Units 1",
        description: "Premium cooling technology for efficient climate control."
    },
    {
        id: 12,
        title: "Samsung Air Conditioner – 24000 BTU Inverter AC – (Wi-Fi) (SMGAR50F24DJ)",
        price: 289990,
        oldPrice: 325000,
        image: "/images/2.png",
        category: "AC Units 1",
        description: "Smart AC with fast cooling and remote control support."
    },
    {
        id: 13,
        title: "Samsung Air Conditioner – 24000 BTU Inverter AC – (Wi-Fi) (SMGAR50F24DJ)",
        price: 199990,
        oldPrice: 219990,
        image: "/images/3.png",
        category: "AC Units 1",
        description: "Perfect balance of performance, design, and quiet operation."
    },
    {
        id: 14,
        title: "Samsung Air Conditioner – 24000 BTU Inverter AC – (Wi-Fi) (SMGAR50F24DJ)",
        price: 144990,
        oldPrice: 169990,
        image: "/images/4.png",
        category: "AC Units 2",
        description: "Delivers comfort and coolness while saving on energy."
    },
    {
        id: 15,
        title: "Samsung Air Conditioner – 24000 BTU Inverter AC – (Wi-Fi) (SMGAR50F24DJ)",
        price: 139990,
        oldPrice: 155000,
        image: "/images/new1.jpeg",
        category: "AC Units 2",
        description: "Inverter AC with modern design and strong airflow."
    },
    {
        id: 16,
        title: "Samsung Air Conditioner – 24000 BTU Inverter AC – (Wi-Fi) (SMGAR50F24DJ)",
        price: 84990,
        oldPrice: 95000,
        image: "/images/new2.jpeg",
        category: "AC Units 3",
        description: "Compact and efficient, perfect for bedroom or office use."
    },
    {
        id: 17,
        title: "Samsung Air Conditioner – 24000 BTU Inverter AC – (Wi-Fi) (SMGAR50F24DJ)",
        price: 59990,
        oldPrice: 69990,
        image: "/images/new3.jpeg",
        category: "AC Units 3",
        description: "Budget-friendly inverter AC with excellent cooling capacity."
    },
    {
        id: 18,
        title: "Samsung Air Conditioner – 24000 BTU Inverter AC – (Wi-Fi) (SMGAR50F24DJ)",
        price: 234990,
        oldPrice: 259990,
        image: "/images/new4.jpeg",
        category: "AC Units 1",
        description: "Energy-saving solution with smart inverter and sleek look."
    },
    {
        id: 19,
        title: "Samsung Air Conditioner – 24000 BTU Inverter AC – (Wi-Fi) (SMGAR50F24DJ)",
        price: 129990,
        oldPrice: 149000,
        image: "/images/new5.jpeg",
        category: "AC Units 2",
        description: "Cool your home quickly and efficiently with this Samsung model."
    }
];
