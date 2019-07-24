// SETS THE CURRENT DATE IN THE "LATEST-NEWS-WIDGET"
function setDate() {
  if (document.getElementById('todaysDate')) {
    let dt = new Date();
    const time = dt.getMonth()+1 + '.' + dt.getDate();
    document.getElementById('todaysDate').innerHTML = time;
  }
}

export default setDate;
