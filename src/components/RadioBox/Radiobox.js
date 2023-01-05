const Radiobox = ({ name, selectedItem, onChange }) => {
  return (
    <div>
      <input
        type="radio"
        name={name}
        id={name}
        value={name}
        onChange={onChange}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};
export default Radiobox;
