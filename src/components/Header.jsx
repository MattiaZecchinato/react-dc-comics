import dcLogo from '../../public/dc-logo.png';

function Header () {

    return (
        <header>
            
            <div className='header-box'>
                {/* logo */}
                <img src={dcLogo} alt='logo' />

                {/* list */}
                <ul>
                    <li><a href='/'>characters</a></li>
                    <li><a href='/'>comics</a></li>
                    <li><a href='/'>movies</a></li>
                    <li><a href='/'>tv</a></li>
                    <li><a href='/'>games</a></li>
                    <li><a href='/'>collectibles</a></li>
                    <li><a href='/'>videos</a></li>
                    <li><a href='/'>fans</a></li>
                    <li><a href='/'>news</a></li>
                    <li><a href='/'>shop</a></li>
                </ul>
            </div>

        </header>
    );
}

export default Header;

