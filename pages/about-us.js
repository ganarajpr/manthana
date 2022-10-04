import Link from 'next/link';
import Footer from '../components/footer';
import Layout from '../components/layout';

export default function AboutUs() {
  return (
    <Layout className="bg-slate-50 journal-bg">
      <div class='overflow-x-auto mx-auto'>
        <table class='table table-zebra w-full mt-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Affiliation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dr. Gowrishankara Shenai Devadas</td>
              <td>Principal In charge, SVJV Sanskrit College, Kovvu</td>
            </tr>
            <tr>
              <td>Dr. Dhanjaraya Rao</td>
              <td>Director at Purnapramati SIGACCT, Bangalore</td>
            </tr>
            <tr>
              <td>Dr. Sushruta S</td>
              <td>Amrita Vishwa Vidyapeetam</td>
            </tr>
            <tr>
              <td>Srinivas Jammalamdaka</td>
              <td>KKSU, Ramtek</td>
            </tr>
            <tr>
              <td>Suryanarayana Jammalamdaka</td>
              <td>MIT IIKS, Hyderabad</td>
            </tr>
            <tr>
              <td>Aruna</td>
              <td>Independent</td>
            </tr>
            <tr>
              <td>Chaitanya S Lakkundi</td>
              <td>Karnataka Samskrit University, Bengaluru</td>
            </tr>
            <tr>
              <td>Ganaraj Permunda</td>
              <td>Independent</td>
            </tr>
            <tr>
              <td>Karthikeyan Madathil</td>
              <td>Independent</td>
            </tr>
            <tr>
              <td>Sriram Subramanian</td>
              <td>Independent</td>
            </tr>
            <tr>
              <td>Karthikeyan Madathil</td>
              <td>Hindu University of America</td>
            </tr>
            <tr>
              <td>C S Yogananda</td>
              <td>Independent</td>
            </tr>
            <tr>
              <td>Yajnadevam</td>
              <td>Independent</td>
            </tr>
          </tbody>
        </table>
          </div>
          <Footer/>
    </Layout>
  );
}
