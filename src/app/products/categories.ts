
import { HardHat, ShieldCheck, ThermometerIcon, Zap } from "lucide-react";

export interface Product {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery?: string[];
  hint: string;
  specs?: { [key: string]: string };
  features?: {
    title: string;
    description: string;
    icon: React.ElementType;
  }[];
}

export interface ProductCategory {
  slug: string;
  title: string;
  description: string;
  products: Product[];
}

export const productData: ProductCategory[] = [
  {
    slug: 'transformers',
    title: 'Transformers',
    description: 'A comprehensive range of transformers for various applications, ensuring efficient power transfer and distribution.',
    products: [
      {
        slug: 'oil-immersed-transformers',
        title: 'Oil Immersed Transformers',
        description: 'Durable and efficient transformers for power transmission and distribution.',
        longDescription: 'Our Oil Immersed Transformers are designed for reliability and high performance in a variety of demanding applications. Manufactured with high-quality materials and conforming to international standards, they ensure efficient power management and long service life. With over 20 years of experience in transformer solutions, we offer products that meet global quality standards and provide the highest level of reliability.',
        image: '/images/Oil_emmeresed_transformer.png',
        gallery: [
            '/images/Oil_emmeresed_transformer.png',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Ftransformer%2Fproduct_12.jpg?alt=media&token=fdb49093-de88-47ee-9515-fee764bc2926',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Ftransformer%2Fproduct_13.jpg?alt=media&token=5360d8f6-128f-4cc0-adae-97a03e7984dd',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Ftransformer%2Fproduct_14.jpg?alt=media&token=044b292e-8eb7-47a2-bcc6-1fdc93cb794b',
        ],
        hint: 'oil transformer',
        specs: {
          'Standard': 'IEC, ANSI, IS',
          'Capacity': 'Up to 50 MVA',
          'Voltage': 'Up to 132 kV',
          'Cooling': 'ONAN/ONAF/OFAF'
        },
        features: [
          {
            title: 'Durability & Reliability',
            description: 'Our oil-immersed transformers are built to withstand harsh environmental conditions and ensure long-term performance.',
            icon: ShieldCheck
          },
          {
            title: 'Energy Efficient',
            description: 'Optimized design to reduce energy loss and improve overall efficiency, saving operational costs in the long run.',
            icon: ThermometerIcon
          },
          {
            title: 'Expert Engineering',
            description: 'Engineered by highly skilled professionals to meet and exceed global industry standards.',
            icon: HardHat
          },
          {
            title: 'Power Efficient',
            description: 'Low energy consumption with high performance and reduced operational costs.',
            icon: Zap
          },
        ]
      },
      {
        slug: 'cast-resin-transformers',
        title: 'Cast Resin Transformers',
        description: 'Reliable cast resin transformers for safe and efficient operation.',
        longDescription: 'Cast Resin Transformers are an excellent choice for indoor applications and environmentally sensitive areas. They are fire-resistant, have low maintenance requirements, and offer high reliability, making them ideal for commercial buildings, hospitals, and industrial plants.',
        image: '/images/cast-resin-transformer.png',
        gallery: [
            '/images/cast-resin-transformer.png',
            'https://placehold.co/600x400.png',
            'https://placehold.co/400x600.png',
            'https://placehold.co/600x600.png'
        ],
        hint: 'resin transformer',
        specs: {
          'Standard': 'IEC, IS',
          'Capacity': 'Up to 20 MVA',
          'Voltage': 'Up to 36 kV',
          'Insulation': 'Class F/H'
        }
      },
    ],
  },
  {
    slug: 'conductors',
    title: 'Conductors',
    description: 'High-quality copper and aluminium conductors for superior electrical performance.',
    products: [
      {
        slug: 'copper-foil',
        title: 'Copper Foil',
        description: 'High-grade copper foil for superior conductivity.',
        longDescription: 'Our high-purity copper foil is essential for applications requiring excellent electrical conductivity and thermal management, such as in transformers and circuit boards.',
        image: '/images/Copper_foil.png',
        gallery: [
            '/images/Copper_foil.png',
            'https://placehold.co/600x400.png',
            'https://placehold.co/400x600.png',
            'https://placehold.co/600x600.png'
        ],
        hint: 'copper foil roll'
      },
      {
        slug: 'super-enameled-copper',
        title: 'Super Enameled Copper',
        description: 'Insulated copper wire for electrical applications.',
        longDescription: 'Super Enameled Copper wire offers excellent insulation and conductivity, making it ideal for windings in motors, transformers, and other electromagnetic devices.',
        image: '/images/Super%20Enameled%20Copper.png',
        gallery: [
            '/images/Super%20Enameled%20Copper.png',
            'https://placehold.co/600x400.png',
            'https://placehold.co/400x600.png',
            'https://placehold.co/600x600.png'
        ],
        hint: 'enameled copper wire'
      },
      {
        slug: 'copper-ctc',
        title: 'Copper CTC',
        description: 'CTC copper wire for transformer windings.',
        longDescription: 'Continuously Transposed Conductors (CTC) made of copper are designed to reduce losses in high-power transformer windings, improving efficiency and performance.',
        image: '/images/Copper_CTC.jpg',
        gallery: [
            '/images/Copper_CTC.jpg',
            'https://placehold.co/600x400.png',
            'https://placehold.co/400x600.png',
            'https://placehold.co/600x600.png'
        ],
        hint: 'copper conductor'
      },
      {
        slug: 'copper-picc',
        title: 'Copper PICC',
        description: 'PICC copper wire for advanced transformer designs.',
        longDescription: 'Paper Insulated Copper Conductors (PICC) provide reliable insulation for high-voltage applications in transformers, ensuring safety and durability.',
        image: '/images/Copper_PICC.png',
        gallery: [
            '/images/Copper_PICC.png',
            'https://placehold.co/600x400.png',
            'https://placehold.co/400x600.png',
            'https://placehold.co/600x600.png'
        ],
        hint: 'paper insulated copper'
      },
      {
        slug: 'aluminium-foil',
        title: 'Aluminium Foil',
        description: 'High-quality aluminium foil for conductivity.',
        longDescription: 'A lightweight and cost-effective solution for various electrical applications, our aluminium foil offers good conductivity and corrosion resistance.',
        image: '/images/Aluminium_foil.png',
        gallery: [
            '/images/Aluminium_foil.png',
            'https://placehold.co/600x400.png',
            'https://placehold.co/400x600.png',
            'https://placehold.co/600x600.png'
        ],
        hint: 'aluminium foil roll'
      },
      {
        slug: 'super-enameled-aluminium',
        title: 'Super Enameled Aluminium',
        description: 'Insulated aluminium wire for electrical applications.',
        longDescription: 'A lightweight alternative to copper, our super enameled aluminium wire is perfect for applications where weight is a critical factor without compromising performance.',
        image: '/images/Super_Enameled_Aluminium.png',
        gallery: [
            '/images/Super_Enameled_Aluminium.png',
            'https://placehold.co/600x400.png',
            'https://placehold.co/400x600.png',
            'https://placehold.co/600x600.png'
        ],
        hint: 'enameled aluminium wire'
      },
      {
        slug: 'aluminium-ctc',
        title: 'Aluminium CTC',
        description: 'CTC aluminium wire for transformer windings.',
        longDescription: 'Continuously Transposed Conductors (CTC) made of aluminium provide a lightweight solution for reducing winding losses in large transformers.',
        image: '/images/Aluminium_CTC.png',
        gallery: [
            '/images/Aluminium_CTC.png',
            'https://placehold.co/600x400.png',
            'https://placehold.co/400x600.png',
            'https://placehold.co/600x600.png'
        ],
        hint: 'aluminium conductor'
      },
      {
        slug: 'aluminium-piac',
        title: 'Aluminium PIAC',
        description: 'PIAC aluminium wire for advanced transformer designs.',
        longDescription: 'Paper Insulated Aluminium Conductors (PIAC) offer excellent insulation for high-voltage aluminium windings in transformers.',
        image: '/images/Aluminium_PIAC.jpg',
        gallery: [
            '/images/Aluminium_PIAC.jpg',
            'https://placehold.co/600x400.png',
            'https://placehold.co/400x600.png',
            'https://placehold.co/600x600.png'
        ],
        hint: 'paper insulated aluminium'
      },
    ],
  },
  {
    slug: 'materials-and-accessories',
    title: 'Materials & Accessories',
    description: 'Essential components for transformer manufacturing and maintenance.',
    products: [
      {
        slug: 'crgo-steel',
        title: 'CRGO (Cold Rolled Grain Oriented Steel)',
        description: 'Premium CRGO steel for transformer cores.',
        longDescription: 'Cold Rolled Grain Oriented (CRGO) steel is a specialized material used in transformer cores to minimize magnetic losses and improve energy efficiency.',
        image: '/images/CRGO.png',
        gallery: [
            '/images/CRGO.png',
            'https://placehold.co/600x400.png',
            'https://placehold.co/400x600.png',
            'https://placehold.co/600x600.png'
        ],
        hint: 'steel roll'
      },
      {
        slug: 'transformer-accessories',
        title: 'Transformer Accessories',
        description: 'Comprehensive range of transformer accessories.',
        longDescription: 'We offer a wide array of transformer accessories, including bushings, tap changers, and protective devices, to ensure optimal performance and longevity.',
        image: '/images/Transformer%20Accessories.png',
        gallery: [
            '/images/Transformer%20Accessories.png',
            'https://placehold.co/600x400.png',
            'https://placehold.co/400x600.png',
            'https://placehold.co/600x600.png'
        ],
        hint: 'transformer parts'
      },
      {
        slug: 'cables',
        title: 'Cables',
        description: 'High-quality cables for various applications.',
        longDescription: 'Our range of electrical cables is designed for safety and reliability in power transmission and distribution for residential, commercial, and industrial projects.',
        image: '/images/Cable.png',
        gallery: [
            '/images/Cable.png',
            'https://placehold.co/600x400.png',
            'https://placehold.co/400x600.png',
            'https://placehold.co/600x600.png'
        ],
        hint: 'electrical cables'
      }
    ],
  },
  {
    slug: 'solutions-and-services',
    title: 'Solutions & Services',
    description: 'Advanced solutions for power quality, data centers, and more.',
    products: [
      {
        slug: 'data-center',
        title: 'Data Center',
        description: 'Solutions for modern data centers.',
        longDescription: 'We provide comprehensive electrical solutions for data centers, including reliable power distribution units, UPS systems, and cooling management to ensure uptime and efficiency.',
        image: '/images/Data_center.png',
        gallery: [
            '/images/Data_center.png',
            'https://placehold.co/600x400.png',
            'https://placehold.co/400x600.png',
            'https://placehold.co/600x600.png'
        ],
        hint: 'server room racks'
      },
      {
        slug: 'mv-lv-apfc-harmonic-filter-ups',
        title: 'MV/LV APFC, Harmonic Filter & UPS',
        description: 'Power factor correction, harmonic filtering, and UPS systems.',
        longDescription: 'Improve your power quality with our Automatic Power Factor Correction (APFC) panels, harmonic filters, and Uninterruptible Power Supplies (UPS) to protect equipment and reduce energy costs.',
        image: '/images/MVLV_APFC, Harmonic_Filter_&_UPS.png',
        gallery: [
            '/images/MVLV_APFC, Harmonic_Filter_&_UPS.png',
            'https://placehold.co/600x400.png',
            'https://placehold.co/400x600.png',
            'https://placehold.co/600x600.png'
        ],
        hint: 'electrical panel'
      },
      {
        slug: 'ring-main-unit',
        title: 'Ring Main Unit (RMU)',
        description: 'Compact RMU for distribution networks.',
        longDescription: 'Our Ring Main Units (RMUs) are compact, sealed switchgear units essential for medium voltage distribution networks, offering enhanced safety and reliability.',
        image: '/images/Ring_man_unit.png',
        gallery: [
            '/images/Ring_man_unit.png',
            'https://placehold.co/600x400.png',
            'https://placehold.co/400x600.png',
            'https://placehold.co/600x600.png'
        ],
        hint: 'switchgear'
      },
      {
        slug: 'beverage-solutions',
        title: 'Beverage Solutions',
        description: 'Innovative solutions for the beverage industry.',
        longDescription: 'We offer specialized electrical and automation solutions tailored to the needs of the beverage production and packaging industry, enhancing efficiency and control.',
        image: '/images/Beverage_solution.png',
        gallery: [
            '/images/Beverage_solution.png',
            'https://placehold.co/600x400.png',
            'https://placehold.co/400x600.png',
            'https://placehold.co/600x600.png'
        ],
        hint: 'bottling plant'
      },
      {
        slug: 'it-solutions',
        title: 'IT Solutions',
        description: 'Comprehensive IT solutions for businesses.',
        longDescription: 'Our IT solutions encompass a range of services including network infrastructure, hardware deployment, and system integration to support your business operations.',
        image: '/images/IT_Solution.png',
        gallery: [
            '/images/IT_Solution.png',
            'https://placehold.co/600x400.png',
            'https://placehold.co/400x600.png',
            'https://placehold.co/600x600.png'
        ],
        hint: 'network server'
      },
      {
        slug: 'surveillance-systems',
        title: 'Surveillance Systems',
        description: 'Advanced surveillance systems for security.',
        longDescription: 'We provide advanced security and surveillance systems, including CCTV and access control, to protect your assets and ensure a safe environment.',
        image: '/images/Surveillance.png',
        gallery: [
            '/images/Surveillance.png',
            'https://placehold.co/600x400.png',
            'https://placehold.co/400x600.png',
            'https://placehold.co/600x600.png'
        ],
        hint: 'security camera'
      }
    ]
  }
];

export function getCategory(slug: string) {
  return productData.find(category => category.slug === slug);
}

export function getProduct(categorySlug: string, productSlug: string) {
  const category = getCategory(categorySlug);
  return category?.products.find(product => product.slug === productSlug);
}
