import React from 'react';
import { Container } from 'reactstrap';
import { BsMailbox2, BsFacebook, BsTelephoneFill } from 'react-icons/bs';

function Contact() {
    return (
        <div
            id="contact"
            className="contact-container option-container padding40 contact-on-mobile"
        >
            <Container fluid="md" className="contact option">
                <div className="contact__heading option__heading">
                    <span className="title">Contact</span>
                    <div className="line">
                        <div className="line__first"></div>
                        <div className="line__secondary"></div>
                    </div>
                </div>
                <div className="contact__info shadowB">
                    <ul className="contact__info__list">
                        <li className="contact__info__item">
                            <a
                                href="mailto:trannhatdanh15062001@gmail.com"
                                className="contact__info__mail"
                            >
                                <BsMailbox2 className='icon'/>
                                Email
                            </a>
                        </li>
                        <li className="contact__info__item">
                            <a
                                href="https://www.facebook.com/profile.php?id=100013347520437"
                                className="contact__info__mess"
                            >
                                <BsFacebook className='icon'/>
                                Danh Trần 
                            </a>
                        </li>
                        <li className="contact__info__item">
                            <a
                                href="tel:0376134346"
                                className="contact__info__tel"
                            >
                                <BsTelephoneFill className='icon'/>
                                0376 134 346
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}

export default Contact;
