// css
import style from './ComicsCard.module.css';

function ComicsCard(props) {

    return (

        <div className={style.cardContainer}>
            <div className={style.comicImgContainer}>
                <img src={props.img} alt={props.title} />
            </div>
            <p>{props.series}</p>
        </div>
    );
}

export default ComicsCard;