export const fetchMenu = async () => {
  const res = await fetch("https://brew-and-blend-cafe-server.onrender.com/");
  const data = await res.json();

  return data.data.menuItems;
};
