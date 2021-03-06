import React from "react";
import "./Person.scss";

const Person = ({ person }) => {
  // console.log(person);
  return (
    <div className="person">
      <div className="person__header">
        <div className="person__header__fake-img"></div>
      </div>
      <h3 className="person__title">{person.name}</h3>
      <p className="person__age">{person.age}</p>
      <ul className="person__list">
          {/* Listing hobbies or work */}
        {person.hobbies ? (
          person.hobbies.map((hobby) => (
            <li className="person__hobby">{hobby}</li>
          ))
        ) : (
          <li className="person__work">{person.work}</li>
        )}
      </ul>
    </div>
  );
};

export default Person;
