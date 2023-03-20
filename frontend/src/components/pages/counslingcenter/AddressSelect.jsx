function AddressSelect(props) {
  return (
    <div>
      <select>
        {props.sido.map((sido) => (
          <option
            value={sido.value}
            defaultValue={props.defaultValue === sido.value}
          >
            {sido.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AddressSelect;
