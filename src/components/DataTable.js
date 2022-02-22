import React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { FaTrash } from "react-icons/fa";
import { deleteRecord, tickRecord } from "../services/meaw";
import getFormatTime from "../utils/time";

const DataTable = ({ place, data }) => {
  const [selectionModel, setSelectionModel] = React.useState([]);
  const onSelectionChange = (e) => {
    console.log(e[0])
    const record = { place: place , ...(data.filter(r => r.time === e[0])[0])}
    record.tick = !record.tick
    console.log(record)
    tickRecord(record, window.localStorage.getItem("token"))
  }
  const columns = [
    { field: "LaneNo", headerName: "Lane No.", width: 100, flex: 1 },
    { field: "velocity", headerName: "Velocity [ km/hr ]", width: 200, flex: 1 },
    { field: "time", headerName: "Time [ hh:mm:ss ]", width: 100, flex: 1, valueFormatter: (params) => new Date(params.value * 1000).toTimeString().slice(0,8)},
    { field: "tick", headerName: "Status", width: 100, flex: 1, valueFormatter: (params) => {return params.value ? "Checked" : "Uncheck"}},
    {
      field: "actions",
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<FaTrash />}
          onClick={(e) => {
            deleteRecord(
              {
                place: place,
                LaneNo: params.row.LaneNo,
                velocity: params.row.velocity,
                time: params.row.time,
              },
              window.localStorage.getItem("token")
            );
          }}
          label="Delete"
        />,
      ],
    },
  ];
  return (
    <div className="data-table">
      <DataGrid
        rows={data}
        getRowId={(row) => row.time}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        autoHeight
        {...data}
        checkboxSelection
        selectionModel={selectionModel}
        onSelectionModelChange={onSelectionChange}
      />
    </div>
  );
};

export default DataTable;
