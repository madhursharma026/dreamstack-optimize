import Image from 'next/image';
import styles from '../../../styles/Homepage/PartnerWithUs.module.css';
import Image12 from "../../media/Homepage-Images/homepage-image-12.png";
import Image13 from "../../media/Homepage-Images/homepage-image-13.png";
import Image14 from "../../media/Homepage-Images/homepage-image-14.png";
import Image15 from "../../media/Homepage-Images/homepage-image-15.png";

export default function PartnerWithUs() {
    return (
        <div className={`${styles.bodyContainer} p-0 px-md-4 px-3`}>
            <div className={`py-5 ${styles.ContainerWidth} text-white`}>
                <h2 className={`${styles.subTitle}`}>Partner with us</h2>
                <p className={`${styles.subBody}`}>Help fund, shape, and expand Dreamstack work toward a healthy internet and trustworthy AI.</p>
                <div className="d-flex flex-wrap">
                    <div className="m-3">
                        <Image src={Image12} alt="#ImgNotFound" width={170} height={70} />
                    </div>
                    <div className="m-3">
                        <Image src={Image13} alt="#ImgNotFound" width={170} height={70} />
                    </div>
                    <div className="m-3">
                        <Image src={Image14} alt="#ImgNotFound" width={115} height={70} />
                    </div>
                    <div className="m-3">
                        <Image src={Image15} alt="#ImgNotFound" width={170} height={70} />
                    </div>
                </div>
            </div>
        </div>
    );
}
