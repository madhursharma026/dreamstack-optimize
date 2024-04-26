import Image from 'next/image';
import styles from '../../../styles/WhoWeAre/WhoWeAre.module.css';
import Img12 from "../../media/WhoWeAre-Images/Image12.svg";

export default function Section9() {
    return (
        <div className={`pt-5 text-center`} style={{ background: '#0060B4' }}>
            <h1 className={`${styles.sectionTitle} pt-sm-5 pt-3 pb-5 text-white`}>
                Made in India.
                <br />
                Made for the World.
            </h1>
            <Image src={Img12} alt='Dreamstack Image' className={`w-100 h-auto`} />
        </div>
    )
}

