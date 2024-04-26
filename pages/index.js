import Head from "next/head";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LoveTheWeb from "./Components/Homepage/LoveTheWeb";
import Testimonial from "./Components/Homepage/Testimonial";
import IntroSection from "./Components/Homepage/IntroSection";
import Productivity from "./Components/Homepage/productivity";
import PartnerWithUs from "./Components/Homepage/PartnerWithUs";
import MorePowerToYou from "./Components/Homepage/MorePowerToYou";
import CustomersSlider from "./Components/Homepage/CustomersSlider";
import KnowledgeSection from "./Components/Homepage/KnowledgeSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Get fully managed tech services - Dreamstack</title>
        <meta name="language" content="English" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="Dreamstack" />
        <link rel="canonical" href="https://dreamstack.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://dreamstack.com/" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta property="article:modified_time" content="2024-02-29T05:45:19+00:00" />
        <meta property="og:title" content="Get fully managed tech services - Dreamstack" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="title" content="Dreamstack: Revolutionizing Remote Hiring for Businesses" />
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <meta name="keywords" content="dream stack, dreamstack, cloud AI, cybersecurity, blockchain, data analysis, business solution" />
        <meta name="description" content="Dreamstack provide you fully managed tech services. Use Dream Stack to boost your business growth" />
        <meta name="description" content="Transform your business with Dreamstack's innovative tech solutions! Cloud services, AI, data analytics, cybersecurity & blockchain - unlock your potential now!" />
        <script type="application/ld+json">
          {JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", "name": "dreamstack", "alternateName": "Dream Stack", "url": "https://dreamstack.com/", "logo": "https://dreamstack.com/_next/static/media/logo.c0eacf83.jpg" })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({ "@context": "https://schema.org/", "@type": "WebSite", "name": "dreamstack", "url": "https://dreamstack.com/", "potentialAction": { "@type": "SearchAction", "target": "{search_term_string}", "query-input": "required name=search_term_string" } })}
        </script>
      </Head>
      <Header />
      <IntroSection />
      <MorePowerToYou />
      <Testimonial />
      <CustomersSlider />
      <Productivity />
      <KnowledgeSection />
      <PartnerWithUs />
      <LoveTheWeb />
      <Footer />
    </>
  )
}

