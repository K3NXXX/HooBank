import style from "./People.module.scss"
import { commentList } from "../../helpers/commentsList";
import PeopleItem from "./PeopleItem";
const People = () => {
    return (  
        <div className={style.wrapper}>
            <div className={style.text__row}>
                <p className={style.bold_text}>What people are saying about us</p>
                <p className={style.text}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className={style.comments}>
                {commentList.map((comment) => {
                    return <PeopleItem key={comment.id} 
                    image = {comment.image} 
                    icon ={comment.icon}
                    text = {comment.text}
                    avatar = {comment.avatar}
                    name = {comment.name}
                    job = {comment.job}/>
                })}
            </div>
            <div className={style.gradient}></div>
        </div>
    );
}
 
export default People;