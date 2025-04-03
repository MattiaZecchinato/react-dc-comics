// Social
import Social from './Social';

function Footer () {

    return (
        <footer>

            {/* list link */}
            <div>

                <div className="left-box">
                    <ul>
                        <li>dc comics</li>
                        <li><a href='/'>Characters</a></li>
                        <li><a href='/'>Comics</a></li>
                        <li><a href='/'>Movies</a></li>
                        <li><a href='/'>TV</a></li>
                        <li><a href='/'>Games</a></li>
                        <li><a href='/'>Videos</a></li>
                        <li><a href='/'>News</a></li>
                    </ul>

                    <ul>
                        <li>shop</li>
                        <li><a href="/">Shop DC</a></li>
                        <li><a href="/">Shop DC Collectibles</a></li>
                    </ul>
                </div>

                <div className="right-box">
                    <ul>
                        <li>dc</li>
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
                        <li>sites</li>
                        <li><a href="/">DC</a></li>
                        <li><a href="/">MAD Magazine</a></li>
                        <li><a href="/">DC Kids</a></li>
                        <li><a href="/">DC Universe</a></li>
                        <li><a href="/">DC Power Visa</a></li>
                    </ul>
                </div>

            </div>

            <div>

                {/* sign-up */}
                <button>sign-up now!</button>

                {/* social */}
                <Social />

            </div>

        </footer>
    );
}

export default Footer;

