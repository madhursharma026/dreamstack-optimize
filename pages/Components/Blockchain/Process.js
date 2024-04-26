import Image from 'next/image';
import styles from '../../../styles/Blockchain/Process.module.css';
import Images8 from "../../media/Blockchain-Images/blockchain-image-8.png";
import Images9 from "../../media/Blockchain-Images/blockchain-image-9.jpg";
import Images10 from "../../media/Blockchain-Images/blockchain-image-10.png";
import Images11 from "../../media/Blockchain-Images/blockchain-image-11.png";
import Images12 from "../../media/Blockchain-Images/blockchain-image-12.png";
import Images13 from "../../media/Blockchain-Images/blockchain-image-13.png";
import Images14 from "../../media/Blockchain-Images/blockchain-image-14.png";

export default function Process() {
    return (
        <>
            <div className={`${styles.bodyContainer} py-5`}>
                <div className="px-md-4 px-3">
                    <div className={`py-5 ${styles.ContainerWidth}`}>
                        <div className="text-center">
                            <h1 className={`${styles.sectionTitle}`}><b>Our Blockchain App Development Process</b></h1>
                            <br />
                        </div>
                        <br />

                        <div className="row px-xxl-5 text-center">
                            <div className="col-6 col-md-3 mt-3" style={{ margin: 'auto' }}>
                                <div className="card" style={{ border: '2px solid red' }}>
                                    <div className="card-body">
                                    <Image src={Images8} alt="Dreamstack Conceptualizing Image" width="100"  />
                                        <p className={`card-subtitle mt-2 text-body-secondary ${styles.h6CustomFont}`}><b>Conceptualizing</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 mt-3" style={{ margin: 'auto' }}>
                                <div className="card" style={{ border: '2px solid red' }}>
                                    <div className="card-body">
                                    <Image src={Images9} alt="Dreamstack Business Analysis Image" width="100"  />
                                        <p className={`card-subtitle mt-2 text-body-secondary ${styles.h6CustomFont}`}><b>Business Analysis</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 mt-3" style={{ margin: 'auto' }}>
                                <div className="card" style={{ border: '2px solid red' }}>
                                    <div className="card-body">
                                    <Image src={Images10} alt="Dreamstack Goal Setting Image" width="100"  />
                                        <p className={`card-subtitle mt-2 text-body-secondary ${styles.h6CustomFont}`}><b>Goal Setting</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 mt-3" style={{ margin: 'auto' }}>
                                <div className="card" style={{ border: '2px solid red' }}>
                                    <div className="card-body">
                                    <Image src={Images11} alt="Dreamstack Roadmap Image" width="100"  />
                                        <p className={`card-subtitle mt-2 text-body-secondary ${styles.h6CustomFont}`}><b>Roadmap</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 mt-3" style={{ margin: 'auto' }}>
                                <div className="card" style={{ border: '2px solid red' }}>
                                    <div className="card-body">
                                    <Image src={Images12} alt="Dreamstack Prototyping Image" width="100"  />
                                        <p className={`card-subtitle mt-2 text-body-secondary ${styles.h6CustomFont}`}><b>Prototyping</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 mt-3" style={{ margin: 'auto' }}>
                                <div className="card" style={{ border: '2px solid red' }}>
                                    <div className="card-body">
                                    <Image src={Images13} alt="Dreamstack Development Image" width="100"  />
                                        <p className={`card-subtitle mt-2 text-body-secondary ${styles.h6CustomFont}`}><b>Development</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 mt-3" style={{ margin: 'auto' }}>
                                <div className="card" style={{ border: '2px solid red' }}>
                                    <div className="card-body">
                                    <Image src={Images14} alt="Dreamstack Testing Image" width="100"  />
                                        <p className={`card-subtitle mt-2 text-body-secondary ${styles.h6CustomFont}`}><b>Testing</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 mt-3" style={{ margin: 'auto' }}>
                                <div className="card" style={{ border: '2px solid red' }}>
                                    <div className="card-body">
                                    <Image src={Images14} alt="Dreamstack Deployment Image" width="100"  />
                                        <p className={`card-subtitle mt-2 text-body-secondary ${styles.h6CustomFont}`}><b>Deployment</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

