function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

export function formatDateTable(date) {
  const newDate = [
    padTo2Digits(new Date(date).getUTCDate()),
    padTo2Digits(new Date(date).getUTCMonth() + 1),
    new Date(date).getFullYear(),
  ].join('/');

  return newDate === '31/12/1969' ? '' : newDate;
}
