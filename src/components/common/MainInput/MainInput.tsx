import { TextfieldProps } from '@/Types'
import { InputLabel,Stack} from "@mui/material"
import { MyInput } from './Styles'

const MainInput = ({
    id,
    value,
    onChange,
    onBlur,
    type,
    placeholder,
    sx,
    multiline,
    rows,
    disabled,
    label,
}:TextfieldProps) => {
  return (
    <>
  <Stack alignItems='flex-start' spacing={1}>
     <InputLabel>
       {label}
     </InputLabel>
     <MyInput
       id={id}
       value={value}
       onChange={onChange}
       onBlur={onBlur}
       type={type}
       placeholder={placeholder}
       sx={sx}
       multiline={multiline}
       rows={rows}
       disabled={disabled}/>
    </Stack>
    </>
  )
}

export default MainInput