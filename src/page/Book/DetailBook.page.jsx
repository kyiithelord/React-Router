import React from "react";
import { useParams } from "react-router-dom";

const DetailBookPage = () => {
  const data = useParams();
  console.log(data);
  return <div> DetailBookPage name is {data.id}</div>;
};

export default DetailBookPage;
