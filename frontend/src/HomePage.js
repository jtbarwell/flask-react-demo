import React, { useEffect, useState } from 'react';

export default function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/data')
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
        <h1>Home Page</h1>
        <table id="People_Table">
            <thead>
                <tr><th>ID</th><th>Name</th></tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td><td>{item.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}