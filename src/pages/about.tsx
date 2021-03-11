import Layout from '../components/Layout'
import 'semantic-ui-css/semantic.min.css'
import {
  Container,
  Header,
} from 'semantic-ui-react'

const AboutPage = () => (
  <Layout title="About">
    <Container text textAlign={'left'}>
    <br/>
      <Header size='huge'>About</Header>
      <br/>
      This is my personal portfolio website, which contains my resume and some social media links, as well as some other personal projects as I build them.
      <br/><br/>
      It was created in Typescript React, using Nextjs for project scaffolding, and semantic-ui-react for the visual components and styling. 
      <br/><br/>
      Please check out this website on mobile! Lots of time was spent working around semantic's lack of collapsable navbars, and I think I enjoy my solution quite a bit. 
      <br/><br/>
      If you would like to see more about my honours project I completed to graduate at Carleton, click <a href='https://service.scs.carleton.ca/content/honours-project-jaime-herzog-april-16-2020-655pm'>here!</a>
    </Container>
  </Layout>
)

export default AboutPage
