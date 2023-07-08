import style from "./PeopleItem.module.scss"
const PeopleItem = (props) => {
    return (  
        <div className={style.wrapper}>
            <img className={style.img} src={props.icon} alt="" />
            <p className={style.text}>{props.text}</p>
            <div className={style.content}>
                <div><img src={props.avatar} alt="" className={style.photo} /></div>
                <div className={style.text_wrapper}>
                    <span className={style.name}>{props.name}</span>
                    <span className={style.job}>{props.job}</span>
                </div>
            </div>
        </div>
    );
}
 
export default PeopleItem;