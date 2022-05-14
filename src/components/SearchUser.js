import React from "react";
import { ListGroup } from "react-bootstrap";

const SearchUser = ({ user, onUserLoaded }) => {
  const { login, avatar, id } = user;

  const handleClick = () => {
    onUserLoaded(id);
  };

  return (
    <ListGroup.Item as="li" className="userList__item" onClick={handleClick}>
      <div
        className="avatar"
        style={{
          width: 40,
          height: 40,
        }}
      >
        <img src={avatar} alt="" style={{ objectFit: "cover" }} />
      </div>
      <p>{login}</p>
    </ListGroup.Item>
  );
};

export default SearchUser;
