import style from "./BusinessItem.module.scss"
const BusinessItem = (props) => {
    return (  
        <div className={style.wrapper}>
            <div>
                <div className={style.circle}>
                    <img src={props.image} alt=""  className={style.img}/>
                </div>
            </div>
            <div>
                <h5 className={style.title}>{props.title}</h5>
                <h5 className={style.text}>{props.text}</h5>
            </div>

        </div>
    );
}
 
export default BusinessItem;