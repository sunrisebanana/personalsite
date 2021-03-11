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

      <p>
        <br/>
        <img 
        src={"img1.svg"}
        alt="\begin{rsection}{education}
        \par
        {\bf carleton university} \hfill {september 201...
        ...tream, minor in mathematics \\
        gpa: 9.6/12 (normalized 3.5)
        \par
        \end{rsection}"/>
        <br/>
      </p>
<p>
<br/>
<img 
 src={"img2.svg"}
 alt="\begin{rsection}{skills}
\par
\begin{tabular}{ @{} &gt;{\bfseries }l @{\hspace{6ex}...
...ework \\
tools &amp; git, github, docker, svn
\par
\end{tabular}\par
\end{rsection}"/>
<br/>
</p>
<p>
<br/>
<img 
 src={"img3.svg"}
 alt="\begin{rsection}{experience}
\begin{rsubsection}{infosys ltd.}{november 2020 - c...
...nd output these graphs in the proper format
\end{rsubsection}\par
\end{rsection}"/>
<br/>
</p>
<p>
<br/>
<img 
 src={"img4.svg"}
 alt="\begin{rsection}{projects}
\par
\begin{rsubsection}{brackit}{january 2020 - marc...
...ustrate the system’s backend and frontend
\end{rsubsection}\par
\end{rsection}"/>
<br/>
</p>
    </div>   

    
  </Layout>
)

export default IndexPage
