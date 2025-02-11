import PlusIcon from "../../../assets/icons/Tables/plus-light.svg";
import "./ImportButton.css";

const ImportButton = ({ btnName, handleChange }) => {
  return (
    <div className="importBtn-wrapper">
      <span className="plus-icon">
        <img src={PlusIcon} alt="" />
      </span>
      <button className="import-button">{btnName}</button>
    </div>
  );
};

export default ImportButton;
