import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DataTable from '../components/DataTable'
import { changeSpeedLimit, getDeviceRecords, getSpeedLimit } from '../services/meaw'
import { motion } from "framer-motion"
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Detail = () => {
  const [records, setRecords] = useState([])
  const [speedLimit, setSpeedLimit] = useState(10)
  const { place } = useParams()
  const onChangeSpeed  = (e) => {
    setSpeedLimit(e.target.value)
    changeSpeedLimit(place, e.target.value, window.localStorage.getItem('token'))
  } 
  useEffect(() => {
      getDeviceRecords(place).then((data) => {
        setRecords(data)
      })
      getSpeedLimit(place).then(data => {setSpeedLimit(data.speed_limit)})
    }
  , [place, records])

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="detail-page">
      <div className="top-box">
        <h2 className="place-name">Location: {place}</h2>
        <div className="speed-limit">
          <h2>Speed Limit: </h2>
          <Select label="speed-limit" value={speedLimit} onChange={onChangeSpeed} id="speed">
            {
              Array.from(new Array(6), (x, i) => (i + 1) * 10).map(
                value => <MenuItem value={value}>{value} km/hr</MenuItem>
              )
              }
          </Select>
        </div>
      </div>
      <DataTable place={place} data={records} />
    </motion.div>
  )
}

export default Detail
