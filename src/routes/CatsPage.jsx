import CatList from "../components/CatList";
import Layout from "../Layout/Layout";

function CatsPage() {
  return (
    <Layout>
      <div className="cat-listing-page">
        <CatList />
      </div>
    </Layout>
  );
}

export default CatsPage;
