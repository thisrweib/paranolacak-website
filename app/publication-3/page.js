import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
const page = () => {
  return (
    <PlaxLayout dark footer={2}>
      <div className="mil-banner mil-banner-inner mil-dissolve mil-dark-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="mil-banner-text mil-text-center">
                <div className="mil-text-m mil-mb-20">S.S.S.</div>
                <h1 className="mil-mb-60 mil-text-gradient">
                  Dijital Cüzdan Nedir?
                </h1>
                {/*
                <ul className="mil-breadcrumbs mil-pub-info mil-center">
                  <li>
                    <Link href="home">Ocak 16, 2025</Link>
                  </li>
                  <li>
                    <Link href="about">48 Yorum</Link>
                  </li>
                  <li>
                    <Link href="about">356 Paylaşım</Link>
                  </li>
                </ul> 
                 */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* publication */}
      <div className="mil-blog-list mil-p-0-160">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="mil-pub-cover mil-up">
                <img
                  src="img/dijital-cuzdan-buyuk.png"
                  alt="cover"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="0.8"
                />
              </div>
            </div>
            <div className="col-xl-9 mil-p-80-80">
              <h2 className="mil-mb-60 mil-text-gradient mil-up">
                Dijital Cüzdanlar: Ödemelerinizi Daha Güvenli ve Hızlı Yapmanın
                Yolu
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                Günümüzde dijitalleşen dünyada, alışveriş yapmak ve ödeme yapmak
                için fiziksel kartlara olan ihtiyaç giderek azalıyor. Bunun
                yerine, dijital cüzdanlar devreye giriyor. Dijital cüzdanlar,
                sadece online alışverişlerde değil, günlük hayatın her alanında
                ödeme süreçlerini hızlandıran ve güvenli hale getiren bir çözüm
                sunuyor.
              </p>
              <h2 className="mil-mb-60 mil-text-gradient mil-up">
                Dijital Cüzdan Nedir?
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                Dijital cüzdanlar, aynı zamanda dijital biletler, sadakat
                kartları ve indirim kuponları gibi çeşitli belgeleri de
                saklayabileceğiniz bir alan sunar. Yani dijital cüzdanlar,
                sadece ödemeler için değil, aynı zamanda günlük yaşamınızda
                ihtiyaç duyduğunuz pek çok dijital belgenin düzenli bir şekilde
                saklanması için de kullanışlıdır.
              </p>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                Dijital cüzdanlar, aynı zamanda dijital biletler, sadakat
                kartları ve indirim kuponları gibi çeşitli belgeleri de
                saklayabileceğiniz bir alan sunar. Yani dijital cüzdanlar,
                sadece ödemeler için değil, aynı zamanda günlük yaşamınızda
                ihtiyaç duyduğunuz pek çok dijital belgenin düzenli bir şekilde
                saklanması için de kullanışlıdır.
              </p>
              <h2 className="mil-mb-60 mil-text-gradient mil-up">
                Dijital Cüzdanlar Nasıl Çalışır?
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                Dijital cüzdanlar, ödeme işlemi yaparken sizin yerine kart
                bilgilerinizi güvenli bir şekilde işler. İşlem şu şekilde
                gerçekleşir:
              </p>
              <h3 className="mil-mb-15 mil-light mil-up">
                Ödeme Ayrıntılarınızın Aktarılması
              </h3>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                Dijital cüzdanınız, bağlı olduğunuz banka hesabındaki ödeme
                bilgilerinizi işlem yapan satıcıya ileterek ödeme sürecini
                tamamlar.
              </p>
              <h3 className="mil-mb-15 mil-light mil-up">
                Farklı Erişim Türleri
              </h3>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                Açık cüzdanlar, online alışverişler, temassız mağaza içi
                ödemeler ve hatta belirli ATM’lerden para çekme işlemleri gibi
                geniş bir yelpazede kullanılabilirken; yarı kapalı ve kapalı
                cüzdanlar, yalnızca belirli perakendecilerle ya da yalnızca
                cüzdanı sağlayan perakendeciyle sınırlı işlemler yapmanıza
                olanak tanır.
              </p>
              <h2 className="mil-mb-60 mil-text-gradient mil-up">
                Dijital Cüzdanların Faydaları
              </h2>
              <h3 className="mil-mb-15 mil-light mil-up">Kolaylık ve Hız</h3>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                Dijital cüzdanlar, ödeme yaparken kart bilgilerinizi girme
                zorunluluğunu ortadan kaldırır. Ödeme için tek yapmanız gereken,
                dijital cüzdanınızı açmak ve işlem yapmak istediğiniz platformda
                tek bir tıkla ödeme yapmaktır.
              </p>
              <h3 className="mil-mb-15 mil-light mil-up">Yüksek Güvenlik</h3>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                Dijital cüzdanlar, gelişmiş şifreleme teknikleri kullanarak
                ödeme bilgilerinizi güvende tutar. Ayrıca, ödeme işlemleri
                sırasında kart numaranız yerine sanal bir numara kullanılarak
                güvenlik arttırılır. Bu da telefonunuz kaybolsa bile
                bilgilerinizin çalınma riskini en aza indirir.
              </p>
              <h3 className="mil-mb-15 mil-light mil-up">
                Sadakat ve İndirimler
              </h3>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                Dijital cüzdanlar, sadece ödeme yapmakla kalmaz; sadakat
                programları, indirim kuponları ve hediyeler gibi faydaları da
                düzenli ve kolay erişilebilir şekilde kullanılarak güvenlik
                arttırılır. Bu da telefonunuz kaybolsa bile bilgilerinizin
                çalınma riskini en aza indirir.
              </p>
              <h3 className="mil-mb-15 mil-light mil-up">
                Kullanıcı Dostu ve Mobil Uyumluluk
              </h3>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                Dijital cüzdanlar, mobil uyumlu oldukları için kolayca cep
                telefonlarınızdan erişilebilir. İster mağaza içi ödeme yapın,
                ister online alışveriş yapın, mobil cihazınızda yer alan dijital
                cüzdan ile işlemlerinizi anında gerçekleştirebilirsiniz.
              </p>
              <h3 className="mil-mb-15 mil-light mil-up">Sade ve Düzenli</h3>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                Cüzdanınızı dijitalleştirmeniz, fiziksel cüzdanınızdaki kartlar
                ve fişler gibi karışıklıkları ortadan kaldırır. Dijital
                cüzdanınızda kredi kartları, sadakat kartları, konser biletleri
                ve uçuş biniş kartları gibi belgeler düzenli bir şekilde
                saklanır.
              </p>
              <h2 className="mil-mb-60 mil-text-gradient mil-up">
                Dijital Cüzdanlar Güvenli mi?
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                Evet, dijital cüzdanlar son derece güvenlidir. Ödeme
                bilgilerinizi, telefonunuzda veya mobil cihazınızda şifreli bir
                şekilde saklar ve çoğu uygulama, parmak izi, yüz tanıma veya PIN
                ile güvenli bir şekilde erişim sağlar. Ayrıca, birçok dijital
                cüzdan, iki faktörlü kimlik doğrulama gibi ekstra güvenlik
                önlemleri sunar. Bu da dolandırıcılık ve hırsızlık gibi
                olasılıkları ortadan kaldırır.
              </p>
            </div>
          </div>
          <div className="row justify-content-center ">
            <div className="col-xl-9 mil-p-50-80 mil-up">
              <h4 className="mil-mb-60 mil-text-gradient">
                Sonuç: Dijital Cüzdanlarla Güvenli ve Hızlı Ödemeler
              </h4>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                Dijital cüzdanlar, ödeme işlemlerinizi hızlı, güvenli ve pratik
                hale getirir. Dijital cüzdan çözümleriyle, müşterilerinize
                güvenli ödeme deneyimleri sunun. Ödemelerinizi kolaylaştırın ve
                dijital dünyaya adım atın!
              </p>
              {/*{
              <ul className="mil-pup-tags mil-mb-80 mil-up">
                <li>
                  <a href="#.">search</a>
                </li>
                <li>
                  <a href="#.">virtual card</a>
                </li>
                <li>
                  <a href="#.">digital finance</a>
                </li>
                <li>
                  <a href="#.">transaction flexibility</a>
                </li>
              </ul>
              }*/}
              {/* <div className="mil-share-frame mil-mb-80 mil-up">
                <h6 style={{color:"#25EF7D"}}>Paylaş:</h6>
                <ul className="mil-pup-share">
                  <li>
                    <a href="#.">
                      <i className="fab fa-facebook-f" />
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#.">
                      <i className="fab fa-twitter" />
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#.">
                      <i className="fab fa-linkedin-in" />
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div> */}
              <div className="mil-next-post">
                <Link href="blog" className="mil-descr mil-up">
                  <p className="mil-text-m mil-soft mil-mb-15">
                    Diğer Yazılarımızı okuyun
                  </p>
                  <h5 style={{color:"#25EF7D"}}>Sıkça Sorulan Sorular</h5>
                </Link>
                <Link href="freq-asked" className="mil-cover mil-up">
                  <img src="img/s_s_s.png" alt="cover" />
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
            {/*
            <div className="col-xl-9">
              <h4 className="mil-mb-60 mil-up">(48) Comments</h4>
              <ul className="mil-comments mil-mb-80">
                <li>
                  <div className="mil-comment mil-up">
                    <div className="mil-avatar">
                      <img src="img/faces/1.jpg" alt="user" />
                    </div>
                    <div className="mil-comment-text">
                      <h6 className="mil-mb-10">Samir Holm</h6>
                      <p className="mil-text-xs mil-soft mil-mb-15">
                        December 10, 2023 at 10:13
                      </p>
                      <p className="mil-text-s mil-soft">
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth
                      </p>
                      <a href="#." className="mil-reply">
                        Reply
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mil-comment mil-up">
                    <div className="mil-avatar">
                      <img src="img/faces/2.jpg" alt="user" />
                    </div>
                    <div className="mil-comment-text">
                      <h6 className="mil-mb-10">Menphik Bakke</h6>
                      <p className="mil-text-xs mil-soft mil-mb-15">
                        December 10, 2023 at 10:13
                      </p>
                      <p className="mil-text-s mil-soft">
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth
                      </p>
                      <a href="#." className="mil-reply">
                        Reply
                      </a>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="mil-comment mil-up">
                        <div className="mil-avatar">
                          <img src="img/faces/3.jpg" alt="user" />
                        </div>
                        <div className="mil-comment-text">
                          <h6 className="mil-mb-10">Zaida Andresen</h6>
                          <p className="mil-text-xs mil-soft mil-mb-15">
                            December 10, 2023 at 10:13
                          </p>
                          <p className="mil-text-s mil-soft">
                            These cases are perfectly simple and easy to
                            distinguish. In a free hour, when our power of
                            choice is untrammelled and when nothing prevents our
                            being able to do what we like best, every pleasure
                            is to be welcomed and every pain avoided.
                          </p>
                          <a href="#." className="mil-reply">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="mil-comment mil-up">
                    <div className="mil-avatar">
                      <img src="img/faces/4.png" alt="user" />
                    </div>
                    <div className="mil-comment-text">
                      <h6 className="mil-mb-10">Amin Lien</h6>
                      <p className="mil-text-xs mil-soft mil-mb-15">
                        December 10, 2023 at 10:13
                      </p>
                      <p className="mil-text-s mil-soft">
                        These cases are perfectly simple and easy to
                        distinguish. In a free hour, when our power of choice is
                        untrammelled and when nothing prevents our being able to
                        do what we like best, every pleasure is to be welcomed
                        and every pain avoided.
                      </p>
                      <a href="#." className="mil-reply">
                        Reply
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mil-comment mil-up">
                    <div className="mil-avatar">
                      <img src="img/faces/5.png" alt="user" />
                    </div>
                    <div className="mil-comment-text">
                      <h6 className="mil-mb-10">Yamina Frediksen</h6>
                      <p className="mil-text-xs mil-soft mil-mb-15">
                        December 10, 2023 at 10:13
                      </p>
                      <p className="mil-text-s mil-soft">
                        These cases are perfectly simple and easy to
                        distinguish. In a free hour, when our power of choice is
                        untrammelled and when nothing prevents our being able to
                        do what we like best, every pleasure is to be welcomed
                        and every pain avoided.
                      </p>
                      <a href="#." className="mil-reply">
                        Reply
                      </a>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="mil-comment mil-up">
                        <div className="mil-avatar">
                          <img src="img/faces/1.jpg" alt="user" />
                        </div>
                        <div className="mil-comment-text">
                          <h6 className="mil-mb-10">Haidar Knudsen</h6>
                          <p className="mil-text-xs mil-soft mil-mb-15">
                            December 10, 2023 at 10:13
                          </p>
                          <p className="mil-text-s mil-soft">
                            But I must explain to you how all this mistaken idea
                            of denouncing pleasure and praising pain was born
                            and I will give you a complete account of the
                            system, and expound the actual teachings of the
                            great explorer of the truth.
                          </p>
                          <a href="#." className="mil-reply">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="mil-comment mil-up">
                        <div className="mil-avatar">
                          <img src="img/faces/6.png" alt="user" />
                        </div>
                        <div className="mil-comment-text">
                          <h6 className="mil-mb-10">Jane Boonboots</h6>
                          <p className="mil-text-xs mil-soft mil-mb-15">
                            December 10, 2023 at 10:13
                          </p>
                          <p className="mil-text-s mil-soft">
                            Was born and I will give you a complete account of
                            the system, and expound the actual teachings of the
                            great explorer of the truth.
                          </p>
                          <a href="#." className="mil-reply">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="mil-comment mil-up">
                        <div className="mil-avatar">
                          <img src="img/faces/2.jpg" alt="user" />
                        </div>
                        <div className="mil-comment-text">
                          <h6 className="mil-mb-10">Amin Lien</h6>
                          <p className="mil-text-xs mil-soft mil-mb-15">
                            December 10, 2023 at 10:13
                          </p>
                          <p className="mil-text-s mil-soft">
                            But I must explain to you how all this mistaken idea
                          </p>
                          <a href="#." className="mil-reply">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-xl-9">
              <h4 className="mil-mb-60 mil-up">Leave your comment</h4>
              <form>
                <div className="row">
                  <div className="col-md-6 mil-mb-30">
                    <input
                      className="mil-input mil-up"
                      placeholder="First name"
                    />
                  </div>
                  <div className="col-md-6 mil-mb-30">
                    <input
                      className="mil-input mil-up"
                      placeholder="your e-mail"
                    />
                  </div>
                  <div className="col-xl-12 mil-mb-30">
                    <input
                      className="mil-input mil-up"
                      placeholder="Your website/social profile"
                    />
                  </div>
                  <div className="col-xl-12 mil-mb-30 ">
                    <textarea
                      cols={30}
                      rows={10}
                      className="mil-up"
                      placeholder="Write your comment here"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="mil-checkbox-frame mil-mb-30 mil-up">
                  <div className="mil-checkbox">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" />
                  </div>
                  <p className="mil-text-xs mil-soft">
                    I agree that the data submitted, collected and stored *
                  </p>
                </div>
                <div className="mil-up">
                  <button type="submit" className="mil-btn mil-m">
                    Post Comment
                  </button>
                </div>
              </form>
            </div>
             */}
          </div>
        </div>
      </div>
      {/* publication end */}
    </PlaxLayout>
  );
};
export default page;
