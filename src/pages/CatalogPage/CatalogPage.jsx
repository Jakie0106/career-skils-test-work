import CatalogList from "../../components/Catalog/CatalogList/CatalogList.jsx";
import SearchForm from "../../components/Catalog/Form/Form.jsx";

const CatalogPage = () => {
  return (
    <div>
      <SearchForm />
      <CatalogList />
    </div>
  );
};

export default CatalogPage;
