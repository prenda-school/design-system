import React, { FC } from 'react';
import { Icon } from './icon';
import {
  CaretUp,
  CaretDown,
  CaretLeft,
  CaretRight,
  Pointer,
  Search,
  Check,
  CheckCircle,
  CheckCircleFilled,
  X,
  XCircle,
  XCircleFilled,
  Alert,
  AlertFilled,
  Heart,
  HeartFilled,
  Play,
  Menu,
  Desktop,
  Envelope,
  Pencil,
  Pin,
  Calendar,
  School
} from './svgpath';

interface iconProps {
  fontSize: string;
  color: string;
  contrast: string;
}

export const CaretUpIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <CaretUp />
    </Icon>
  );
};

export const CaretDownIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <CaretDown />
    </Icon>
  );
};

export const CaretLeftIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <CaretLeft />
    </Icon>
  );
};

export const PointerIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Pointer />
    </Icon>
  );
};

export const CaretRightIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <CaretRight />
    </Icon>
  );
};

export const SearchIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Search />
    </Icon>
  );
};

export const CheckIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Check />
    </Icon>
  );
};

export const CheckCircleIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <CheckCircle />
    </Icon>
  );
};

export const CheckCircleFilledIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <CheckCircleFilled />
    </Icon>
  );
};

export const XIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <X />
    </Icon>
  );
};

export const XCircleIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <XCircle />
    </Icon>
  );
};

export const XCircleFilledIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <XCircleFilled />
    </Icon>
  );
};

export const AlertIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Alert />
    </Icon>
  );
};

export const AlertFilledIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <AlertFilled />
    </Icon>
  );
};

export const HeartIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Heart />
    </Icon>
  );
};

export const HeartFilledIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <HeartFilled />
    </Icon>
  );
};

export const PlayIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Play />
    </Icon>
  );
};

export const MenuIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Menu />
    </Icon>
  );
};

export const DesktopIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Desktop />
    </Icon>
  );
};

export const EnvelopeIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Envelope />
    </Icon>
  );
};

export const PencilIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Pencil />
    </Icon>
  );
};

export const PinIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Pin />
    </Icon>
  );
};

export const CalendarIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Calendar />
    </Icon>
  );
};

export const SchoolIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <School />
    </Icon>
  );
};
