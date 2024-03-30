const alertStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  backgroundColor: "gray",
  color: "white",
};

export default Alert = ({ children }) => {
  return <p style={alertStyles}>{children}</p>;
};