import React from "react"

function TodayDate() {
  var tempDate = new Date()
  var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds()
  const currDate = "Date of Issuance: "+ date
  return (
    <h2>{currDate}</h2>
  )
}


export default TodayDate
