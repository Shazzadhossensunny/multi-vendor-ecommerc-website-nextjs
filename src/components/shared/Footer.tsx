import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-2xl">
                T
              </div>
              <span className="text-primary font-bold text-2xl font-heading">
                TradeNexus
              </span>
            </div>
            <p className="text-foreground max-w-xs font-sans">
              TradeNexus connects buyers and sellers in a trusted marketplace,
              offering high-quality products from verified vendors worldwide.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary font-heading">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-foreground hover:text-primary transition-colors font-sans"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-foreground hover:text-primary transition-colors font-sans"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/add-product"
                  className="text-foreground hover:text-primary transition-colors font-sans"
                >
                  Add Product
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-foreground hover:text-primary transition-colors font-sans"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary font-heading">
              More
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/testimonials"
                  className="text-foreground hover:text-primary transition-colors font-sans"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-foreground hover:text-primary transition-colors font-sans"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-foreground hover:text-primary transition-colors font-sans"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-foreground hover:text-primary transition-colors font-sans"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Hidden on Mobile */}
          <div className="space-y-4 hidden md:block">
            <h3 className="text-lg font-semibold text-primary font-heading">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-foreground">
                <span className="font-medium font-sans">Email:</span>{" "}
                contact@tradenexus.com
              </li>
              <li className="text-foreground">
                <span className="font-medium font-sans">Phone:</span> +1 (555)
                123-4567
              </li>
              <li className="text-foreground">
                <span className="font-medium font-sans">Address:</span> 1234
                Market St, Suite 100, San Francisco, CA 94103
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="mt-12 pt-8 border-t border-border font-sans">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground text-sm">
              &copy; {new Date().getFullYear()} TradeNexus. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link
                href="/terms"
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
