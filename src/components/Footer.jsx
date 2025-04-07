// images
import logoBgImg from '../assets/dc-logo-bg.png'

// Link list
import LinkList from './LinkList'

// Social
import Social from './Social';

function Footer (props) {

    return (
        <footer>

            {/* list link */}
            <div className='top-footer'>

                <div className="left-box">
                    <ul className='first-list'>
                        <li className='title-list'>dc comics</li>
                        <LinkList data={props.dcComics} />
                    </ul>

                    <ul>
                        <li className='title-list'>shop</li>
                        <LinkList data={props.shop} />
                    </ul>
                </div>

                <ul>
                    <li className='title-list'>dc</li>
                    <LinkList data={props.dc} />
                </ul>

                <ul>
                    <li className='title-list'>sites</li>
                    <LinkList data={props.sites} />
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

