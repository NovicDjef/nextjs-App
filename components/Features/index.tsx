import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-26 md:py-30 lg:py-38">
        <div className="container">
          <SectionTitle
            title="Services"
            paragraph="Nous disposons de plusieurs services, parmi lesquels l'installation et la maintenance des caméras de surveillance, l'équipement des salles informatiques des établissements scolaires et des entreprises, l'installation de logiciels de gestion, et la vente de matériel informatique."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
