import Layout from "../components/MyLayout";
import Link from "next/link";

const PostLink = props => {
  return (
    // 퀴리 문자열을 통해 데이터를 전달 `title`쿼리 파리미터
    <li>
      <Link href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
};

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Hello Ria.js" />
      <PostLink title="Hello Seulbi.js" />
    </ul>
  </Layout>
);
