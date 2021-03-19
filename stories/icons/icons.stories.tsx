import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import {
  CaretUpIcon,
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  PointerIcon,
  SearchIcon,
  CheckIcon,
  CheckCircleIcon,
  CheckCircleFilledIcon,
  XIcon,
  XCircleIcon,
  XCircleFilledIcon,
  AlertIcon,
  AlertFilledIcon,
  HeartIcon,
  HeartFilledIcon,
  PlayIcon,
  MenuIcon,
  DesktopIcon,
  EnvelopeIcon,
  PencilIcon,
  PinIcon,
  CalendarIcon,
  SchoolIcon,
} from '../../src';

export default {
  title: 'prenda-spark/Icon',
  component: CaretUpIcon,
} as Meta;

export const CaretUpIconSmallNavyHi = () => (
  <CaretUpIcon fontSize="small" color="navy" contrast="high" />
);

export const CaretUpIconSmallGreyHi = () => (
  <CaretUpIcon fontSize="large" color="grey" contrast="high" />
);

export const CaretDownIconSmallGreyHi = () => (
  <CaretDownIcon fontSize="large" color="grey" contrast="high" />
);

export const AllIcons = () => (
  <>
    <CaretUpIcon fontSize="default" color="navy" contrast="high" />
    <CaretDownIcon fontSize="default" color="navy" contrast="high" />
    <CaretLeftIcon fontSize="default" color="navy" contrast="high" />
    <CaretRightIcon fontSize="default" color="navy" contrast="high" />
    <PointerIcon fontSize="default" color="navy" contrast="high" />
    <SearchIcon fontSize="default" color="navy" contrast="high" />
    <CheckIcon fontSize="default" color="navy" contrast="high" />
    <CheckCircleIcon fontSize="default" color="navy" contrast="high" />
    <CheckCircleFilledIcon fontSize="default" color="navy" contrast="high" />
    <XIcon fontSize="default" color="navy" contrast="high" />
    <XCircleIcon fontSize="default" color="navy" contrast="high" />
    <XCircleFilledIcon fontSize="default" color="navy" contrast="high" />
    <AlertIcon fontSize="default" color="navy" contrast="high" />
    <AlertFilledIcon fontSize="default" color="navy" contrast="high" />
    <HeartIcon fontSize="default" color="navy" contrast="high" />
    <HeartFilledIcon fontSize="default" color="navy" contrast="high" />
    <PlayIcon fontSize="default" color="navy" contrast="high" />
    <MenuIcon fontSize="default" color="navy" contrast="high" />
    <DesktopIcon fontSize="default" color="navy" contrast="high" />
    <EnvelopeIcon fontSize="default" color="navy" contrast="high" />
    <PencilIcon fontSize="default" color="navy" contrast="high" />
    <PinIcon fontSize="default" color="navy" contrast="high" />
    <CalendarIcon fontSize="default" color="navy" contrast="high" />
    <SchoolIcon fontSize="default" color="navy" contrast="high" />
  </>
);
