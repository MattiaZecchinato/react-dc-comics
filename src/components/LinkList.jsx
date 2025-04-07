// css
import style from '../components-style/LinkList.module.css';

function LinkList(props) {

    const linkList = props.data;

    return (

        linkList.map((elem, i) =>
        
            (<li key={i} className={style.listItem}>
                <a href={elem.link}>{elem.title}</a>
            </li>)
        )
    );
}

export default LinkList;