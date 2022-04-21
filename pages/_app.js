import '../styles/globals.scss'
import 'antd/dist/antd.css';
import 'antd/es/tabs/style/index.css'
import Layout from '../src/components/layout';
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
