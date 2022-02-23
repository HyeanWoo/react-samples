import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        {/* Anchor 태그를 사용해 className, style등을 설정할 수 있다. */}
        <a
          className={`${styles.link} ${
            router.pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={`${styles.link} ${
            router.pathname === "/about" ? styles.active : ""
          }`}
        >
          About
        </a>
      </Link>
    </nav>
  );
}
