import React from 'react';
import {SvgProps, SvgXml} from 'react-native-svg';
import User from '../assets/icons/User.svg';
import Mail from '../assets/icons/Mail.svg';
import Lock from '../assets/icons/Lock.svg';
import Tick from '../assets/icons/Tick.svg';

const icons: {[key: string]: React.FC<SvgProps>} = {
  User,
  Mail,
  Lock,
  Tick,
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
