function ProgressBar({progress}){
    return(
        <div style={styles.container}>
            <div style={{ ...styles.filler, width: `${progress}%` }}>
                <span style={styles.label}>{progress}%</span>
            </div>
        </div>
    );
};

const styles = {
  container: {
    height: 25,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 5,
    margin: 5,
  },
  filler: {
    height: "100%",
    backgroundColor: "#007bff",
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 0.5s ease-in-out",
  },
  label: {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  },
};



export default ProgressBar;