import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <section className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <p><a href="/"><img src="/images/logo.png" alt="logo" /></a></p>
                    <h4>Follow Us</h4>
                    <ul className='social-icons'>
                        <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                    </ul>
                </div>
                <div className='col'>
                    <h4>Useful Links</h4>
                    <ul className='links'>
                        <li><a href="#">Store</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">Offers</a></li>
                    </ul>
                </div>
                <div className='col'>
                    <h4>Locate Us</h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.849022788595!2d88.4842215743717!3d22.584749379483082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b1d1a9a9d3%3A0xe48c3f67a8deb228!2sCapital%20Numbers%20Infotech!5e0!3m2!1sen!2sin!4v1696486025272!5m2!1sen!2sin" width="100%" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <p className='text-center copyright'>Copyright &copy; 2023</p>
                </div>
            </div>
        </div>
    </section>
  )
}
