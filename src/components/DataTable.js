import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({ data }) => {
  const columns = [
    { field: 'Place', headerName: "Place", width: 100 },
    { field: 'LaneNo', headerName: "Lane No.", width: 50},
    { field: 'Time', headerName: "Time", width: 70}
  ]
  return (
    <div className="">
      <DataGrid
        rows={data}
        getRowId={(row) => row.Place}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable