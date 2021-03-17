import Layout from '../components/Layout'
import 'semantic-ui-css/semantic.min.css'
import {
  Container,
  Header
} from 'semantic-ui-react'

const AboutPage = () => (
  <Layout title="Contact">
    <Container fluid text textAlign={'left'}>
      <Header size='huge'>Contact</Header>
      <br/>
      <p>If you'd like to get in touch with me, either to work collaboratively or if you're an employer interested in my experience, please get in touch via email:</p>
      <p>jaime.herzog1@gmail.com</p>
      <p>Alternatively, you can get in touch on LinkedIn using the link in the bar.</p>
    </Container>
  </Layout>
)

export default AboutPage
