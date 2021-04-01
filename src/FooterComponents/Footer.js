import SiteInfo from "./SiteInfoComponents/SiteInfo";
import Languages from "./LanguagesComponents/Languages";

function Footer() {
  return (
    <div id="footer">
      <div id="footerContainer">
        <SiteInfo />
        <Languages />
      </div>
    </div>
  );
}

export default Footer;
