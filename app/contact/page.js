"use client";
import { PageBanner } from "@/components/Banner";
import { CallToAction2 } from "@/components/CallToAction";
import PlaxLayout from "@/layouts/PlaxLayout";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import swal from 'sweetalert';
const page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const recaptchaRef = useRef(null);
  const checkboxRef = useRef(null);
  

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setRecaptchaValue(null);

    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }

    const checkbox = document.getElementById("checkbox");
    if (checkbox) {
      checkbox.checked = false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const checkbox = document.getElementById("checkbox");
  
    // Validate checkbox
    if (!checkbox.checked) {
      swal("Dikkat!", "Verilerin gönderildiğini, toplandığını ve saklandığını kabul etmeniz gerekli.", "info");
      return;
    }
    
    // Check if the reCAPTCHA is completed
    if (!recaptchaValue) {
      swal("Başarısız!", "reCAPTCHA doğrulaması gerekli", "error");
      return;
    }

    const formData = {
      name,
      email,
      phone,
      message,
      recaptchaResponse: recaptchaValue, // Add the reCAPTCHA response to form data
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        swal("Başarılı!", "Mesajınız gönderildi!", "success");
        resetForm();
      } else {
        swal("Uyarı!", "Mesaj gönderilirken bir hata oluştu!", "warning");
      }
    } catch (error) {
      swal("Başarısız!", "Mesajınız gönderilemedi!", "error");
      console.error('Error:', error);
    }
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value); // Update the reCAPTCHA value
  };

  return (

    <PlaxLayout dark footer={2} bg={false}>
      <PageBanner
        pageName="İletişim"
        title="Bizimle iletişime geçin"
      />

      {/* contact */}
      <div className="mil-blog-list mil-p-0-160" style={{background: "linear-gradient(90deg, #1b1d1d, #0d5152 50%, #1b1d1d)"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <form onSubmit={handleSubmit}> 
                <div className="row">
                  <div className="col-md-6 mil-mb-30">
                    <input
                      className="mil-input mil-up"
                      type="text"
                      placeholder="İsim"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 mil-mb-30">
                    <input
                      className="mil-input mil-up"
                      type="email"
                      placeholder="Email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-xl-12 mil-mb-30">
                    <input
                      className="mil-input mil-up"
                      type="text"
                      placeholder="Telefon Numarası"
                      name="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="col-xl-12 mil-mb-30 ">
                    <textarea
                      cols={30}
                      rows={10}
                      className="mil-up"
                      placeholder="Mesajınız"
                      name="message"
                      defaultValue={""}
                      style={{resize: "none"}}
                      value={message}

                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-xl-12 mil-mb-30 mil-up">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LeIdL0qAAAAAHk-nsIoFU-c-e2flENZETY894xp" // Replace with your reCAPTCHA site key
                    onChange={handleRecaptchaChange}
                  />
                </div>
                <div className="mil-checkbox-frame mil-mb-30 mil-up">
                  <div className="mil-checkbox">
                    <input
                      type="checkbox"
                      id="checkbox"
                      name="checkmark"
                      ref={checkboxRef}
                    />
                    <label htmlFor="checkbox" />
                  </div>
                  <p className="mil-text-xs mil-soft">
                  Verilerin gönderildiğini, toplandığını ve saklandığını kabul ediyorum. *
                  </p>
                </div>
                <div className="mil-up">
                  <button type="submit" className="mil-btn mil-m">
                    Mesaj Gönder
                  </button>
                </div>
              </form>
              {status && <div className="status-message">{status}</div>}
              <div className="alert-success" style={{ display: "none" }}>
                <h5 style={{color: "white"}}>Thanks, your message is sent successfully.</h5>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* contact end */}
      {/* call to action */}
      <CallToAction2 />
      {/* call to action end */}
    </PlaxLayout>
  );
};
export default page;
