import './App.css';
function GreetingHours({ name }) {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
    const style = {
        backgroundColor: "green",
        color: "white",
        padding: "10px",
        borderRadius: "10px",
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
        margin: "20px",
        width: "400px",
        height: "150px",
        display: "inline-block",
        border: "3px solid black",
    };

    return (
      <>
      <p>1)External CSS</p>
        <div className="morning">
          <h1>Good Morning {name}</h1>
          <h2>
            {hours}:{minutes}
          </h2>
        </div>

        <p>2)Inline CSS</p>
        <div style={style}>
          <h1>Good Afternoon {name}</h1>
          <h2>
            {hours}:{minutes}
          </h2>
        </div>

        <p>3)Inline CSS and External CSS</p>
        <div style={{ backgroundColor: "yellow",
        color: "white",
        padding: "10px",
        borderRadius: "10px",
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
        margin: "20px",
        width: "400px",
        height: "150px",
        display: "inline-block",
        border: "3px solid black",
    }}>
          <h1>Good Evening {name}</h1>
          <h2>
            {hours}:{minutes}
          </h2>
        </div>
      </>
    );
}

export default GreetingHours;
