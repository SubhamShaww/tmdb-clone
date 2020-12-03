import React from "react";

function Column(props) {
  return (
    <div>
      <h5 className="">{props.title}</h5>
      <ul>
        <li>
          <a className="" href="#!">
            {props.link1}
          </a>
        </li>
        <li>
          <a className="" href="#!">
            {props.link2}
          </a>
        </li>
        <li>
          <a className="" href="#!">
            {props.link3}
          </a>
        </li>
        <li>
          <a className="" href="#!">
            {props.link4}
          </a>
        </li>
        <li>
          <a className="" href="#!">
            {props.link5}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Column;
