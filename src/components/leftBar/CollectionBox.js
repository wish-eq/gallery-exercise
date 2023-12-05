import React, { Component } from "react";
import { FaLocationArrow, FaMemory, FaUserFriends } from "react-icons/fa";

export class CollectionBox extends Component {
  render() {
    return (
      <div className="collections-container flex flex-col justify-start">
        <ul class="option-list">
          <p class="menu-header">Collections</p>
          <li class="menu-line">
            <FaMemory class="icon" />
            Memories
          </li>
          <li class="menu-line">
            <FaUserFriends class="icon" />
            People
          </li>
          <li class="menu-line">
            <FaLocationArrow class="icon" />
            Locations
          </li>
        </ul>
      </div>
    );
  }
}
export default CollectionBox;
