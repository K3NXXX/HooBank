import style from "./Business.module.scss"
import { businessList } from "../../helpers/businessList";
import BusinessItem from "./BusinessItem";
import Button from "../UI/Button";
const Business = () => {
    return (  
        <div id="about" className={style.wrapper}>
            <div className={style.left}>
                <h3 className={style.title}>You do the business, we’ll handle the money.</h3>
                <p className={style.text}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <Button/>
            </div>
            <div className={style.right}>
                {businessList.map((item) => {
                    return <BusinessItem key= {item.id} image = {item.image} title = {item.title} text = {item.text}/>
                })}
            </div>
        </div>
    );
}
 
export default Business;