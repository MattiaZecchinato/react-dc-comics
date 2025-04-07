import dcLogo from '../../public/dc-logo.png';

function Header (props) {

    const headerList = props.list;
    console.log(headerList);

    return (
        <header>
            
            <div className='header-box'>
                {/* logo */}
                <a href="/">
                    <img src={dcLogo} alt='logo' />
                </a>

                {/* list */}
                <ul>
                    {headerList.map((elem, i) =>
                        
                        (<li key={i}>
                            <a href={elem.link}>{elem.title}</a>
                        </li>)
                    )}
                </ul>
            </div>

        </header>
    );
}

export default Header;

