import SiteInfoList from "./SiteInfoList";
import { listOfInfo } from "../footerData";

function SiteInfo() {
  return (
    <div id="siteInfo">
      <SiteInfoList list={listOfInfo} />
    </div>
  );
}

export default SiteInfo;
