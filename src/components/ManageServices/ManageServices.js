import React from 'react';
import { useState } from 'react';

const ManageServices = () => {
    const [maanage, setManage] = useState([])
    fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data =>
            setManage(data)
        )
    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('deleteed')
                    const remaining = maanage.filter(manages => maanage._id !== id)
                    setManage(remaining)
                }

            })
    }
    return (
        <div>
            <h2>Manage</h2>
            {
                maanage.map(manages => <div key={manages._id}>
                    <h3>{manages.name}</h3>
                    <button onClick={() => handleDelete(manages._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;