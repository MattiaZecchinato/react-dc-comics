// images
import digitalComicsImg from '../assets/buy-comics-digital-comics.png';
import merchandiseImg from '../assets/buy-comics-merchandise.png';
import subscriptionImg from '../assets/buy-comics-subscriptions.png';
import shopLocatorImg from '../assets/buy-comics-shop-locator.png';
import powerVisaImg from '../assets/buy-dc-power-visa.svg';

function BlueList () {

    return (

        <ul>
            <li>
                <img src={digitalComicsImg} alt="digital comics" />
                <p>digital comics</p>
            </li>
            <li>
                <img src={merchandiseImg} alt="dc merchandise" />
                <p>dc merchandide</p>
            </li>
            <li>
                <img src={subscriptionImg} alt="subscription" />
                <p>subscription</p>
            </li>
            <li>
                <img src={shopLocatorImg} alt="comic shop locator" />
                <p>comic shop locator</p>
            </li>
            <li>
                <img src={powerVisaImg} alt="dc power visa" />
                <p>dc power visa</p>
            </li>
        </ul>
    );
}

export default BlueList;