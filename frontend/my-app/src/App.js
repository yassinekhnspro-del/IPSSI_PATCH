import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const API_URL = 'http://localhost:8000';

  const fetchUsers = async () => {
    const res = await axios.get(`${API_URL}/users`);
    setUsers(res.data);
  };

  const createUser = async (e) => {
    e.preventDefault();
    await axios.post(`${API_URL}/users`, { name, password });
    setName('');
    setPassword('');
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>Users</h1>

      <form onSubmit={createUser}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Add user</button>
      </form>

      <h2>Users list</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
