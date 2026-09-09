import { ServiceItem, BarberItem, GalleryItem, ReviewItem, LocationItem } from '../types';

export const OFFICIAL_LOGO_URL = "https://res.cloudinary.com/fzobzdco/image/upload/v1788991862/ffffffffbbbbbbbbbbbbbbbbbbbbbssssssssssssssss.jpg";

export const BUSINESS_INFO = {
  name: "Jay Cut’em’s Barbershop",
  shortName: "Jay Cut’em’s",
  tagline: "Modern Urban Barber Studio",
  locationCity: "Houston",
  locationState: "Texas",
  locationFull: "Houston, Texas",
  primaryService: "Barber Shop",
  phoneDisplay: "1 209-395-3905",
  phoneTel: "+12093953905",
  facebookUrl: "https://www.facebook.com/JaycuttemsBarbershop/about",
  instagramUrl: "https://www.instagram.com/Jaycuttemsbarbershop",
  instagramHandle: "@Jaycuttemsbarbershop",
  hoursWeekday: "Mon - Sat: 9:00 AM – 7:00 PM",
  hoursSunday: "Sunday: 10:00 AM – 5:00 PM",
  googleMapsQuery: "https://www.google.com/maps/search/?api=1&query=Houston+Texas+Barber+Shop",
  heroHeadline: "YOUR STYLE. YOUR CUT. YOUR CONFIDENCE.",
  heroSubheadline: "Modern urban barbering, clean craftsmanship, and a premium grooming experience built around your style in Houston, Texas.",
  aboutHeading: "ABOUT JAY CUT’EM’S",
  bookingHeadline: "BOOK YOUR APPOINTMENT",
  bookingSubheadline: "Choose your service, select your preferred barber, and reserve your chair with Houston’s premier barbering team.",
  finalCtaHeadline: "READY FOR YOUR NEXT CUT?",
  finalCtaSubheadline: "Step into Jay Cut’em’s and leave looking sharp, confident, and ready for whatever comes next."
};

// 6 exact services requested by user:
// Haircuts, Beard Grooming, Haircut + Beard, Classic Shave, Styling, Premium Grooming
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "haircuts",
    name: "Haircuts",
    category: "Cut",
    description: "Precision shear or clipper cut tailored to your head shape, hair texture, and personal aesthetic. Finished with straight razor neckline cleanup.",
    duration: "45 mins",
    iconName: "Scissors",
    popular: false
  },
  {
    id: "beard-grooming",
    name: "Beard Grooming",
    category: "Beard",
    description: "Symmetrical beard sculpting, mustache detailing, crisp razor cheek lines, hot oil treatment, and natural conditioning balm finish.",
    duration: "35 mins",
    iconName: "Sparkles",
    popular: false
  },
  {
    id: "haircut-beard",
    name: "Haircut + Beard",
    category: "Combo",
    description: "The complete signature combo: tailored haircut or precision skin fade paired with master beard contouring and razor edge-up.",
    duration: "60 mins",
    iconName: "Crown",
    popular: true
  },
  {
    id: "classic-shave",
    name: "Classic Shave",
    category: "Grooming",
    description: "Traditional hot lather straight-razor shave with steaming eucalyptus-infused towels, botanical pre-shave cream, and soothing cold towel compress.",
    duration: "40 mins",
    iconName: "Flame",
    popular: false
  },
  {
    id: "styling",
    name: "Styling",
    category: "Cut",
    description: "Professional blow-dry shaping, custom texturizing, and styling with premium matte clays, pomades, or volume powders for long-lasting hold.",
    duration: "30 mins",
    iconName: "Wind",
    popular: false
  },
  {
    id: "premium-grooming",
    name: "Premium Grooming",
    category: "Grooming",
    description: "The VIP experience: bespoke haircut, master beard service, steaming hot towel treatment, straight-razor detailing, and invigorating scalp massage.",
    duration: "75 mins",
    iconName: "ShieldCheck",
    popular: true
  }
];

