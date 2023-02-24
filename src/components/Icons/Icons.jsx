import "./Icons.css";

const Icons = ({ icon, text }) => {
  return (
    <div className="icons_container">
      <div className="icons_img">{icon}</div>
      <div className="text_icon_container">{text}</div>
    </div>
  );
};

export default Icons;
