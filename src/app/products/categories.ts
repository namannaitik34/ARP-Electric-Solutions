
import { HardHat, Leaf, ShieldCheck, Waves, Zap, Thermometer, Layers, GitCommitHorizontal, Power, Wind, Cpu, Settings, Package, Cable, Server, Filter, Rss, Tv, Camera } from "lucide-react";

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
  customSection?: {
    title: string;
    description: string;
  };
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
        image: 'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Ftransformer%2Foil_emmersed.jpg?alt=media&token=152bc5ec-fda4-45fb-ae09-9d6b4a91923e',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Ftransformer%2Foil_emmersed.jpg?alt=media&token=152bc5ec-fda4-45fb-ae09-9d6b4a91923e',
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
            title: 'Expert Engineering',
            description: 'Engineered by highly skilled professionals to meet and exceed global industry standards.',
            icon: HardHat
          },
          {
            title: 'Power Efficient',
            description: 'Low energy consumption with high performance and reduced operational costs.',
            icon: Zap
          },
        ],
        customSection: {
            title: "Built for Durability and Safety",
            description: "At ARP Electric Solution, every Oil Immersed Transformer undergoes rigorous testing to ensure it meets the highest standards of safety and durability. Our commitment to quality means you receive a product that not only performs efficiently but also operates safely for years to come, protecting your valuable assets."
        }
      },
      {
        slug: 'cast-resin-transformers',
        title: 'Cast Resin Transformers',
        description: 'Reliable cast resin transformers for safe and efficient operation.',
        longDescription: 'Our Cast Resin Transformers (also known as Dry Type Transformers) are engineered to meet international standards, providing robust and reliable performance under the harshest environmental conditions. Designed for environments where safety, durability, and minimal maintenance are paramount, and manufactured according to IEC 60076-11 standards, these transformers are built to withstand extreme conditions while delivering exceptional performance.',
        image: 'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Ftransformer%2Fcast_resin.jpg?alt=media&token=1ade5a3c-d8d0-48fb-ac30-4121eeb506ed',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Ftransformer%2Fcast_resin.jpg?alt=media&token=1ade5a3c-d8d0-48fb-ac30-4121eeb506ed',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Ftransformer%2Fproduct_2.2.jpg?alt=media&token=3705fda4-ee39-41a5-ad45-89d42af603d4',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Ftransformer%2Fproduct_2.3.jpg?alt=media&token=dc0ca259-87ea-4cea-a890-aeb8f4ee694e',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Ftransformer%2Fproduct_2.4.jpg?alt=media&token=b0944f36-a28b-4bbf-9ae0-e0f6898509c9'
        ],
        hint: 'resin transformer',
        specs: {
          'Standard': 'IEC 60076-11, IS',
          'Capacity': 'Up to 20 MVA',
          'Voltage': 'Up to 36 kV',
          'Insulation': 'Class F/H'
        },
        features: [
            {
                title: 'High Reliability',
                description: 'Engineered to deliver maximum reliability and built to withstand extreme environmental conditions.',
                icon: ShieldCheck
            },
            {
                title: 'Advanced Environmental Design',
                description: 'Built to withstand extreme climatic conditions and meet the highest fire behaviour standards.',
                icon: Leaf
            },
            {
                title: 'Low Maintenance',
                description: 'Designed for minimal maintenance, reducing downtime and operational costs over its lifespan.',
                icon: HardHat
            },
            {
                title: 'Superior Overload Capacity',
                description: 'Capable of handling temporary overloads without compromising performance or safety.',
                icon: Waves
            }
        ],
        customSection: {
            title: "Eco-Friendly Power Solutions",
            description: "Our Cast Resin Transformers are the ideal choice for environmentally conscious projects. With no risk of oil leakage and a fire-resistant design, they offer a safe and clean power solution for sensitive locations like hospitals, airports, and commercial buildings."
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
        longDescription: 'ARP Electric Solution provides high-quality transformer copper foils that are specifically engineered to meet the rigorous requirements of transformer manufacturing. Our foils are produced using top-grade oxygen-free copper and innovative production techniques to ensure optimal performance and longevity in power transformers, current transformers, and other transformer applications.Our Transformer Copper Foils are crucial components for high-performance transformers, offering exceptional conductivity and stability for long-term operation. Transformer copper foils are a vital part of transformer manufacturing. They are primarily used to connect the transformer core and output terminals. Made from high-quality oxygen-free copper, these foils offer excellent conductivity, low contact resistance, and minimal temperature rise, ensuring minimal power loss and stable transformer operation over time.',
        image: 'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fcopper_foil.jpg?alt=media&token=bb7de260-270d-4bbb-971c-5aedb2e86fff',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fcopper_foil.jpg?alt=media&token=bb7de260-270d-4bbb-971c-5aedb2e86fff',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fproduct_3.2.jpg?alt=media&token=e7c707a0-f52a-4dda-9f5d-8cfe6b30789a',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fproduct_3.3.jpg?alt=media&token=07ba52e0-ec9a-4b0a-ab5c-10d19ede6faa',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fproduct_3.4.jpg?alt=media&token=3543f334-2654-419d-8df6-93827300e8bd'
        ],
        hint: 'copper foil roll',
        features: [
          {
            title: 'Exceptional Conductivity',
            description: 'Made from high-purity, oxygen-free copper to ensure minimal power loss and maximum efficiency.',
            icon: Zap,
          },
          {
            title: 'High Thermal Stability',
            description: 'Maintains performance and integrity even under high-temperature operating conditions.',
            icon: Thermometer,
          },
          {
            title: 'Superior Insulation',
            description: 'Coated with high-quality materials for excellent electrical insulation and reliability.',
            icon: Layers,
          },
          {
            title: 'High Mechanical Strength',
            description: 'Durable and reliable, designed to meet the demanding requirements of transformer winding.',
            icon: GitCommitHorizontal,
          },
        ],
        customSection: {
            title: "The Foundation of Efficiency",
            description: "Precision-engineered for optimal performance, our Copper Foil is the cornerstone of high-efficiency transformers. Its superior conductivity and thermal stability reduce energy losses, leading to lower operational costs and a more reliable power grid. Trust ARP for the quality that powers progress."
        }
      },
      {
        slug: 'super-enameled-copper',
        title: 'Super Enameled Copper',
        description: 'Insulated copper wire for electrical applications.',
        longDescription: 'Super Enameled Copper wire offers excellent insulation and conductivity, making it ideal for windings in motors, transformers, and other electromagnetic devices.',
        image: 'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fsuper_enameled_copper.png?alt=media&token=8d277d33-4de7-4e63-a60d-6e8dd183df06',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fsuper_enameled_copper.png?alt=media&token=8d277d33-4de7-4e63-a60d-6e8dd183df06',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fproduct_4.2.jpg?alt=media&token=575e6721-374e-47df-a8e0-4630a390e6f2',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fproduct_4.3.jpg?alt=media&token=adc8ba20-9120-4a61-8c93-6b1edc3aefcb',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fsuper_enameled.jpg?alt=media&token=e168a4cf-9d20-4a90-9d83-7c3ef7bf5b40'
        ],
        hint: 'enameled copper wire',
        features: [
          {
            title: 'Excellent Insulation',
            description: 'High-quality enamel coating provides superior dielectric strength and protection.',
            icon: ShieldCheck,
          },
          {
            title: 'High Conductivity',
            description: 'Pure copper core ensures efficient current flow for optimal performance.',
            icon: Zap,
          },
          {
            title: 'Thermal Resistance',
            description: 'Withstands high temperatures, making it suitable for demanding motor and transformer applications.',
            icon: Thermometer,
          },
          {
            title: 'Mechanical Durability',
            description: 'Resistant to abrasion and stress during winding processes, ensuring reliability.',
            icon: HardHat,
          },
        ],
        customSection: {
            title: "Ensuring Maximum Performance",
            description: "At ARP Electric Solution, we focus on innovation and quality to ensure that our Super Enameled Copper provides the highest performance in the most demanding applications. Our commitment to excellence ensures that our products meet the highest industry standards and deliver reliable, long-term operation."
        }
      },
      {
        slug: 'copper-ctc',
        title: 'Copper CTC',
        description: 'CTC copper wire for transformer windings.',
        longDescription: 'Continuously Transposed Conductors (CTC) made of copper are designed to reduce losses in high-power transformer windings, improving efficiency and performance.',
        image: 'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fcopper_ctc.jpg?alt=media&token=586940d9-b223-45c1-ad57-9d7a22d51590',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fcopper_ctc.jpg?alt=media&token=586940d9-b223-45c1-ad57-9d7a22d51590',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fproduct_5.2.jpg?alt=media&token=f3a50094-f4f2-4899-9a0b-cb858af4fc3f',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fproduct_5.3.jpg?alt=media&token=3d44ac62-2367-499e-a0e0-082d6496b653',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fproduct_5.4.jpg?alt=media&token=630cea22-8eb2-460c-af76-350c3cf2b168'
        ],
        hint: 'copper conductor',
        features: [
          {
            title: 'Reduced Winding Losses',
            description: 'Minimizes eddy current losses in high-power transformers, increasing efficiency.',
            icon: Power,
          },
          {
            title: 'Improved Thermal Performance',
            description: 'Efficiently dissipates heat, allowing for more compact and reliable transformer designs.',
            icon: Thermometer,
          },
          {
            title: 'High Winding Space Factor',
            description: 'Maximizes the use of winding space, leading to more powerful and compact transformers.',
            icon: Layers,
          },
          {
            title: 'Robust Insulation',
            description: 'Features high-quality paper insulation for excellent dielectric strength and durability.',
            icon: ShieldCheck,
          },
        ],
        customSection: {
            title: "Optimized for High-Power Transformers",
            description: "Our Copper CTC is the premium choice for large-scale power transformers. By minimizing electrical losses and improving thermal management, it allows for the design of more compact, efficient, and reliable transformers that are essential for modern power grids."
        }
      },
      {
        slug: 'copper-picc',
        title: 'Copper PICC',
        description: 'PICC copper wire for advanced transformer designs.',
        longDescription: 'Paper Insulated Copper Conductors (PICC) provide reliable insulation for high-voltage applications in transformers, ensuring safety and durability.',
        image: 'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fcopper_picc.jpg?alt=media&token=fbf079d3-686b-4dc3-a6f2-e872c736c60c',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fcopper_picc.jpg?alt=media&token=fbf079d3-686b-4dc3-a6f2-e872c736c60c',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fproduct_6.2.jpg?alt=media&token=a17dbe1c-b2b5-40fb-b50d-d89f0bcdbbcf',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fproduct_6.3.jpg?alt=media&token=eceea499-534e-4c0b-99ef-c2a75d02313e',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fproduct_6.4.jpg?alt=media&token=b7fdc686-7895-4bc1-9579-0c8840d6eb91'
        ],
        hint: 'paper insulated copper',
        features: [
          {
            title: 'High Dielectric Strength',
            description: 'Multi-layer paper insulation provides excellent protection for high-voltage applications.',
            icon: ShieldCheck,
          },
          {
            title: 'Superior Conductivity',
            description: 'Made from high-purity copper to ensure optimal electrical performance.',
            icon: Zap,
          },
          {
            title: 'Excellent Flexibility',
            description: 'Designed to be easily shaped for complex transformer winding configurations.',
            icon: GitCommitHorizontal,
          },
          {
            title: 'Thermal Endurance',
            description: 'Maintains insulation integrity at high operating temperatures, ensuring long-term reliability.',
            icon: Thermometer,
          },
        ],
        customSection: {
            title: "Reliable Insulation for High-Voltage Applications",
            description: "When it comes to high-voltage transformers, insulation is paramount. Our Paper Insulated Copper Conductors (PICC) are engineered to provide superior dielectric strength, ensuring safe and reliable operation under the most demanding conditions."
        }
      },
      {
        slug: 'aluminium-foil',
        title: 'Aluminium Foil',
        description: 'High-quality aluminium foil for conductivity.',
        longDescription: 'A lightweight and cost-effective solution for various electrical applications, our aluminium foil offers good conductivity and corrosion resistance.',
        image: 'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Faluminium_foil.jpg?alt=media&token=c81a2f2b-8a39-43c3-9d41-e9e1c12d4766',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Faluminium_foil.jpg?alt=media&token=c81a2f2b-8a39-43c3-9d41-e9e1c12d4766',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fproduct_7.2.jpg?alt=media&token=f014e662-8e7c-47e1-8898-0c6fc9982dc5',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fproduct_7.3.jpg?alt=media&token=54005ffc-e547-4976-9c42-2b6217646e34',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fproduct_7.4.jpg?alt=media&token=68fc53b1-4bb2-4029-a1b4-7b69c4c47b51'
        ],
        hint: 'aluminium foil roll',
        features: [
          {
            title: 'Lightweight & Cost-Effective',
            description: 'Provides a significant weight and cost advantage over copper in many applications.',
            icon: Leaf,
          },
          {
            title: 'Good Conductivity',
            description: 'Offers reliable electrical performance suitable for a variety of transformer designs.',
            icon: Zap,
          },
          {
            title: 'Corrosion Resistant',
            description: 'Naturally forms a protective oxide layer, ensuring long-term durability.',
            icon: ShieldCheck,
          },
          {
            title: 'Excellent Formability',
            description: 'Easily shaped and wound, making it ideal for various transformer core designs.',
            icon: GitCommitHorizontal,
          },
        ],
        customSection: {
            title: "The Smart Alternative for Modern Applications",
            description: "Our Aluminium Foil offers a compelling combination of performance, weight reduction, and cost savings. It's the ideal choice for applications where efficiency and economic viability are key drivers, without compromising on quality or reliability."
        }
      },
      {
        slug: 'super-enameled-aluminium',
        title: 'Super Enameled Aluminium',
        description: 'Insulated aluminium wire for electrical applications.',
        longDescription: 'A lightweight alternative to copper, our super enameled aluminium wire is perfect for applications where weight is a critical factor without compromising performance. Our Super Enameled Aluminium is manufactured to the highest standards and is suitable for a range of applications.',
        image: 'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fsuper_enameled_aluminium.png?alt=media&token=8753239a-7a54-479c-9f6b-352b217a1c7c',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fsuper_enameled_aluminium.png?alt=media&token=8753239a-7a54-479c-9f6b-352b217a1c7c',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fsuper_enameled_aluminium.png?alt=media&token=8753239a-7a54-479c-9f6b-352b217a1c7c',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fsuper_enameled_aluminium.png?alt=media&token=8753239a-7a54-479c-9f6b-352b217a1c7c',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Fsuper_enameled_aluminium.png?alt=media&token=8753239a-7a54-479c-9f6b-352b217a1c7c'
        ],
        hint: 'enameled aluminium wire',
        features: [
          {
            title: 'Significant Weight Reduction',
            description: 'Ideal for applications where reducing weight is a primary design consideration.',
            icon: Leaf,
          },
          {
            title: 'High-Quality Insulation',
            description: 'Durable enamel coating provides excellent dielectric properties and protection.',
            icon: ShieldCheck,
          },
          {
            title: 'Cost-Effective Solution',
            description: 'Offers a more economical alternative to copper for many winding applications.',
            icon: Power,
          },
          {
            title: 'Good Thermal Performance',
            description: 'Effectively manages heat, ensuring reliable operation in motors and transformers.',
            icon: Thermometer,
          },
        ],
        customSection: {
            title: "Lightweight Performance, Heavyweight Value",
            description: "Achieve significant weight savings without sacrificing performance. Our Super Enameled Aluminium wire is the perfect solution for motors, transformers, and other devices where weight reduction is critical, offering a cost-effective and reliable alternative to copper."
        }
      },
      {
        slug: 'aluminium-ctc',
        title: 'Aluminium CTC',
        description: 'CTC aluminium wire for transformer windings.',
        longDescription: 'Continuously Transposed Conductors (CTC) made of aluminium provide a lightweight solution for reducing winding losses in large transformers.',
        image: 'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Faluminium_ctc.png?alt=media&token=f037a3f8-888e-4a67-96a8-f80e05e55e5c',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Faluminium_ctc.png?alt=media&token=f037a3f8-888e-4a67-96a8-f80e05e55e5c',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Faluminium_ctc.png?alt=media&token=f037a3f8-888e-4a67-96a8-f80e05e55e5c',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Faluminium_ctc.png?alt=media&token=f037a3f8-888e-4a67-96a8-f80e05e55e5c',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Faluminium_ctc.png?alt=media&token=f037a3f8-888e-4a67-96a8-f80e05e55e5c'
        ],
        hint: 'aluminium conductor',
        specs: {
          'Conductor Type': 'Continuous Transposed Conductor (CTC)',
          'Material': 'Aluminium',
          'Resistance': 'Low resistance for efficient power transmission',
          'Strength': 'High mechanical strength, suitable for long spans',
          'Applications': 'High-voltage transmission and distribution lines',
        },
        features: [
          {
            title: 'Reduced Eddy Current Losses',
            description: 'Significantly improves transformer efficiency by minimizing electrical losses.',
            icon: Power,
          },
          {
            title: 'Lightweight Construction',
            description: 'Offers a lighter alternative to copper CTC, reducing structural support requirements.',
            icon: Leaf,
          },
          {
            title: 'Optimized Winding Space',
            description: 'Maximizes the use of available space for more compact and efficient transformer designs.',
            icon: Layers,
          },
          {
            title: 'Reliable Paper Insulation',
            description: 'Ensures high dielectric strength and long-term durability in demanding applications.',
            icon: ShieldCheck,
          },
        ],
        customSection: {
            title: "Efficiency in a Lighter Package",
            description: "Our Aluminium CTC delivers the efficiency benefits of continuously transposed conductors in a lightweight package. It's the ideal choice for large power transformers where both performance and weight are critical design factors."
        }
      },
      {
        slug: 'aluminium-piac',
        title: 'Aluminium PIAC',
        description: 'PIAC aluminium wire for advanced transformer designs.',
        longDescription: 'Paper Insulated Aluminium Conductors (PIAC) offer excellent insulation for high-voltage aluminium windings in transformers.',
        image: 'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Faluminium_piac.jpg?alt=media&token=6f0a6d2f-1262-45e0-b6f7-111059f104d5',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Faluminium_piac.jpg?alt=media&token=6f0a6d2f-1262-45e0-b6f7-111059f104d5',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Faluminium_piac.jpg?alt=media&token=6f0a6d2f-1262-45e0-b6f7-111059f104d5',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Faluminium_piac.jpg?alt=media&token=6f0a6d2f-1262-45e0-b6f7-111059f104d5',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fconductor%2Faluminium_piac.jpg?alt=media&token=6f0a6d2f-1262-45e0-b6f7-111059f104d5'
        ],
        hint: 'paper insulated aluminium',
        specs: {
          'Insulation': 'Multi-layer Kraft Paper',
          'Conductor': 'High-purity Aluminium',
          'Voltage Class': 'Up to 765 kV',
          'Application': 'Power & Distribution Transformers',
          'Standards': 'IEC, IS, DIN, BS'
        },
        features: [
          {
            title: 'High-Voltage Insulation',
            description: 'Multi-layered paper insulation provides robust protection for high-voltage applications.',
            icon: ShieldCheck,
          },
          {
            title: 'Cost-Effective & Lightweight',
            description: 'A more economical and lighter alternative to copper for large transformer windings.',
            icon: Leaf,
          },
          {
            title: 'Excellent Flexibility',
            description: 'Easily formable to accommodate complex and intricate winding patterns.',
            icon: GitCommitHorizontal,
          },
          {
            title: 'High Thermal Endurance',
            description: 'Maintains its integrity at high operating temperatures for long-term reliability.',
            icon: Thermometer,
          },
        ],
        customSection: {
            title: "Safe and Economical High-Voltage Winding",
            description: "ARP's Aluminium PIAC provides a reliable and cost-effective solution for high-voltage transformer windings. The robust paper insulation ensures safety and performance, while the lightweight aluminium conductor offers significant economic advantages."
        }
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
        image: 'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fmaterials%2Fcrgo.png?alt=media&token=c1995874-9720-410a-b60e-e3cf968e8111',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fmaterials%2Fcrgo.png?alt=media&token=c1995874-9720-410a-b60e-e3cf968e8111',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fmaterials%2Fcrgo.png?alt=media&token=c1995874-9720-410a-b60e-e3cf968e8111',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fmaterials%2Fcrgo.png?alt=media&token=c1995874-9720-410a-b60e-e3cf968e8111',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fmaterials%2Fcrgo.png?alt=media&token=c1995874-9720-410a-b60e-e3cf968e8111'
        ],
        hint: 'steel roll',
        specs: {
          'Material': 'Cold Rolled Grain Oriented Silicon Steel',
          'Grades': 'M3, M4, M5, M6, ZDKH, MOH',
          'Thickness': '0.23mm, 0.27mm, 0.30mm, 0.35mm',
          'Application': 'High-efficiency transformer cores',
          'Benefits': 'Low core loss, high permeability'
        },
        features: [
          {
            title: 'Low Core Loss',
            description: 'Significantly reduces energy dissipation in transformer cores, leading to higher efficiency.',
            icon: Power,
          },
          {
            title: 'High Permeability',
            description: 'Allows for strong magnetic fields with less energy, enabling more compact core designs.',
            icon: Wind,
          },
          {
            title: 'Superior Magnetic Properties',
            description: 'Optimized grain structure ensures excellent performance in electromagnetic applications.',
            icon: Cpu,
          },
          {
            title: 'Consistent Quality',
            description: 'Manufactured to precise specifications for uniform performance and reliability.',
            icon: Settings,
          },
        ],
        customSection: {
            title: "The Heart of an Efficient Transformer",
            description: "Our premium CRGO steel is the key to building highly efficient and reliable transformers. By minimizing energy losses at the core, it directly contributes to lower operating costs and a greener footprint for any power application."
        }
      },
      {
        slug: 'transformer-accessories',
        title: 'Transformer Accessories',
        description: 'Comprehensive range of transformer accessories.',
        longDescription: 'We offer a wide array of transformer accessories, including bushings, tap changers, and protective devices, to ensure optimal performance and longevity.',
        image: 'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fmaterials%2Ftransformer_accessories.png?alt=media&token=0457f511-b1e0-40e2-a720-33318251f28b',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fmaterials%2Ftransformer_accessories.png?alt=media&token=0457f511-b1e0-40e2-a720-33318251f28b',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fmaterials%2Ftransformer_accessories.png?alt=media&token=0457f511-b1e0-40e2-a720-33318251f28b',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fmaterials%2Ftransformer_accessories.png?alt=media&token=0457f511-b1e0-40e2-a720-33318251f28b',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fmaterials%2Ftransformer_accessories.png?alt=media&token=0457f511-b1e0-40e2-a720-33318251f28b'
        ],
        hint: 'transformer parts',
        specs: {
          'Components': 'Bushings, Radiators, Tap Changers, Buchholz Relays, PRVs',
          'Materials': 'Porcelain, Cast Iron, High-grade Steel, Nitrile Rubber',
          'Standards': 'Compliance with IEC and IS standards',
          'Application': 'Oil-immersed and Cast Resin Transformers'
        },
        features: [
          {
            title: 'Comprehensive Range',
            description: 'A complete selection of parts including bushings, tap changers, and gauges.',
            icon: Package,
          },
          {
            title: 'Enhanced Safety',
            description: 'Includes protective devices like Buchholz relays and pressure relief valves.',
            icon: ShieldCheck,
          },
          {
            title: 'High-Quality Materials',
            description: 'Manufactured from durable materials to ensure long service life and reliability.',
            icon: HardHat,
          },
          {
            title: 'Improved Performance',
            description: 'Designed to optimize transformer operation, monitoring, and maintenance.',
            icon: Settings,
          },
        ],
        customSection: {
            title: "Everything You Need for a Perfect Transformer",
            description: "From safety devices to monitoring equipment, our comprehensive range of transformer accessories ensures that you have all the high-quality components needed for reliable and efficient operation. Trust ARP for all your transformer needs."
        }
      },
      {
        slug: 'cables',
        title: 'Cables',
        description: 'High-quality cables for various applications.',
        longDescription: 'Our range of electrical cables is designed for safety and reliability in power transmission and distribution for residential, commercial, and industrial projects.',
        image: 'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fmaterials%2Fcable.png?alt=media&token=1c6b8457-3f93-4a0b-90f7-d0d04c27a92b',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fmaterials%2Fcable.png?alt=media&token=1c6b8457-3f93-4a0b-90f7-d0d04c27a92b',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fmaterials%2Fcable.png?alt=media&token=1c6b8457-3f93-4a0b-90f7-d0d04c27a92b',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fmaterials%2Fcable.png?alt=media&token=1c6b8457-3f93-4a0b-90f7-d0d04c27a92b',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fmaterials%2Fcable.png?alt=media&token=1c6b8457-3f93-4a0b-90f7-d0d04c27a92b'
        ],
        hint: 'electrical cables',
        specs: {
          'Type': 'LV/MV Power Cables, Control Cables, Instrumentation Cables',
          'Conductor': 'Copper, Aluminium',
          'Insulation': 'XLPE, PVC',
          'Armouring': 'Steel Wire/Tape, Aluminium Wire',
          'Voltage': 'Up to 33 kV'
        },
        features: [
          {
            title: 'High-Purity Conductors',
            description: 'Made from high-grade copper or aluminum for optimal electrical conductivity.',
            icon: Zap,
          },
          {
            title: 'Durable Insulation',
            description: 'Features robust insulation materials for enhanced safety and long-term reliability.',
            icon: ShieldCheck,
          },
          {
            title: 'Wide Range of Applications',
            description: 'Suitable for residential, commercial, and industrial power distribution.',
            icon: Cable,
          },
          {
            title: 'Compliance with Standards',
            description: 'Manufactured to meet rigorous international safety and performance standards.',
            icon: HardHat,
          },
        ],
        customSection: {
            title: "Connecting Power with Confidence",
            description: "Our high-quality cables are the vital link in any electrical system. Engineered for safety, durability, and optimal conductivity, they provide a reliable connection you can trust for any application, from residential wiring to heavy industrial power transmission."
        }
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
        image: 'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fdata_center.png?alt=media&token=222830f3-b6d3-49d7-83d8-e35f79119642',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fdata_center.png?alt=media&token=222830f3-b6d3-49d7-83d8-e35f79119642',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fdata_center.png?alt=media&token=222830f3-b6d3-49d7-83d8-e35f79119642',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fdata_center.png?alt=media&token=222830f3-b6d3-49d7-83d8-e35f79119642',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fdata_center.png?alt=media&token=222830f3-b6d3-49d7-83d8-e35f79119642'
        ],
        hint: 'server room racks',
        specs: {
          'UPS Systems': 'Modular and Monolithic, up to 1 MW',
          'Power Distribution': 'Intelligent PDUs, Busbar Trunking',
          'Cooling': 'In-row, perimeter, and rack-based cooling',
          'Monitoring': 'DCIM and Environmental Monitoring',
          'Services': 'Design, Installation, and Maintenance'
        },
        features: [
          {
            title: 'Uninterruptible Power Supply (UPS)',
            description: 'Ensures continuous operation and protection of critical IT infrastructure during outages.',
            icon: Power,
          },
          {
            title: 'Efficient Power Distribution',
            description: 'Customized PDUs and busbar systems for reliable and scalable power delivery.',
            icon: Server,
          },
          {
            title: 'Precision Cooling',
            description: 'Advanced cooling solutions to maintain optimal operating temperatures for all equipment.',
            icon: Wind,
          },
          {
            title: 'Comprehensive Monitoring',
            description: 'Real-time monitoring and management systems to ensure peak performance and reliability.',
            icon: Rss,
          },
        ],
        customSection: {
            title: "Powering the Digital World, Reliably",
            description: "In the digital age, uptime is everything. Our data center solutions are designed to provide uninterrupted, efficient, and scalable power to keep your critical IT infrastructure running 24/7. From UPS systems to precision cooling, we cover all your power needs."
        }
      },
      {
        slug: 'mv-lv-apfc-harmonic-filter-ups',
        title: 'MV/LV APFC, Harmonic Filter & UPS',
        description: 'Power factor correction, harmonic filtering, and UPS systems.',
        longDescription: 'Improve your power quality with our Automatic Power Factor Correction (APFC) panels, harmonic filters, and Uninterruptible Power Supplies (UPS) to protect equipment and reduce energy costs.',
        image: 'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fmv_lv.png?alt=media&token=85c96065-2767-4d6d-9781-a6b3252a1228',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fmv_lv.png?alt=media&token=85c96065-2767-4d6d-9781-a6b3252a1228',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fmv_lv.png?alt=media&token=85c96065-2767-4d6d-9781-a6b3252a1228',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fmv_lv.png?alt=media&token=85c96065-2767-4d6d-9781-a6b3252a1228',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fmv_lv.png?alt=media&token=85c96065-2767-4d6d-9781-a6b3252a1228'
        ],
        hint: 'electrical panel',
        specs: {
          'APFC Panels': 'MV and LV, Contactor/Thyristor based',
          'Harmonic Filters': 'Active and Passive solutions',
          'UPS Systems': 'Industrial grade, up to 500 kVA',
          'Voltage Level': 'Low Voltage (LV) and Medium Voltage (MV)',
          'Applications': 'Industrial, Commercial, Data Centers'
        },
        features: [
          {
            title: 'Power Factor Correction',
            description: 'APFC panels automatically improve power factor, reducing penalties and energy consumption.',
            icon: Power,
          },
          {
            title: 'Harmonic Filtering',
            description: 'Active and passive filters mitigate harmonics, protecting sensitive equipment and improving quality.',
            icon: Filter,
          },
          {
            title: 'Critical Load Protection',
            description: 'High-performance UPS systems provide seamless backup power for essential operations.',
            icon: ShieldCheck,
          },
          {
            title: 'Enhanced Power Quality',
            description: 'A complete solution to ensure a stable, clean, and efficient power supply for your facility.',
            icon: Zap,
          },
        ],
        customSection: {
            title: "Optimize Your Power, Protect Your Assets",
            description: "Power quality issues can lead to increased costs and equipment failure. Our integrated solutions, including APFC panels, harmonic filters, and UPS systems, work together to provide clean, stable, and efficient power, protecting your investments and improving your bottom line."
        }
      },
      {
        slug: 'ring-main-unit',
        title: 'Ring Main Unit (RMU)',
        description: 'Compact RMU for distribution networks.',
        longDescription: 'Our Ring Main Units (RMUs) are compact, sealed switchgear units essential for medium voltage distribution networks, offering enhanced safety and reliability.',
        image: 'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fring_main.png?alt=media&token=7c180902-6019-484c-b5f7-876b4a3a31c1',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fring_main.png?alt=media&token=7c180902-6019-484c-b5f7-876b4a3a31c1',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fring_main.png?alt=media&token=7c180902-6019-484c-b5f7-876b4a3a31c1',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fring_main.png?alt=media&token=7c180902-6019-484c-b5f7-876b4a3a31c1',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fring_main.png?alt=media&token=7c180902-6019-484c-b5f7-876b4a3a31c1'
        ],
        hint: 'switchgear',
        specs: {
          'Voltage': 'Up to 36 kV',
          'Type': 'SF6 Insulated, Extensible/Non-extensible',
          'Configuration': '2, 3, 4, 5-way options',
          'Standard': 'IEC 62271-200',
          'Features': 'Compact, Sealed-for-life tank'
        },
        features: [
          {
            title: 'Compact & Sealed Design',
            description: 'Space-saving and protected from environmental factors, ideal for various installations.',
            icon: Package,
          },
          {
            title: 'Enhanced Safety',
            description: 'Fully insulated and enclosed design minimizes the risk of electrical accidents.',
            icon: ShieldCheck,
          },
          {
            title: 'High Reliability',
            description: 'Designed for long service life with minimal maintenance requirements.',
            icon: HardHat,
          },
          {
            title: 'Flexible & Modular',
            description: 'Easily extendable and configurable to meet the evolving needs of distribution networks.',
            icon: Settings,
          },
        ],
        customSection: {
            title: "Compact and Safe Medium-Voltage Switching",
            description: "Our Ring Main Units (RMUs) offer a safe, reliable, and compact solution for medium-voltage distribution networks. The sealed, maintenance-free design ensures long-term performance even in the harshest environments, making it the ideal choice for modern power systems."
        }
      },
      {
        slug: 'beverage-solutions',
        title: 'Beverage Solutions',
        description: 'Innovative solutions for the beverage industry.',
        longDescription: 'We offer specialized electrical and automation solutions tailored to the needs of the beverage production and packaging industry, enhancing efficiency and control.',
        image: 'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fbeverage.png?alt=media&token=ccb07f89-c454-463d-829d-488f78f8e718',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fbeverage.png?alt=media&token=ccb07f89-c454-463d-829d-488f78f8e718',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fbeverage.png?alt=media&token=ccb07f89-c454-463d-829d-488f78f8e718',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fbeverage.png?alt=media&token=ccb07f89-c454-463d-829d-488f78f8e718',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fbeverage.png?alt=media&token=ccb07f89-c454-463d-829d-488f78f8e718'
        ],
        hint: 'bottling plant',
        specs: {
          'Automation': 'PLC & SCADA systems for process control',
          'Motor Control': 'Variable Frequency Drives (VFDs)',
          'Power': 'Hygienic-design power distribution',
          'Sensors': 'Level, flow, and pressure sensors'
        },
        features: [
          {
            title: 'Process Automation',
            description: 'Customized automation solutions to streamline production and packaging lines.',
            icon: Settings,
          },
          {
            title: 'Energy Efficiency',
            description: 'Solutions designed to reduce energy consumption and operational costs.',
            icon: Power,
          },
          {
            title: 'Reliable Power Systems',
            description: 'Ensures consistent and high-quality power to protect sensitive processing equipment.',
            icon: Zap,
          },
          {
            title: 'Quality Control Integration',
            description: 'Integrate electrical systems with quality control for enhanced product consistency.',
            icon: ShieldCheck,
          },
        ],
        customSection: {
            title: "Boosting Efficiency in Beverage Production",
            description: "From process automation to energy-efficient power systems, our solutions for the beverage industry are designed to increase productivity, reduce costs, and ensure the highest quality standards for your products. Let us help you streamline your operations."
        }
      },
      {
        slug: 'it-solutions',
        title: 'IT Solutions',
        description: 'Comprehensive IT solutions for businesses.',
        longDescription: 'Our IT solutions encompass a range of services including network infrastructure, hardware deployment, and system integration to support your business operations.',
        image: 'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fit_solution.png?alt=media&token=9829f796-7bf7-4c07-b615-af90c2394595',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fit_solution.png?alt=media&token=9829f796-7bf7-4c07-b615-af90c2394595',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fit_solution.png?alt=media&token=9829f796-7bf7-4c07-b615-af90c2394595',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fit_solution.png?alt=media&token=9829f796-7bf7-4c07-b615-af90c2394595',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fit_solution.png?alt=media&token=9829f796-7bf7-4c07-b615-af90c2394595'
        ],
        hint: 'network server',
        specs: {
          'Networking': 'Structured Cabling, Switching, Routing, Wi-Fi',
          'Servers': 'Tower, Rack, and Blade Servers',
          'Storage': 'SAN, NAS, and DAS solutions',
          'Security': 'Firewalls, Antivirus, and Endpoint Protection'
        },
        features: [
          {
            title: 'Network Infrastructure',
            description: 'Design and deployment of robust and scalable network solutions.',
            icon: Rss,
          },
          {
            title: 'Hardware & Software',
            description: 'Procurement and integration of servers, storage, and software for your business needs.',
            icon: Server,
          },
          {
            title: 'System Integration',
            description: 'Seamless integration of various IT systems to improve workflow and efficiency.',
            icon: Settings,
          },
          {
            title: 'Support & Maintenance',
            description: 'Ongoing support to ensure your IT infrastructure remains reliable and secure.',
            icon: HardHat,
          },
        ],
        customSection: {
            title: "Your Partner in Digital Transformation",
            description: "In a connected world, a robust IT infrastructure is crucial. We offer comprehensive IT solutions, from network design to system integration, to help your business thrive. Our expert team provides the support you need to stay competitive and secure."
        }
      },
      {
        slug: 'surveillance-systems',
        title: 'Surveillance Systems',
        description: 'Advanced surveillance systems for security.',
        longDescription: 'We provide advanced security and surveillance systems, including CCTV and access control, to protect your assets and ensure a safe environment.',
        image: 'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fsurveillance.png?alt=media&token=05c21a97-9092-4933-ac4e-e17f41b2e2d0',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fsurveillance.png?alt=media&token=05c21a97-9092-4933-ac4e-e17f41b2e2d0',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fsurveillance.png?alt=media&token=05c21a97-9092-4933-ac4e-e17f41b2e2d0',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fsurveillance.png?alt=media&token=05c21a97-9092-4933-ac4e-e17f41b2e2d0',
            'https://firebasestorage.googleapis.com/v0/b/arp-electric-solutions.firebasestorage.app/o/products%2Fservices%2Fsurveillance.png?alt=media&token=05c21a97-9092-4933-ac4e-e17f41b2e2d0'
        ],
        hint: 'security camera',
        specs: {
          'CCTV': 'IP, Analog, and Hybrid camera systems',
          'Resolution': 'Up to 4K Ultra HD',
          'Access Control': 'Biometric, Card-based, and Keypad systems',
          'Storage': 'NVRs, DVRs, and Cloud Storage'
        },
        features: [
          {
            title: 'High-Definition CCTV',
            description: 'Crystal-clear video monitoring for enhanced security and surveillance.',
            icon: Camera,
          },
          {
            title: 'Access Control Systems',
            description: 'Manage and restrict access to sensitive areas with advanced control solutions.',
            icon: ShieldCheck,
          },
          {
            title: 'Remote Monitoring',
            description: 'Access live and recorded footage from anywhere with our mobile and web applications.',
            icon: Tv,
          },
          {
            title: 'Integrated Security',
            description: 'Combine surveillance with other security systems for a comprehensive protection strategy.',
            icon: Settings,
          },
        ],
        customSection: {
            title: "Protecting What Matters Most",
            description: "Our advanced surveillance and security systems provide peace of mind by protecting your valuable assets. With high-definition CCTV, integrated access control, and remote monitoring capabilities, you can be sure that your property is safe and secure."
        }
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
