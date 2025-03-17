import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => setData(json.slice(0, 10)));
    }, []);

    return (
        <div className="container">
            <h1>Data Fetching SPA</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}
export default App;

