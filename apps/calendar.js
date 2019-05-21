let CURR_DATE = new Date();

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function getTotalDaysInMonth(year, month) {
 
  return 32 - new Date(year, month, 32)
    .getDate();
}

const grid = document.querySelectorAll('#calendar-table td');
const dateText = document.getElementById('date-text');

grid.forEach(cell => cell.onclick = function() {
  const selectedDate = cell.innerHTML;
  if (selectedDate === '')
    return;
  CURR_DATE.setDate(selectedDate);
  renderCalendar();
});

const calendarTitle = document.querySelectorAll('#calendar-title > span')[0];

// clears all cells
function clearGrid() {
  grid.forEach(cell => {
    cell.innerHTML = '';
    cell.classList.remove('today-cell');
  });
}

function renderCalendar(date = CURR_DATE) {
  clearGrid();
  
  // sets month and year
  calendarTitle.innerText = `${MONTHS[date.getMonth()]}, ${date.getFullYear()}`;
  
  const dayOfWeek  = date.getDay();
  const dateOfMnth = date.getDate();
  
  let totalMonthDays = getTotalDaysInMonth(
    date.getFullYear(),
    date.getMonth()
  );
  
  let startDay = dayOfWeek - dateOfMnth % 7 + 1;
  
  if (startDay < 0)
    startDay = (startDay + 35) % 7;
  
  for ( let i = startDay; i < totalMonthDays + startDay; i++ )
    grid[i % 35].innerHTML = (i - startDay + 1);
  
  grid[(startDay + dateOfMnth - 1) % 35].classList.add('today-cell');
  
  dateText.innerHTML = CURR_DATE.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  
}

[...document.getElementsByClassName('btn')].forEach(btn => {
  
  let incr = 1;
  // left button decreases month
  if (btn.classList.contains('left'))
    incr = -1;
  
  btn.onclick = function() {
    CURR_DATE.setMonth(CURR_DATE.getMonth() + incr);
    renderCalendar(); 
  };
  
})
//clearGrid()
renderCalendar();

