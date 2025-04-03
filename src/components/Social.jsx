// images
import facebookImg from '../assets/footer-facebook.png'
import twitterImg from '../assets/footer-twitter.png'
import youtuberImg from '../assets/footer-youtube.png'
import pinterestImg from '../assets/footer-pinterest.png'
import periscopeImg from '../assets/footer-periscope.png'


function Social () {

    return (
        <ul>
            <li>follow us</li>
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