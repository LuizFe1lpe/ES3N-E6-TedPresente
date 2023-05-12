export interface ColorsType {
  primary: string
  background: string
  black: string
  error: string
  input: string
  buttonLabel: string
  borderNav: string
  inputNav: string
  white: string
  gray001: string
  gray002: string
  gray003: string
  gray004: string
  gray005: string
  gray006: string
  gray007: string
  gray008: string
  gray009: string
  gray010: string
  gray011: string
  gray012: string
  green001: string
  green002: string
  orange001: string
  orange002: string
  orange003: string
  blue001: string
  blue002: string
  blue003: string
  pink001: string
  blue: string
  darkblue: string
}

const primary = import.meta.env.VITE_PRIMARY_COLOR
//Antes de adicionar uma nova cor, verificar se ela já não existe
export const colors: ColorsType = {
  primary: primary,
  background: '#F5F5F5',
  black: '#000',
  error: 'rgba(239, 68, 68, 1)',
  input: 'rgba(83, 83, 83, 1)',
  buttonLabel: 'rgba(255, 255, 255, 1)',
  borderNav: 'rgba(228, 228, 228, 1)',
  inputNav: 'rgba(210, 210, 210, 1)',
  white: '#FFF',
  gray001: 'rgba(111, 111, 111, 1)',
  gray002: '#EDEDED',
  gray003: '#A4A4A4',
  gray004: '#868686',
  gray005: '#E4E4E4',
  gray006: '#D2D2D2',
  gray007: '#DADADA',
  gray008: '#535353',
  gray009: '#B4B4B4',
  gray010: '#F3F3F3',
  gray011: '#6F6F6F',
  gray012: '#545454',
  green001: '#0AA85C',
  green002: '#89FFC6',
  orange001: '#F65900',
  orange002: '#F6C6AA',
  orange003: '#FD9F6A',
  blue001: '#5E7BBA',
  blue002: '#1B9BD7',
  blue003: '#395EAA',
  pink001: '#ED5AA7',
  blue: '#1B9BD7',
  darkblue: '#1B9BD7'
}
