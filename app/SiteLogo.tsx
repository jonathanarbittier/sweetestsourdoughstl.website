import Image from "next/image";
import Link from "next/link";

export default function SiteLogo() {
  return (
    <Link href="/" className="brand" aria-label="Sweets and Sourdough home">
      <Image src="/images/sweetest-sourdough/logo-badge.png" alt="Sweets & Sourdough" width={96} height={96} quality={90} />
    </Link>
  );
}
