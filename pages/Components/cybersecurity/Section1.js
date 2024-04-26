import Link from 'next/link';
import Images1 from "../../media/Cybersecurity-Images/cybersecurity-image-1.jpeg";
import styles from '../../../styles/Homepage/IntroSection.module.css';
import Image from 'next/image';

export default function IntroSection() {
    return (
        <div className={`p-0 mt-5`}>
            <div style={{ background: '#B20000' }}>
                <div className={`${styles.ContainerWidth}`}>
                    <div className={`row`}>
                        <div className={`col-xxl-6 order-xxl-2`}>
                            <Image src={Images1} alt='Dreamstack SERVICES / CYBERSECURITY Image' className={`${styles.imgStyle} w-100 h-100`} />
                        </div>
                        <div className={`col-xxl-6 mt-xxl-5 py-xxl-5`}>
                            <div className={`${styles.rightSide} py-5 px-md-4 px-3`}>
                                <h5 className={`text-white ${styles.sectionBody} pt-2`}><b>SERVICES / CYBERSECURITY</b></h5>
                                <hr style={{ height: '2px', background: 'white' }} />
                                <h1 className={`${styles.sectionTitle} text-white`}>Lead with cyber confidence</h1>
                                <Link href="/" className={`${styles.letsTalk}`}><b>Let's Talk</b></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


