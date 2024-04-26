import Image from 'next/image';
import styles from '../../../styles/cybersecurity/Quotes.module.css';
import Image8 from "../../media/Cloud-Images/cloud-image-8.jpeg";
import Image9 from "../../media/Cloud-Images/cloud-image-9.png";

export default function Quotes() {
    return (
        <div className={`px-4 py-3`}>
            <div className={`${styles.ContainerWidth} py-4`} style={{ maxWidth: "1200px" }}>
                        <Image src={Image8} alt='Dreamstack Enterprise Image' width='100' height='80' />
                <h1 className={`${styles.sectionTitle}`} style={{ color: "#E8337B" }}>
                    The journey to becoming a resilient enterprise must begin with a shift in thinking—from a vertical industry to a horizontal, digital ecosystems frame.
                </h1>
                <hr />
                <div className="row">
                    <div className="col-lg-1 col-2">
                        <Image src={Image9} alt='Dreamstack User Image' className="w-100" style={{ borderRadius: "100%", height: "60px" }} />
                    </div>
                    <div className="col-lg-11 col-10">
                        <h6>AKASH DIXIT</h6>
                        <h6>CEO and Managing Director, Dreamstack</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
