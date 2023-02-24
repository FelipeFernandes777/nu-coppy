import Icons from "../Icons/Icons";
import "./SliderIcons.css";

const SliderIcons = ({ item }) => {
  return (
    <div>
      {item.map(({ icon, text, index }) => {
        return (
          <div className="carousel" key={index}>
            <Icons icon={icon} text={text} />
          </div>
        );
      })}
    </div>
  );
};

export default SliderIcons;
