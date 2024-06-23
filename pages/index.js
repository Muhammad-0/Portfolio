import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Services from '../components/Services'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Muhammad | MERN Stack Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/public/assets/logo.png" />
      </Head>
    <Main />
    <About />
    <Services/>
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
