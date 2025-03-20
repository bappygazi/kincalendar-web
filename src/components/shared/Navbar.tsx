import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.svg";
import { sections } from "../../data/nav-section-data";

const Navbar: React.FC = () => {
  return (
    <div>
      <div className="hidden md:block">
        <nav className="h-[61px] max-w-[660px] mx-auto bg-white/[80%] border-[1px] border-neutral_400 backdrop-blur-[40px] rounded-[60px] px-5 flex items-center justify-between">
          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
          <ul className="flex items-center gap-6">
            {sections.map((section, index) => (
              <li key={index} className="text-sm font-medium">
                <a href={`#${section.id}`}>{section.name}</a>
              </li>
            ))}
          </ul>

          <button className="h-7 px-2 flex items-center justify-center rounded-lg bg-neutral_1000 text-white text-sm font-semibold hover:bg-neutral_900 duration-300">
            Download on iOS
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
