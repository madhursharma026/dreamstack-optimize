import Image from 'next/image';
import styles from '../../../styles/cybersecurity/Insights.module.css';
import Image13 from "../../media/Common-Images/common-image-13.jpeg";
import Image14 from "../../media/Common-Images/common-image-14.jpeg";
import Image15 from "../../media/Common-Images/common-image-15.jpeg";
import Image16 from "../../media/Common-Images/common-image-16.jpeg";

export default function Insights() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <h6 className={`${styles.sectionTitle}`}>Insights</h6>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <Image src={Image13} alt='Dreamstack Cognitive Intelligence Image' className={`w-100`} height='500' />
                            <div className={`${styles.bottomLeft}`}>
                                <h1>O1</h1>
                                <p>Cognitive intelligence for threat detection, deep analytics, and automation for fast remediation</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <Image src={Image14} alt='Dreamstack Cognitive Intelligence Image' className={`w-100`} height='500' />
                            <div className={`${styles.bottomLeft}`}>
                                <h1>O2</h1>
                                <p>Cognitive intelligence for threat detection, deep analytics, and automation for fast remediation</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <Image src={Image15} alt='Dreamstack Cognitive Intelligence Image' className={`w-100`} height='500' />
                            <div className={`${styles.bottomLeft}`}>
                                <h1>O3</h1>
                                <p>Cognitive intelligence for threat detection, deep analytics, and automation for fast remediation</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <Image src={Image16} alt='Dreamstack Cognitive Intelligence Image' className={`w-100`} height='500' />
                            <div className={`${styles.bottomLeft}`}>
                                <h1>O4</h1>
                                <p>Cognitive intelligence for threat detection, deep analytics, and automation for fast remediation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}