
import Layout from '../components/Layout'
import 'semantic-ui-css/semantic.min.css'

const JeffsMapPage = () => (

  <Layout title="Home">
      <iframe src="https://srv2.zoomable.ca/viewer.php?i=ZoomableAlgonquinMapRESIZEDv10" width='100%' height='900' frameBorder={0} style={{border: 0}} allowFullScreen />
  </Layout>
)

export default JeffsMapPage
