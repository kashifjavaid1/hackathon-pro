"use client"
import {useState} from "react"
import {addDoc, collection} from "firebase/firestore"
import {db} from "../../config/firebase"

export default function Form() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")

  const onSubmitHanlder = async (e) =>{
    e.preventDefault();
    let student = {
      name: userName,
      email,
      address
    }
    try {
      const collectionName = collection(db,"studentdp")
    
      await addDoc(collectionName, student )
      console.log("Document written with ID: ");
      alert("data is written to db")
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }
  return (
  <>
    <span className='float-right pr-52 py-[100px] w-[70%]'>
   <div class="container">
        <h1>Student Form </h1>
        <form id="student-form">
            <div class="form-group">
                <label for="name">Student Name:</label>
                <input type="text" id="name" name="name" required onChange={(e)=> setUserName(e.target.value)}/>
            </div>
          
            <div class="form-group">
                <label for="email">Student Email:</label>
                <input type="email" id="email" name="email" required 
                onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" id="address" name="adress" required
                onChange={(e)=> setAddress(e.target.value)}/>
            </div>
            <div class="form-group">
                <button type="submit"  onClick={(e) => onSubmitHanlder(e)}>Submit</button>
            </div>
        </form>
    </div>
    </span>
  </>
  )
}
