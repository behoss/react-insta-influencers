import React from "react";

import "./card.scss";

const followerFormatter = (num) => {
  return Math.abs(num) > 999999
    ? Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + "m"
    : Math.sign(num) * Math.abs(num);
};

export const Card = ({ user }) => (
  <div className="card-container">
    <a href={`https://www.instagram.com/${user.username}`}>
      <div className="card-wrapper">
        <img alt="user" src={user.profile_pic_url_hd} width="200px" />
        <h2>{user.full_name}</h2>
        <h3 className="username">{`@${user.username}`}</h3>
        <p>{`${followerFormatter(user.edge_followed_by.count)} followers`}</p>
      </div>
    </a>
  </div>
);
