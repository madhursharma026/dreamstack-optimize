import Image from "next/image";
import Image1 from "../../media/Partner-Images/partner-image-1.png";
import Image2 from "../../media/Partner-Images/partner-image-2.png";
import Image3 from "../../media/Partner-Images/partner-image-3.png";
import Image4 from "../../media/Partner-Images/partner-image-4.png";
import Image5 from "../../media/Partner-Images/partner-image-5.png";
import Image6 from "../../media/Partner-Images/partner-image-6.png";
import Image7 from "../../media/Partner-Images/partner-image-7.png";
import styles from "../../../styles/Homepage/CustomersSlider.module.css";

export default function CustomersSlider() {
    return (
        <div>
            <div className='py-4' style={{ background: '#E3EFFF' }}>
                <h2 className={`${styles.sectionTitle} text-center`}><b>Our Partners</b></h2>
                <div className={`${styles.imageSlider}`}>
                    <div className={`${styles.imageSliderTrack}`}>
                        <div className={`${styles.slide}`}>
                            <Image src={Image1} alt="Dreamstack Quote Icon" style={{ width: '100%', maxHeight: '65px', objectFit: 'contain' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <Image src={Image2} alt="Dreamstack Quote Icon" style={{ width: '100%', maxHeight: '65px', objectFit: 'contain' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <Image src={Image3} alt="Dreamstack Quote Icon" style={{ width: '100%', maxHeight: '65px', objectFit: 'contain' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <Image src={Image4} alt="Dreamstack Quote Icon" style={{ width: '100%', maxHeight: '65px', objectFit: 'contain' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <Image src={Image5} alt="Dreamstack Quote Icon" style={{ width: '100%', maxHeight: '65px', objectFit: 'contain' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <Image src={Image6} alt="Dreamstack Quote Icon" style={{ width: '100%', maxHeight: '65px', objectFit: 'contain' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <Image src={Image7} alt="Dreamstack Quote Icon" style={{ width: '100%', maxHeight: '65px', objectFit: 'contain' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <Image src={Image1} alt="Dreamstack Quote Icon" style={{ width: '100%', maxHeight: '65px', objectFit: 'contain' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <Image src={Image2} alt="Dreamstack Quote Icon" style={{ width: '100%', maxHeight: '65px', objectFit: 'contain' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <Image src={Image3} alt="Dreamstack Quote Icon" style={{ width: '100%', maxHeight: '65px', objectFit: 'contain' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <Image src={Image4} alt="Dreamstack Quote Icon" style={{ width: '100%', maxHeight: '65px', objectFit: 'contain' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <Image src={Image5} alt="Dreamstack Quote Icon" style={{ width: '100%', maxHeight: '65px', objectFit: 'contain' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <Image src={Image6} alt="Dreamstack Quote Icon" style={{ width: '100%', maxHeight: '65px', objectFit: 'contain' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <Image src={Image7} alt="Dreamstack Quote Icon" style={{ width: '100%', maxHeight: '65px', objectFit: 'contain' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
