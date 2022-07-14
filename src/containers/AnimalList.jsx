import React, { useEffect, useState } from "react";
import { getAnimals } from "../data/animal";
import { Link, useSearchParams, Outlet } from "react-router-dom";

const AnimalList = () => {
  const [animal, setAnimal] = useState([]);
  let [queryString, setQueryString] = useSearchParams();

  useEffect(() => {
    let hewan = getAnimals();

    let fil = queryString.get("filter");

    if (fil === "asc") {
      hewan = hewan.sort((a, b) => a.price - b.price);
    }

    if (fil === "desc") {
      hewan = hewan.sort((a, b) => b.price - a.price);
    }

    setAnimal(hewan);
  }, []);

  return (
    <>
      <br />
      <ul>
        {animal.map((h) => {
          return (
            <li key={h.animalId}>
              <Link to={`/planet-animal/${h.animalId}`}>{h.name}</Link>
            </li>
          );
        })}
      </ul>

      <Outlet />
    </>
  );
};

export default AnimalList;
