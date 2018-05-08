import Layout from '../components/Layout'
import Admin from '../components/admin/edit'

const Index = (props) => (
  <Layout title='แอดมิน - แก้ไขหนัง'  type='admin'>
    <Admin title='แก้ไขหนัง' data={props.url.query}/>
  </Layout>
)

export default Index