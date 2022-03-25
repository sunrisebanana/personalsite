import Layout from '../components/Layout'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'

const ResumePage = () => (
  <Layout title="Resume">
    <Container fluid text>
      <p>
        <br/>
          <img src={"resume.svg"} alt="Jaime Herzog Resume"/>
        <br/>
      </p>
    </Container>   
  </Layout>
)

export default ResumePage
