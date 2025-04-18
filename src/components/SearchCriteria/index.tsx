import Footer from '../Footer';
import CriteriaHero from './SearchCriteriaHero';
import CriteriaForm from './SearchCriteriaForm';

const SearchCriteria = () => {
  return (
    <div className="bg-white">
      <CriteriaForm />
      <CriteriaHero />
      <Footer />
    </div>
  );
};

export default SearchCriteria;
