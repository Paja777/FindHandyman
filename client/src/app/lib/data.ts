//<-----------------Navbar------------------>//
const rightLinks = [
  { name: "Login", location: "/login" },
  { name: "Register", location: "/register" },
];
const navStyles = {
  padding: "6px ",
  margin: "10px",
  marginTop: "0px",
  color: "#98FF98",
  textDecoration: "none",
  fontSize: "25px",
  marginRight: "17px",
  paddingTop: "7%",
  fontWeight: "bolder",
  "&:hover": {
    color: "rgb(169, 87, 250)",
  },
  "&.active": {
    color: "rgb(169, 87, 250)",
  },
};
const stackStyle = {
  position: "sticky",
  zIndex: 22,
  background: "white",
  top: "0",
  justifyContent: "space-between",
  marginRigth: "30px",
};
const linkStyle = {
  textDecoration: "none",
  fontSize: "43px",
  color: "red",
  padding: 0,
  marginLeft: "3px",
  marginBottom: "2%",
  marginTop: "5%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const navLinkStyle1 = {
  opacity: 0.7,
  backgroundColor: "rgb(41, 41, 41)",
  color: "white",
  textDecoration: "none",
  display: "flex",
  paddingLeft: "9px",
  paddingRight: "9px",
  borderRadius: "5px",
  marginRight: 7,
  height: "10vh",
};
const navLinkStyle2 = {
  backgroundColor: "rgb(66, 135, 245)",
  color: "white",
  opacity: 0.7,
  textDecoration: "none",
  display: "flex",
  paddingLeft: "8px",
  paddingRight: "8px",
  borderRadius: "5px",
  marginRight: 7,
  height: "10vh",
};
const gitLink = `https://github.com/Paja777`;
const lnLink = `https://www.linkedin.com/in/paja-rvovic/`;
//<----

export {
  rightLinks,
  navStyles,
  stackStyle,
  linkStyle,
  navLinkStyle1,
  navLinkStyle2,
  gitLink,
  lnLink,
};
