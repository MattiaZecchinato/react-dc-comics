// images
import digitalComicsImg from '../assets/buy-comics-digital-comics.png';
import merchandiseImg from '../assets/buy-comics-merchandise.png';
import subscriptionImg from '../assets/buy-comics-subscriptions.png';
import shopLocatorImg from '../assets/buy-comics-shop-locator.png';
import powerVisaImg from '../assets/buy-dc-power-visa.svg';

// css
import style from '../components-style/BlueList.module.css';

function BlueList () {

    return (

        <div className={style.listBox}>
            <ul className={style.list}>
                <li>
                    <div className={style.boxImg}>
                        <img src={digitalComicsImg} alt="digital comics" />
                    </div>
                    
                    <p>digital comics</p>
                </li>
                <li>
                    <div className={style.boxImg}>
                        <img src={merchandiseImg} alt="dc merchandise" />
                    </div>
                    <p>dc merchandise</p>
                </li>
                <li>
                    <div className={style.boxImg}>
                        <img src={subscriptionImg} alt="subscription" />
                    </div>
                    <p>subscription</p>
                </li>
                <li>
                    <div className={style.boxImg}>
                        <img src={shopLocatorImg} alt="comic shop locator" />
                    </div>
                    <p>comic shop locator</p>
                </li>
                <li>
                    <div className={style.boxImg}>
                        <img src={powerVisaImg} alt="dc power visa" />
                    </div>
                    <p>dc power visa</p>
                </li>
            </ul>
        </div>
        
    );
}

export default BlueList;