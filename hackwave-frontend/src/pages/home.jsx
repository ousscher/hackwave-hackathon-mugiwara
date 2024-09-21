import React from "react";
import Navbar from "../components/navbar";
import team from '../assets/team.png';
import texture from '../assets/texture.png';
const Home = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-between">
        <Navbar/>
      <div className="w-full h-[75vh] flex flex-row justify-around">
        <img src={team} alt="" className=" w-[55%]" />
        <div className="w-[43%]  h-[100%] flex flex-col justify-between items-center">
            <p className="w-[45%] leading-relaxed tracking-wide text-3xl text-center font-bold">Bienvenue sur le site de l'équipe <span className="text-my-red">Mugiwara</span></p>
            <div className="w-[60%] h-[75%] overflow-hidden">
              <img src={texture} className="w-[100%]" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home; 