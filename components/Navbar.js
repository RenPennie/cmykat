import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav className="navigation">
        <div className="image-wrapper-navlogo">
          <img
            src="/global/cmykat-typecombo-small.png"
            width={112}
            height={25}
          />
        </div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/updates">
          <a>Updates</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
