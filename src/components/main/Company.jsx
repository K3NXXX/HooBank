import style from "./Company.module.scss"
const Company = () => {
    return (  
        <div className={style.wrapper}>
            <div className={style.content}>
                <img src="/assets/airbnb.png" alt="" />
                <img src="/assets/binance.png" alt="" />
                <img src="/assets/coinbase.png" alt="" />
                <img src="/assets/dropbox.png" alt="" />
            </div>
        </div>
    );
}
 
export default Company;