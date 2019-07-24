// SETS THE CURRENT DATE IN THE "LATEST-NEWS-WIDGET"
function setDate() {
  let dt = new Date();
  const time = dt.getMonth()+1 + '.' + dt.getDate();
  document.getElementById('todaysDate').innerHTML = time;
}

export default setDate;
