import Image from "next/image";

import memojiImage from "../assets/images/memoji-computer.png"
import ArrowDown from '../assets/icons/arrow-down.svg'

export const HeroSection = () => {
  return <div className="py-32">
   <div className="container">
    <Image src={memojiImage} alt="Memoji" className="size-[100px]" />
    <div>
      <div></div>
      <div>Available for new projects</div>
    </div>
    <h1>Building Exceptional User Experiences</h1>
    < p>I specialize in transforming designs into functional, high performance mobile and web applications with the robust and scaleable backends. Let's discuss your next project.</p>
    <div>
      <button>
        <span>Explore My Work</span>
        <ArrowDown />
      </button>
      <button>
        <span>👋</span>
        <span>Let's Connect</span>
        
      </button>
    </div>
   </div>
  </div>;
};
