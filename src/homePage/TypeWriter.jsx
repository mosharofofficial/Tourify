import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  return (
    <div className="App">
      <h1
        style={{ paddingTop: "1rem", margin: "auto 0", fontWeight: "normal" }}
      >
        <span className="typeWriterText"
          style={{
            color: "#ffd700",
            fontWeight: "bold",
            filter: "drop-shadow(0px 0px 5px black)",
            textAlign: "center"
            // border: "5px solid black",
            // paddingRight: "1rem",
            // paddingLeft: ".25rem",
          }}
        >
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[
              "Embark on Your Next Adventure!",
              "Unlock Your Wanderlust!",
              "Explore the World's Wonders!",
            ]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={40}
            deleteSpeed={40}
            delaySpeed={1000}

            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
      </h1>
    </div>
  );
};

export default TypeWriter;
