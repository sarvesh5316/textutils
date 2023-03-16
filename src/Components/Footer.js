import { FaEnvelope, FaGithub, FaHeart, FaInstagram, FaTwitter } from 'react-icons/fa'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <h5>
                    &copy; 2023 : All rights are Reserved.
                </h5>
                <p> Created With Love <FaHeart /> By Sarvesh Gond </p>

            </div>
            <div className="icons">
                <p>Contact Details : &emsp;
                    <strong> <FaGithub /> <FaInstagram /> <FaTwitter /> sarvesh5316</strong> <br />
                    <a href="mailto:theprogremmo@gmail.com" target={'_blank'} rel="noreferrer" >Send <FaEnvelope /> E-mail </a>
                </p>
            </div>
        </>

    )
}

export default Footer