// Barbers roster with the user's authentic supplied images
export const BARBERS_DATA: BarberItem[] = [
  {
    id: "jay-lead",
    name: "Jay (Lead Master Barber)",
    specialty: "Signature Skin Fades & Sharp Razor Lines",
    bio: "Founder and master barber known for razor-sharp hairline lineups, flawless skin gradations, and custom urban cuts.",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788991861/dsfdfbbbbbbbbbbbbbffffffffffffffffff.jpg",
    isAvailable: true
  },
  {
    id: "marcus-fade",
    name: "Marcus K.",
    specialty: "Beard Sculpting & Low-Drop Fades",
    bio: "Specialist in beard geometry, clean symmetrical contours, and precision clipper fades crafted for your daily look.",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788991861/999i98y7t6r5t6y7u8i9.jpg",
    isAvailable: true
  },
  {
    id: "devon-style",
    name: "Devon R.",
    specialty: "Textured Crops & Classic Straight Razor Shaves",
    bio: "Focuses on modern textured crops, traditional hot towel straight-razor shaves, and executive style enhancements.",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788991862/ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.jpg",
    isAvailable: true
  },
  {
    id: "carlos-razor",
    name: "Carlos M.",
    specialty: "Precision Tapers & Sharp Lineups",
    bio: "Dedicated craftsman delivering clean temple tapers, sharp razor finishes, and tailored styling for all hair types.",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788991865/huhujipoiqwjijiwkje.jpg",
    isAvailable: true
  },
  {
    id: "first-available",
    name: "Any Available Master Barber",
    specialty: "All Haircuts & Grooming Services",
    bio: "Get seated promptly with the next available specialist at Jay Cut’em’s for efficient, premium urban barbering.",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788991866/sqwdqwdqfewfwefsdfsdfsddsfdsf.jpg",
    isAvailable: true
  }
];

// Curated Gallery featuring all the user's authentic supplied photographs
export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    title: "Signature Clean Fade & Edge",
    category: "fades",
    categoryLabel: "Fresh Haircuts",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788991861/23333333333333333333333333333.jpg",
    altText: "Precision haircut and clean fade showcase at Jay Cut'em's Barbershop"
  },
  {
    id: "g2",
    title: "Master Beard Sculpting & Razor Line",
    category: "beards",
    categoryLabel: "Beard Transformations",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788991861/dwefwefwfdsfgbfgngfdfgfdgsdfsfsfghgdgge.jpg",
    altText: "Master beard contouring with straight razor edging"
  },
  {
    id: "g3",
    title: "Master Barber at the Chair",
    category: "studio",
    categoryLabel: "Barber Work",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788991861/1111111111111111111.jpg",
    altText: "Professional barber performing precision styling in Houston studio"
  },
  {
    id: "g4",
    title: "Crisp Lineup & Temple Taper",
    category: "fades",
    categoryLabel: "Fresh Haircuts",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788991862/fefwefwef_yge_ssssssssssssssss.jpg",
    altText: "Sharp front hairline lineup and smooth temple fade"
  },
  {
    id: "g5",
    title: "Modern Textured Style & Finish",
    category: "cuts",
    categoryLabel: "Fresh Haircuts",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788991862/ewfgsaaggrrgrhsafaafrfdsaaredfwaa.jpg",
    altText: "Contemporary haircut tailored with volume and sharp outline"
  },
  {
    id: "g6",
    title: "Houston Studio Craftsmanship",
    category: "studio",
    categoryLabel: "Barbershop Interior",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788991863/fsfewfwefsssss.jpg",
    altText: "Jay Cut'em's barbershop interior atmosphere in Houston, Texas"
  },
  {
    id: "g7",
    title: "Razor Detail & Sharp Profile",
    category: "cuts",
    categoryLabel: "Fresh Haircuts",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788991864/hefwefuiuuuebh_juhue_uehuhe_iueh.jpg",
    altText: "Close-up of straight razor detail and clean hairline contours"
  },
  {
    id: "g8",
    title: "Seamless Skin Gradation",
    category: "fades",
    categoryLabel: "Fresh Haircuts",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788991865/regergfsaaefweefwfwee.jpg",
    altText: "Flawless skin fade and balanced side taper"
  },
  {
    id: "g9",
    title: "Tailored Beard Shaping & Neckline",
    category: "beards",
    categoryLabel: "Beard Transformations",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788991866/retetretjjjjifwrf.jpg",
    altText: "Sculpted beard grooming with crisp cheek and neck boundaries"
  },
  {
    id: "g10",
    title: "Heavy-Duty Barber Station & Tools",
    category: "studio",
    categoryLabel: "Professional Tools",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788991866/wdqwdqdscefgrewy46yutrhjrhytuytu.jpg",
    altText: "Barbershop station setup with professional clippers, shears, and straight razors"
  },
  {
    id: "g11",
    title: "Urban Grooming & Confidence",
    category: "cuts",
    categoryLabel: "Before & After",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788991866/sqwdqwdqfewfwefsdfsdfsddsfdsf.jpg",
    altText: "Complete haircut and beard transformation showcase"
  },
  {
    id: "g12",
    title: "Precision Haircut & Sharp Definition",
    category: "cuts",
    categoryLabel: "Before & After",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788991866/wqeqwewqedsafsdfsfsdfsfdddddddddd.jpg",
    altText: "Sharp finished cut with clean perimeter lines"
  }
];

