import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

function Category(props: any) {
  function toggleCategory(e: any) {
    let category = e.currentTarget;
    let channels = category.parentElement.querySelector(".categoryChannels");

    let isToggled = category.getAttribute("data-toggled") === "true";
    category.setAttribute("data-toggled", !isToggled);
    category.querySelector("svg").style.transform = isToggled ? "rotate(-90deg)" : "rotate(0deg)";
    channels.style.display = isToggled ? "none" : "";
  }

  return (
    <div className="categoryContainer">
      <div className="category" data-toggled="true" onClick={toggleCategory}>
        <IoIosArrowDown/>
        <span className="categoryLabel">{props.text}</span>
      </div>
      <div className="categoryChannels">
        {props.children}
      </div>
    </div>
  );
}

export default Category;
