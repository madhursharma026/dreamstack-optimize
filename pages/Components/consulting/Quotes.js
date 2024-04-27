import styles from '../../../styles/cybersecurity/Quotes.module.css';
import Image9 from "../../media/Cloud-Images/cloud-image-9.png";
import Image8 from "../../media/Cloud-Images/cloud-image-8.jpeg";
import Image from 'next/image';

export default function Quotes() {
    return (
        <div className={`px-4`}>
            <div className={`${styles.ContainerWidth}`} style={{ maxWidth: "1200px" }}>
                <Image src={Image8} alt="Dreamstack Quotes Image" width='100' height='80' />
                <h1 className={`${styles.sectionTitle}`} style={{ color: "#E8337B" }}>
                    Successful digital transformations are business driven. We partner with our clients to bring to life their vision of enterprise-wide transformation for purpose-led growth.
                </h1>
                <hr />
                <div className="row">
                    <div className="col-lg-1 col-2">
                        <Image src={Image9} alt="Dreamstack User Image" className="w-100" height='60' style={{ borderRadius: "100%" }} />
                    </div>
                    <div className="col-lg-11 col-10">
                        <h6>DAVE JORDAN</h6>
                        <h6>Vice President & Global Head, Consulting, Dreamstack</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
