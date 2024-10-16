import React from 'react';
import {SvgProps, SvgXml} from 'react-native-svg';
import User from '../assets/icons/User.svg';
import Mail from '../assets/icons/Mail.svg';
import Lock from '../assets/icons/Lock.svg';
import Tick from '../assets/icons/Tick.svg';
import Mic from '../assets/icons/Mic.svg';
import ToastError from '../assets/icons/ToastError.svg';
import ToastSuccess from '../assets/icons/ToastSuccess.svg';
import Home from '../assets/icons/Home.svg';
import Sound from '../assets/icons/Sound.svg';
import Close from '../assets/icons/Close.svg';
import Search from '../assets/icons/Search.svg';
import Info from '../assets/icons/Info.svg';
import Information from '../assets/icons/Information.svg';
import Right from '../assets/icons/Right.svg';
import Up from '../assets/icons/Up.svg';
import Down from '../assets/icons/Down.svg';
import Star from '../assets/icons/Star.svg';
import StarOutline from '../assets/icons/Star_outline.svg';
import Stars from '../assets/icons/Stars.svg';
import UpArrow from '../assets/icons/UpArrow.svg';
import DownArrow from '../assets/icons/DownArrow.svg';
import CloseFilled from '../assets/icons/CloseFilled.svg';
import TickFilled from '../assets/icons/TickFilled.svg';
import RightArrow from '../assets/icons/RightArrow.svg';
import PlayAudio from '../assets/icons/PlayAudio.svg';
import Play from '../assets/icons/Play.svg';
import Pause from '../assets/icons/Pause.svg';
import Checkbox from '../assets/icons/Checkbox.svg';
import CheckboxFilled from '../assets/icons/CheckboxFilled.svg';
import Bolt from '../assets/icons/Bolt.svg';
import Send from '../assets/icons/Send.svg';
import RightArrowCircle from '../assets/icons/RightArrowCircle.svg';
import LeftArrowCircle from '../assets/icons/LeftArrowCircle.svg';
import RightFillArrow from '../assets/icons/RightFillArrow.svg';
import LeftFillArrow from '../assets/icons/LeftFillArrow.svg';
import Bubble from '../assets/icons/Bubble.svg';

const icons: {[key: string]: React.FC<SvgProps>} = {
  User,
  Bolt,
  Mail,
  Lock,
  Tick,
  Mic,
  ToastError,
  ToastSuccess,
  Home,
  Sound,
  Close,
  Search,
  Info,
  Information,
  Right,
  Up,
  Down,
  Star,
  StarOutline,
  Stars,
  UpArrow,
  DownArrow,
  CloseFilled,
  TickFilled,
  RightArrow,
  PlayAudio,
  Play,
  Pause,
  Checkbox,
  CheckboxFilled,
  Send,
  RightArrowCircle,
  LeftArrowCircle,
  RightFillArrow,
  LeftFillArrow,
  Bubble,
};

interface IconProps {
  name: string;
  color?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const icon = ({name, color, width = 24, height = 24, ...props}: IconProps) => {
  const Icon = icons[name];
  return (
    <SvgXml
      xml={Icon.toString()}
      width={width}
      height={height}
      color={color}
      {...props}
    />
  );
};
export default icon;
