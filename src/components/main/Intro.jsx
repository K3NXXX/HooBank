import style from "./Intro.module.scss"
import discount from "../../assets/Discount.svg"
import arrow from "../../assets/arrow-up.svg"
import robot from "../../assets/robot.png"
const Intro = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.left__part}>
                <div className={style.discount}>
                    <img className={style.discount__icon} src={discount} alt="" />
                    <p className={style.discount__text}><span>20%</span> DISCOUNT FOR <span>1 MONTH</span> ACCOUNT</p>
                </div>
                <div className={style.main__text}>
                    <h1 className={style.main_text}>The Next <span>Generation</span> Payment Method.</h1>
                    <p className={style.text2}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                     We examine annual percentage rates, annual fees.</p>
                    <a className={style.main__link} href="">
                        <div className={style.circle}>
                            <img  src={arrow} alt="" />
                            <span className={style.circle__span}>Get<br/> Started</span>
                        </div>
                    </a>
                    <div className={style.gradient2}></div>
                </div>
                <p className={style.text}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                We examine annual percentage rates, annual fees.</p>
               
               
            </div>
            <div className={style.right__part}>
                <img className={style.right__part_img} src={robot} alt="" />
                <div className={style.gradient3}></div>
            </div>
        </div>
      );
}
 
export default Intro;