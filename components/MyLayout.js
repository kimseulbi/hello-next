import Header from "./Header";
import Head from 'next/head';

const layoutStyle = {
    marginRight: 20,
    padding: 20,
    border: '1px solid #DDD'
}

const Layout = (props) => (
    <>
        <Head>
            <title>Hello next</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <div style={layoutStyle}>
            <Header />
            {props.children}
        </div>
    </>
)

export default Layout