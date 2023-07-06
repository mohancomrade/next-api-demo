import { data } from "autoprefixer";
import React from "react";
import index from ".";

function Example() {
//   const courses = [
//     { id: 1, name: "mohan" },
//     { id: 2, name: "sujan" },
//     { id: 3, name: "anbu" },
//     { id: 4, name: "kodi" },
//     { id: 5, name: "danush" },
//   ];

  const developers = [
    {
      name: "mohan",
      skills: [
        { name: "mohan", roll: "front-end" },
        { name: "kumar", roll: "back-end" },
      ],
    },
    {
      name: "akash",
      skills: [
        { name: "mohan", roll: "front-end" },
        { name: "kumar", roll: "back-end" },
      ],
    },
  ];

  return (
    <div>
      {/* <div>
        {courses.map((course) => (
          <h1>{course.id}</h1>
        ))}
      </div> */}

      <div>
        {developers.map((dev, index) => (
          <div key={index}>
            <h2>
            {dev.name}
            </h2>

          {
            dev.skills.map((skill, index) => (
              <h3 key={index}>
                {skill.name} - {skill.roll}
              </h3>
        ))}
          </div>
        ))}
      </div>


    </div>
  );
}

export default Example;
