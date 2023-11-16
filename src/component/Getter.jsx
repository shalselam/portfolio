import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'

const Getter = () => {

    // useEffect(async ()=>{
    // //    const d = await  axios.get("http://localhost:3000/student")
    // //    console.log(d);
    // },[])

    const [users, setusers] = useState([])
    const [deletedUserId, setDeletedUserId] = useState(null);


    const runAxiosFunction = async () => {
        // const d = await axios.get("http://localhost:3000/student")
        // console.log(d.data);
        // setusers(d.data)

        const d = await axios.post("http://localhost:3000/student/filter" , {id:"5"})
        setusers(d.data)
    }

    const addToData = () => {
        const d = {
            "type_of_student":"car",
            "name":"shalom is the best",
            "id": "3",
            // Date.now().toString(),
            "payment":true
          }

          axios.post("http://localhost:3000/student/add" , d)
    }
    const deleteUserData = async (userId) => {
        await axios.delete(`http://localhost:3000/student/filter`,{id:userId});
        setusers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        setDeletedUserId(userId);


        // const id=data.id
      };
    
  return (
    <div>
        <button onClick={runAxiosFunction}>run axios</button>
        <button className='bg-red-400' onClick={addToData}> add to database</button>
       

        {
            users.map((v)=>{
                return <div className="bg-blue-400">name: {v.name} , type: {v.type_of_student}
                 <button onClick={() => deleteUserData(v.id)}> Delete</button>
                </div>
            })
        }
    </div>
  )
}

export default Getter