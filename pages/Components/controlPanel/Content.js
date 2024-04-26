import Image from 'next/image';
import Image1 from "../../media/Other-Images/Image1.png";
import styles from '../../../styles/controlPanel/Content.module.css';

export default function Content() {
    return (
        <div className="row">
            <div className="col-xl-3 col-md-4 px-5 pt-4">
                <h6 style={{ color: '#9C959B' }}><b>CONTENT</b></h6>
                <h6 style={{ color: '#605E75' }} className='pt-2'><b>📃 Article Manager</b></h6>
                <h6 style={{ color: '#605E75' }} className='pt-2'><b>📁 Category Manager</b></h6>
                <h6 style={{ color: '#605E75' }} className='pt-2'><b>🖼️ Media Manager</b></h6>

                <h6 style={{ color: '#9C959B' }} className='pt-4'><b>CONTENT</b></h6>
                <h6 style={{ color: '#605E75' }} className='pt-2'><b>🗂️ Menu Manager</b></h6>
                <h6 style={{ color: '#605E75' }} className='pt-2'><b>📦 Module Manager</b></h6>

                <h6 style={{ color: '#9C959B' }} className='pt-4'><b>USERS</b></h6>
                <h6 style={{ color: '#605E75' }} className='pt-2'><b>🙍‍♂️ User Manager</b></h6>

                <h6 style={{ color: '#9C959B' }} className='pt-4'><b>CONFIGURATION</b></h6>
                <h6 style={{ color: '#605E75' }} className='pt-2'><b>⚙️ Global CONFIGURATION</b></h6>
                <h6 style={{ color: '#605E75' }} className='pt-2'><b>👁️ Template Manager</b></h6>
                <h6 style={{ color: '#605E75' }} className='pt-2'><b>💬 Language Manager</b></h6>
            </div>
            <div className="col-xl-9 col-md-8">
                <ul className="list-group pt-4 px-5">
                    <li className="list-group-item" style={{ background: '#F5F5F5' }}><b className='text-muted'>Recently deleted/suspend content</b></li>
                    <li className="list-group-item" style={{ background: '#F5F5F5' }}>
                        <div className="row">
                            <div className={`col-lg-8 ${styles}`}>
                                <Image src={Image1} alt='Dreamstack New Post Image' width={'25'} />
                                &ensp;<b>Two birds fly</b> <i>uploaded by u/kitehero.</i>
                            </div>
                            <div className={`col-lg-4 ${styles.timeSide}`}>Deleted in 23 hrs</div>
                        </div>
                    </li>
                    <li className="list-group-item" style={{ background: '#F5F5F5' }}>
                        <div className="row">
                            <div className={`col-lg-8 ${styles}`}>
                                <Image src={Image1} alt='Dreamstack New Post Image' width={'25'} />
                                &ensp;<b>Two birds fly</b> <i>uploaded by u/kitehero.</i>
                            </div>
                            <div className={`col-lg-4 ${styles.timeSide}`}>Deleted in 23 hrs</div>
                        </div>
                    </li>
                    <li className="list-group-item" style={{ background: '#F5F5F5' }}>
                        <div className="row">
                            <div className={`col-lg-8 ${styles}`}>
                                <Image src={Image1} alt='Dreamstack New Post Image' width={'25'} />
                                &ensp;<b>Two birds fly</b> <i>uploaded by u/kitehero.</i>
                            </div>
                            <div className={`col-lg-4 ${styles.timeSide}`}>Deleted in 23 hrs</div>
                        </div>
                    </li>
                    <li className="list-group-item" style={{ background: '#F5F5F5' }}>
                        <div className="row">
                            <div className={`col-lg-8 ${styles}`}>
                                <Image src={Image1} alt='Dreamstack New Post Image' width={'25'} />
                                &ensp;<b>Two birds fly</b> <i>uploaded by u/kitehero.</i>
                            </div>
                            <div className={`col-lg-4 ${styles.timeSide}`}>Deleted in 23 hrs</div>
                        </div>
                    </li>
                    <li className="list-group-item" style={{ background: '#F5F5F5' }}>
                        <div className="row">
                            <div className={`col-lg-8 ${styles}`}>
                                <Image src={Image1} alt='Dreamstack New Post Image' width={'25'} />
                                &ensp;<b>Two birds fly</b> <i>uploaded by u/kitehero.</i>
                            </div>
                            <div className={`col-lg-4 ${styles.timeSide}`}>Deleted in 23 hrs</div>
                        </div>
                    </li>
                    <li className="list-group-item" style={{ background: '#F5F5F5' }}>
                        <div className="row">
                            <div className={`col-lg-8 ${styles}`}>
                                <Image src={Image1} alt='Dreamstack New Post Image' width={'25'} />
                                &ensp;<b>Two birds fly</b> <i>uploaded by u/kitehero.</i>
                            </div>
                            <div className={`col-lg-4 ${styles.timeSide}`}>Deleted in 23 hrs</div>
                        </div>
                    </li>
                    <li className="list-group-item" style={{ background: '#F5F5F5' }}>
                        <div className="row">
                            <div className={`col-lg-8 ${styles}`}>
                                <Image src={Image1} alt='Dreamstack New Post Image' width={'25'} />
                                &ensp;<b>Two birds fly</b> <i>uploaded by u/kitehero.</i>
                            </div>
                            <div className={`col-lg-4 ${styles.timeSide}`}>Deleted in 23 hrs</div>
                        </div>
                    </li>
                </ul>
                <ul className="list-group px-5 mt-5">
                    <li className="list-group-item" style={{ background: '#F5F5F5' }}><b className='text-muted'>Recently suspended users</b></li>
                    <li className="list-group-item" style={{ background: '#F5F5F5' }}>
                        <div className="row">
                            <div className={`col-lg-8 ${styles}`}>
                                <Image src={Image1} alt='Dreamstack New Post Image' width={'25'} />
                                &ensp;u/herokite <b style={{ color: 'red' }}>violation of DMCA</b>
                            </div>
                            <div className={`col-lg-4 ${styles.timeSide}`}>Suspended 15 hrs ago</div>
                        </div>
                    </li>
                    <li className="list-group-item" style={{ background: '#F5F5F5' }}>
                        <div className="row">
                            <div className={`col-lg-8 ${styles}`}>
                                <Image src={Image1} alt='Dreamstack New Post Image' width={'25'} />
                                &ensp;u/herokite <b style={{ color: 'red' }}>violation of DMCA</b>
                            </div>
                            <div className={`col-lg-4 ${styles.timeSide}`}>Suspended 15 hrs ago</div>
                        </div>
                    </li>
                    <li className="list-group-item" style={{ background: '#F5F5F5' }}>
                        <div className="row">
                            <div className={`col-lg-8 ${styles}`}>
                                <Image src={Image1} alt='Dreamstack New Post Image' width={'25'} />
                                &ensp;u/herokite <b style={{ color: 'red' }}>violation of DMCA</b>
                            </div>
                            <div className={`col-lg-4 ${styles.timeSide}`}>Suspended 15 hrs ago</div>
                        </div>
                    </li>
                    <li className="list-group-item" style={{ background: '#F5F5F5' }}>
                        <div className="row">
                            <div className={`col-lg-8 ${styles}`}>
                                <Image src={Image1} alt='Dreamstack New Post Image' width={'25'} />
                                &ensp;u/herokite <b style={{ color: 'red' }}>violation of DMCA</b>
                            </div>
                            <div className={`col-lg-4 ${styles.timeSide}`}>Suspended 15 hrs ago</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}