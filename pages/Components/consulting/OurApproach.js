import Image from 'next/image';
import styles from '../../../styles/cybersecurity/OurApproach.module.css';
import Image3 from "../../media/Consulting-Images/consulting-image-3.png";
import Image4 from "../../media/Consulting-Images/consulting-image-4.png";
import Image5 from "../../media/Consulting-Images/consulting-image-5.png";
import Image6 from "../../media/Consulting-Images/consulting-image-6.png";

export default function OurApproach() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`} style={{ background: '#1E2222' }}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <h6 className={`${styles.sectionTitle} text-white`}><b>OUR APPROACH</b></h6>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 text-center py-3">
                        <Image src={Image3} alt='Dreamstack Business Vision Image' className={`${styles.imgWidth}`} />
                        <h6 className='text-white pt-4'><b>Enable business vision</b></h6>
                    </div>
                    <div className="col-lg-3 col-sm-6 text-center py-3">
                        <Image src={Image4} alt='Dreamstack Business Vision Image' className={`${styles.imgWidth}`} />
                        <h6 className='text-white pt-4'><b>Empower data-led decisions</b></h6>
                    </div>
                    <div className="col-lg-3 col-sm-6 text-center py-3">
                        <Image src={Image5} alt='Dreamstack Business Vision Image' className={`${styles.imgWidth}`} />
                        <h6 className='text-white pt-4'><b>Build resilience</b></h6>
                    </div>
                    <div className="col-lg-3 col-sm-6 text-center py-3">
                        <Image src={Image6} alt='Dreamstack Business Vision Image' className={`${styles.imgWidth}`} />
                        <h6 className='text-white pt-4'><b>Accelerate innovation</b></h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
