import "./Icons.css";

const Icons = ({ icon, text }) => {
  return (
    <div className="icons_container_balance">
      <span className="icons_img">
        {icon}
      </span >
      <div className="text_icon_container">
      <p className="text_icon">{text}</p>
      </div>
    </div>
  );
};

export default Icons;
