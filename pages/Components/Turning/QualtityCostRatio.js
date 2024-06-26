import Link from 'next/link';
import styles from '../../../styles/Homepage/MorePowerToYou.module.css'
import Images11 from "../../media/Turing-Images/turing-images-11.png";
import Images12 from "../../media/Turing-Images/turing-images-12.png";
import Image from 'next/image';

export default function QualtityCostRatio() {
    return (
        <div className={`px-md-4 px-3 py-lg-3 py-5 mt-lg-5 mt-0`}>
            <div className={`${styles.ContainerWidth}`}>
                <h2>The right development talent, only from Dreamstack</h2>
                <p className={`${styles.sectionBody}`}>Intelligent solutions require intelligent talent. We deeply vet and match the most suitable people for your solution—building customized teams across location, experience, technical expertise, and other key requirements.</p>
                <div className="row">
                    <h2 className={`py-3 ${styles.showAfterLGScrn}`} style={{ fontWeight: '540' }}>High quality/cost ratio</h2>
                    <div className={`col-lg-6 h-100 order-lg-2 text-center`} style={{ margin: 'auto' }}>
                        <Image src={Images11} alt='Dreamstack Trusted AI and machine learning Image' className='w-100 h-100' style={{ maxWidth: '400px' }} />
                    </div>
                    <div className={`col-lg-6 h-100`}>
                        <h2 className={`py-3 ${styles.hideAfterLGScrn}`} style={{ fontWeight: '540' }}>High quality/cost ratio</h2>
                        <ul>
                            <li className={`${styles.tag1}`}>
                                <h4><b>Deeply vetted developers at half the cost</b></h4>
                                <p style={{ lineHeight: '1.1', fontSize: '21px' }}>
                                    We're home to the top 1% of 2 million+ developers from 150+ countries
                                </p>
                            </li>
                            <li className={`mt-4 ${styles.tag2}`}>
                                <h4><b>100+ skills available</b></h4>
                                <p style={{ lineHeight: '1.1', fontSize: '21px' }}>
                                    We have React, Node, Python, Angular, Swift, React Native, Android, Java, Rails, Golang, DevOps, ML, Data Engineers, and more.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <h2 className={`py-3 ${styles.showAfterLGScrn}`} style={{ fontWeight: '540' }}>Highest-quality vetting</h2>
                    <div className={`col-lg-6 h-100 text-center`} style={{ margin: 'auto' }}>
                        <Image src={Images12} alt='Dreamstack Highest-quality vetting Image' style={{ maxWidth: '400px' }} className='w-100 h-auto' />
                    </div>
                    <div className={`col-lg-6 mt-5`}>
                        <h2 className={`py-3 ${styles.hideAfterLGScrn}`} style={{ fontWeight: '540' }}>Highest-quality vetting</h2>
                        <ul>
                            <li className={`${styles.tag3}`}>
                                <h4><b>5+ hours of tests and interviews</b></h4>
                                <p style={{ lineHeight: '1.1', fontSize: '21px' }}>
                                    More rigorous than Silicon Valley job interviews. We test for 100+ skills, data structures, algorithms, systems design, software specializations & frameworks.
                                </p>
                            </li>
                            <li className={`mt-4 ${styles.tag4}`}>
                                <h4><b>Seniority tests</b></h4>
                                <p style={{ lineHeight: '1.1', fontSize: '21px' }}>
                                    We select excellent communicators who can proactively take ownership of business and product objectives without micromanagement.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
