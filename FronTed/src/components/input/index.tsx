import Label from '@components/label'
import { colors } from '@shared/themes/colors'
import { ReactNode, useState } from 'react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { IMaskInput } from 'react-imask'
import styled from 'styled-components'

type Props = {
  fontWeight?: string
  fontSize?: string
  edition?: boolean
  name?: string
  enabled?: boolean
  margin?: string
  borderNone?: boolean
  padding?: string
  width?: string
  color?: string
  label: string
  error?: boolean
  onChange: (e: any) => void
  errorMessage?: string
  mask?: Masks[]
  value: string
  icon?: ReactNode
  onIconClick?: () => void
  type: 'text' | 'password' | 'date' | 'time'
}

type Masks = {
  mask: string
}

export const Input = ({
  fontWeight,
  edition,
  fontSize,
  name,
  enabled,
  borderNone,
  color,
  margin,
  padding,
  width,
  error,
  label,
  errorMessage,
  icon,
  value,
  mask,
  onChange,
  onIconClick,
  type
}: Props) => {
  const [obscure, setObscure] = useState<boolean>(
    type === 'password' ? true : false
  )

  return (
    <InputBody
      icon={icon ? true : false}
      active={value.length > 0 ? true : false}
      error={error}
      data-testid="@input"
      color={color}
      width={width}
      padding={padding}
      fontSize={fontSize}
      fontWeight={fontWeight}
      edition={edition}
      margin={margin}
      borderNone={borderNone ? true : false}
    >
      {mask ? (
        <>
          <IMaskInput
            mask={mask}
            definitions={{
              '#': /[0-9]/,
              M: /[0-1]/,
              D: /[0-3]/
            }}
            onAccept={(value: any) =>
              onChange({ target: { name: label, value } })
            }
            value={value}
          />
        </>
      ) : (
        <input
          name={name}
          disabled={enabled}
          type={obscure ? 'password' : type}
          value={value}
          autoComplete="off"
          onChange={onChange}
        />
      )}
      <label className="form__label" htmlFor="name">
        {label}
      </label>
      {icon && <IconDiv onClick={onIconClick}>{icon}</IconDiv>}
      {type === 'password' && (
        <IconDiv onClick={() => setObscure(state => !state)}>
          {obscure ? (
            <IoMdEyeOff color={error ? colors.error : colors.input} />
          ) : (
            <IoMdEye color={error ? colors.error : colors.input} />
          )}
        </IconDiv>
      )}
      {error && (
        <Label size={9} color={colors.error}>
          {errorMessage}
        </Label>
      )}
    </InputBody>
  )
}

const InputBody = styled.div<{
  error?: boolean
  fontSize?: string
  active: boolean
  icon?: boolean
  color?: string
  width?: string
  margin?: string
  padding?: string
  fontWeight?: string
  borderNone?: boolean
  edition?: boolean
}>`
  position: relative;
  display: flex;
  padding: 20px 5px;
  width: 100%;
  height: auto;
  flex-direction: column;
  row-gap: 8px;
  ${({ margin }) =>
    margin &&
    `
    margin: ${margin};
`}
  ${({ width }) =>
    width &&
    `
    width: ${width};
`}
  ${({ padding }) =>
    padding &&
    `
    padding: ${padding};
`}
  input {
    font-family: inherit;
    width: 100%;
    border: none;
    z-index: 2;
    border-bottom: 1px solid ${colors.input};
    outline: 0;
    font-size: 12px;
    color: ${colors.input};
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
    ${({ fontSize }) =>
      fontSize &&
      `
      font-size: ${fontSize};
    `}

    ${({ color }) =>
      color &&
      `
       border-bottom: 1px solid ${color};
      color: ${color};
    `};

    ${({ edition }) =>
      edition === true &&
      `
      border-bottom: 1px solid ${colors.blue002};
    `}

    ${({ fontWeight }) =>
      fontWeight &&
      `
      font-weight: ${fontWeight};
    `}

    ${({ error }) =>
      error &&
      `
      border-bottom: 1px solid ${colors.error};
      color: ${colors.error};
    `};

    ${({ borderNone }) =>
      borderNone === true &&
      `
    border: none;
    `};

    ${({ icon }) =>
      icon &&
      `
    padding: 7px 28px 7px 0px;
  `}
  }
  .form__label {
    position: absolute;
    z-index: 1;
    left: 10px;
    font-size: 12px;
    transition: 0.3s;
    color: ${colors.input};
    top: 28px;
    ${({ active }) => active && `top: 5px;`}
    ${({ error }) =>
      error &&
      `
      color: ${colors.error};
    `};
    ${({ color }) => color && `color: ${color};`}
  }
  input:focus ~ .form__label {
    top: 5px;
  }
`

const IconDiv = styled.div`
  position: absolute;
  right: 10px;
  top: 28px;
  cursor: pointer;
  z-index: 2;
`
