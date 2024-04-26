import Image from "next/image";
import { useEffect, useState } from "react";
import leftArrow from "../../media/Homepage-Images/leftArrow.png";
import rightArrow from "../../media/Homepage-Images/rightArrow.png";
import styles from '../../../styles/Homepage/KnowledgeSection.module.css';

export default function KnowledgeSection() {
    const [loading, setLoading] = useState(false);
    const [survey, setSurvey] = useState(1);

    useEffect(() => {
        setLoading(false);
    }, [survey]);

    const moveToSurvey = (surveyNumber) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSurvey(surveyNumber);
        }, 3000);
    };

    return (
        <div className="bg-black">
            <div className={`p-0 px-md-4 px-3 py-5`}>
                <div className={`${styles.ContainerWidth}`}>
                    {!loading ? (
                        <>
                            {(survey === 0) && (
                                <div className="row py-4">
                                    <div className="col-xxl-4 col-lg-6 offset-xxl-4 offset-lg-3 text-center">
                                        <div id={`${styles.divpos}`} className='px-2'>
                                            <h1 id={`${styles.para4}`}>Will the metaverse impact your business?</h1>
                                            <div style={{ float: 'left' }}>
                                                <Image src={leftArrow} id={`${styles.backButton}`} alt="back" width={84} height={80} onClick={() => moveToSurvey(3)} />
                                                <span id={`${styles.buttontext}`}>Metaverse</span>
                                            </div>
                                            <div style={{ float: 'right' }}>
                                                <span id={`${styles.buttontext2}`}>AI</span>
                                                <Image src={rightArrow} id={`${styles.frontButton}`} alt="front" width={78} height={70} onClick={() => moveToSurvey(3)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {(survey === 1) && (
                                <div className={`row ${styles.sectionRow} py-xxl-0 py-xl-4 py-1`}>
                                    <div className={`col-md-6`}>
                                        <h2 className={`${styles.subHeading} pb-4`}>BUILDING COLLECTIVE KNOWLEDGE</h2>
                                        <h2 className={`${styles.sectionTitle} text-white`}>Answer a few questions to discover a trove of insights customized for you.</h2>
                                    </div>
                                    <div className={`col-md-6 col-xxl-4 offset-xxl-1 text-center ${styles.imageColumn}`}>
                                        <div id={`${styles.divpos}`} className='px-2'>
                                            <h2 id={`${styles.para4}`}>When you hear ‘future tech’ what do you think of?</h2>
                                            <div style={{ float: 'left' }}>
                                                <Image src={leftArrow} id={`${styles.backButton}`} alt="back" width={84} height={80} onClick={() => moveToSurvey(0)} />
                                                <span id={`${styles.buttontext}`}>Metaverse</span>
                                            </div>
                                            <div style={{ float: 'right' }}>
                                                <span id={`${styles.buttontext2}`}>AI</span>
                                                <Image src={rightArrow} id={`${styles.frontButton}`} alt="front" width={78} height={70} onClick={() => moveToSurvey(2)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {(survey === 2) && (
                                <div className="row py-4">
                                    <div className="col-xxl-4 col-lg-6 offset-xxl-4 offset-lg-3 text-center">
                                        <div id={`${styles.divpos}`} className='px-2'>
                                            <h1 id={`${styles.para4}`}>How are you deploying AI in your business?</h1>
                                            <div style={{ float: 'left' }}>
                                                <Image src={leftArrow} id={`${styles.backButton}`} alt="back" width={84} height={80} onClick={() => moveToSurvey(3)} />
                                                <span id={`${styles.buttontext}`}>Metaverse</span>
                                            </div>
                                            <div style={{ float: 'right' }}>
                                                <span id={`${styles.buttontext2}`}>AI</span>
                                                <Image src={rightArrow} id={`${styles.frontButton}`} alt="front" width={78} height={70} onClick={() => moveToSurvey(3)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {(survey === 3) && (
                                <div className="row">
                                    <div className="col-xxl-4 col-lg-6 offset-xxl-4 offset-lg-3 text-center">
                                        <div id={`${styles.divpos}`} className='px-2 mt-md-4'>
                                            <h1 id={`${styles.para4}`}>Do you see more threats or opportunities?</h1>
                                            <div style={{ float: 'left' }}>
                                                <Image src={leftArrow} id={`${styles.backButton}`} alt="back" width={84} height={80} onClick={() => moveToSurvey(4)} />
                                                <span id={`${styles.buttontext}`}>Metaverse</span>
                                            </div>
                                            <div style={{ float: 'right' }}>
                                                <span id={`${styles.buttontext2}`}>AI</span>
                                                <Image src={rightArrow} id={`${styles.frontButton}`} alt="front" width={78} height={70} onClick={() => moveToSurvey(4)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {(survey === 4) && (
                                <div className={`row ${styles.sectionRow} text-white mt-4`}>
                                    <div className={`col-xxl-7`}>
                                        <h1 className={`${styles.sectionTitle2}`}>Most CEOs consider Artificial Intelligence the most impactful tech in their tool box today, Gartner's 2022 CEO survey reports.</h1>
                                    </div>
                                    <div className={`col-xxl-5`}>
                                        <h1 className={`${styles.subHeading}`} style={{ lineHeight: '2rem', letterSpacing: ".03125rem" }}>In an ideal state, Artificial Intelligence uses machines, computers mainly, to create a facsimile of human intelligence - but it's not bound by the constraints of an individual mind. 'Weak AI' - a misnomer - performs a specific use-case based function, while 'Strong AI' hopes to become self-aware.</h1>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center mt-lg-4 pt-lg-5 mt-4 pt-5">
                            <span className="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true" style={{ width: "30px", height: '30px' }}></span>
                            <br />
                            <h1 className="text-white">Ignite your transformation</h1>
                            <p className="text-white">We're matching your answers with the latest Dreamstack insights and expertise</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
