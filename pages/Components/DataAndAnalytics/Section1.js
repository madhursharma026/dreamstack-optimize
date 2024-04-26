import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/DataAndAnalytics/Section1.module.css';
import Image8 from "../../media/DataAndAnalytics-Images/DataAndAnalytics-image-8.png";
import Image9 from "../../media/DataAndAnalytics-Images/DataAndAnalytics-image-9.png";
import Image6 from "../../media/DataAndAnalytics-Images/DataAndAnalytics-image-6.png";
import Image7 from "../../media/DataAndAnalytics-Images/DataAndAnalytics-image-7.jpeg";

export default function IntroSection() {
    return (
        <div className={`px-md-4 px-3 py-lg-0 py-5 mt-5 ${styles.IntroSection}`}>
            <div className={`${styles.ContainerWidth}`}>
                <div className="row">
                    <div className={`${styles.imgStyle} col-lg-6 order-lg-2 pb-lg-0 pb-3`}>
                        <Image src={Image6} alt='Dreamstack GenAI Image' className='w-100 h-auto' />
                    </div>
                    <div className={`col-lg-6 py-5 mt-xxl-5`}>
                        <h1 className={`${styles.sectionTitle} text-white pt-lg-5`}>
                            Firefox products are designed to protect your privacy
                        </h1>
                        <h5 className={`text-white ${styles.sectionBody} pt-2`}>You should be able to decide who sees your personal info. Not just among your friends, but with every advertiser and company on the internet — including us.</h5>
                        <button type="button" className="btn btn-primary mb-2 px-3 py-2"><b>Download Dreamstack</b></button><br />
                        <Link href="" className='text-white' style={{ textDecoration: "none", fontSize: "13px" }}>Firefox Privacy Notice</Link>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 py-lg-5 py-3">
                        <Image src={Image7} alt='Dreamstack Invisible Trackers Image' width="65" height="50" />
                        <h3 className='text-white pt-3'><b>Invisible to the top trackers</b></h3>
                        <h5 className={`text-white ${styles.sectionBody} pt-2`}>Meet four of the most common categories of trackers — who won’t meet you.</h5>
                    </div>
                    <div className="col-lg-4 py-lg-5 py-3">
                        <Image src={Image8} alt='Dreamstack Blocked Control Image' width="65" height="82" />
                        <h3 className='text-white pt-3'><b>Always in your control</b></h3>
                        <h5 className={`text-white ${styles.sectionBody} pt-2`}>Want to customize what gets blocked? Your settings are only one click away.</h5>
                    </div>
                    <div className="col-lg-4 py-lg-5 py-3">
                        <Image src={Image9} alt='Dreamstack Protection Tracking Image' width="65" height="55" />
                        <h3 className='text-white pt-3'><b>Protection beyond tracking</b></h3>
                        <h5 className={`text-white ${styles.sectionBody} pt-2`}>If you have a Firefox Account, you can also see how we’re helping you protect your personal info and passwords.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
