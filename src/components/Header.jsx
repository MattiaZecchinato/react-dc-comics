import dcLogo from '../../public/dc-logo.png';

function Header (props) {

    return (
        <header>
            
            <div className='header-box'>
                {/* logo */}
                <a href="/">
                    <img src={dcLogo} alt='logo' />
                </a>

                {/* list */}
                <ul>
                    <li><a href={props.list[0].link}>{props.list[0].title}</a></li>
                    <li><a href={props.list[1].link}>{props.list[1].title}</a></li>
                    <li><a href={props.list[2].link}>{props.list[2].title}</a></li>
                    <li><a href={props.list[3].link}>{props.list[3].title}</a></li>
                    <li><a href={props.list[4].link}>{props.list[4].title}</a></li>
                    <li><a href={props.list[5].link}>{props.list[5].title}</a></li>
                    <li><a href={props.list[6].link}>{props.list[6].title}</a></li>
                    <li><a href={props.list[7].link}>{props.list[7].title}</a></li>
                    <li><a href={props.list[8].link}>{props.list[8].title}</a></li>
                    <li><a href={props.list[9].link}>{props.list[9].title}</a></li>
                </ul>
            </div>

        </header>
    );
}

export default Header;

