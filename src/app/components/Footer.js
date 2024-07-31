
import { IconBrandInstagram, IconCamera } from "@tabler/icons-react"
import styles from "@/app/styles/footer.module.css";
import Image from "next/image"
import pay1 from "../../../public/img/logo/paypal.svg"
import pay2 from "../../../public/img/logo/amex.svg"
import pay3 from "../../../public/img/logo/gpay.svg"
import pay4 from "../../../public/img/logo/mastercard.svg"
import pay5 from "../../../public/img/logo/opay.svg"
import pay6 from "../../../public/img/logo/apay.svg"
import arrow from "../../../public/img/icons/arrow-right.png"
import linkedin from "../../../public/img/icons/mdi_linkedin.png"
import insta from "../../../public/img/icons/Insta.png"
const Footer = () => {
    const footerNavMeta = [
        { title: "About Us", link: "#" },
        { title: "Stories", link: "#" },
        { title: "Artisans", link: "#" },
        { title: "Boutiques", link: "#" },
        { title: "Contact Us", link: "#" },
        { title: "EU Compliances Docs", link: "#" },
      ];
      const footerNavQuick = [
        { title: "Order & Shipping", link: "#" },
        { title: "Join/Login as a Seller", link: "#" },
        { title: "Payment & Pricing", link: "#" },
        { title: "Return & Refunds", link: "#" },
        { title: "FAQs", link: "#" },
        { title: "Privacy Policy", link: "#" },
        { title: "Terms & Conditions", link: "#" },
      ];
    return (

        <>

<div className={styles.footerMain}>
      <div className={styles.footer}>
        <div className={styles.topFooter}>
          <div className={styles.topFooterleft}>
            <h1>BE THE FIRST TO KNOW</h1>
            <p>Sign up for updates from mettā muse.</p>
            <div className={styles.inputDiv}>
              <input
                type="text"
                placeholder="Enter your e-mail..."
                name=""
                id=""
              />{" "}
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className={styles.topFooterright}>
            <div className={styles.details}>
              <h1>CONTACT US</h1>
              <div className={styles.contactData}>
                <p>+44 255 155 2560</p>
                <p>customercare@mattamuse.com</p>
              </div>
            </div>
            <div className={styles.details}>
              <h1>CURRENCY</h1>
              <div className={styles.usa}>
                {/* <Image src={png?.usa} alt="usa" /> */}
                <h1>• &nbsp;USA</h1>
              </div>
              <p className={styles.currencyNotes}>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.bottomFooter}>
          <div className={styles.bottomFooterfirstOne}>
            <div className={styles.headingText}>
              <h1>mettā muse</h1>
              <div className={styles.downArrow}>
                <span>
                  {" "}
                  <Image src={arrow} alt="downArrow" />
                </span>
              </div>
            </div>
            <ul>
              {footerNavMeta.map((link, index) => (
                <li key={index}>{link?.title}</li>
              ))}
            </ul>
          </div>

          <div className={styles.bottomFootersecondOne}>
            <div className={styles.headingText}>
              <h1>QUICK LINKS</h1>
              <div className={styles.downArrow}>
                <span>
                  {" "}
                  <Image src={arrow} alt="Arrow" />
                </span>
              </div>
            </div>
            <ul>
              {footerNavQuick.map((link, index) => (
                <li key={index}>{link?.title}</li>
              ))}
            </ul>
          </div>
          <div className={styles.bottomFooterthirdOne}>
            <div className={styles.subDiv}>
              <div className={styles.headingText}>
                <h1>FOLLOW US</h1>
                <div className={styles.downArrow}>
                  <span>
                    {" "}
                    <Image src={arrow} alt="" />
                  </span>
                </div>
              </div>
              <div className={styles.socialMedia}>
                {" "}
                <Image
                  src={insta}
                  width={30}
                  alt="instagram"
                  height={30}
                />{" "}
                <Image
                  src={linkedin}
                  alt="linkedin"
                  width={30}
                  height={30}
                />{" "}
              </div>
            </div>
            <div className={styles.subDiv}>
              <h1>mettā muse Accepts</h1>

              <div>
                {" "}
                <Image src={pay1} alt="pay1" />{" "}
                <Image src={pay2} alt="pay2" />{" "}
                <Image alt="pay3" src={pay3} />{" "}
                <Image alt="pay4" src={pay4} />{" "}
                <Image src={pay5} alt="pay5" />{" "}
                <Image src={pay6} alt="pay6" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </div>
        </>
    )

}

export default Footer