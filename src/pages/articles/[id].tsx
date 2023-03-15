import { getAllArticlesId } from 'lib/articles';

const getStaticPaths = () => {
  const paths = getAllArticlesId();
  return {
    paths,
    fallback: false,
  };
};

export default function Article() {
  return <></>;
}
