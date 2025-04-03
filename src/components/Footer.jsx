// images
import logoBgImg from '../assets/dc-logo-bg.png'

// Social
import Social from './Social';

function Footer () {

    return (
        <footer>

            {/* list link */}
            <div className='top-footer'>

                <div className="left-box">
                    <ul className='first-list'>
                        <li className='title-list'>dc comics</li>
                        <li><a href='/'>Characters</a></li>
                        <li><a href='/'>Comics</a></li>
                        <li><a href='/'>Movies</a></li>
                        <li><a href='/'>TV</a></li>
                        <li><a href='/'>Games</a></li>
                        <li><a href='/'>Videos</a></li>
                        <li><a href='/'>News</a></li>
                    </ul>

                    <ul>
                        <li className='title-list'>shop</li>
                        <li><a href="/">Shop DC</a></li>
                        <li><a href="/">Shop DC Collectibles</a></li>
                    </ul>
                </div>

                <ul>
                    <li className='title-list'>dc</li>
                    <li><a href='/'>Term Of Use</a></li>
                    <li><a href='/'>Privicy policy (New)</a></li>
                    <li><a href='/'>Ad Choices</a></li>
                    <li><a href='/'>Advertising</a></li>
                    <li><a href='/'>Jobs</a></li>
                    <li><a href='/'>Subscriptions</a></li>
                    <li><a href='/'>Talent Workshop</a></li>
                    <li><a href='/'>CPSC Certificates</a></li>
                    <li><a href='/'>Ratings</a></li>
                    <li><a href='/'>Shop Help</a></li>
                    <li><a href='/'>Contact Us</a></li>
                </ul>

                <ul>
                    <li className='title-list'>sites</li>
                    <li><a href="/">DC</a></li>
                    <li><a href="/">MAD Magazine</a></li>
                    <li><a href="/">DC Kids</a></li>
                    <li><a href="/">DC Universe</a></li>
                    <li><a href="/">DC Power Visa</a></li>
                </ul>

                <div className='img-bg-box'>
                    <img src={logoBgImg} alt="logo background" />
                </div>
                

            </div>

            <div className='bottom-footer'>

                {/* sign-up */}
                <div className='footer-btn'>sign-up now!</div>

                {/* social */}
                <Social />

            </div>

        </footer>
    );
}

export default Footer;

