import Layout from '../components/Layout'
import 'semantic-ui-css/semantic.min.css'
import { LoremIpsum } from 'react-lorem-ipsum';

const AboutPage = () => (
  <Layout title="About">
    <h1>About</h1>
    <p>This is the about page</p>
    <LoremIpsum p={5} />
  </Layout>
)

export default AboutPage
