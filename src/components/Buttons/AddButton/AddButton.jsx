import PlusIcon from "../../../assets/icons/Tables/plus-dark.svg";
import "./AddButton.css";

const AddButton = ({ btnName, handleClick }) => {
  return (
    <div className="button-wrapper" onClick={handleClick}>
      <span className="plus-icon">
        <img src={PlusIcon} alt="" />
      </span>
      <button className="add-button">{btnName}</button>
    </div>
  );
};

export default AddButton;
