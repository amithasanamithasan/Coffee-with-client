
import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";


const Users = () => {
    const userauth= useLoaderData()
    const[users,setUsers]=useState(userauth);

    const handleAuthUserDelete = async (id) => {
        console.log('deleted', id);



        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
     

        
axios.delete(`http://localhost:5000/user/${id}`,users)
.then(data=>{
    console.log(data.data)
    const userRemaining = users.filter(user => user._id !== id);
             setUsers(userRemaining);
         
})

        // try {
        //     const response = await fetch(`http://localhost:5000/user/${id}`, {
        //         method: 'DELETE'
        //     });

        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //     }

        //     const data = await response.json();
        //     console.log(data);
        //     if (data.deleteCount > 0) {
        //         console.log('delete successfully');
        //         // Remove the user from the user interface (UI)
        //         const userRemaining = users.filter(user => user._id !== id);
        //         setUsers(userRemaining);
        //         Swal.fire({
        //             title: "Deleted!",
        //             text: "Your file has been deleted.",
        //             icon: "success"
        //         });
        //     }
        // } catch (error) {
        //     console.error('Error:', error);
        //     // Optionally show an alert or notification to the user about the failure
        //     Swal.fire({
        //         title: "Error!",
        //         text: "Failed to delete user. Please try again later.",
        //         icon: "error"
        //     });
        // }
    };
    return (
       

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
            <tr>
                <th scope="col" className="px-6 py-3 bg-blue-500">
                Sing_up_User name
                </th>
                <th scope="col" className="px-6 py-3">
                 ID
                </th>
                <th scope="col" className="px-6 py-3 bg-blue-500">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  CreatedAt
                </th>
                <th scope="col" className="px-6 py-3">
                LastLoggedAt
                </th>
                <th scope="col" className="px-6 py-3 bg-blue-500">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(user=><tr key={user._id} className="bg-blue-600 border-blue-40">
                <th scope="row" className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100">
                   Amit Hasan Faysal
                </th>
                <td className="px-6 py-4">
                    {user._id}
                </td>
                <td className="px-6 py-4 bg-blue-500">
                  {user.email}
                </td>
                <td className="px-6 py-4">
                   {user.createdAt}
                </td>
                <td className="px-6 py-4">
                   {user.lastLoggedAt}
                </td>
                <td className="px-6 py-4 bg-blue-500">
                   <button onClick={()=>handleAuthUserDelete(user._id)} className="text-1xl btn btn-warning bg-red-700">X</button>
                </td>
            </tr>
            )
            }
        </tbody>
    </table>
</div>

    );
};

export default Users;