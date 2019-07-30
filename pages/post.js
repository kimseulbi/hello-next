import Layout from "../components/MyLayout";

const Content = props => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
);

// url prop는 페이지의 메인컴포넌트에만 전달되기 때문에 페이지에서 사용되는 다른 컴포넌트에는 전달이 되지 않습니다.
// 필요하다면 아래와 같이 사용
export default props => (
  <Layout>
    <Content url={props.url} />
  </Layout>
);
