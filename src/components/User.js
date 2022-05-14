import React from "react";
import { Row, Col } from "react-bootstrap";
import { PersonFill, GeoAltFill, Link } from "react-bootstrap-icons/";
import useGitService from "../services/GitService";

import Repos from "./Repos";
import Spinner from "./Spinner";

const User = ({ userItems }) => {
  const { loading } = useGitService();

  const {
    id,
    login,
    name,
    blog,
    avatar,
    reposCount,
    followers,
    following,
    location,
    url,
  } = userItems;

  return (
    <div className="user">
      <Row>
        <Col>
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <h2>{name}</h2>
          <h4>{login}</h4>
          <p>
            <PersonFill />
            {" " + followers} followers /{following} following
          </p>
          {location ? (
            <p>
              <GeoAltFill />
              {location}
            </p>
          ) : null}
          <p>{reposCount} repositories </p>
          {blog ? (
            <a href={blog} target="_blank">
              <Link /> {blog}
            </a>
          ) : null}
          {
            <a href={url} target="_bland">
              go to github profile
            </a>
          }
        </Col>
      </Row>
      {reposCount ? <Repos id={id} repos={reposCount} /> : null}
    </div>
  );
};

export default User;
