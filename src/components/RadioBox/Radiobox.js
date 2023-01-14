import styles from "./Radiobox.css";

const Radiobox = ({ name, selectedItem, onChange }) => {
  const checked = name === selectedItem;
  return (
    <div>
      <input
        type="radio"
        name={name}
        id={name}
        value={name}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};
export default Radiobox;
