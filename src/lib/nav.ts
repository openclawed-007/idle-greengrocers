export type NavItem = { label: string; href: string };

export const navLeft: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Our Produce', href: '/our-produce' },
  { label: 'Local Makers', href: '/local-makers' },
];

export const navRight: NavItem[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Delivery', href: '/delivery' },
  { label: 'Contact', href: '/contact' },
];

export const allNav: NavItem[] = [...navLeft, ...navRight];
