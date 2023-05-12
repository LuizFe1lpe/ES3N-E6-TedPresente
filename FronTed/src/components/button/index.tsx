import { colors } from '@shared/themes/colors'
import { ButtonHTMLAttributes, CanvasHTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  label: string
  height?: string
  icon?: ReactNode
  reverse?: boolean
  backgroundNone?: boolean
  borderRadius?: string
  color?: string
  fontSize?: string
  fontWeight?: string
  colorText?: string
  borderColor?: string
  borderWidth?: string
  backgroundColor?: string
  margin?: string
  width?: string
  disable?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement> &
  CanvasHTMLAttributes<HTMLButtonElement>

export const MainButton = ({
  label,
  height,
  icon,
  fontSize,
  fontWeight,
  reverse,
  backgroundNone,
  borderRadius,
  color,
  colorText,
  borderColor,
  borderWidth,
  backgroundColor,
  margin,
  width,
  disable,
  ...rest
}: Props) => {
  return (
    <Button
      style={{ height: height, backgroundColor: backgroundColor }}
      backgroundNone={backgroundNone ?? false}
      margin={margin}
      width={width}
      reverse={reverse ?? false}
      disable={disable}
      fontWeight={fontWeight}
      fontSize={fontSize}
      data-testid="@button"
      {...rest}
    >
      {label}
      {icon}
    </Button>
  )
}

const Button = styled.button<{
  reverse: boolean
  disable?: boolean
  backgroundNone?: boolean
  margin?: string
  width?: string
  fontWeight?: string
  fontSize?: string
}>`
  height: 38px;
  min-width: 150px;
  width: auto;
  outline: 0;
  border: 0;
  display: flex;
  flex-direction: row;
  column-gap: 5px;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  background: ${colors.primary};
  color: ${colors.buttonLabel};
  border-radius: 8px;
  ${({ reverse }) =>
    reverse === true &&
    `
  flex-direction: row-reverse;
`};

  ${({ margin }) =>
    margin &&
    `
    margin: ${margin};
  `}
  ${({ fontSize }) =>
    fontSize &&
    `
    font-size: ${fontSize}px;
    `}
  
  ${({ fontWeight }) =>
    fontWeight &&
    `
  font-weight: ${fontWeight};
  `}

  ${({ width }) =>
    width &&
    `
  width: ${width};
  min-width:10px;
`}

  ${({ disable }) =>
    disable === true &&
    `
  cursor: default;
`};

  ${({ backgroundNone }) =>
    backgroundNone === true &&
    `
  background: ${colors.white};
  color: ${colors.primary};
  border: 1px solid ${colors.primary};
`};
`
