import Layout from '../components/Layout'
import 'semantic-ui-css/semantic.min.css'
import {
  Container,
  Header,
} from 'semantic-ui-react'

const IndexPage = () => (
  <Layout title="Home">
    <Container fluid text textAlign={'left'}>
      <Header size='huge'>Welcome to my website!</Header>
      <br/>
      This is my personal portfolio website, which contains my resume and some social media links, as well as some other personal projects 
      as I build them.
      <br/><br/>
      It was created in Typescript React, using Nextjs for project scaffolding, and semantic-ui-react for the visual components and styling. 
      <br/><br/>
      If you would like to check out the UX features I implemented to make this site as usable as possible, 
      please check out this website on mobile! Lots of time was spent working around semantic's lack of collapsable navbars, 
      and I think I enjoy my solution quite a bit. Additionally, check out my resume, which I created in latex and converted to HTML,
      and scroll down on desktop to see how the nicely the Navbar follows!
      <br/><br/>
      If you would like to see the Git repository for this website, click 
      <a target="_blank" href='https://github.com/sunrisebanana/personalsite'> here! </a>
      If you would like to see my honours project I completed to graduate at Carleton, click 
      <a target="_blank" href='https://github.com/sunrisebanana/ShotDetectionInvestigation/blob/master/shotdetection.py'> here </a>
      for the code itself and 
      <a target="_blank" href='https://github.com/sunrisebanana/ShotDetectionInvestigation/blob/master/Honours%20Project%20Report/Honours%20Project%20Report.pdf'> here </a>
      for the report on the results of my investigation.
      <br/><br/>
    </Container>
  </Layout>
)

export default IndexPage
