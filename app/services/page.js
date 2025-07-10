import { PageBanner } from "@/components/Banner";
import { CallToAction2 } from "@/components/CallToAction";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
const page = () => {
  return (
    <PlaxLayout dark footer={2} bg={false}>
      <PageBanner
        title="İhtiyaçlarınıza uyum sağlayan farkı keşfedin!"
        pageName="Servislerimiz"
      />

      {/* banner end */}
      {/* service */}
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up mil-text-gradient">
                Özgürce para gönderin, talep edin!
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
              Arkadaşlarınıza ve ailenize para göndermekten dünyanın dört bir yanından ödeme almaya kadar, 
              Paranolacak size basit ve anında bir deneyim sunar.
              </p>
              {/* <div className="mil-up">
                <Link href="" className="mil-btn mil-m mil-add-arrow">
                  Buton
                </Link>
              </div> */}
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up mt-5">
                <img
                  src="img/telefonon.png"
                  alt="image"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="0.9"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service end */}
      {/* service */}
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up mil-text-gradient">
              Global işletmeler için anında finansal çözümler!
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
              Anında ve güvenli işlemlerden, global ihtiyaçlara uyum sağlayan esnekliğe kadar, 
              Paranolacak şirketinizin finansal büyümesini desteklemek için güvenilir bir platform sunar.
              </p>
              {/* <div className="mil-up">
                <Link href="" className="mil-btn mil-m mil-add-arrow">
                  Buton
                </Link>
              </div> */}
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame ml-up">
                <img
                  src="img/inner-pages/5.png"
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
      {/* service end */}
      {/* service */}
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up mil-text-gradient">
                Finansal inovasyon, 
                Paranolacak Sanal Kartı keşfedin!
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
              Bu yenilikçi aracın, finansal refahı nasıl artırdığını ve 
              bölgede güvenli ve uygun maliyetli bir finansal katılım alternatifi sunduğunu keşfedin.
              </p>
              {/* <div className="mil-up">
                <Link href="" className="mil-btn mil-m mil-add-arrow">
                  Buton
                </Link>
              </div> */}
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/onarkakart.png"
                  alt="image"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service end */}
      {/* call to action */}
      <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-p-160-100">
            <div className="row justify-content-center mil-text-center">
              <div className="col-xl-8 mil-mb-80-adaptive-30">
                <h2 className="mil-up">
                Her işlemde yenilik ve verimlilik!
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/inner-pages/icons/4.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">Her adımda kolaylık!</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Hesabınızı oluşturmakla başlayan, 
                    basitleştirilmiş ödeme sürecinin rahatlığını keşfedin.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/inner-pages/icons/5.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">
                    Garanti Edilmiş İleri Düzey Güvenlik
                  </h5>
                  <p className="mil-text-m mil-soft mil-up">
                  Finansal bilgilerinizi her zaman korumak için en güncel güvenlik önlemlerini uyguluyoruz.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/inner-pages/icons/6.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">Eşsiz Verimlilik</h5>
                  <p className="mil-text-m mil-soft mil-up">
                  Hızlı, güvenli ve güvenilir işlemler,
                  mükemmeliyete olan bağlılığımızı her adımda yansıtır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}
      {/* quote */}
      <div className="mil-quote mil-p-160-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <h2 className="mil-mb-30 mil-text-gradient">
                "Paranolacak'ta şeffaflık sadece bir söz değil; sizinle olan ilişkimizin temel taşıdır. 
                Güvenin, net politikalar ve tutarlı eylemlerle inşa olduğuna inanıyoruz."
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60">- <span style={{color:"#25EF7D"}}>Paranolacak</span> Ekibi</p>
              <div className="row">
                <div className="col-xl-6">
                  <ul className="mil-list-2 mil-type-2 mil-mb-30">
                    <li>
                      <div className="mil-up">
                        <h5 className="mil-mb-15" style={{color:"#25EF7D"}}>Gizlilik Politikaları</h5>
                        <p className="mil-text-m mil-soft">
                        Gizliliğiniz bizim önceliğimizdir. 
                        Bilgilerinizi, 
                        açık onayınız olmadan üçüncü şahıslarla asla paylaşmayız.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6">
                  <ul className="mil-list-2 mil-type-2 mil-mb-30">
                    <li>
                      <div className="mil-up">
                        <h5 className="mil-mb-15" style={{color:"#25EF7D"}}>Veri Koruma</h5>
                        <p className="mil-text-m mil-soft">
                        Kişisel ve finansal verilerinizi en yüksek güvenlik önlemleriyle koruma taahhüdü veriyoruz.
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
