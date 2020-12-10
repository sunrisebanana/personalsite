import Link from 'next/link'
import Layout from '../components/Layout'
import 'semantic-ui-css/semantic.min.css'

const IndexPage = () => (
  <Layout title="Jaime Herzog's Personal Website">
    <div>
      <h1>Welcome to my Website! 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p> 
    </div>   

    
  </Layout>
)

export default IndexPage
