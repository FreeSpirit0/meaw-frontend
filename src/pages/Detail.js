import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataTable from "../components/DataTable";
import { getDeviceRecords } from "../services/meaw";

const Detail = () => {
	const [records, setRecords] = useState([])
	const { place } = useParams()
	useEffect(() => {
		getDeviceRecords(place).then(
			data => {setRecords([data])
			}
		)
	}, [place])
	
  return (
    <div className="detail-page">
			<h2>{place}</h2>
      <DataTable data={records} />
    </div>
  );
};

export default Detail;
