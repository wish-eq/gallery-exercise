import React, { useEffect, useState } from "react";

export default function GalleryContainer() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  const allowedIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 25];

  const filteredRecords = records.filter((record) =>
    allowedIds.includes(record.id)
  );

  return (
    <div class="photo-list-container flex justify-center">
      <ul class="photo-list grid grid-cols-4 grid-rows-3">
        {filteredRecords.map((record) => (
          <li
            class="photo-container flex justify-center items-center"
            key={record.id}
          >
            <img class="photo" src={record.url} alt="img!" />
          </li>
        ))}
      </ul>
    </div>
  );
}
