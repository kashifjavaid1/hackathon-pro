'use client'
import { useState, useEffect } from "react";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/config/firebase";

export default function Home() {
  const [students, setStudents] = useState([]);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchDocs = async () => {
    try {
      const collectionName = collection(db, "studentdp");
      const docs = await getDocs(collectionName);
      const studentsData = [];
      docs.forEach((doc) => {
        studentsData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setStudents(studentsData);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  const onDeleteHandler = async (id) => {
    try {
      const docRef = doc(db, "studentdp", id);
      setLoading(true);
      await deleteDoc(docRef);

      const newStudents = students.filter((student) => student.id !== id);
      setLoading(false);
      setStudents(newStudents);
    } catch (error) {
      console.error("Error deleting document:", error);
      alert("Error deleting document.");
    }
  };

  const onUpdateHandler = async (id) => {
    try {
      const docRef = doc(db, "studentdp", id);
      setId(id);
      setLoading(true);
      await updateDoc(docRef, {
        email: "naveed@techloset.com",
      });
      await fetchDocs(); // Fetch updated data
      setLoading(false);
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  return (
    <div className="float-right pr-52 py-[100px] w-[70%]">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-4">
                    Address
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Delete
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Updated
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.address}</td>
                      <td>
                        <button onClick={() => onDeleteHandler(student.id)}>
                          {student.id === id && loading ? "Loading..." : "Delete"}
                        </button>
                      </td>
                      <td>
                        <button onClick={() => onUpdateHandler(student.id)}>
                          {student.id === id && loading ? "Loading..." : "Update"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
