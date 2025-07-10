import { PageBanner } from "@/components/Banner";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
const page = () => {
  return (
    <PlaxLayout dark footer={2}>
      <PageBanner pageName="S.S.S." title="Sıkça Sorulan Sorular" />
      {/* 
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up mil-light">
              Uzman Ekibimizin Bir Parçası Olun
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
              Heyecan verici fırsatları keşfedin ve kariyerinizin Paranolacak'ta nasıl gelişebileceğini görün.
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Yenilikçi Kültür</h5>
                    <p className="mil-text-m mil-light">
                    Paranolacak'ta sürekli yeniliği teşvik eden bir ortam yaratıyoruz. 
                    Burada, yaratıcılığınız ve tutkunuz, 
                    sektöre yön veren çözümler üretmek için bir araya gelir.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Profesyonel Büyüme</h5>
                    <p className="mil-text-m mil-light">
                    Sürekli profesyonel gelişim fırsatları sunuyoruz. 
                    Paranolacak'ta sadece işinizi değil, kariyerinizi de geliştiriyorsunuz. 
                    Eğitim, mentorluk ve önemli zorluklar sizi bekliyor.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/6.png"
                  alt="image"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      */}
      {/* call to action */}
      {/*
      <div className="mil-cta mil-p-0-160 mil-up">
        <div className="container">
          <div className="mil-out-frame mil-bg-3">
            <div className="row justify-content-center align-items-center mil-p-160-160">
              <div className="col-xl-7 mil-text-center">
                <h2 className="mil-light mil-mb-30 mil-up">
                  İnovasyonun önceliğimiz olduğu ekibimize katılın!
                </h2>
                <p className="mil-text-m mil-light mil-mb-60 mil-up">
                Her adımda mükemmeliyete adanmış, yenilikçi bir ekibe katılın.
                </p>
                <div className="mil-up">
                  <Link
                    href="register"
                    className="mil-btn mil-md mil-add-arrow"
                  >
                    Şimdi Kayıt Olun
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       */}
      {/* call to action end */}
      {/* vacancies */}
      <div className="mil-faq mil-p-0-130">
        <div className="container">
          <div className="mil-vacancie mil-mb-30 mil-up">
            <div className="mil-left">
              <h4 className="mil-mb-30">
              1. Soru
              </h4>
              <p className="mil-text-m mil-soft mil-mb-30">
              Yeni uluslararası pazarlarda varlığımızı genişletmek 
              için stratejiler geliştirin ve uygulayın.
              </p>
              <ul className="mil-tags">
                <li>Business Development</li>
                <li>Office work</li>
                <li>İstanbul, Türkiye</li>
              </ul>
            </div>
            <div className="mil-right mil-up">
              <Link
                href="career-details"
                className="mil-btn mil-m mil-add-arrow"
              >
                Daha fazlası için
              </Link>
            </div>
          </div>
          <div className="mil-vacancie mil-mb-30 mil-up">
            <div className="mil-left">
              <h4 className="mil-mb-30">2. soru</h4>
              <p className="mil-text-m mil-soft mil-mb-30">
              Yeni uluslararası pazarlarda varlığımızı genişletmek için stratejiler geliştirin ve uygulayın.
              </p>
              <ul className="mil-tags">
                <li>Business Development</li>
                <li>Office work</li>
                <li>İstanbul, Türkiye</li>
              </ul>
            </div>
            <div className="mil-right mil-up">
              <Link
                href="career-details"
                className="mil-btn mil-m mil-add-arrow"
              >
                Daha fazlası için
              </Link>
            </div>
          </div>
          <div className="mil-vacancie mil-mb-30 mil-up">
            <div className="mil-left">
              <h4 className="mil-mb-30">Financial Data Analyst</h4>
              <p className="mil-text-m mil-soft mil-mb-30">
              Yeni uluslararası pazarlarda varlığımızı genişletmek için stratejiler geliştirin ve uygulayın.
              </p>
              <ul className="mil-tags">
                <li>Business Development</li>
                <li>Office work</li>
                <li>İstanbul, Türkiye</li>
              </ul>
            </div>
            <div className="mil-right mil-up">
              <Link
                href="career-details"
                className="mil-btn mil-m mil-add-arrow"
              >
                Daha fazlası için
              </Link>
            </div>
          </div>
          <div className="mil-vacancie mil-mb-30 mil-up">
            <div className="mil-left">
              <h4 className="mil-mb-30">Digital Marketing Specialist</h4>
              <p className="mil-text-m mil-soft mil-mb-30">
              Yeni uluslararası pazarlarda varlığımızı genişletmek için stratejiler geliştirin ve uygulayın.
              </p>
              <ul className="mil-tags">
                <li>Business Development</li>
                <li>Office work</li>
                <li>İstanbul, Türkiye</li>
              </ul>
            </div>
            <div className="mil-right mil-up">
              <Link
                href="career-details"
                className="mil-btn mil-m mil-add-arrow"
              >
                Daha fazlası için
              </Link>
            </div>
          </div>
          <div className="mil-vacancie mil-mb-60 mil-up">
            <div className="mil-left">
              <h4 className="mil-mb-30">Information Security Engineer</h4>
              <p className="mil-text-m mil-soft mil-mb-30">
                Yeni uluslararası pazarlarda varlığımızı genişletmek için stratejiler geliştirin ve uygulayın.
              </p>
              <ul className="mil-tags">
                <li>Business Development</li>
                <li>Office work</li>
                <li>İstanbul, Türkiye</li>
              </ul>
            </div>
            <div className="mil-right mil-up">
              <Link
                href="career-details"
                className="mil-btn mil-m mil-add-arrow"
              >
                Daha fazlası için
              </Link>
            </div>
          </div>
          <div className="mil-text-center mil-up">
            <a href="#" className="mil-btn mil-m mil-add-arrow">
              Daha Fazla 
            </a>
          </div>
        </div>
      </div>
      {/* vacancies end */}
    </PlaxLayout>
  );
};
export default page;
