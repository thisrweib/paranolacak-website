import { PageBanner } from "@/components/Banner";
import PlaxLayout from "@/layouts/PlaxLayout";
const page = () => {
  return (
    <PlaxLayout noFooter dark>
      <PageBanner pageName="Kayıt" title="Paranolacak'a Katılın!" />
      {/* register form */}
      <div className="mil-blog-list mip-p-0-160" style={{background: "linear-gradient(90deg, #1b1d1d, #0d5152 50%, #1b1d1d)"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5">
              <form>
                <input
                  className="mil-input mil-up mil-mb-15"
                  type="text"
                  placeholder="İsim Soiyisim"
                />
                <input
                  className="mil-input mil-up mil-mb-15"
                  type="email"
                  placeholder="E-mail"
                />
                <input
                  className="mil-input mil-up mil-mb-15"
                  type="password"
                  placeholder="Şifre"
                />
                <input
                  className="mil-input mil-up mil-mb-30"
                  type="password"
                  placeholder="Şifreyi onayla"
                />
                <div className="mil-up mil-mb-30">
                  <button type="submit" className="mil-btn mil-md mil-fw">
                    Hesap oluştur
                  </button>
                </div>
                <p className="mil-text-xs mil-text-center mil-soft mil-mb-30">
                  Veya 
                </p>
                <div className="mil-up mil-mb-15">
                  <a
                    href="#."
                    className="mil-btn mil-md mil-light-green mil-fw mil-mb-30"
                  >
                    Google hesabı ile kayıt olun
                  </a>
                </div>
                <p className="mil-text-xs mil-soft">
                Kayıt olarak, {" "}
                  <a href="#." className="mil-accent">
                  Şartlar ve Koşullarımızı
                  </a>
                  {" "}kabul etmiş olursunuz. 
                  Bilgileriniz korunur ve asla üçüncü şahıslarla paylaşılmaz."
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* register form end */}
      <div className="mil-space-fix" style={{background: "linear-gradient(90deg, #1b1d1d, #0d5152 50%, #1b1d1d)"}}/>
    </PlaxLayout>
  );
};
export default page;
