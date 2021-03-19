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
  School,
  CaretAltUp,
  CaretAltDown,
  CaretAltLeft,
  CaretAltRight,
  TrendUp,
  TrendDown,
  Plus,
  PlusCircle,
  PlusCircleFilled,
  Minus,
  MinusCircle,
  MinusCircleFilled,
  Box,
  Checkbox,
  CheckboxFilled,
  QuestionCircle,
  QuestionCircleFilled,
  Sort,
  Bolt,
  BoltFilled,
  Home,
  User,
  Refresh,
  Clock,
  Stopwatch,
  Book,
  Code,
  Star,
  StarFilled
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

export const CaretAltUpIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <CaretAltUp />
    </Icon>
  );
};

export const CaretAltDownIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <CaretAltDown />
    </Icon>
  );
};

export const CaretAltLeftIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <CaretAltLeft />
    </Icon>
  );
};

export const CaretAltRightIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <CaretAltRight />
    </Icon>
  );
};

export const TrendUpIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <TrendUp />
    </Icon>
  );
};

export const TrendDownIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <TrendDown />
    </Icon>
  );
};

export const PlusIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Plus />
    </Icon>
  );
};

export const PlusCircleIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <PlusCircle />
    </Icon>
  );
};

export const PlusCircleFilledIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <PlusCircleFilled />
    </Icon>
  );
};

export const MinusIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Minus />
    </Icon>
  );
};

export const MinusCircleIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <MinusCircle />
    </Icon>
  );
};

export const MinusCircleFilledIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <MinusCircleFilled />
    </Icon>
  );
};

export const BoxIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Box />
    </Icon>
  );
};

export const CheckboxIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Checkbox />
    </Icon>
  );
};

export const CheckboxFilledIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <CheckboxFilled />
    </Icon>
  );
};

export const QuestionCircleIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <QuestionCircle />
    </Icon>
  );
};

export const QuestionCircleFilledIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <QuestionCircleFilled />
    </Icon>
  );
};

export const SortIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Sort />
    </Icon>
  );
};

export const BoltIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Bolt />
    </Icon>
  );
};

export const BoltFilledIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <BoltFilled />
    </Icon>
  );
};

export const HomeIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Home />
    </Icon>
  );
};

export const UserIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <User />
    </Icon>
  );
};

export const RefreshIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Refresh />
    </Icon>
  );
};

export const ClockIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Clock />
    </Icon>
  );
};

export const StopwatchIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Stopwatch />
    </Icon>
  );
};

export const BookIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Book />
    </Icon>
  );
};

export const CodeIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Code />
    </Icon>
  );
};

export const StarIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <Star />
    </Icon>
  );
};

export const StarFilledIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <StarFilled />
    </Icon>
  );
};
