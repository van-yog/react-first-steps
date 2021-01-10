import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const movie = {
  title: "Amazing photo",
  vote_average: 8.5,
  image: "https://picsum.photos/250/250",
  overview:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsam nobis commodi. Dolores blanditiis voluptatem quia accusantium, explicabo ea natus?",
};

function Image(props) {
  console.log("img props = ", props);
  return <img src={props.src} alt={props.alt} />;
}

// MovieItem = new
class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: true,
      like: false,
    };
  }

  toggleOvervire = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleLike = () => {
    this.setState({
      like: !this.state.like,
    });
  };

  render() {
    const {
      data: { title, vote_average, image, overview },
    } = this.props;
    console.log(this);
    return (
      <div
        style={{ border: "1px solid black", width: "250px", padding: "5px" }}
      >
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            margin: "10px",
          }}
        >
          <button type="button" onClick={this.toggleOvervire}>
            {!this.state.show ? "show" : "hide"}
          </button>
          <button
            type="button"
            onClick={this.handleLike}
            className={this.state.like ? "btn--like" : ""}
          >
            Like
          </button>
        </div>

        {this.state.show === true ? <p>{overview}</p> : null}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
