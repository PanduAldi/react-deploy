import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimal } from "../data/animal";

const DetailAnimal = () => {
  let params = useParams();
  const [animal, setAnimal] = useState({});

  useEffect(() => {
    let hewan = getAnimal(params.animalId);

    setAnimal(hewan);
  }, [params.animalId]);

  return (
    <>
      <h5> Nama Hewan : {animal?.name}</h5>
      <img src={animal.imageUrl} alt={animal?.name} />
    </>
  );
};

export default DetailAnimal;
