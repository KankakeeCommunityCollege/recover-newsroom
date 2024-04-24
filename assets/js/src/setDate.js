// SETS THE CURRENT DATE IN THE "LATEST-NEWS-WIDGET"
const todaysDate = document.getElementById('todaysDate');

function setDate() {
  const today = new Date();
  const time = `${today.getMonth()+1}.${today.getDate()}`;

  todaysDate.innerHTML = time;
}

export default setDate;
