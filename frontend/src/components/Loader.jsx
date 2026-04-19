const Loader = ({ label = "Loading..." }) => (
  <div className="loader" role="status" aria-live="polite">
    <div className="loader__spinner" />
    <p>{label}</p>
  </div>
);

export default Loader;
