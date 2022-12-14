import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { deleteUser } from "./userSlice";


const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);

  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  }

  const usersData = () => users.map(user => (
    <tr key={user.id}>
                                    
      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
          {user.id}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          {user.name}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          {user.email}
      </td>
      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
      <Link to={`/edit-user/${user.id}`}>
          <a
              className="text-green-500 hover:text-green-700"
          >
              Edit
          </a>
      </Link>
      </td>
      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
          <a
              className="text-red-500 hover:text-red-700"
              onClick={() => handleRemoveUser(user.id)}
          >
              Delete
          </a>
      </td>
  </tr>
  ))

  const renderTable = () => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        UNIQUE ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Edit
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {users.length ? usersData() : <tr><td rowSpan={5}>No Users</td></tr>}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

  return (
    <div>
      <Link to="/add-user"><Button>Add User</Button></Link>
      <div className="grid gap-5 md:grid-cols-2">
        {<p className="text-center col-span-2 text-gray-700 font-semibold">Data Users</p>}
      </div>
      <div>
        {renderTable()}
      </div>
    </div>
  )
}

export default UserList