export const formatEvent = (name: string) => {
  let arr = name.split('_');
  arr = arr.map(el => {
    return el.charAt(0).toUpperCase() + el.slice(1);
  });
  return arr.join(' ');
};

export const formatDate = (date: string) => {
  const fullDate = new Date(date);
  return fullDate.toString().slice(0, 15);
};