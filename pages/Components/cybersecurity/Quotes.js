import Image from 'next/image';
import styles from '../../../styles/cybersecurity/Quotes.module.css';
import Image8 from "../../media/Cloud-Images/cloud-image-8.jpeg";
import Image9 from "../../media/Cloud-Images/cloud-image-9.png";

export default function Quotes() {
    return (
        <div className={`px-4 py-3`}>
            <div className={`${styles.ContainerWidth} py-4`} style={{ maxWidth: "1200px" }}>
                <Image src={Image8} alt='Dreamstack cybersecurity Image' width='100' height='80' />
                <h1 className={`${styles.sectionTitle}`} style={{ color: "#E8337B" }}>
                    To fend off the worst that cybercriminals will attempt, cybersecurity must leverage the best of what technologies like analytics, artificial intelligence, machine learning, and automation–including the possibilities offered by cloud-based solutions–can deliver.
                </h1>
                <hr />
                <div className="row">
                    <div className="col-lg-1 col-2">
                        <Image src={Image9} alt='Dreamstack cybersecurity Image' className="w-100" height='60' style={{ borderRadius: "100%" }} />
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
