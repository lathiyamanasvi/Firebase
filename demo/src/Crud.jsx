import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {  purvi } from './Firebase-config'

const Crud = () => {

    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [rec,setRec] = useState([])

    const table = collection(purvi , 'H')

    const HandleSubmit = async(e) => {
        e.preventDefault()

        try {
            await addDoc(table ,{name:name,phone:phone})
            getdata()
        } catch (error) {
            console.log(error);
            return false
        }   
        
    }

    const getdata = async() => {
        try {

            let data = await getDocs(table)
            let record = data.docs.map((val)=>({
                ...val.data(),id : val.id
            }))
            setRec(record);
        } catch (error) {
            console.log(error);
            return false
        }
    }

    const DeleteData = async (id) => {
        try {
           await deleteDoc(doc(purvi,'H',id))
           getdata()
        } catch (error) {
            console.log(error);
            return false
        }
    }

    useEffect(()=>{
        getdata()
    },[])

  return (
    <center>
        <h1>Crud</h1>
      <form onSubmit={HandleSubmit}>
        <table border={1}>
            <thead>
                <tr>
                    <td>Name :- </td>
                    <td><input type="text"  onChange={(e) => setName(e.target.value)} value={name}/></td>
                </tr>
                <tr>
                    <td>Phone :- </td>
                    <td><input type="text" onChange={(e) => setPhone(e.target.value)} value={phone}/></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button type='submit'>submit</button></td>
                </tr>
            </thead>
        </table>
      </form>
      <table style={{marginTop:'55px'}} border={1}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {
                rec.map((val)=>{
                    return(
                        <tr>
                            <td>{val.name}</td>
                            <td>{val.phone}</td>
                            <td><button type='button' onClick={() => DeleteData(val.id)}>Delete</button></td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </center>
  )
}

export default Crud
