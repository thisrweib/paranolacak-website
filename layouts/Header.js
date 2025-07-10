"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";

const Header = ({ dark }) => {
  const currentPath = usePathname();
  const activeMenuFuntion = (value) =>
    value.some((el) => currentPath.includes(el)) ? "mil-active" : "";
  const [toggle, setToggle] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 0) {
        setShowHeader(true);
      } else if (currentScroll > scrollY) {
        setShowHeader(false); // Scroll down -> hide header
      } else {
        setShowHeader(true); // Scroll up -> show header
      }

      setScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <div
      className={`mil-top-panel ${dark ? "mil-dark-2" : ""} 
      ${showHeader ? "mil-visible" : "mil-hidden"} 
      ${scrollY > 50 ? "mil-active" : ""} 
      ${scrollY === 0 ? "mil-transparent" : ""}`}
    >
      <div className="container">
        <Link href="/" className="mil-logo">
          <img
            src={dark ? "favicon.ico" : "favicon.ico"}
            alt="Paranolacak"
            width={225}
          />
        </Link>
        <nav className={`mil-top-menu ${toggle ? "mil-active" : ""}`}>
          <ul>
            <li className={`${activeMenuFuntion(["about"])}`}>
              <Link href="about">Hakkımızda</Link>
            </li>
            <li className={`${activeMenuFuntion(["services"])}`}>
              <Link href="services">Servislerimiz</Link>
            </li>
            <li
            // mil-has-children classname (for dropdown)
              className={` ${activeMenuFuntion(["blog"])}`}
            >
              <Link href="blog">Blog</Link>
              {/*
               <ul>
                <li>
                  <Link href="blog">Blog list</Link>
                </li>
                 <li>
                  <Link href="publication">Blog details</Link>
                </li> 
              </ul> 
              */}
            </li>
            <li className={`${activeMenuFuntion(["contact"])}`}>
              <Link href="contact">İletişim</Link>
            </li>
            {/* Hizmetlerimiz kariyer
            <li
              className={`mil-has-children ${activeMenuFuntion([
                "career",
                "price",
                "register",
              ])}`}
            >
              <a href="#.">Hizmetlerimiz</a>
              <ul>
                <li>
                  <Link href="career">Kariyer</Link>
                </li>
                <li>
                  <Link href="career-details">Kariyer Detayları</Link>
                </li>
                <li>
                  <Link href="price">Ücretlendirme</Link>
                </li>
                <li>
                  <Link href="register">Kayıt</Link>
                </li>
              </ul>
            </li> */}
            <li className={`${activeMenuFuntion(["freq-asked"])}`}>
              <Link href="freq-asked">S.S.S.</Link>
            </li>
          </ul>
        </nav>
        <div className="mil-menu-buttons">
          {/*
          <Link href="login" className="mil-btn mil-sm">
            Giriş Yap
          </Link> 
          */}
          <div
            className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
