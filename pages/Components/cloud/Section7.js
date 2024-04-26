import Image from 'next/image';
import styles from '../../../styles/cloud/cloud.module.css';
import Image13 from "../../media/Cloud-New-Images/Image13.svg";
import Image14 from "../../media/Cloud-New-Images/Image14.svg";
import Image15 from "../../media/Cloud-New-Images/Image15.svg";
import Image16 from "../../media/Cloud-New-Images/Image16.svg";
import Image17 from "../../media/Cloud-New-Images/Image17.svg";
import Image18 from "../../media/Cloud-New-Images/Image18.svg";
import Image19 from "../../media/Cloud-New-Images/Image19.png";
import Image20 from "../../media/Cloud-New-Images/Image20.png";

export default function Section7() {
    return (
        <div className='pb-5 text-white' style={{ background: "#0F0F0F" }}>
            <div className={`py-5`}>
                <div className={`${styles.ContainerWidth}`}>
                    <div className="py-md-5 text-center">
                        <h1 className={`${styles.sectionTitle2}`} style={{ maxWidth: '700px', margin: 'auto' }}>Accelerating innovation with AI-powered <span className='text-primary'>implementation</span></h1>
                    </div>
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card w-100 p-3 mt-3" style={{ background: '#262626' }}>
                                        <div className="card-body">
                                            <Image src={Image13} alt="Dreamstack Success Rate Image" />
                                            <h1 className="card-title mt-3">
                                                95% trial success rate
                                            </h1>
                                            <h5>for smarter, more productive teams</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card w-100 p-3 mt-3" style={{ background: '#262626' }}>
                                        <div className="card-body">
                                            <Image src={Image13} alt="Dreamstack Success Rate Image" />
                                            <h1 className="card-title mt-3">
                                                95% trial success rate
                                            </h1>
                                            <h5>for smarter, more productive teams</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className={`card w-100 mt-3 ${styles.combinedCardBeforeSMScrn}`} style={{ background: '#262626' }}>
                                        <div className="card-body p-0">
                                            <div className="row">
                                                <div className="col-6">
                                                    <Image src={Image19} alt="Dreamstack Professionals Image" className='w-100 h-100' />
                                                </div>
                                                <div className="col-6" style={{ margin: 'auto' }}>
                                                    <h1 className="card-title">
                                                        3 million+ technical professionals
                                                    </h1>
                                                    <h5>from 150 countries available through our network</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className={`card w-100 mt-3 ${styles.combinedCardBeforeXLScrn}`} style={{ background: '#262626' }}>
                                <Image src={Image20} alt="Dreamstack Experience Professionals Image" className='card-img-top w-100 h-100' />
                                <div className="card-body p-5">
                                    <h1 className="card-title">
                                        125+ combined years of experience
                                    </h1>
                                    <h5>for innovative business outcomes</h5>
                                </div>
                            </div>
                            <div className={`card w-100 mt-3 ${styles.combinedCardAfterXLScrn}`} style={{ background: '#262626' }}>
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-6 p-4" style={{ margin: 'auto' }}>
                                            <h1 className="card-title">
                                                125+ combined years of experience
                                            </h1>
                                            <h5>for innovative business outcomes</h5>
                                        </div>
                                        <div className="col-6">
                                            <Image src={Image20} alt="Dreamstack Experience Professionals Image" className='card-img-top w-100 h-100' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`card w-100 mt-3 ${styles.combinedCardAfterSMScrn}`} style={{ background: '#262626' }}>
                                <Image src={Image19} alt="Dreamstack Success Rate Image" />
                                <div className="card-body">
                                    <h1 className="card-title">
                                        3 million+ technical professionals
                                    </h1>
                                    <h5>from 150 countries available through our network</h5>
                                </div>
                            </div>
                            <div className={`card w-100 mt-3 ${styles.combinedCardAfterSMScrn}`} style={{ background: '#262626' }}>
                                <Image src={Image20} alt="Dreamstack Success Rate Image" />
                                <div className="card-body">
                                    <h1 className="card-title">
                                        125+ combined years of experience
                                    </h1>
                                    <h5>for innovative business outcomes</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card w-100 p-3 mt-3" style={{ background: '#262626' }}>
                                <div className="card-body">
                                    <Image src={Image14} alt="Dreamstack Success Rate Image" />
                                    <h1 className="card-title mt-3">
                                        95% trial success rate
                                    </h1>
                                    <h5>for smarter, more productive teams</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card w-100 p-3 mt-3" style={{ background: '#262626' }}>
                                <div className="card-body">
                                    <Image src={Image15} alt="Dreamstack Success Rate Image" />
                                    <h1 className="card-title mt-3">
                                        95% trial success rate
                                    </h1>
                                    <h5>for smarter, more productive teams</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card w-100 p-3 mt-3" style={{ background: '#262626' }}>
                                <div className="card-body">
                                    <Image src={Image16} alt="Dreamstack Success Rate Image" />
                                    <h1 className="card-title mt-3">
                                        95% trial success rate
                                    </h1>
                                    <h5>for smarter, more productive teams</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card w-100 p-3 mt-3" style={{ background: '#262626' }}>
                                <div className="card-body">
                                    <Image src={Image17} alt="Dreamstack Success Rate Image" />
                                    <h1 className="card-title mt-3">
                                        95% trial success rate
                                    </h1>
                                    <h5>for smarter, more productive teams</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card w-100 p-3 mt-3" style={{ background: '#262626' }}>
                                <div className="card-body">
                                    <Image src={Image18} alt="Dreamstack Success Rate Image" />
                                    <h1 className="card-title mt-3">
                                        95% trial success rate
                                    </h1>
                                    <h5>for smarter, more productive teams</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

