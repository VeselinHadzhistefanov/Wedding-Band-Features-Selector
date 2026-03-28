function WeddingBandFeatureSelector(props) {
  let {title, description, options} = props

  let radioButtons = options.map(option =>
    <label>
      <input type="radio" name={title} value={option} />
      {option}
      <br></br>
    </label>
  );

  return (
    <fieldset>
      <legend>{description}</legend>
      <p style={{ textAlign: "start" }}>
        {radioButtons}
      </p>
    </fieldset>
  );
}

export { WeddingBandFeatureSelector}