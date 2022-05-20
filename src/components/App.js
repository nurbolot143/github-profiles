import React, { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";

import useGitService from "../services/GitService";
import Header from "./Header";
import Hello from "./Hello";
import SearchUser from "./SearchUser";
import Spinner from "./Spinner";
import User from "./User";

const App = () => {
  const { getSearchUsers, getUser, loading, error } = useGitService();
  const [users, setUsers] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {});

  const onUsersLoaded = (login) => {
    getSearchUsers(login).then((res) => setUsers((users) => [...res]));
    setUser(null);
  };

  const onUserLoaded = (id) => {
    getUser(id).then((res) => setUser((user) => res));
  };

  const load = loading ? <Spinner /> : null;
  const errorMessage = error ? <Error /> : null;

  return (
    <>
      <Header usersLoaded={onUsersLoaded} />
      <Container>
        {users.length > 0 ? null : <Hello />}

        <div className="main">
          <div
            className="userList"
            style={users.length > 0 ? { overflowY: "scroll" } : null}
          >
            <ListGroup className="userList__wrapper" as="ul">
              {users.map((user) => {
                return (
                  <SearchUser
                    key={user.id}
                    user={user}
                    onUserLoaded={onUserLoaded}
                  />
                );
              })}
            </ListGroup>
          </div>
          {load}
          {errorMessage}
          {user ? <User userItems={user} /> : null}
        </div>
      </Container>
    </>
  );
};

export default App;
