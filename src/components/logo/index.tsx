import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" title="Página Inicial">
      <Image src="/logo.png" alt="Logo Site" width={116} height={32} />
    </Link>
  );
}
