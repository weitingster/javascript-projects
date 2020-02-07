import React from "react"

function TodayDate() {
  var tempDate = new Date()
  var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate()
  const currDate = "Date (YYYY-MM-DD): "+ date
  return (
    <h3>{currDate}</h3>
  )
}


export default TodayDate
