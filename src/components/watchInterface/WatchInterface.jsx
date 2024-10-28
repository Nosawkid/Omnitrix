const WatchInterface = ({
  currentIndex,
  onNext,
  onPrev,
  onChoose,
  chosenIndex,
  aliensArray,
}) => {
  return (
    <div style={styles.container}>
      {chosenIndex === 1 ? (
        <p style={{ color: "white", fontWeight: "bold", fontSize: "25px" }}>
          You have chosen {aliensArray[currentIndex].alienName}
        </p>
      ) : (
        <div style={styles.container}>
          {" "}
          <button onClick={onPrev} style={styles.arrowButton}>
            <span style={styles.arrow}>←</span>
          </button>
          {currentIndex > 0 && (
            <button onClick={onChoose} style={styles.centerButton}>
              Select
            </button>
          )}
          {currentIndex < 12 && (
            <button onClick={onNext} style={styles.arrowButton}>
              <span style={styles.arrow}>→</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b8ee33",
    padding: "10px 20px",
    borderRadius: "8px",
    width: "80%", // Adjust width as needed
    margin: "auto", // Center the container
    gap: "10px", // Add space between buttons
  },
  arrowButton: {
    backgroundColor: "transparent",
    border: "2px solid white", // White border for visibility
    borderRadius: "50%", // Round shape for the arrow buttons
    width: "50px", // Set a fixed width
    height: "50px", // Set a fixed height
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  centerButton: {
    backgroundColor: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    color: "#b8ee33",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  arrow: {
    fontSize: "24px",
  },
};

// Export the component
export default WatchInterface;
