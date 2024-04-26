import Link from 'next/link';
import styles from '../../../styles/cloud/cloud.module.css';
import Image21 from "../../media/Cloud-New-Images/Image21.png";
import Image22 from "../../media/Cloud-New-Images/Image22.png";
import Image from 'next/image';

export default function Section9() {
    return (
        <div className={`p-0`}>
            <div style={{ backgroundImage: `url(${Image21.src})`, paddingTop: '100px', paddingBottom: '100px', backgroundSize: 'cover', backgroundPosition: '50%' }}>
                <div className={`${styles.ContainerWidth} text-white`}>
                    <div className="row">
                        <div className="col-lg-6 order-lg-2">
                            <Image src={Image22} alt='Dreamstack GenAI Image' className='w-100 h-100' />
                        </div>
                        <div className="col-lg-6" style={{ margin: 'auto' }}>
                            <h1 className={`${styles.sectionTitle2}`}>Discover your ROI with GenAI</h1>
                            <p className={`${styles.sectionBody} my-4`}>Efficient strategies make LLM training and development success possible.</p>
                            <p className={`${styles.sectionBody} my-4`}>Empower your research teams without sacrificing your budget or business goals with our tips on strategic use, development of minimum viable models, and prompt engineering for a variety of applications.</p>
                            <button type="button" className="btn btn-light px-3 py-2"><b>Download</b></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}  
