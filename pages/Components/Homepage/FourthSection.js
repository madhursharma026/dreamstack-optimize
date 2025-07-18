import styles from '../../../styles/Homepage/ThirdSection.module.css'

export default function FourthSection() {
  return (
    <div className={`px-md-4 px-3 my-5 ${styles.IntroSection}`}>
      <div className={`${styles.ContainerWidth}`}>
        <div className="row">
          <div className="col-xxl-8 col-lg-7 mt-4">
            <div className="h-100 d-flex flex-column justify-content-between">
              <p
                className="fs-1"
                style={{
                  fontWeight: '800',
                  fontFamily: 'FortExtraBold,Arial,sans-serif',
                }}
              >
                BlackRock completes acquisition of HPS Investment Partners
              </p>
              <p className="fw-bold fs-5 pb-3">
                Together with HPS, we’re positioned to meet accelerating client
                demands with integrated, best-in-class public and private
                solutions.
              </p>
              <p className="fw-bold m-0">
                <span className="text-danger">❯</span> Read the press release
              </p>
              <hr className="mt-4 mb-0 d-lg-block d-none" />
            </div>
          </div>

          <div className="col-xxl-4 col-lg-5 bg-black text-white p-4 mt-4">
            <div className="h-100">
              <p
                className="fs-2 pb-3"
                style={{
                  fontWeight: '800',
                  fontFamily: 'FortExtraBold,Arial,sans-serif',
                }}
              >
                Stay current with the latest news and announcements from
                BlackRock.
              </p>
              <p
                style={{
                  fontWeight: '800',
                  fontFamily: 'FortExtraBold,Arial,sans-serif',
                }}
              >
                <span className="text-danger">❯</span> Read and subscribe to
                BlackRock News
              </p>
            </div>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-lg-6 mt-5">
            <div
              className={`card h-100 rounded-0 ${styles.cardDesign}`}
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.15) 0px 8px 24px',
                background: 'white',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <div className="card-body p-4">
                <h6
                  className="mb-4"
                  style={{
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                    position: 'relative',
                    display: 'inline-block',
                  }}
                >
                  BLACKROCK BULLETIN
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-3px',
                      left: '0',
                      width: '25px',
                      height: '3px',
                      backgroundColor: '#FF4C00',
                    }}
                  ></span>
                </h6>

                <p className="fw-bold fs-2">
                  Our latest views on market volatility
                </p>

                <p className="fs-5">
                  BlackRock investment experts share insights on the fast-moving
                  developments of U.S. trade protectionism, the global response,
                  and what it means for the world’s financial markets.
                </p>
              </div>
              <button
                type="button"
                className="d-flex align-items-center p-0 border-0 bg-transparent"
              >
                <span
                  className="px-3 py-2"
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                  }}
                >
                  ❯
                </span>
                <span className="ms-3 fs-6 fw-bold">
                  Read our Investment Stewardship report
                </span>
              </button>
            </div>
          </div>

          <div className="col-lg-6 mt-5">
            <div
              className={`card h-100 rounded-0 ${styles.cardDesign}`}
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.15) 0px 8px 24px',
                background: 'white',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <div className="card-body p-4">
                <h6
                  className="mb-4"
                  style={{
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                    position: 'relative',
                    display: 'inline-block',
                  }}
                >
                  INVESTMENT STEWARDSHIP
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-3px',
                      left: '0',
                      width: '25px',
                      height: '3px',
                      backgroundColor: '#FF4C00',
                    }}
                  ></span>
                </h6>

                <p className="fw-bold fs-2">
                  Explore our 2024 annual report on Investment Stewardship
                </p>

                <p className="fs-5">
                  Investment stewardship is core to our role as an asset manager
                  and fiduciary to our clients. Read our latest annual report to
                  learn more about BlackRock’s stewardship activities on behalf
                  of our clients last year.
                </p>
              </div>
              <button
                type="button"
                className="d-flex align-items-center p-0 border-0 bg-transparent"
              >
                <span
                  className="px-3 py-2"
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                  }}
                >
                  ❯
                </span>
                <span className="ms-3 fs-6 fw-bold">
                  Read our Investment Stewardship report
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
