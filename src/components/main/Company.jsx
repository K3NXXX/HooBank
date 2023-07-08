import airbnb from "../../assets/airbnb.png"
import binance from "../../assets/binance.png"
import coinbase from "../../assets/coinbase.png"
import dropbox from "../../assets/dropbox.png"
import style from "./Company.module.scss"
const Company = () => {
    return (  
        <div className={style.wrapper}>
            <div className={style.content}>
                <img src={airbnb} alt="" />
                <img src={binance}  alt="" />
                <img src={coinbase}  alt="" />
                <img src={dropbox}  alt="" />
            </div>
        </div>
    );
}
 
export default Company;