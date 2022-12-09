import { Outlet, useNavigate } from "react-router-dom";
import "../App.css";

const ClassWorkLayOut = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/airbnb");
        }}
      >
        Airbnb
      </button>
      <button
        onClick={() => {
          navigate("/bmi");
        }}
      >
        BMI
      </button>
      <button
        onClick={() => {
          navigate("/star-rating");
        }}
      >
        Star-rating
      </button>
      <button
        onClick={() => {
          navigate("/firework");
        }}
      >
        Firework
      </button>
      <button
        onClick={() => {
          navigate("/to-do-list");
        }}
      >
        To-Do-List
      </button>
      <button
        onClick={() => {
          navigate("/sample-data");
        }}
      >
        Sample-Data
      </button>
      <button
        onClick={() => {
          navigate("/car-owner");
        }}
      >
        Car owner
      </button>
      <button
        onClick={() => {
          navigate("/students");
        }}
      >
        Students
      </button>
      <button onClick={() => {
            navigate("/age-up")
      }}>
        Age up
      </button>
      <button onClick={() => {
            navigate("/update-time")
      }}>
        Update time
      </button>
      <button onClick={() => {
            navigate("/color-picker")
      }}>
        Color picker
      </button>
      <button onClick={() => {
            navigate("/api-playground")
      }}>
        ApiCall
      </button>
      <button onClick={() => {
            navigate("/chuck-joke")
      }}>
        Chuck's Joke
      </button>
      <button 
        onClick={() => {
            navigate("/github-info")
        }}
      >
        GitHub Info
      </button>
      <button onClick={() => {
            navigate("/movie-info")
      }}
      >
        The Movie DB
      </button>
      <button onClick={() => {
            navigate("/counter")
      }}>
        Counter
      </button>
      <button onClick={() => {
            navigate("/shoppinglist")
      }}>
        Shopping List
      </button>
      <button onClick={() => {
            navigate("/movie-detail")
      }}>
        Movie Details
      </button>
      <button onClick={() => {
            navigate("/table-playground")
      }}>
        Table Playground
      </button>
      <button onClick={() => {
            navigate("/table-exercise")
      }}>
        Table Exercise
      </button>
      <br />
      <Outlet />
    </div>
  );
};

export default ClassWorkLayOut;
