
import Layout from '../components/Layout'
import 'semantic-ui-css/semantic.min.css'
import { Header } from 'semantic-ui-react'
import dynamic from "next/dynamic";

const JeffsMapDyn = dynamic(
  () => {
    return import("../components/JeffsMap")
  },
  {ssr: false}
)
const JeffsMapPage = () => (

  <Layout title="Jeff's Map of Algonquin Park">


      <Header size='huge'>Jeff's Map of Algonquin Park</Header>
      <p>Thank you to Jeff for your fantastic map, and for making it available under creative commons licensing. </p>
      <JeffsMapDyn/>
      {/* <iframe src="https://srv2.zoomable.ca/viewer.php?i=ZoomableAlgonquinMapRESIZEDv10" width='100%' height='800' frameBorder={0} style={{border: 0}} allowFullScreen />
 */}  

  </Layout>
)

export default JeffsMapPage
