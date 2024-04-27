import styles from '../../../styles/WhoWeAre/KnowUsBetter.module.css';
import Images7 from "../../media/WhoWeAre-Images/WhoWeAre-image-7.jpeg";
import Images8 from "../../media/WhoWeAre-Images/WhoWeAre-image-8.jpeg";
import Images9 from "../../media/WhoWeAre-Images/WhoWeAre-image-9.jpeg";
import Images10 from "../../media/WhoWeAre-Images/WhoWeAre-image-10.jpeg";
import Image from 'next/image';

export default function KnowUsBetter() {
    return (
        <div className="px-md-4 px-3">
            <div className={`my-5 ${styles.ContainerWidth}`}>
                <div className={`row`}>
                    <h2>Get to know us better</h2>
                    <div className={`col ${styles.colNo1}`}>
                        <div className={`${styles.columnData}`}>
                            <Image src={Images7} alt="Dreamstack Images" className='w-100' height='500' />
                            <div className={`${styles.bottomLeft}`}>
                                <h2>Newsroom</h2>
                                <p>Stay connected and up to date with our events and announcements</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col ${styles.colNo2}`}>
                        <div className={`${styles.columnData}`}>
                            <Image src={Images8} alt="Dreamstack Images" className='w-100' height='500' />
                            <div className={`${styles.bottomLeft}`}>
                                <h2>CSR</h2>
                                <p>Stay connected and up to date with our events and announcements</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col ${styles.colNo3}`}>
                        <div className={`${styles.columnData}`}>
                            <Image src={Images9} alt="Dreamstack Images" className='w-100' height='500' />
                            <div className={`${styles.bottomLeft}`}>
                                <h2>Diversity, equality, inclusion</h2>
                                <p>Stay connected and up to date with our events and announcements</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col ${styles.colNo4}`}>
                        <div className={`${styles.columnData}`}>
                            <Image src={Images10} alt="Dreamstack Images" className='w-100' height='500' />
                            <div className={`${styles.bottomLeft}`}>
                                <h2>Sports sponsorship</h2>
                                <p>Stay connected and up to date with our events and announcements</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
