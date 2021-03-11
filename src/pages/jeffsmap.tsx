
import Layout from '../components/Layout'
import 'semantic-ui-css/semantic.min.css'
import { Header } from 'semantic-ui-react'

const JeffsMapPage = () => (

  <Layout title="Home">
      <Header size='huge'>Jeff's Map of Algonquin Park</Header>
      <p>Thank you to Jeff for your fantastic map, and your creative commons licensing. </p>
      <iframe src="https://srv2.zoomable.ca/viewer.php?i=ZoomableAlgonquinMapRESIZEDv10" width='100%' height='800' frameBorder={0} style={{border: 0}} allowFullScreen />
  </Layout>
)

export default JeffsMapPage
