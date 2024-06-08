import { useLoaderData } from "react-router-dom";
import Hader from "./Hader";
import axios from "axios";
import { data } from "autoprefixer";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const Update = ( ) => {
    const coffee=useLoaderData()
    console.log(coffee);
    const{_id,name,chef,supplier,taste,category,details,photo}=coffee;

    const handelUdatesubmit=event=>{
        event.preventDefault();
        const form=event.target;
     const name= form.name.value;
     const chef= form.chef.value;
     const supplier= form.supplier.value;
     const taste= form.taste.value;
     const category= form.category.value;
     const details= form.details.value;
     const photo= form.photo.value;
     const UpdateCoffee={name,chef,supplier,taste,category,details,photo}
     
     console.log(UpdateCoffee);
     

     axios.put(`http://localhost:5000/coffee/${_id}`,UpdateCoffee)
     .then(data=>{
      console.log(data.data)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Coffee  has been Updated",
        showConfirmButton: false,
        timer: 1500
      });
     })
     
    //  fetch(`http://localhost:5000/coffee/${_id}`,{
    //      method:'PUT',
    //      headers:{
    //          'content-type':'application/json'
    //      },
    //      body:JSON.stringify(UpdateCoffee)
    //  })
     
    //  .then(res=>res.json())
    //  .then(data=> {
    //      console.log(data);
    //      if(data.modifiedCount>0){
    //          Swal.fire({
    //              title: "Do you want to save the changes?",
    //              showDenyButton: true,
    //              showCancelButton: true,
    //              confirmButtonText: "Save",
    //              denyButtonText: `Don't save`
    //            }).then((result) => {
    //              /* Read more about isConfirmed, isDenied below */
    //              if (result.isConfirmed) {
    //                Swal.fire("Saved!", "Coffee Updated Successfully", "success");
    //              } else if (result.isDenied) {
    //                Swal.fire("Changes are not saved", "", "info");
    //              }
    //            });
    //      }
    //  })
     
     
       }



    return (
        <div>
            <div>
                <Hader></Hader>
            </div>
<form onSubmit={handelUdatesubmit}   className="w-full h-200 bg-slate-200  mx-auto pb-20 m-20">

  <h3 className="text-3xl font-extrabold text-[#866a54]">Update Coffee</h3>

  <div className="grid md:grid-cols-2   md:gap-6">
    <div className="relative z-0 w-full mb-8 group  ">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
        <input type="text" name="name"  defaultValue={name} id="floating_first_name" 
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder=" " required />
     
    </div>
    <div className="relative z-0 w-full mb-8 group">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Available Quantity</label>
        <input type="text" name="chef" defaultValue={chef}id="floating_last_name" 
       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder=" " required />
       
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-8 group">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Supplier</label>
        <input type="text"  name="supplier" defaultValue={supplier}id="" 
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder=" " required />
    
    </div>
    <div className="relative z-0 w-full mb-8 group">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Taste</label>
        <input type="text" name="taste"defaultValue={taste} id="floating_company" 
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder=" " required />
       
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-8 group">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
        <input type="text"  name="category"defaultValue={category} id="" 
       className="shadow-sm bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500
         focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
           dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder=" " required />
       
    </div>
    <div className="relative z-0 w-full mb-8 group">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details</label>
        <input type="text" name="details"defaultValue={details} id="floating_company" 
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder=" " required />
      
    </div>
  </div>
  <div className="relative z-0 w-full mb-8 group">
      <input type="text" name="photo" id=""defaultValue={photo}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label className="font-medium absolute text-2xl  text-emerald-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-focus:scale-75 peer-focus:-translate-y-6">Photo</label>
  </div>
<input type="submit" value="Updated" className="btn btn-block bg-[#866a54] text-white"  />

</form>

        </div>
    );
};

export default Update;