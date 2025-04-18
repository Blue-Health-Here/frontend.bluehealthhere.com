import Footer from '../Footer';
import ServiceAgreementForm from './ServiceAgreementForm';
import ServiceAgreementHero from './ServiceAgreementHero';

const ServiceAgreement = () => {
  return (
    <div className="bg-white">
      <ServiceAgreementForm />
      <ServiceAgreementHero />
      <Footer />
    </div>
  );
};

export default ServiceAgreement;
