import React from "react";


function ContactPage() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin:'50px'
    }} dangerouslySetInnerHTML={{ __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.5788674843493!2d-74.0139684!3d40.7052717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1160e06645%3A0x223402a1f64f844f!2s11%20Broadway%2C%20New%20York%2C%20NY%2010004!5e0!3m2!1sen!2sus!4v1661215575744!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' }} />
  );
}

export default ContactPage;