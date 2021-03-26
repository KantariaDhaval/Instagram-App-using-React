import SiteInfoList from "./SiteInfoList";

function SiteInfo() {
  const listOfInfo = [
    {
      id: 1,
      name: "About",
      infoLink: "",
    },
    {
      id: 2,
      name: "Blog",
      infoLink: "",
    },
    {
      id: 3,
      name: "Jobs",
      infoLink: "",
    },
    {
      id: 4,
      name: "Help",
      infoLink: "",
    },
    {
      id: 5,
      name: "API",
      infoLink: "",
    },
    {
      id: 6,
      name: "Privacy",
      infoLink: "",
    },
    {
      id: 7,
      name: "Terms",
      infoLink: "",
    },
    {
      id: 8,
      name: "Top Accounts",
      infoLink: "",
    },
    {
      id: 9,
      name: "Hashtag",
      infoLink: "",
    },
    {
      id: 10,
      name: "Location",
      infoLink: "",
    },
  ];
  return (
    <div id="siteInfo">
      <SiteInfoList list={listOfInfo} />
    </div>
  );
}

export default SiteInfo;
