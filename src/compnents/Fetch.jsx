import axios from "axios";
import { useState, useEffect } from "react";

function Fetch() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((data) => (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Fetch;
