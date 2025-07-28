import React, { useEffect, useState } from 'react';
import './Table.css';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
    fetch('http://127.0.0.1:5000/api/data')
        .then(res => res.json())
        .then(setData);
    }, []);

    return (
    <table id="People_Table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {data.map(item => (
            <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
        </tr>
            ))}
    </tbody>
    </table>
    );
}

export default App;
