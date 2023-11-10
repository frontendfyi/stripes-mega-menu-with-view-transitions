type NavItem = {
  id: number;
  title: string;
  href: string;
  subnavigation?: { title: string; href: string }[];
  leftBar?: string;
  bottomBar?: {
    title: string;
    links: { title: string; href: string }[];
  };
};

export const nav: NavItem[] = [
  {
    id: 1,
    title: "Products",
    href: "/products",
    subnavigation: [
      { title: "Payments", href: "/prod1" },
      { title: "Checkout", href: "/prod2" },
      { title: "Elements", href: "/prod3" },
      { title: "Payment Links", href: "/prod4" },
      { title: "Radar", href: "/prod5" },
      { title: "Connect", href: "/prod6" },
      { title: "Billing", href: "/prod7" },
      { title: "Invoicing", href: "/prod8" },
      { title: "Terminal", href: "/prod9" },
      { title: "Financial connections", href: "/prod10" },
    ],
    // leftBar: "Just some random text so we have different layouts.",
  },
  {
    id: 2,
    title: "Solutions",
    href: "/solutions",
    subnavigation: [
      { title: "SaaS", href: "/solution1" },
      { title: "Platforms", href: "/solution2" },
      { title: "E-commerce", href: "/solution3" },
      { title: "Marketplace", href: "/solution4" },
      { title: "Crypto", href: "/solution5" },
    ],
    bottomBar: {
      title: "Intgrations and custom solutions",
      links: [
        { title: "App marketplace", href: "/solution6" },
        { title: "Professional services", href: "/solution7" },
        { title: "Partner ecosystem", href: "/solution8" },
      ],
    },
  },
  {
    id: 3,
    title: "Developers",
    href: "/developers",
    subnavigation: [
      { title: "Pre-built checkout", href: "/dev1" },
      { title: "Libraries and SDKs", href: "/dev2" },
      { title: "App integrations", href: "/dev3" },
      { title: "Code samples", href: "/dev4" },
      { title: "Accept online payments", href: "/dev5" },
      { title: "Manage subscriptions", href: "/dev6" },
      { title: "Send payments", href: "/dev7" },
      { title: "Setup in-person payments", href: "/dev8" },
    ],
    bottomBar: {
      title: "Intgrations and custom solutions",
      links: [
        { title: "App marketplace", href: "/solution6" },
        { title: "Professional services", href: "/solution7" },
        { title: "Partner ecosystem", href: "/solution8" },
      ],
    },
  },
  {
    id: 4,
    title: "Resources",
    href: "/resources",
    subnavigation: [
      { title: "Support Center", href: "/support" },
      { title: "Support Plans", href: "/support2" },
      { title: "Guides", href: "/support3" },
      { title: "Customer stories", href: "/support4" },
      { title: "Blog", href: "/support5" },
      { title: "Annual conference", href: "/support6" },
    ],
  },
  {
    id: 5,
    title: "Pricing",
    href: "/pricing",
  },
];
