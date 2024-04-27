import Image from 'next/image';
import styles from '../../../styles/Solution/Section1.module.css';
import Images1 from "../../media/Solution-Images/solution-image-1.jpg";
import Images2 from "../../media/Homepage-Images/homepage-image-2.png";
import Images3 from "../../media/Homepage-Images/homepage-image-3.png";
import Head from 'next/head';

export default function Section1() {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>
            <div className={`p-0 mt-5`}>
                <div className="bg-primary">
                    <div className={`${styles.ContainerWidth}`}>
                        <div className={`row`}>
                            <div className={`col-lg-6 order-lg-2`}>
                                <Image src={Images1} alt='Dreamstack Timesheet Battle Image' className={`${styles.imgStyle} w-100 h-100`} />
                            </div>
                            <div className={`col-lg-6`}>
                                <div className={`py-lg-5 pb-5 ${styles.rightSide} px-md-4 px-3`}>
                                    <h1 className={`${styles.sectionTitle} pt-md-5 pt-3 text-white`}><b>End the timesheet battle with simpler agency time trackingg</b></h1>
                                    <button type="button" className={`btn ${styles.openPositionBtn}`} style={{ marginRight: "10px" }}>View open positions</button>
                                    <button type="button" className={`btn ${styles.salesBtn}`} style={{ marginLeft: "10px" }}>Talk to sales</button>
                                    <p className='mt-4 text-white'>No credit card required. <br className={`${styles.BRTagAfterMDScrn}`} /> Available for:
                                        &ensp;
                                        <i class="fa fa-apple fs-3" />
                                        &ensp;
                                        <i class="fa fa-android fs-3" />
                                    </p>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <Image src={Images2} alt='Dreamstack Tag 1' className={`h-auto w-auto`} />
                                            <h6 className='p-2'>⭐⭐⭐⭐⭐</h6>
                                        </div>
                                        <div className="col-lg-4">
                                            <Image src={Images3} alt='Dreamstack Tag 2' className={`h-auto w-auto`} />
                                            <h6 className='p-2'>⭐⭐⭐⭐⭐</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`py-5 my-5 ${styles.ContainerWidth}`}>
                    <div className="mx-xl-5 px-xl-5">
                        <div className="row">
                            <div className="col-4 text-center">
                                <span style={{ fontSize: "36px" }}>📄</span>
                                <p className={`${styles.sectionBody}`}><b>Automated timesheets for agencies</b></p>
                            </div>
                            <div className="col-4 text-center">
                                <span style={{ fontSize: "36px" }}>📄</span>
                                <p className={`${styles.sectionBody}`}><b>Track costs and project profitability with budgets</b></p>
                            </div>
                            <div className="col-4 text-center">
                                <span style={{ fontSize: "36px" }}>📄</span>
                                <p className={`${styles.sectionBody}`}><b>Streamlined payroll and invoicing</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

