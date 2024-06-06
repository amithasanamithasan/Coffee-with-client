import moment from "moment";
import logo from"../assets/1.png"
const Hader = () => {
    return (

             <div className="grid grid-cols-1 lg:grid-cols-2
     gap-x-96 place-content-between md:bg-[#6F4E37] hover:bg-[#6F4E37]w-full">
  <div className="">
  <img className=" py-2 px-5  h-25 w-20 "  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" src={ logo}  alt="" />
  </div>
 
  
  <div className="py-2 md:1xl text-2xl text-black-400  font-serif font-extrabold ">
    <p className= " hover:bg-amber-300" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">{moment().format("dddd, MMMM Do YYYY, h:mm:ss ")}</p>
  </div>
</div>

    );
};

export default Hader;