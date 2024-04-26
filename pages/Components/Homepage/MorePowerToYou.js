import Link from 'next/link';
import Image from 'next/image';
import Image6 from '../../media/Homepage-Images/homepage-image-6.png';
import styles from '../../../styles/Homepage/MorePowerToYou.module.css';

export default function MorePowerToYou() {
    return (
        <div className={`py-5 mt-5 ${styles.ContainerWidth}`}>
            <div className="row px-3 text-center">
                <div className="col-md-6">
                <Image className='w-100 h-100' src={Image6} alt="Dreamstack" style={{ maxWidth: '500px', maxHeight: "500px" }} />
                </div>
                <div className={`col-md-6 ${styles.tryPocketContent}`} style={{margin: 'auto'}}>
                    <h2 className={`${styles.sectionTitle} pt-md-0 pt-5`}>Tired of traditional recruiting to hire software developers?</h2>
                    <p className={`${styles.sectionBody}`}>Hire senior pre-vetted remote developers with strong technical and communication skills at unbeatable prices, ready to work in your timezone.</p>
                    <Link href="/WhoWeAre" className={`${styles.learnMoreLink}`}>Learn more about us</Link>
                </div>
            </div>
        </div>
    );
}
