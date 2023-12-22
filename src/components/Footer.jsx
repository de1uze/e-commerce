import React from 'react';
import instagram from "../img/instagram.png";
import twitter from "../img/twitter.png";
import facebook from "../img/facebook.png";

const Footer = () => {
  return (
    <footer className='bg-primary py-2 text-white flex items-center justify-around'>
      <div className="container-mx-auto ">
        <p className='text-white text-center'>
          Ecommerce WebApp made by
          <span className='hover:text-emerald-400'>
            <a href="https://github.com/ImBiswarup" target='_blank'> Biswarup Ghosh</a>
          </span>
        </p>
      </div>
      <div className="flex flex-col  gap-y-2">
        <div className="flex">
          <div className="logo">
            <img className='h-5 w-5 rounded mr-2 bg-white' src={instagram} alt="" />
          </div>
          <div className="link hover:text-emerald-200">
            <a href="https://www.instagram.com/i_ambiswarup/" target='_blank'>i_ambiswarup</a>
          </div>
        </div>

        <div className="flex">
          <div className="logo">
            <img className='h-5 w-5 rounded-full mr-2 bg-white' src={facebook} alt="" />
          </div>
          <div className="link hover:text-emerald-200">
            <a href="https://www.facebook.com/biswa.ghosh.927/" target='_blank'>Biswarup Ghosh</a>
          </div>
        </div>

        <div className="flex">
          <div className="logo">
            <img className='h-5 w-5 rounded mr-2 bg-white' src={twitter} alt="" />
          </div>
          <div className="link hover:text-emerald-200">
            <a href="https://twitter.com/Im_Biswarup" target='_blank'>Im_Biswarup</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
