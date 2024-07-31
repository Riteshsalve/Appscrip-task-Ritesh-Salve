
import Image from "next/image";
import styles from "@/app/styles/header.module.css"
import { IconHeart, IconMenu, IconMenu2, IconSearch, IconShoppingBag, IconUser } from '@tabler/icons-react';
const Header = () => {

    // const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (

        <>
            <div className={styles.header}>
                <div className={styles.NavbarTop}>
                    <div className={styles.NavBarLeft}>

                        <div className={styles.hamburgerButton}>
                            <IconMenu2 />
                        </div>

                        <div className={styles.leftImgDiv}>
                            <Image className={styles.leftsideLogoImage} src="/Logo.png" alt="Logo" height={80} width={80} />
                        </div>

                    </div>
                    <div className={styles.NavBarCenter}>
                        <h1 className={styles.logoH1}>LOGO</h1>
                    </div>
                    <div className={styles.NavBarRight}>
                        <div className={styles.navbarIcons}>
                            <IconSearch />
                            <IconHeart />
                            <IconShoppingBag />
                            <IconUser className={styles.userIcon} />
                            <select className={styles.selectEng} name="" id="">
                                <option selected value="">ENG</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={styles.navbarBottom}>
                    <div className={styles.menuItems}>
                        <p>SHOP</p>
                        <p>SKILLS</p>
                        <p>STORIES</p>
                        <p>ABOUT</p>
                        <p>CONTACT US</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Header