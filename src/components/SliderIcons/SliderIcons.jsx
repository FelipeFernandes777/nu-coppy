import Icons from "../Icons/Icons";
import "./SliderIcons.css";

// import { SiPix } from 'react-icons/si'
import { ImBarcode } from 'react-icons/im'

const SliderIcons = () => {
  return (
    <div className="slider_container">
      <ul className="slider_icons">
        <li>
          <Icons 
        icon={<ImBarcode />}
        text='Área Pix'
        />
        </li>
        <li>
          <Icons 
        icon={<ImBarcode />}
        text='Pagar'
        />
        </li>
        <li>
          <Icons 
        icon='Projeto'
        text='Depositar'
        />
        </li>
        <li>
          <Icons 
        icon='Projeto'
        text='Transferir'
        />
        </li>
        <li>
          <Icons 
        icon='Projeto'
        text='Recarga de Celular'
        />
        </li>
      </ul>
    </div>
  );
};

export default SliderIcons;
