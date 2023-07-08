import style from "./Footer.module.scss"
const Footer = () => {
    return (  
        <footer className={style.footer}>
            <div className={style.top}>
                <div className={style.top1}>
                    <a href="/#"><img src="/assets/logo.svg" alt="" /></a>
                    <p>A new way to make the payments easy, reliable and secure.</p>
                </div>
                <div className={style.top2}>
                    <h6 className={style.title}>Usefull Links</h6>
                    <ul>
                        <li><a href="/#">Content</a></li>
                        <li><a href="/#">How it Works</a></li>
                        <li><a href="/#">Create</a></li>
                        <li><a href="/#">Explore</a></li>
                        <li><a href="/#">Terms & Services</a></li>
                    </ul>
                </div>
                <div className={style.top3}>
                    <h6 className={style.title}>Community</h6>
                    <ul>
                        <li><a href="/#">Help Center</a></li>
                        <li><a href="/#">Partners</a></li>
                        <li><a href="/#">Suggestions</a></li>
                        <li><a href="/#">Blog</a></li>
                        <li><a href="/#">Newsletters</a></li>
                    </ul>
                </div>
                <div className={style.top4}>
                    <h6 className={style.title}>Partner</h6>
                    <ul>
                        <li><a href="/#">Our Partner</a></li>
                        <li><a href="/#">Become a Partner</a></li>
                    </ul>
                </div>
            </div>
            <div className={style.bottom}>
                <div>
                    <span>Copyright</span>
                    <img src="/assets/copyright.svg" alt="" />
                    <span>2021 HooBank. All Rights Reserved.</span>
                    
                </div>
                <div className={style.social}>
                    <a href="/#">
                        <img src="/assets/instagram.svg" alt="" />
                    </a>
                    <a href="/#">
                        <img src="/assets/facebook.svg" alt="" />
                    </a>
                    <a href="/#">
                        <img src="/assets/twitter.svg" alt="" />
                    </a>
                    <a href="/#">
                        <img src="/assets/linkedin.svg" alt="" />
                    </a>
                </div>
            </div>

        </footer>
    );
}
 
export default Footer;
<footer>

</footer>