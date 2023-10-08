'use client'
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

export default function Form() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [course, setCourse] = useState(""); // Corrected variable name
  const [web, setWeb] = useState("");
  const [graphic, setGrapic] = useState(""); // Corrected variable name
  const [appdev, setAppdev] = useState(""); // Corrected variable name
  const [mobiledev, setMobile] = useState(""); // Corrected variable name

  const onSubmitHandler = async () => {
    let student = {
      name: userName,
      email,
      address,
      course,
      web,
      graphic, // Corrected variable name
      appdev, // Corrected variable name
      mobiledev, // Corrected variable name
    };
    try {
      const collectionName = collection(db, "coursedp");

      await addDoc(collectionName, student);
      console.log("Document written with ID: ");
      alert("course data add to db");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <span className="float-right pr-52 py-[100px] w-[70%]">
      <div className="container">
        <h1>Student Form </h1>
        <form id="student-form">
          <div className="form-group">
            <label htmlFor="name">Student Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Student Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="course">Course:</label>
            <select
              id="course"
              name="course"
              required
              onChange={(e) => setCourse(e.target.value)} // Corrected this line
            >
              <option value="webapp">Web Application</option>
              <option value="graphic">Graphic Design</option>
              <option value="appdev">App Development</option>
              <option value="mobiledev">Mobile Development</option>
            </select>
          </div>
          <div className="form-group">
            <button type="button" onClick={onSubmitHandler}> {/* Corrected this line */}
              Submit
            </button>
          </div>
        </form>
      </div>
    </span>
  );
}
