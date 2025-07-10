import { PageBanner } from "@/components/Banner";
import PlaxLayout from "@/layouts/PlaxLayout";
import PlaxAccordion from "@/components/PlaxAccordion";
import Link from "next/link";
const page = () => {
  return (
    <PlaxLayout dark footer={2}>
      <PageBanner pageName="S.S.S." title="Sıkça Sorulan Sorular" />
      
      {/* faq */}
      <div className="mil-faq mil-p-160-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="mil-text-center">
                <h2 className="mil-light mil-mb-30 mil-up">
                  Sıkça Sorulan Sorular
                </h2>
                <p className="mil-text-l mil-dark-soft mil-mb-60 mil-up">
                  Paranolacak hakkında en yaygın sorulan sorulara <br />
                  hızlı ve net cevapla bulun.
                </p>
              </div>
              <PlaxAccordion dark />
            </div>
          </div>
        </div>
      </div>
      {/* faq end */}
    </PlaxLayout>
  );
};
export default page;
