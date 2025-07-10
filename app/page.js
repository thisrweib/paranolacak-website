"use client";
import PlaxAccordion from "@/components/PlaxAccordion";
 // import { Pricing2 } from "@/components/Pricing";
import PlaxLayout from "@/layouts/PlaxLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const page = () => {
  useEffect(() => {
    document.querySelector("#smooth-wrapper").style.backgroundColor = "#192626";
    
  }, []);

  return (
    <PlaxLayout dark footer={2}>
      {/* banner */}
      <div className="mil-banner">

  <video
    autoPlay
    loop
    muted
    playsInline
    className="mil-banner-video"
    style={{zIndex:'1', width:'100%'}}
  >
    <source src="./img/logoanasayfa.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="mil-radial-g-1" />
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-6">
        <div className="mil-banner-text">
          <h1 className="mil-display mil-text-gradient mil-mb-60">
            Para al &amp; <br />Para gönder{" "}
          </h1>
          <h2
            className="mil-display mil-text-gradient-10 mil-mb-60"
            style={{ marginTop: "10px" }}
          >
            Harca, harcadıkça kazan
          </h2>
          {/* <div className="mil-buttons-frame">
            <Link href="https://merchant.paranolacak.com/login " className="mil-btn mil-md mil-add-arrow">
              Kayıt Ol
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</div>
      {/* banner end */}
      {/* icon boxes */}
      <div className="icon-boxes mil-p-160-130">
        <div className="container">
          <div className="mil-text-center">
            <h2 className="mil-light mil-mb-30 mil-up">
              Hemen Kaydolun 
              <br />
              <span style={{color:'#25EF7D'}}> Paranolacak </span> Avantajlarından Yararlanın
            </h2>
            <p className="mil-text-l mil-dark-soft mil-mb-60 mil-up">
              Hesabınızdan alınan gizli ücretler yok, yüksek komisyon yok, kart aidatı yok!<br />
              Hemen başvur kartını sana ulaştıralım. 
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-4 mil-mb-30">
              <div className="mil-icon-box mil-bg-fix mil-center mil-up">
                <img
                  src="img/home-4/icons/1.svg"
                  alt="icon"
                  className="mil-mb-30 mil-up"
                />
                <h5 className="mil-mb-20 mil-light mil-up">
                  Kişiselleştirilmiş Bütçeleme
                </h5>
                <p className="mil-text-s mil-dark-soft mil-mb-30 mil-up">
                  Plax ile finansal hedeflerinize ve ihtiyaçlarınıza uygun, 
                  gerçekçi ve kişiselleştirilmiş bütçeler oluşturun.
                </p>
                <Link href="services" className="mil-link mil-accent">
                  Daha fazla
                </Link>
              </div>
            </div>
            <div className="col-xl-4 mil-mb-30">
              <div className="mil-icon-box mil-with-bg mil-dark mil-center mil-up">
                <img
                  src="img/home-4/icons/2.svg"
                  alt="icon"
                  className="mil-mb-30 mil-up"
                />
                <h5 className="mil-mb-20 mil-light mil-up">Borç Planlaması</h5>
                <p className="mil-text-s mil-dark-soft mil-mb-30 mil-up">
                  Borç kapasitenizi öğrenin ve ek masraflardan kaçınarak borç 
                  ödemelerinizi etkili bir şekilde yönetin.
                </p>
                <Link href="services" className="mil-link mil-accent">
                  Daha fazla
                </Link>
              </div>
            </div>
            <div className="col-xl-4 mil-mb-30">
              <div className="mil-icon-box mil-bg-fix mil-center mil-up">
                <img
                  src="img/home-4/icons/3.svg"
                  alt="icon"
                  className="mil-mb-30 mil-up"
                />
                <h5 className="mil-mb-20 mil-light mil-up">
                  Finans Yönetimi
                </h5>
                <p className="mil-text-s mil-dark-soft mil-mb-30 mil-up">
                  Paranolacak, hareketlerinizin bir haritasını çıkararak finanslarınızı
                   7 bölüme kadar düzenlemenize olanak tanır.
                </p>
                <Link href="services" className="mil-link mil-accent">
                  Daha fazla
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* icon boxes end */}
      {/* features */}
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-light mil-up">
                Önceliğimiz sizin güvenliğiniz.
              </h2>
              <p className="mil-text-l mil-dark-soft mil-mb-60 mil-up">
              Kişisel bilgileriniz güvenli veri sunucuları ile güvendedir.
              </p>
              <div className="mil-up">
                <Link href="services" className="mil-btn mil-m mil-add-arrow">
                  Daha fazla öğrenin
                </Link>
              </div>
            </div>
            <div className="col-xl-5 mil-mb-80">
              <div className="mil-image-frame mil-visible-overflow">
                <img src="img/onarkakart.png" alt="image" className="mil-up" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}
      {/* features */}
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-light mil-up">
                Önceliğimiz sizin güvenliğiniz.
              </h2>
              <p className="mil-text-l mil-dark-soft mil-mb-60 mil-up">
              Bize güvendikleri için 100.000'den fazla kayıtlı kullanıcımıza teşekkür ederiz.
              </p>
              <ul className="mil-list-2 mil-type-2 mil-mb-60">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-light mil-mb-15">
                      Çeşitli transfer yöntemleri
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-light mil-mb-15">
                      Çoklu dövizli global hesaplar
                    </h5>
                  </div>
                </li>
              </ul>
              <div className="mil-up">
                <Link href="services" className="mil-btn mil-m mil-add-arrow">
                  Daha fazla öğrenin
                </Link>
              </div>
            </div>
            <div className="col-xl-5 mil-mb-80">
              <div className="mil-image-frame mil-visible-overflow">
                <img src="img/home-4/3.png" alt="image" className="mil-up" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}
      {/* call to action */}
      <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-image mil-p-160-160">
            <div className="row flex-sm-row-reverse justify-content-between align-items-center">
              <div className="col-xl-6">
                <h2 className="mil-light mil-mb-30 mil-up">
                  <span style={{color:'#25EF7D'}}>Paranolacak</span>'ın Finansmanınızı Nasıl Dönüştürdüğünü Keşfedin
                </h2>
                <p className="mil-text-l mil-dark-soft mil-mb-60 mil-up">
                  Bütçe oluşturmaktan Gider Takibine kadar takip kolaylığı
                </p>
                <ul className="mil-list-2 mil-type-2 mil-mb-60">
                  <li>
                    <div className="mil-up">
                      <h5 className="mil-light mil-mb-15">
                        Çeşitli transfer yöntemleri
                      </h5>
                      <p className="mil-text-m mil-dark-soft">
                        Mali hedeflerinize ve yaşam tarzınıza uygun özel bütçeler tasarlayın.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="mil-up">
                      <h5 className="mil-light mil-mb-15">
                        Çoklu dövizli global hesap
                      </h5>
                      <p className="mil-text-m mil-dark-soft">
                      Tasarruf alanlarını belirleyin ve gelecekteki hedefler için
                       kaynak biriktirme kapasitenizi maksimuma çıkarın.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-xl-5">
                <div className="mil-image-frame mil-visible-overflow">
                  <img src="img/telefonon.png" alt="image" className="mil-up" />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}
      {/* prices*/}
      
       <div className="mil-blog-list mil-p-160-130">
        <div className="container">
          <div className="mil-text-center">
            <h2 className="mil-light mil-mb-30 mil-up">
            Saniyeler içinde transfer <br/> veya <br/> ödeme yapın.
            </h2>
            <p className="mil-text-l mil-dark-soft mil-mb-60 mil-up">
            Saniyeler içerisinde hesabınızdan transfer yapın veya ödeme alın.
             <br />
             Üstelik FAST ile 100.000 ₺ limitle!
            </p>
          </div>
         
        </div>
      </div> 
      {/* prices end */}
      {/* call to action */}
      <div className="mil-cta mil-p-0-160 mil-up">
        <div className="container">
          <div className="mil-out-frame mil-bg-1">
            <div className="row justify-content-center align-items-center mil-p-160-160">
              <div className="col-xl-7 mil-text-center">
                <h2 className="mil-mb-30 mil-up">
                  Finansal Güvenliğiniz Bizim Önceliğimizdir
                </h2>
                <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                  Güvenliğiniz bizim için önemlidir. Destek ekibimiz 7/24 hizmetinizdedir. <br/>
                  Lütfen her türlü sorunuz ve probleminiz için bize danışın.
                </p>
                <div className="mil-up">
                  <Link href="contact" className="mil-btn mil-md mil-add-arrow">
                    Daha Fazla
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}
      {/* testimonials */}
      {/* 
      <div className="mil-testimonials mil-p-0-160">
        <div className="container">
          <Swiper
            {...sliderProps.testimonials2}
            className="swiper-container mil-testimonials-2 mil-up"
          >
            <SwiperSlide className="swiper-slide">
              <blockquote className="mil-with-bg mil-dark">
                <svg
                  width={50}
                  height={32}
                  viewBox="0 0 50 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mil-mb-30 mil-up mil-accent"
                >
                  <path
                    d="M13.0425 9.59881C13.734 7.27646 15.0099 5.16456 16.7515 3.45982C17.0962 3.11455 17.2958 2.65336 17.31 2.16891C17.3243 1.68445 17.1523 1.2126 16.8285 0.848135L16.6225 0.619235C16.3552 0.313531 15.9908 0.106228 15.5887 0.0311485C15.1866 -0.0439312 14.7706 0.0176452 14.4085 0.205827C-0.299477 8.01918 -0.116489 18.6169 0.0295105 20.4165C0.0195105 20.6139 -0.000488281 20.8112 -0.000488281 21.0085C0.0518962 23.1543 0.724816 25.2405 1.93898 27.0214C3.15314 28.8023 4.85796 30.2037 6.85252 31.0604C8.84709 31.9171 11.0483 32.1935 13.1967 31.8569C15.3452 31.5203 17.3514 30.5848 18.9788 29.1606C20.6063 27.7364 21.7873 25.8829 22.3826 23.8185C22.9779 21.7541 22.9627 19.5648 22.3389 17.5086C21.715 15.4524 20.5085 13.615 18.8614 12.2129C17.2144 10.8108 15.1954 9.90246 13.0425 9.59487V9.59881Z"
                    fill="#03A6A6"
                  />
                  <path
                    d="M40.2255 9.59881C40.9171 7.27648 42.193 5.16459 43.9345 3.45982C44.2793 3.11455 44.4788 2.65336 44.4931 2.16891C44.5074 1.68445 44.3353 1.2126 44.0115 0.848135L43.8055 0.619235C43.5382 0.313531 43.1738 0.106228 42.7717 0.0311485C42.3696 -0.0439312 41.9536 0.0176452 41.5915 0.205827C26.8835 8.01918 27.0665 18.6169 27.2115 20.4165C27.2015 20.6139 27.1815 20.8112 27.1815 21.0085C27.2332 23.1544 27.9055 25.241 29.1191 27.0224C30.3328 28.8038 32.0373 30.2057 34.0318 31.063C36.0262 31.9203 38.2274 32.1972 40.3761 31.8611C42.5248 31.525 44.5313 30.5899 46.1591 29.166C47.787 27.742 48.9684 25.8887 49.5641 23.8242C50.1599 21.7598 50.1451 19.5704 49.5215 17.514C48.8979 15.4576 47.6915 13.6199 46.0445 12.2176C44.3975 10.8152 42.3785 9.90659 40.2255 9.59881Z"
                    fill="#03A6A6"
                  />
                </svg>
                <p className="mil-text-l mil-light mil-mb-30 mil-up">
                  Managing savings has never been so easy. Plax has helped me
                  achieve my financial goals faster than I imagined.
                </p>
                <div className="mil-customer">
                  <img
                    src="img/faces/1.jpg"
                    alt="Customer"
                    className="mil-up"
                  />
                  <h6 className="mil-light mil-up">Rüdiger Karlsen</h6>
                </div>
              </blockquote>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <blockquote className="mil-with-bg mil-dark">
                <svg
                  width={50}
                  height={32}
                  viewBox="0 0 50 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mil-mb-30 mil-up mil-accent"
                >
                  <path
                    d="M13.0425 9.59881C13.734 7.27646 15.0099 5.16456 16.7515 3.45982C17.0962 3.11455 17.2958 2.65336 17.31 2.16891C17.3243 1.68445 17.1523 1.2126 16.8285 0.848135L16.6225 0.619235C16.3552 0.313531 15.9908 0.106228 15.5887 0.0311485C15.1866 -0.0439312 14.7706 0.0176452 14.4085 0.205827C-0.299477 8.01918 -0.116489 18.6169 0.0295105 20.4165C0.0195105 20.6139 -0.000488281 20.8112 -0.000488281 21.0085C0.0518962 23.1543 0.724816 25.2405 1.93898 27.0214C3.15314 28.8023 4.85796 30.2037 6.85252 31.0604C8.84709 31.9171 11.0483 32.1935 13.1967 31.8569C15.3452 31.5203 17.3514 30.5848 18.9788 29.1606C20.6063 27.7364 21.7873 25.8829 22.3826 23.8185C22.9779 21.7541 22.9627 19.5648 22.3389 17.5086C21.715 15.4524 20.5085 13.615 18.8614 12.2129C17.2144 10.8108 15.1954 9.90246 13.0425 9.59487V9.59881Z"
                    fill="#03A6A6"
                  />
                  <path
                    d="M40.2255 9.59881C40.9171 7.27648 42.193 5.16459 43.9345 3.45982C44.2793 3.11455 44.4788 2.65336 44.4931 2.16891C44.5074 1.68445 44.3353 1.2126 44.0115 0.848135L43.8055 0.619235C43.5382 0.313531 43.1738 0.106228 42.7717 0.0311485C42.3696 -0.0439312 41.9536 0.0176452 41.5915 0.205827C26.8835 8.01918 27.0665 18.6169 27.2115 20.4165C27.2015 20.6139 27.1815 20.8112 27.1815 21.0085C27.2332 23.1544 27.9055 25.241 29.1191 27.0224C30.3328 28.8038 32.0373 30.2057 34.0318 31.063C36.0262 31.9203 38.2274 32.1972 40.3761 31.8611C42.5248 31.525 44.5313 30.5899 46.1591 29.166C47.787 27.742 48.9684 25.8887 49.5641 23.8242C50.1599 21.7598 50.1451 19.5704 49.5215 17.514C48.8979 15.4576 47.6915 13.6199 46.0445 12.2176C44.3975 10.8152 42.3785 9.90659 40.2255 9.59881Z"
                    fill="#03A6A6"
                  />
                </svg>
                <p className="mil-text-l mil-light mil-mb-30 mil-up">
                  Plax's security is unparalleled. I feel comfortable knowing
                  that my data is protected while I control my finances.
                </p>
                <div className="mil-customer">
                  <img
                    src="img/faces/2.jpg"
                    alt="Customer"
                    className="mil-up"
                  />
                  <h6 className="mil-light mil-up">Branka Berg</h6>
                </div>
              </blockquote>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <blockquote className="mil-with-bg mil-dark">
                <svg
                  width={50}
                  height={32}
                  viewBox="0 0 50 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mil-mb-30 mil-up mil-accent"
                >
                  <path
                    d="M13.0425 9.59881C13.734 7.27646 15.0099 5.16456 16.7515 3.45982C17.0962 3.11455 17.2958 2.65336 17.31 2.16891C17.3243 1.68445 17.1523 1.2126 16.8285 0.848135L16.6225 0.619235C16.3552 0.313531 15.9908 0.106228 15.5887 0.0311485C15.1866 -0.0439312 14.7706 0.0176452 14.4085 0.205827C-0.299477 8.01918 -0.116489 18.6169 0.0295105 20.4165C0.0195105 20.6139 -0.000488281 20.8112 -0.000488281 21.0085C0.0518962 23.1543 0.724816 25.2405 1.93898 27.0214C3.15314 28.8023 4.85796 30.2037 6.85252 31.0604C8.84709 31.9171 11.0483 32.1935 13.1967 31.8569C15.3452 31.5203 17.3514 30.5848 18.9788 29.1606C20.6063 27.7364 21.7873 25.8829 22.3826 23.8185C22.9779 21.7541 22.9627 19.5648 22.3389 17.5086C21.715 15.4524 20.5085 13.615 18.8614 12.2129C17.2144 10.8108 15.1954 9.90246 13.0425 9.59487V9.59881Z"
                    fill="#03A6A6"
                  />
                  <path
                    d="M40.2255 9.59881C40.9171 7.27648 42.193 5.16459 43.9345 3.45982C44.2793 3.11455 44.4788 2.65336 44.4931 2.16891C44.5074 1.68445 44.3353 1.2126 44.0115 0.848135L43.8055 0.619235C43.5382 0.313531 43.1738 0.106228 42.7717 0.0311485C42.3696 -0.0439312 41.9536 0.0176452 41.5915 0.205827C26.8835 8.01918 27.0665 18.6169 27.2115 20.4165C27.2015 20.6139 27.1815 20.8112 27.1815 21.0085C27.2332 23.1544 27.9055 25.241 29.1191 27.0224C30.3328 28.8038 32.0373 30.2057 34.0318 31.063C36.0262 31.9203 38.2274 32.1972 40.3761 31.8611C42.5248 31.525 44.5313 30.5899 46.1591 29.166C47.787 27.742 48.9684 25.8887 49.5641 23.8242C50.1599 21.7598 50.1451 19.5704 49.5215 17.514C48.8979 15.4576 47.6915 13.6199 46.0445 12.2176C44.3975 10.8152 42.3785 9.90659 40.2255 9.59881Z"
                    fill="#03A6A6"
                  />
                </svg>
                <p className="mil-text-l mil-light mil-mb-30 mil-up">
                  Plax adapts to my needs. I can customize my plan and I really
                  feel like I am in control who formed us in his own image.
                </p>
                <div className="mil-customer">
                  <img
                    src="img/faces/3.jpg"
                    alt="Customer"
                    className="mil-up"
                  />
                  <h6 className="mil-light mil-up">Karl Andreassen</h6>
                </div>
              </blockquote>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <blockquote className="mil-with-bg mil-dark">
                <svg
                  width={50}
                  height={32}
                  viewBox="0 0 50 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mil-mb-30 mil-up mil-accent"
                >
                  <path
                    d="M13.0425 9.59881C13.734 7.27646 15.0099 5.16456 16.7515 3.45982C17.0962 3.11455 17.2958 2.65336 17.31 2.16891C17.3243 1.68445 17.1523 1.2126 16.8285 0.848135L16.6225 0.619235C16.3552 0.313531 15.9908 0.106228 15.5887 0.0311485C15.1866 -0.0439312 14.7706 0.0176452 14.4085 0.205827C-0.299477 8.01918 -0.116489 18.6169 0.0295105 20.4165C0.0195105 20.6139 -0.000488281 20.8112 -0.000488281 21.0085C0.0518962 23.1543 0.724816 25.2405 1.93898 27.0214C3.15314 28.8023 4.85796 30.2037 6.85252 31.0604C8.84709 31.9171 11.0483 32.1935 13.1967 31.8569C15.3452 31.5203 17.3514 30.5848 18.9788 29.1606C20.6063 27.7364 21.7873 25.8829 22.3826 23.8185C22.9779 21.7541 22.9627 19.5648 22.3389 17.5086C21.715 15.4524 20.5085 13.615 18.8614 12.2129C17.2144 10.8108 15.1954 9.90246 13.0425 9.59487V9.59881Z"
                    fill="#03A6A6"
                  />
                  <path
                    d="M40.2255 9.59881C40.9171 7.27648 42.193 5.16459 43.9345 3.45982C44.2793 3.11455 44.4788 2.65336 44.4931 2.16891C44.5074 1.68445 44.3353 1.2126 44.0115 0.848135L43.8055 0.619235C43.5382 0.313531 43.1738 0.106228 42.7717 0.0311485C42.3696 -0.0439312 41.9536 0.0176452 41.5915 0.205827C26.8835 8.01918 27.0665 18.6169 27.2115 20.4165C27.2015 20.6139 27.1815 20.8112 27.1815 21.0085C27.2332 23.1544 27.9055 25.241 29.1191 27.0224C30.3328 28.8038 32.0373 30.2057 34.0318 31.063C36.0262 31.9203 38.2274 32.1972 40.3761 31.8611C42.5248 31.525 44.5313 30.5899 46.1591 29.166C47.787 27.742 48.9684 25.8887 49.5641 23.8242C50.1599 21.7598 50.1451 19.5704 49.5215 17.514C48.8979 15.4576 47.6915 13.6199 46.0445 12.2176C44.3975 10.8152 42.3785 9.90659 40.2255 9.59881Z"
                    fill="#03A6A6"
                  />
                </svg>
                <p className="mil-text-l mil-light mil-mb-30 mil-up">
                  Plax's security is unparalleled. I feel comfortable knowing
                  that my data is protected while I control my finances.
                </p>
                <div className="mil-customer">
                  <img
                    src="img/faces/2.jpg"
                    alt="Customer"
                    className="mil-up"
                  />
                  <h6 className="mil-light mil-up">Bett Nilsen</h6>
                </div>
              </blockquote>
            </SwiperSlide>
          </Swiper>
          <div className="mil-testi-pagination mil-up" />
        </div>
      </div> */}
      {/* testimonials end */}
      {/* brands */}
      {/* 
      <div className="mil-brands mil-p-0-160">
        <div className="container">
          <h5 className="mil-text-center mil-soft mil-mb-60 mil-up">
          10.000'den fazla memnun müşterimiz arasına katılın ve hizmetimizin keyfini çıkarın!
          </h5>
          <div className="row justify-content-center">
            <div className="col-6 col-md-2 mil-text-center">
              <div className="mil-brand">
                <img src="img/brands/1.svg" alt="brand" className="mil-up" />
              </div>
            </div>
            <div className="col-6 col-md-2 mil-text-center">
              <div className="mil-brand">
                <img src="img/brands/1.svg" alt="brand" className="mil-up" />
              </div>
            </div>
            <div className="col-6 col-md-2 mil-text-center">
              <div className="mil-brand">
                <img src="img/brands/1.svg" alt="brand" className="mil-up" />
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="mil-brand mil-text-center">
                <img src="img/brands/1.svg" alt="brand" className="mil-up" />
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="mil-brand mil-text-center">
                <img src="img/brands/1.svg" alt="brand" className="mil-up" />
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="mil-brand mil-text-center">
                <img src="img/brands/1.svg" alt="brand" className="mil-up" />
              </div>
            </div>
          </div>
        </div>
      </div>
       */}
      {/* brands end */}
      {/* call to action */}
      {/*Hemen kaydolun avantajlardan yararlanın kart ön reklam*/}
      <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-image-2 mil-bg-2">
            <div className="row justify-content-center align-items-center mil-p-160-0">
              <div className="col-xl-7 mil-text-center">
                <h2 className="mil-light mil-mb-30 mil-up">
                Aramıza katılın, avantajlardan yararlanın.
                </h2>
                <p className="mil-text-l mil-light mil-mb-60 mil-up">
                Aramıza katılın, yeniliği keşfedin! Sizin için tasarlanmış pratik ve modern çözümlerle 
                hayatınızı kolaylaştırın. Güvenilir, hızlı ve kullanıcı dostu deneyimimizle ihtiyaçlarınıza 
                en iyi şekilde yanıt veriyoruz. Paranolacak'ın sunduğu imkanlarla geleceğe bir adım önde başlayın!
                </p>
                <div className="mil-up mil-mb-80">
                  <Link
                    href="contact"
                    className="mil-btn mil-md mil-add-arrow"
                  >
                    Daha Fazla
                  </Link>
                </div>
              </div>
              <div className="mil-illustration-absolute1 mil-type-3 mil-up" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img src="img/karton.png" alt="illustration" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}
      
    </PlaxLayout>
  );
};
export default page;
