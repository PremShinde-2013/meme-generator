import React from "react";
// import React, {useState} from 'react'
// import memesData from "../memesData";
function Meme() {

//   const [memeImage, setMemeImage] = React.useState("");

const [meme, setMeme] = React.useState({
    topText : "",
    bottomText : "",
    randomImage : "1bij.jpg",
})

const [allMeme,setAllMeme] = React.useState([])

// React.useEffect(()=>{
//   fetch("https://api.imgflip.com/get_memes")
//   .then(res => res.json())
//   .then(data=> setAllMeme(data.data.memes))

// },[])

React.useEffect(()=>{
  async function getMemes(){
  const res = await fetch("https://api.imgflip.com/get_memes")
 const data =  await  res.json()
  setAllMeme(data.data.memes)
  }
  getMemes()
},[])


  function getMemeImage() {
    // const allMeme = allMeme.data.memes;
    const randomNumber = Math.floor(Math.random() * allMeme.length);
   const url = allMeme[randomNumber].url 
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage:url
    }))

    // const url = memesArray[randomNumber].url
    // console.log(url) 
  }

  function handleChange(event){
    const {name,value}=event.target
    setMeme(prevMeme=>({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
      <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                /> 
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
      <img src={meme.randomImage} className="meme-image" alt="" />
      <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
                
      </div>
    </main>
  );
}



export default Meme;
