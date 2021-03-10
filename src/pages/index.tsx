import Link from 'next/link'
import Layout from '../components/Layout'
import 'semantic-ui-css/semantic.min.css'
import { LoremIpsum } from 'react-lorem-ipsum';

const IndexPage = () => (
  <Layout title="Home">
    <div>
      <h1>Welcome to my Website! 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p> 

      <LoremIpsum p={15} />
    </div>   

    
  </Layout>
)

export default IndexPage