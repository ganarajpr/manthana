import Link from 'next/link';
import Footer from '../components/footer';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <div class='hero journal-bg min-h-screen bg-base-200'>
        <div class='hero-content text-center'>
          <div class='max-w-md'>
            <h1 class='text-5xl font-bold'>
              International Saṃskṛta Journal of Research
            </h1>
            <p class='py-6'>
              International Saṃskṛta Journal of Research is the world’s first
              open-access, peer-reviewed, Saṃskṛtam-only journal, aimed at
              Providing a platform for both traditional and modern scholars to
              discuss their research findings in Saṃskṛtam Constantly increasing
              the bar on Saṃskṛtam based research publications Bringing
              Saṃskṛtam research back to Saṃskṛta scholars.
            </p>
            <p className='py-6'>
            Please contact us through <a className='underline' href="mailto:editor@isjor.org">email</a> or through any of the social media channels listed below. 
            </p>
            <Link href="/about-us">
              <button class='btn btn-primary'>About Us</button>
            </Link>
            
          </div>
        </div>
        
      </div>
      <Footer/>
    </Layout>
  );
}
