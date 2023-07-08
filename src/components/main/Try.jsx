import Button from "../UI/Button";
import style from "./Try.module.scss"
const Try = () => {
    return (  
        <div className={style.wrapper}>
            <div className={style.content}>
                <h3 className={style.title}>Let’s try our service now!</h3>
                <p className={style.text}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className={style.btn_wrapper}><Button/></div>

        </div>
    );
}
 
export default Try;