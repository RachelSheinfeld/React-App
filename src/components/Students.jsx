import React, { useEffect, useState } from 'react'
import { deleteStudent, getAllStudents, insertStudent, updateStudent } from '../services/students'

const Students = () => {

    const [studentList, setStudentList] = useState([])
    const [nameA, setnameA] = useState("")
    const [emailA, setemailA] = useState("")
    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState("");
    useEffect(() => {
        fetchingData()
    }, [])

    const fetchingData = async () => {
        try {
            const students = await getAllStudents()
            setStudentList(students)
        } catch (error) {
            console.log("error occured at fetching data", error.message)
        }

    }

    const handleInsertStudent = async () => {
        const studentDetails = { name: nameA, email: emailA }
        try {
            const newStudent = await insertStudent(studentDetails)
            setStudentList(prev => [...prev, newStudent])
        } catch (error) {
            console.log("error occured at create student", error.message)
        }
    }

    const handleEditStudent = async (id) => {
        const studentDetails = { name: editName, email: studentList.find(s => s.id === id).email }
        try {
            const upodatedStudent = await updateStudent(id, studentDetails)
            setStudentList(prev => prev.map(s => s.id === id ? upodatedStudent : s))
            setEditId(null)
        } catch (error) {
            console.log("error occured at updsate student", error.message)
        }
    }

    const handleDelete = async (id) => {
        try {
            await deleteStudent(id)

            setStudentList(prev => prev.filter(s => s.id !== id))
        } catch (error) {
            console.log("error occured at delete student", error.message)
        }
    }

    return (
        <div>
            <h2>Hello Students</h2>

            <input placeholder="name" onChange={(e) => setnameA(e.target.value)} />
            <input placeholder="email" onChange={(e) => setemailA(e.target.value)} />

            <button onClick={handleInsertStudent}>Add Student</button>

            {studentList.map(s => (
                <div key={s.id}>

                    {editId === s.id ? (
                        <>
                            <input
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                            />
                            <button onClick={() => handleEditStudent(s.id)}>Save</button>
                        </>
                    ) : (
                        <>
                            <h3>Name: {s.name}</h3>
                            <h4>Email: {s.email}</h4>

                            <button onClick={() => {
                                setEditId(s.id);
                                setEditName(s.name);
                            }}>
                                Edit
                            </button>
                        </>
                    )}

                    <button onClick={() => handleDelete(s.id)}>Delete</button>
                </div>
            ))}

        </div>
    );
}

export default Students