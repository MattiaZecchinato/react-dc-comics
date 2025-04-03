import dcLogo from '../../public/dc-logo.png';

function Header () {

    return (
        <header>
            
            {/* logo */}
            <img src={dcLogo} alt='logo' />

            {/* list */}
            <ul>
                <li>characters</li>
                <li>comics</li>
                <li>movies</li>
                <li>tv</li>
                <li>games</li>
                <li>collectibles</li>
                <li>videos</li>
                <li>fans</li>
                <li>news</li>
                <li>shop</li>
            </ul>

        </header>
    );
}

export default Header;

