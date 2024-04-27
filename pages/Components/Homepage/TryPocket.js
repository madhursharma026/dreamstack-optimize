import Image from 'next/image';
import styles from '../../../styles/Homepage/TryPocket.module.css'
import Image12 from "../../media/Homepage-Images/homepage-image-12.png";
import Image13 from "../../media/Homepage-Images/homepage-image-13.png";

export default function TryPocket() {
    return (
        <div className={`pt-5 my-5 ${styles.ContainerWidth}`}>
            <div className="row px-3">
                <div className={`col-md-6 mt-3 order-md-2 ${styles.tryPocketContent}`}>
                    <Image src={Image12} alt="Dreamstack Image" width="200" height="50" className='mb-3' />
                    <h1 className={`${styles.sectionTitle}`}>Welcome to the web, sunny side up</h1>
                    <p className={`${styles.sectionBody}`}>Millions of people rely on Pocket to save and discover the best articles, stories and videos on the web. As part of the Firefox family, Pocket has the same dedication to privacy</p>
                    <button type="button" className={`btn btn-primary`}><b>Try Pocket</b></button>
                </div>
                <div className={`col-md-6 mt-md-0 mt-5`}>
                    <Image src={Image13} alt="Dreamstack Image" className='w-100 h-auto' />
                </div>
            </div>
        </div>
    )
}
