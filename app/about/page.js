import { CallToAction2 } from "@/components/CallToAction";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
const page = () => {


  return (
    <PlaxLayout dark footer={2} bg={false}>
      <div className="mil-banner mil-banner-inner mil-dissolve mil-dark-1 ">
        <div className="container ">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="mil-banner-text mil-text-center">
                <div className="mil-text-m mil-mb-20 mil-dark-soft">Hakkımızda</div>
                <h1 className="mil-mb-60 mil-text-gradient">
                  Bir platformdan fazlası, Finansal Devrimin Adı
                </h1>
                <ul className="mil-breadcrumbs mil-center mil-dark-soft">
                  <li>
                    <Link href="/">Anasayfa</Link>
                  </li>
                  <li>
                    <Link href="about">Hakkımızda</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* features */}
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up mil-text-gradient">
                Ekibimizi harekete geçiren Vizyon
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                <span style={{color:"#25EF7D"}}>Paranolacak</span>'ın temellerini ve amaca yönelik başlangıcımızın kimliğimizi nasıl şekillendirdiğini keşfedin. 
                Başlangıçtaki zorluklardan sınır ötesi ödemeleri basitleştirme vizyonumuzu gerçekleştirmeye kadar bu anlamlı yolculuk, <span style={{color:"#25EF7D"}}>Paranolacak</span>'ı finansal devrimde öncü bir güç haline getirdi.
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15 mil-text-gradient">Dönüşümsel Vizyon</h5>
                    <p className="mil-text-m mil-soft">
                    <span style={{color:"#25EF7D"}}>Paranolacak</span>'ın ilk vizyonunun, insanların küresel olarak işlem
                      yapma biçimini dönüştürmeye nasıl odaklandığını keşfedin.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/logoreklam.png"
                  alt="image"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="0.8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}
      {/* kayıtlıkullanıcılar facts */}
      {/* <div className="mil-facts mil-p-0-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up">
              <p className="h1 mil-display mil-mb-15">
                <span className="mil-accent mil-counter" data-number={7}>
                  7
                </span>
                <span className="mil-pale">M</span>
              </p>
              <h5 style={{color:"#25EF7D"}}>Kayıtlı Kullanıcılar</h5>
            </div>
            <div className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up">
              <p className="h1 mil-display mil-mb-15">
                <span className="mil-accent mil-counter" data-number="1.6">
                  1.6
                </span>
                <span className="mil-pale">M</span>
              </p>
              <h5 style={{color:"#25EF7D"}}>Daimi Kullanıcılar</h5>
            </div>
            <div className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up">
              <p className="h1 mil-display mil-mb-15">
                <span className="mil-accent mil-counter" data-number={170}>
                  170
                </span>
                <span className="mil-pale">+</span>
              </p>
              <h5 style={{color:"#25EF7D"}}>Kapsama alanımızdaki ülkeler</h5>
            </div>
          </div>
        </div>
      </div> */}
      {/* kayıtlıkullanıcılar facts end */}
      {/* call to action */}
      <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-p-160-100">
            <div className="row justify-content-center mil-text-center">
              <div className="col-xl-8 mil-mb-80-adaptive-30">
                <h2 className="mil-up">
                  Güç Kaynağımız: Kullanıcılarımızın Güveni
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/inner-pages/icons/1.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">Bağlantılı Küresel Ağ</h5>
                  <p className="mil-text-m mil-soft mil-up">
                  170'ten fazla ülkeye yayılan küresel ağımızın uluslararası işlemleri nasıl kolaylaştırdığını ve dünya çapında insanları nasıl birbirine bağladığını keşfedin.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/inner-pages/icons/2.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">Güçlü Güvenlik Sistemleri</h5>
                  <p className="mil-text-m mil-soft mil-up">
                  Kullanıcılarımızın finansal ve kişisel bilgilerinin korunmasını garanti altına alan <span style={{color:"#34A967"}}>Paranolacak</span>'ın temelindeki güvenlik standartları hakkında bilgi edinin.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/inner-pages/icons/3.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">Sürekli Yenilik</h5>
                  <p className="mil-text-m mil-soft mil-up">
                  Sürekli inovasyonun büyümemizi nasıl desteklediğini, gelişmiş ve erişilebilir finansal çözümler sunmamızı nasıl sağladığını keşfedin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}
      {/* features */}
      <div className="mil-features mil-p-160-80">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-text-gradient">
                Değerlerimiz Güvenin Temelleridir
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
              Şeffaflıktan hesap verebilirliğe kadar değerlerimiz, kurumsal kültürümüzün temelini oluşturur ve sarsılmazlığımızı yansıtır.
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15 mil-text-gradient">Mutlak Şeffaflık:</h5>
                    <p className="mil-text-m mil-soft">
                    Şeffaflığın kültürümüze nasıl yerleştiğini ve kullanıcılarımıza her işlemde nasıl anlaşılırlık ve güven sağladığını keşfedin.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15 mil-text-gradient">Güvenlik Taahhüdü:</h5>
                    <p className="mil-text-m mil-soft">
                    Her işlemin en yüksek koruma standartlarıyla yürütülmesini sağlayarak güvenliğe olan sarsılmaz bağlılığımızı keşfedin.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-5 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/2.png"
                  alt="image"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}
      {/* kurucularımızla tanışın */}
      {/* <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-visible mil-image mil-p-160-130">
            <div className="row justify-content-center mil-text-center">
              <div className="col-xl-8 mil-mb-80-adaptive-30">
                <h2 className="mil-light mil-up">
                  Kurucularımızla Tanışın
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-6 col-sm-6">
                <div className="mil-team-card mil-mb-30 mil-up">
                  <div className="mil-portrait mil-mb-30">
                    <img src="img/inner-pages/team/1.png" alt="portrait" />
                  </div>
                  <h5 className="mil-light mil-mb-15">X</h5>
                  <p className="mil-text-xs mil-soft">CEO &amp; Founder</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6">
                <div className="mil-team-card mil-mb-30 mil-up">
                  <div className="mil-portrait mil-mb-30">
                    <img src="img/inner-pages/team/2.png" alt="portrait" />
                  </div>
                  <h5 className="mil-light mil-mb-15">X</h5>
                  <p className="mil-text-xs mil-soft">
                    Chief Technology Officer (CTO)
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6">
                <div className="mil-team-card mil-mb-30 mil-up">
                  <div className="mil-portrait mil-mb-30">
                    <img src="img/inner-pages/team/3.png" alt="portrait" />
                  </div>
                  <h5 className="mil-light mil-mb-15">X</h5>
                  <p className="mil-text-xs mil-soft">
                    Director of Operations (COO)
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6">
                <div className="mil-team-card mil-mb-30 mil-up">
                  <div className="mil-portrait mil-mb-30">
                    <img src="img/inner-pages/team/4.png" alt="portrait" />
                  </div>
                  <h5 className="mil-light mil-mb-15">X</h5>
                  <p className="mil-text-xs mil-soft">
                    Chief Information Security Officer (CISO)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* kurucularımızla tanışın */}
      {/* quote */}
      <div className="mil-quote mil-p-160-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <h2 className="mil-mb-30 mil-text-gradient">
                "Paranolacak'ta şeffaflık sadece bir söz değildir; sizinle olan ilişkimizin temel taşıdır.
                Güvenin net politikalar ve tutarlı eylemlerle inşa edildiğine inanıyoruz.
                "
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60">- <span style={{color:"#25EF7D"}}>Paranolacak</span> Ekibi</p>
              <div className="row">
                <div className="col-xl-6">
                  <ul className="mil-list-2 mil-type-2 mil-mb-30">
                    <li>
                      <div className="mil-up">
                        <h5 className="mil-mb-15 mil-text-gradient">Gizlilik Politikaları</h5>
                        <p className="mil-text-m mil-soft">
                        Gizliliğiniz bizim önceliğimizdir. Bilgilerinizi açık izniniz olmadan asla üçüncü taraflarla paylaşmayız.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6">
                  <ul className="mil-list-2 mil-type-2 mil-mb-30">
                    <li>
                      <div className="mil-up">
                        <h5 className="mil-mb-15 mil-text-gradient">Verilerin Korunması</h5>
                        <p className="mil-text-m mil-soft">
                        Kişisel ve finansal verilerinizi en yüksek güvenlik önlemleriyle korumayı taahhüt ediyoruz
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* quote end */}
      {/* call to action */}
      <CallToAction2 />
      {/* call to action end */}
    </PlaxLayout>
  );
};
export default page;
