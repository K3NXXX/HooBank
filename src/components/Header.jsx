import {useRef, useState } from "react";
import styles from "./Header.module.scss"
import { useClickOutside } from "../hooks/useClickOutside";
import logo from "../assets/logo.svg"
const Header = () => {
    let [open, setOpen] = useState(false)
    const menuRef = useRef(null)
    useClickOutside(menuRef, () =>  {
        if(open) setTimeout(() => setOpen(false),50)})
    return (  
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a href=""><img className={styles.logo}  src={logo} alt="" /></a>
                <ul className={styles.list}>
                    <a className={styles.item_link} href="">
                        <li className={`${styles.list_item} ${styles.active}`}>Home</li>
                    </a>
                    <a className={styles.item_link} href="">
                        <li className={styles.list_item}>About us</li>
                    </a>
                    <a className={styles.item_link} href="">
                        <li className={styles.list_item}>Features</li>
                    </a>
                    <a className={styles.item_link} href="">
                        <li className={styles.list_item}>Solution</li>
                    </a>
                </ul>
                <div  onClick={() => {setOpen(open = !open)}} className={styles.menu__burger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {open && (
                    <div ref={menuRef} className={styles.burger__menu}>
                    <ul className={styles.phone__menu}>
                    <a className={styles.item_link} href="">
                        <li className={`${styles.list_item} ${styles.active}`}>Home</li>
                    </a>
                    <a className={styles.item_link} href="">
                        <li className={styles.list_item}>About us</li>
                    </a>
                    <a className={styles.item_link} href="">
                        <li className={styles.list_item}>Features</li>
                    </a>
                    <a className={styles.item_link} href="">
                        <li className={styles.list_item}>Solution</li>
                    </a>
                    </ul>
                    </div>
                )}
                
            </nav>
        </header>
    );
}
 
export default Header;