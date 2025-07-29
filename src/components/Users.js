import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../utils/userThunk";
import { increment, decrement, reset } from "../utils/userSlice";

const Users = () => {
  const dispatch = useDispatch();

  const { users, error, isLoading, value } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
    console.log(dispatch);
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-center my-5 font-bold text-2xl">Users page</h1>
      <div className="flex items-center justify-center mx-auto w-4xl p-4 my-4 bg-gray-300 border">
        {isLoading && <p>Loading users...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {users.map((user) => (
          <h1 key={user.id}>{user.name}</h1>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl text-amber-800">Counter</h1>
        <p className="mt-2 font-semibold text-xl mb-3">{value}</p>
        <button
          className="p-2 bg-amber-500 rounded text-black mb-4"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="p-2 bg-amber-500 rounded text-black mb-4"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className="p-2 bg-amber-500 rounded text-black"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Users;
