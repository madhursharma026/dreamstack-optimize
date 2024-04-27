import Image from 'next/image';
import styles from '../../../styles/Homepage/PartnerSection.module.css'
import Image12 from "../../media/Homepage-Images/homepage-image-12.png";
import Image13 from "../../media/Homepage-Images/homepage-image-13.png";
import Image14 from "../../media/Homepage-Images/homepage-image-14.png";
import Image15 from "../../media/Homepage-Images/homepage-image-15.png";
import Image15 from "../../media/Homepage-Images/homepage-image-15.png";

export default function PartnerSection() {
    return (
        <div className={`pt-3 my-md-5 my-3 ${styles.ContainerWidth}`}>
            <div className="row px-3">
                <div className="col-md-3 ">
                    <p className={`${styles.subHeading}`}>Meet our Tech Partners</p>
                    <p className={`${styles.subBody}`}>Our Association with Top Ventures</p>
                </div>
                <div className="col-md-9 row">
                    <div className={`col-sm col-6 text-center`}>
                        <div className={`${styles.logoStyle} w-100 pb-0`}>
                            <Image src={Image12} alt="Dreamstack Salesforce" className={`w-100 px-lg-3 ${styles.logoSize}`} />
                            <p className={`${styles.imageInfo}`}>Salesforce Ridge(Silver) <br /> Consulting Partner</p>
                        </div>
                    </div>
                    <div className={`col-sm col-6 text-center`}>
                        <div className={`${styles.logoStyle} w-100 pb-0`}>
                            <Image src={Image13} alt="Dreamstack ISV Salesforce" className={`w-100 px-lg-3 ${styles.logoSize}`} />
                            <p className={`${styles.imageInfo}`}>ISV Salesforce <br /> Partner</p>
                        </div>
                    </div>
                    <div className={`col-sm col-6 text-center`}>
                        <div className={`${styles.logoStyle} w-100 pb-1`}>
                            <Image src={Image14} alt="Dreamstack Salesforce" className={`w-100 px-lg-3 ${styles.logoSize}`} />
                        </div>
                    </div>
                    <div className={`col-sm col-6 text-center`}>
                        <div className={`${styles.logoStyle} w-100`}>
                            <Image src={Image15} alt="Dreamstack Salesforce" className={`w-100 px-lg-3 ${styles.logoSize}`} />
                        </div>
                    </div>
                    <div className={`col-6 offset-3 offset-sm-0 col-sm text-center`}>
                        <div className={`${styles.logoStyle} w-100`}>
                            <Image src={Image15} alt="Dreamstack Salesforce" className={`w-100 px-lg-3 ${styles.logoSize}`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
