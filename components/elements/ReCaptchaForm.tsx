// // components/Recaptcha.js
// import React, { useRef } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';

// const Recaptcha = ({ onVerify }) => {
//   const recaptchaRef = useRef();

//   const handleVerify = (token: any) => {
//     onVerify(token);
//   };

//   return (
//     <ReCAPTCHA
//       sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
//       onChange={handleVerify}
//       ref={recaptchaRef}
//     />
//   );
// };

// export default Recaptcha;
