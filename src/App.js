import { Route, Routes } from "react-router-dom";
import AddUser from "./features/users/AddUser";
import EditUser from "./features/users/EditUser";
import UserList from "./features/users/UserList";
import Login from "./features/users/Login";

function App() {
  const account = {
    "username": "karn.yong@mecallapi.com",
    "password": "mecallapi"
}
  console.log("Login menggunakan account berikut:", account)
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">Welcome to DummyPage:3</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
