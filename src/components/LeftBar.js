import React, { Component } from "react";
import {
  FaLocationArrow,
  FaImage,
  FaImages,
  FaFolder,
  FaMemory,
  FaUserFriends,
  FaGoogleDrive,
  FaAlignJustify,
} from "react-icons/fa";
import profile from "../image/profile.png";

export class Leftbar extends Component {
  render() {
    return (
      <div class="side-bar">
        <div class="profile-container">
          <img id="profile-img" src={profile} alt="profile" />
          <p class="name">Wish</p>
          <p class="email">wish.eq@gmail.com</p>
        </div>
        <div class="library-container">
          <ul class="option-list">
            <p class="menu-header menu-line">Library</p>
            <li class="menu-line">
              <FaImage class="icon" />
              Photos
            </li>
            <li class="menu-line">
              <FaImages class="icon" />
              Albums
            </li>
            <li class="menu-line">
              <FaFolder class="icon" />
              Folders
            </li>
          </ul>
        </div>
        <div class="collections-container">
          <ul class="option-list">
            <p class="menu-header menu-line">Collections</p>
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
        <div class="storage-container">
          <ul class="option-list">
            <p class="menu-header menu-line">Storage</p>
            <li class="menu-line">
              <FaGoogleDrive class="icon" />
              OneDrive
            </li>
            <li class="menu-line">
              <FaGoogleDrive class="icon" />
              Google Drive
            </li>
          </ul>
        </div>
        <div class="setting-container">
          <ul class="option-list">
            <p class="setting menu-line">
              <FaAlignJustify class="icon" />
              Settings
            </p>
          </ul>
        </div>
      </div>
    );
  }
}
