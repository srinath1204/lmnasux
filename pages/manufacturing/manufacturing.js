import Layout from '../../components/layout'
import Whylmnas from './whylmnas'
import MAIN from './main'
export default function Manufacturing(manufacturing){
    return(
            <Layout>
            <section class="bg-white my-12 mx-6">
            <section class="bg-pink-25 md:px-12">
            <Whylmnas></Whylmnas>
            <MAIN></MAIN>
            </section>
           </section>
       </Layout>
    )
}