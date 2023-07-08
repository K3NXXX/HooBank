import card from "../../assets/card.png"
import Button from "../UI/Button";
import style from "./Card.module.scss"
const Card = () => {
    return (  
        <div className={style.wrapper}>
            <div className={style.content}>
                <h3 className={style.title}>Find a better card deal in few easy steps.</h3>
                <p className={style.text}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                <Button/>
            </div>
            <img src={card} alt="" className={style.img} />
        </div>
    );
}
 
export default Card;