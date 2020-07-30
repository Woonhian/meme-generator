// Tried using React Hooks
import React, { useState, useEffect } from "react";
import "./App.css";

const MemeGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [randomImg, setRandomImg] = useState("https://i.imgflip.com/1bij.jpg");
  const [memeImages, setMemeImages] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((res) => {
        setMemeImages(res.data.memes);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const randomNum = Math.floor(Math.random() * memeImages.length);
    const randomMeme = memeImages[randomNum].url;

    setRandomImg(randomMeme);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="topText"
          placeholder="Top Text"
          value={topText}
          onChange={(event) => setTopText(event.target.value)}
        ></input>
        <input
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          value={bottomText}
          onChange={(event) => setBottomText(event.target.value)}
        ></input>
        <button>Generate</button>
      </form>
      <div className="memes">
        <img src={randomImg} alt=""></img>
        <h2 className="topText">{topText}</h2>
        <h2 className="bottomText">{bottomText}</h2>
      </div>
    </div>
  );
};

export default MemeGenerator;

// Using React Class Component
// import React, { Component } from "react";
// import "./App.css";

// class MemeGenerator extends Component {
//   constructor() {
//     super();
//     this.state = {
//       topText: "",
//       bottomText: "",
//       randomImg: "https://i.imgflip.com/1bij.jpg",
//       memeImages: [],
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   // Fetch API
//   componentDidMount() {
//     fetch("https://api.imgflip.com/get_memes")
//       .then((res) => res.json())
//       .then((res) => {
//         this.setState({
//           memeImages: res.data.memes,
//         });
//       });
//   }

//   handleChange(event) {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const randomNum = Math.floor(Math.random() * this.state.memeImages.length);
//     const randomMeme = this.state.memeImages[randomNum].url;
//     this.setState({
//       randomImg: randomMeme,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             name="topText"
//             placeholder="Top Text"
//             value={this.state.topText}
//             onChange={this.handleChange}
//           ></input>
//           <input
//             type="text"
//             name="bottomText"
//             placeholder="Bottom Text"
//             value={this.state.bottomText}
//             onChange={this.handleChange}
//           ></input>
//           <button>Generate</button>
//         </form>
//         <div className="memes">
//           <img src={this.state.randomImg} alt=""></img>
//           <h2 className="topText">{this.state.topText}</h2>
//           <h2 className="bottomText">{this.state.bottomText}</h2>
//         </div>
//       </div>
//     );
//   }
// }

// export default MemeGenerator;
