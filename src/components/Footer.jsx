// images
import logoBgImg from '../assets/dc-logo-bg.png'

// Social
import Social from './Social';

function Footer (props) {

    return (
        <footer>

            {/* list link */}
            <div className='top-footer'>

                <div className="left-box">
                    <ul className='first-list'>
                        <li className='title-list'>{props.dcComics[0].title}</li>
                        <li><a href={props.dcComics[1].link}>{props.dcComics[1].title}</a></li>
                        <li><a href={props.dcComics[2].link}>{props.dcComics[2].title}</a></li>
                        <li><a href={props.dcComics[3].link}>{props.dcComics[3].title}</a></li>
                        <li><a href={props.dcComics[4].link}>{props.dcComics[4].title}</a></li>
                        <li><a href={props.dcComics[5].link}>{props.dcComics[5].title}</a></li>
                        <li><a href={props.dcComics[6].link}>{props.dcComics[6].title}</a></li>
                        <li><a href={props.dcComics[7].link}>{props.dcComics[7].title}</a></li>
                    </ul>

                    <ul>
                        <li className='title-list'>{props.shop[0].title}</li>
                        <li><a href={props.shop[1].link}>{props.shop[1].title}</a></li>
                        <li><a href={props.shop[2].link}>{props.shop[2].title}</a></li>
                    </ul>
                </div>

                <ul>
                    <li className='title-list'>{props.dc[0].title}</li>
                    <li><a href={props.dc[1].link}>{props.dc[1].title}</a></li>
                    <li><a href={props.dc[2].link}>{props.dc[2].title}</a></li>
                    <li><a href={props.dc[3].link}>{props.dc[3].title}</a></li>
                    <li><a href={props.dc[4].link}>{props.dc[4].title}</a></li>
                    <li><a href={props.dc[5].link}>{props.dc[5].title}</a></li>
                    <li><a href={props.dc[6].link}>{props.dc[6].title}</a></li>
                    <li><a href={props.dc[7].link}>{props.dc[7].title}</a></li>
                    <li><a href={props.dc[8].link}>{props.dc[8].title}</a></li>
                    <li><a href={props.dc[9].link}>{props.dc[9].title}</a></li>
                    <li><a href={props.dc[10].link}>{props.dc[10].title}</a></li>
                    <li><a href={props.dc[11].link}>{props.dc[11].title}</a></li>
                </ul>

                <ul>
                    <li className='title-list'>{props.sites[0].title}</li>
                    <li><a href={props.sites[1].link}>{props.sites[1].title}</a></li>
                    <li><a href={props.sites[2].link}>{props.sites[2].title}</a></li>
                    <li><a href={props.sites[3].link}>{props.sites[3].title}</a></li>
                    <li><a href={props.sites[4].link}>{props.sites[4].title}</a></li>
                    <li><a href={props.sites[5].link}>{props.sites[5].title}</a></li>
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

