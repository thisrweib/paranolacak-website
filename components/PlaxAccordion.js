"use client";
import { useState } from "react";

const PlaxAccordion = ({ dark }) => {
  const accordionData = [
    {
      "id": 1,
      "title": "Uygulamayı kullanmazsam ücretlendirilir miyim?",
      "desc": "Paranolacak POS, Cepte POS uygulamasını kullanmazsan ücret alınmayacaktır. Yine de hesabınızı kapatmak istiyorsanız lütfen çağrı merkezimiz aracılığıyla bizimle iletişime geçiniz."
    },
    {
      "id": 2,
      "title": "Paranolacak POS Cepte POS uygulamasından yapılan işlemlerde belirli bir limit var mıdır?",
      "desc": "Paranolacak POS'in belirlediği güvenlik standartlarına göre tüm işletmelerin günlük, aylık ve işlem limitleri vardır. Bu limitler işinizin doğası gereği belirlenir. Ayrıntılı bilgi için lütfen çağrı merkezimizle iletişime geçiniz."
    },
    {
      "id": 3,
      "title": "Yaptığım işlemi iptal/iade edebilir miyim?",
      "desc": "Bir işlemi iptal/iade edebilirsiniz. Ancak bunun yapılabilmesi için Paranolacak POS hesabınızda iptal/iade tutarı kadar iade tutarı olması gerekmektedir."
    },
    {
      "id": 4,
      "title": "Paranolacak POS uygulamasında hangi ürünleri satabilirim?",
      "desc": "Paranolacak POS uygulaması üzerinden aşağıda sayılanlar dışındaki tüm ürün ve hizmetlerin satışı yapılabilmektedir..."
    },
    {
      "id": 5,
      "title": "Onay e-postamı almadım. Ne yapmalıyım?",
      "desc": "Kaydınızı tamamladıktan sonra 15 dakika içinde bir e-posta almazsanız, lütfen önce spamı kontrol edin ya da telefonunuza gelen mesajları kontrol edin..."
    },
    {
      "id": 6,
      "title": "Uygulamada oturum açamıyorum. Ne yapabilirim?",
      "desc": "Uygulamaya erişmek için kayıt olmanız gerekmektedir. Zaten kayıtlıysanız ve giriş yapamıyorsanız..."
    },
    {
      "id": 7,
      "title": "İşlem yapmaya çalıştığımda aktivasyon işlemini tamamlamam gerektiğine dair bir uyarı alıyorum. Ne yapabilirim?",
      "desc": "İşlemin tamamlanamamasının birkaç olası nedeni vardır. Bu sebepler (yetersiz bakiye, geçersiz kart vb.)..."
    },
    {
      "id": 8,
      "title": "Paranolacak POS Cepte POS uygulaması güvenli mi?",
      "desc": "Uluslararası veri güvenliği standardı olan PCI DSS standartlarına uygun güvenli ödeme altyapısı ile..."
    },
    {
      "id": 9,
      "title": "Ödeme sırasında girilen müşterinin telefon numarası ve adı gibi bilgilere neden ihtiyaç duyarız?",
      "desc": "Müşteri bilgileri hiçbir şekilde 3. kişilerle paylaşılmaz ve Paranolacak POS üye şirketlerin isim ve telefon numarası..."
    },
    {
      "id": 10,
      "title": "Kimliğime ve vergi koduma neden ihtiyacınız var, gönderdiğim bu belgelerin güvenliğini nasıl sağlıyorsunuz?",
      "desc": "Bilgilerinizi yönetmek ve sistemlerimizin, sizin ve müşterilerinizin güvenliğini sağlamak için ilgili belgeler gereklidir..."
    },
    {
      "id": 11,
      "title": "Hangi ülkelerde mevcut?",
      "desc": "Paranolacak POS Cepte POS uygulamasını yurt dışında kullanabilirsiniz ancak sadece Türk bankası banka ve kredi kartları ile..."
    },
    {
      "id": 12,
      "title": "Uygulamayı müşterimde de yüklemem gerekiyor mu?",
      "desc": "Uygulamanın sadece mobil cihaza yüklenmesi gerekiyor. Müşterilerin herhangi bir uygulama yüklemesine gerek yoktur."
    },
    {
      "id": 13,
      "title": "Uygulamayı kullanmak için internet bağlantısına ihtiyacım var mı?",
      "desc": "Paranolacak POS, Cepte POS uygulaması ile işlem yapabilmek için mobil cihazınızın 2G, 3G, 4G, 4.5G veya WiFi üzerinden..."
    }
  ]
  
  const [active, setActive] = useState(0);
  return (
    <div className={`mil-accordion`}>
      {accordionData.map((item) => (
        <div
          className={`mil-accordion-group mil-up ${
            active == item.id ? " mil-active" : ""
          }`}
          key={item.id}
        >
          <div
            className={`mil-accordion-menu `}
            onClick={() => setActive(active == item.id ? null : item.id)}
          >
            <h5 className={dark ? "mil-light" : ""}>{item.title}</h5>
            <div className="mil-accordion-icon">
              <i className="fas fa-chevron-up" />
            </div>
          </div>
          <div className="mil-accordion-content">
            <p
              className="mil-text-m mil-soft"
              dangerouslySetInnerHTML={{ __html: item.desc }}
            ></p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PlaxAccordion;
