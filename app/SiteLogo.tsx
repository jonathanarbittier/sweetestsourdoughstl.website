import Image from "next/image";
import Link from "next/link";

export default function SiteLogo() {
  return (
    <Link href="/" className="brand" aria-label="Sweets and Sourdough home">
      <Image src="/images/sweets-sourdough-logo-badge.png" alt="Sweets & Sourdough" width={328} height={328} quality={95} />
    </Link>
  );
}
