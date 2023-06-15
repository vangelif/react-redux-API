import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../store/users/usersSlice";

const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const { users, isLoading, error } = useSelector((store) => store.users);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  console.log(users.results);
  return (
    <ul>
      {users.results.map((result, index) => (
        <li key={index}>
          {result.name.first} {result.name.last}
          <p>{result.location.country}</p>
          <img src={result.picture.medium}></img>
        </li>
      ))}
    </ul>
  );
};

export default UserList;

