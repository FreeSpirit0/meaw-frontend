import React from "react";
import DataTable from "../components/DataTable";

const Detail = () => {
  const data = [
    { Place: "Kasetsart University", LaneNo: 1, Time: "11:00" },
    { Place: "Kasetsart University", LaneNo: 1, Time: "11:00" },
    { Place: "Kasetsart University", LaneNo: 1, Time: "11:00" },
    { Place: "Kasetsart University", LaneNo: 1, Time: "11:00" },
    { Place: "Kasetsart University", LaneNo: 1, Time: "11:00" },
  ];
  return (
    <div>
      <DataTable data={data} />
    </div>
  );
};

export default Detail;
