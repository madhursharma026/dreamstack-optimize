import styles from '../../../styles/Homepage/FirstSection.module.css'

export default function FirstSection() {
  return (
    <div className={`px-md-4 px-3 py-lg-0 py-5 mt-5 ${styles.IntroSection}`}>
      <div className={`${styles.ContainerWidth}`}>
        <div className="row">
          <div className={`col-lg-6 py-5 mt-xxl-5`}>
            <h1
              className={`${styles.sectionTitle} pt-md-5 pt-3 text-white pb-4`}
            >
              <b>
                Build an AI-Ready, Trusted Data Foundation for your Enterprise
              </b>
            </h1>
            <p className={`${styles.sectionBody} text-white pb-4`}>
              Connect every data silo, control your business definitions, and
              consume trusted data in any application — without the cost and
              complexity of data warehouses and integration.
            </p>
            <button type="button" className={styles.customHoverButton}>
              <b>
                <span className="text-danger">❯</span> Read the Midyear Global
                Outlook
              </b>
            </button>
          </div>
          <div className={`col-lg-6 pb-lg-0 pb-3`}>
            <img
              src="https://www.blackrock.com/blk-corp-assets/cache-1751291721000/images/media-bin/web/global/banner/2025-midyear-outlook-hero-web-banner.webp"
              alt="#ImgNotFound"
              className={styles.imgStyle}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
