import { getAllArticlesId, getArticleData } from 'lib/articles';

type ArticleDataProps = {
  articleData: {
    title: string;
    id: string;
    date: string;
  };
};

type ParamsProps = {
  params: {
    id: string;
  };
};
export default function Article({ articleData }: ArticleDataProps) {
  return (
    <>
      <p>{articleData.title}</p>
      <p>{articleData.id}</p>
      <p>{articleData.date}</p>
    </>
  );
}

export async function getStaticProps({ params }: ParamsProps) {
  const articleData = getArticleData(params.id);
  return {
    props: {
      articleData,
    },
  };
}
export async function getStaticPaths() {
  const paths = getAllArticlesId();
  return {
    paths,
    fallback: false,
  };
}
