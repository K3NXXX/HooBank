import style from "./Billing.module.scss"
const Billing = () => {
    return ( 
        <div className={style.wrapper}>
            <img src="/assets/bill.png" alt="" className={style.img} />
            <div className={style.content}>
                <h3 className={style.title}>Easily control your billing & invoicing.</h3>
                <p className={style.text}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                <div className={style.buttons}>
                    <a href="/#" className={style.link1}>
                        <img src="/assets/apple.svg" alt="" />
                    </a>
                    <a href="/#" className={style.link2}>
                        <img src="/assets/google.svg" alt="" />
                    </a>
                </div>
            </div>
            <div className={style.gradient}></div>
        </div>
     );
}
 
export default Billing