// Sample reviews as strictly required by prompt
export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    clientInitials: "H.T. Client",
    badge: "SAMPLE REVIEW — PREVIEW CONTENT",
    reviewText: "Consistently clean lines and great attention to detail. Jay Cut’em’s delivers sharp fades and a relaxed, professional atmosphere every single visit.",
    serviceMentioned: "Skin Fade & Beard Sculpt",
    dateTag: "Sample Feedback"
  },
  {
    id: "rev-2",
    clientInitials: "U.G. Client",
    badge: "SAMPLE REVIEW — PREVIEW CONTENT",
    reviewText: "The razor lineup and hot towel finish set the bar. True urban craftsmanship right here in Houston. Always leave feeling sharp and refreshed.",
    serviceMentioned: "Haircut + Beard Combo",
    dateTag: "Sample Feedback"
  },
  {
    id: "rev-3",
    clientInitials: "M.D. Client",
    badge: "SAMPLE REVIEW — PREVIEW CONTENT",
    reviewText: "Top tier cuts, clean stations, and respected appointment times. Excellent barbering skill with modern style and respectful service.",
    serviceMentioned: "Haircuts & Styling",
    dateTag: "Sample Feedback"
  },
  {
    id: "rev-4",
    clientInitials: "R.J. Client",
    badge: "SAMPLE REVIEW — PREVIEW CONTENT",
    reviewText: "Straight razor finish was on point and beard contour was immaculate. Definitely my go-to barbershop in the Houston area.",
    serviceMentioned: "Hot Towel Shave & Beard Trim",
    dateTag: "Sample Feedback"
  }
];

// Confirmed Location Data
export const LOCATIONS_DATA: LocationItem[] = [
  {
    id: "houston-primary",
    city: "Houston",
    state: "Texas",
    regionDescription: "Primary Houston Barbershop Headquarters",
    phone: "1 209-395-3905",
    status: "Open",
    isPrimary: true
  }
];

// 6 Why Choose Us items requested by user:
// Professional Barbers, Quality Grooming, Great Client Experience, Modern Barbershop Atmosphere, Competitive Pricing, Professional Service
export const WHY_CHOOSE_ITEMS = [
  {
    id: "why-1",
    title: "PROFESSIONAL BARBERS",
    description: "Highly skilled craftsmen trained in traditional straight-razor detailing, skin fades, and modern textured shears.",
    iconName: "Scissors",
    tagline: "Master Precision"
  },
  {
    id: "why-2",
    title: "QUALITY GROOMING",
    description: "Delivering clean, confident finishes using premium clippers, hygienic stations, hot eucalyptus towels, and soothing balms.",
    iconName: "Sparkles",
    tagline: "Uncompromised Sharpness"
  },
  {
    id: "why-3",
    title: "GREAT CLIENT EXPERIENCE",
    description: "Attentive consultations where we listen to your preferred style, respect your schedule, and provide a welcoming chair.",
    iconName: "HeartHandshake",
    tagline: "Hospitality & Respect"
  },
  {
    id: "why-4",
    title: "MODERN BARBERSHOP ATMOSPHERE",
    description: "A contemporary urban environment with genuine Houston character, great music, high energy, and comfortable chairs.",
    iconName: "Building2",
    tagline: "Houston Urban Culture"
  },
  {
    id: "why-5",
    title: "COMPETITIVE PRICING",
    description: "Premium craftsmanship and executive-level grooming delivered at honest, transparent rates for regular maintenance.",
    iconName: "BadgePercent",
    tagline: "Exceptional Value"
  },
  {
    id: "why-6",
    title: "PROFESSIONAL SERVICE",
    description: "Punctual appointment slots, seamless booking requests, and consistent high-standard results visit after visit.",
    iconName: "ShieldCheck",
    tagline: "Reliable Excellence"
  }
];

