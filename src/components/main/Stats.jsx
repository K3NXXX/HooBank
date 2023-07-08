import style from "./Stats.module.scss"
const Stats = (props) => {
    return (  
        <div className={style.stats}>
            <span className={style.number}>{props.number}+</span>
            <p className={style.text}>{props.text}</p>
        </div>
    );
}
 
export default Stats;