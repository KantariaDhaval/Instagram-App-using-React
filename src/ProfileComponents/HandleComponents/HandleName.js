import { useSelector } from "react-redux";

function HandleName() {
  const { handleName } = useSelector((state) => state.profileData);
  return <div id="handleName">{handleName}</div>;
}

export default HandleName;
