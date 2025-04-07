// images
import facebookImg from '../assets/footer-facebook.png'
import twitterImg from '../assets/footer-twitter.png'
import youtuberImg from '../assets/footer-youtube.png'
import pinterestImg from '../assets/footer-pinterest.png'
import periscopeImg from '../assets/footer-periscope.png'

// css
import style from '../components-style/Social.module.css'


function Social () {

    return (
        <ul className={style.boxSocial}>
            <li className={style.listTitle}>follow us</li>
            <li>
                <a href="/">
                    <img src={facebookImg} alt="facebook" />
                </a>
            </li>
            <li>
                <a href="/">
                    <img src={twitterImg} alt="twitter" />
                </a>
            </li>
            <li>
                <a href="/">
                    <img src={youtuberImg} alt="youtube" />
                </a>
            </li>
            <li>
                <a href="/">
                    <img src={pinterestImg} alt="pinterest" />
                </a>
            </li>
            <li>
                <a href="/">
                    <img src={periscopeImg} alt="peirscope" />
                </a>
            </li>
        </ul>
    );
}

export default Social;