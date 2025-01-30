import CatalogList from "../../components/Catalog/CatalogList/CatalogList.jsx";
import SearchForm from "../../components/Catalog/Form/Form.jsx";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className="container">
      <div className={s.catalogPageContainer}>
        <SearchForm />
        <CatalogList />
      </div>
    </div>
  );
};

export default CatalogPage;
