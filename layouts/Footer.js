import Link from "next/link";
const Footer = ({ bg = true, margin = 160, footer }) => {
  switch (footer) {
    case 1:
      return <Footer2 bg={bg} margin={margin} />;
    default:
      return <Footer2 bg={bg} margin={margin} />;
  }
};
export default Footer;


const Footer2 = () => {
  return (
    <footer className="mil-footer-dark mil-p-160-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mil-mb-60 mil-footer-space-fix">
            <a href="#." className="mil-footer-logo mil-logo-2 mil-mb-60">
              <img src="/favicon.ico" alt="Paranolacak" width={164} height={31} />
            </a>
            
            <ul className="mil-footer-list mil-footer-list-2">
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                <Link href="about">Hakkımızda</Link>
              </li>
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                <Link href="services">Servislerimiz</Link>
              </li>
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                <Link href="blog">Blog</Link>
              </li>
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                <Link href="contact">İletişim</Link>
              </li>
              
              {/* <li className="mil-text-m mil-dark-soft mil-mb-15">
                <Link href="price">Ücretlendirme</Link>
              </li> */}
            </ul>
            <p className="mil-text-s mil-dark-soft mil-mb-15">
              <br/>
              <span style={{color:'#25EF7D'}}> Paranolacak </span> 
              Ödeme Hizmetleri ve Elektronik Para A.Ş. 6493 sayılı kanun kapsamında lisans başvurusunda
                bulunmuş olup faaliyet izni sürecindedir.
              </p>
          </div>
          <div className="col-xl-3 mil-mb-60" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                999 Kozyatağı , 34343 İstanbul, <br />
                Türkiye
              </li>
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                +001 (808) 555-5555
              </li>
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                destek@paranolacak.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mil-footer-bottom">
          <div className="row">
            <div className="col-xl-6">
              <p className="mil-text-s mil-dark-soft">
                © 2025 Paranolacak
              </p>
            </div>
            <div className="col-xl-6">
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};