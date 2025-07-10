import axios from 'axios';

export async function POST(request) {
  try {
    const { name, email, phone, message, recaptchaResponse } = await request.json();

    // Check if all required fields are present
    if (!name || !email || !phone || !message || !recaptchaResponse) {
      return new Response(
        JSON.stringify({ success: false, error: "Tüm alanları doldurun ve reCAPTCHA'yı tamamlayın!" }),
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    const recaptchaResponseData = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null,
      {
        params: {
          secret: process.env.reCAPTCHA_SECRET_KEY,
          response: recaptchaResponse
        }
      }
    );

    if (!recaptchaResponseData.data.success) {
      return new Response(
        JSON.stringify({ success: false, error: "reCAPTCHA doğrulaması başarısız!" }),
        { status: 400 }
      );
    }

    // Send the form data to your external API
    const response = await axios.post(
      'https://apigateway.paranolacak.com/api/Contact/send',
      { name, email, phone, message },
      {
        headers: { 'Content-Type': 'application/json' }, // Ensure headers are properly defined here
      }
    );

    return new Response(JSON.stringify({ success: true, data: response.data }), { status: 200 });

  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    return new Response(
      JSON.stringify({ success: false, error: error.response?.data || "Sunucu hatası!" }),
      { status: 500 }
    );
  }
}
