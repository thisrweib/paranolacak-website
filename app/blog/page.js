import { PageBanner } from "@/components/Banner";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
const page = () => {
  return (
    <PlaxLayout dark footer={2}>
      <PageBanner
        pageName="Blog"
        title="Blog"
      />

      {/* banner end */}
      {/* blog list */}
      <div className="mil-blog-list mil-p-0-160">
        <div className="container">
          <div className="row mt-5">
            <div className="col-xl-4 col-md-6">
              <Link
                href="/publication"
                className="mil-blog-card mil-mb-30 mil-up"
              >
                <div className="mil-card-cover">
                  <img
                    src="img/sanal-pos.png"
                    alt="cover"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                  />
                </div>
                <div className="mil-descr">
                  <p className="mil-text-xs mil-accent mil-mb-15">
                    Sanal POS
                  </p>
                  <h4>Sanal POS Nedir?</h4>
                </div>
              </Link>
            </div>
            <div className="col-xl-4 col-md-6">
              <Link
                href="/publication-2"
                className="mil-blog-card mil-mb-30 mil-up"
              >
                <div className="mil-card-cover">
                  <img
                    src="img/dijital-donusum.png"
                    alt="cover"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                  />
                </div>
                <div className="mil-descr">
                  <p className="mil-text-xs mil-accent mil-mb-15">
                    Dijital Dönüşüm
                  </p>
                  <h4>Dijital Dönüşüm Nedir?</h4>
                </div>
              </Link>
            </div>
            <div className="col-xl-4 col-md-6">
              <Link
                href="/publication-3"
                className="mil-blog-card mil-mb-30 mil-up"
              >
                <div className="mil-card-cover">
                  <img
                    src="img/dijital-cuzdan.png"
                    alt="cover"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                  />
                </div>
                <div className="mil-descr">
                  <p className="mil-text-xs mil-accent mil-mb-15">
                    Dijital Cüzdan
                  </p>
                  <h4>Dijital Cüzdanlar</h4>
                </div>
              </Link>
            </div>
            
          </div>
          <div className="mil-text-center mil-mt-30 mil-up">
            <Link href="freq-asked" className="mil-btn mil-m mil-add-arrow">
              Daha Fazla Yükle
            </Link>
          </div>
        </div>
      </div>
      {/* blog list end */}
    </PlaxLayout>
  );
};
export default page;
