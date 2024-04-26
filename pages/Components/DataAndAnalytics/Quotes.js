import Image from 'next/image';
import styles from '../../../styles/cybersecurity/Quotes.module.css';
import Image8 from "../../media/Cloud-Images/cloud-image-8.jpeg";
import Image9 from "../../media/Cloud-Images/cloud-image-9.png";

export default function Quotes() {
    return (
        <div className={`px-4 py-3`}>
            <div className={`${styles.ContainerWidth} py-4`} style={{ maxWidth: "1200px" }}>
                <Image src={Image8} alt='Dreamstack Review Image' width={100} height={80} />
                <h1 className={`${styles.sectionTitle}`} style={{ color: "#E8337B" }}>
                    Data holds the key to unlocking digital opportunities. To translate the power of data into business success, we recommend the adoption of a data-centric culture.
                </h1>
                <hr />
                <div className="row">
                    <div className="col-lg-1 col-2">
                        <Image src={Image9} alt='Dreamstack Review Image' className="w-100" style={{ borderRadius: "100%", height: "60px" }} />
                    </div>
                    <div className="col-lg-11 col-10">
                        <h6>SANTHA SUBRAMONI</h6>
                        <h6>Head, Cybersecurity Services, Dreamstack</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
