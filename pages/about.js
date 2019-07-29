import Layout from "../components/MyLayout";

export default () => (
    <Layout>
        <p> This is the about page</p>
        <button onClick={() => alert('뒤로갑시다')}>go back</button>
    </Layout>
)