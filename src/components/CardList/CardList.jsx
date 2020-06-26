import React from "react";

import { Card } from "../Card/Card";

import "./card-list.scss";

export const CardList = (props) => (
  <div className="card-list">
    {props.users.map((user) => (
      <Card key={user.id} user={user} />
    ))}
  </div>
);
