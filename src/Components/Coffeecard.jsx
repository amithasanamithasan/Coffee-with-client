
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Coffeecard = ({coffee ,coffeess,setCoffess}) => {

   const{_id,name,chef,supplier,taste,category,details,photo}=coffee;

  
 
   
  //  const handelcoffeeEdit =_id=>{
  //   console.log(_id)

 
  // }




   const handeldeleted=_id =>{
    console.log(_id)

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        }
      });

      fetch(`http://localhost:5000/coffee/${_id}`,{

method:'DELETE'

  } )

  .then(res=> res.json())
  .then(data=>{
    console.log(data)
 
    if (data.deletedCount > 0){
        Swal.fire({
            title: "Deleted!",
            text: "Your Products has been deleted.",
            icon: "success"
         
          });
          const remaning= coffeess.filter(cof=>cof._id!==_id);
          setCoffess(remaning);
    }
    
  })
   





   }
 
    
    return (
        <div>
            <div className="card card-side bg-base-500 bg-rose-200">
  <figure><img src={photo} /></figure>
  <div className=" flex justify-between  w-2/3">
    <div className="py-10">
    <h2 className="card-title text-2xl">{category}</h2>
    <h1 className="text-2xl font-serif font-extralight text-blue-600"> Chef:{supplier}</h1>
    <h1 className="text-2xl font-bold text-orange-700">Price:{chef}</h1>
    </div>


  
    <div className="card-actions justify-end ">
     <div className="join join-vertical gap-3">
<button className="btn btn-outline btn-info">View</button>
 <Link to={`updateCoffee/${_id} `}> <button   
 className="btn btn-outline btn-success">
  Edit</button> </Link>

<button onClick={()=>handeldeleted(_id)}
 className="btn btn-outline btn-warning">Delete</button>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Coffeecard;