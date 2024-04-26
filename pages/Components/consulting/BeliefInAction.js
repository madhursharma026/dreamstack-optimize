import styles from '../../../styles/DataAndAnalytics/BeliefInAction.module.css';
import Image7 from "../../media/Consulting-Images/consulting-image-7.jpeg";
import Image8 from "../../media/Consulting-Images/consulting-image-8.jpeg";
import Image9 from "../../media/Consulting-Images/consulting-image-9.jpeg";
import Image10 from "../../media/Consulting-Images/consulting-image-10.jpeg";
import Image from 'next/image';

export default function BeliefInAction() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3 bg-black text-white`}>
            <div className={`${styles.ContainerWidth}`}>
                <h6 className={`${styles.sectionTitle}`}>Belief in action</h6>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <Image src={Image7} alt='Dreamstack Novolex Image' className={`w-100`} height='300' />
                            <div className='pt-3'>
                                <h4>Novolex integrates its ERP systems</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <Image src={Image8} alt='Dreamstack United Airlines Image' className={`w-100`} height='300' />
                            <div className='pt-3'>
                                <h4>United Airlines all set to fly higher</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <Image src={Image9} alt='Dreamstack Proximus Image' className={`w-100`} height='300' />
                            <div className='pt-3'>
                                <h4>Proximus joins hands with Dreamstack for enterprise agile transformation </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <Image src={Image10} alt='Dreamstack Extreme Networks Image' className={`w-100`} height='300' />
                            <div className='pt-3'>
                                <h4>Extreme Networks switches on subscription models</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
