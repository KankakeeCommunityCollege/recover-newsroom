// SETS THE CURRENT DATE IN THE "LATEST-NEWS-WIDGET"
const todaysDate = document.getElementById('todaysDate');

function setDate() {
  const today = new Date();
  const formattedDate = `${today.getMonth() + 1}.${today.getDate()}`;
  const dateBuiltIntoPage = todaysDate.innerText;

  // Most of the time the date built in the page will be correct as long as the morning build or FTP didn't error-out
  if (dateBuiltIntoPage == formattedDate) // if the date is correct there is no need to update it
    return;

  todaysDate.innerHTML = formattedDate;
}

export default setDate;
