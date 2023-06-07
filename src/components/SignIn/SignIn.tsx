import MainInput from '../common/MainInput/MainInput'
import {Typography} from "@mui/material"
import { MainButton } from '../common/MainButton/MainButton'
import {Stack} from "@mui/material"


const SignIn = () => {
  return (
<>
   <Stack alignItems='center' justifyContent='center' spacing={6}>
     <Typography variant='h2'>ავტორიზაცია</Typography>
      <form style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'15px'}}>
          <MainInput type='text' id='user' label='მომხმარებელი'/>
          <MainInput type='password' id='password' label='პაროლი'/>
          <MainButton type='submit' text='სისტემაში შესვლა'/>
      </form>
  </Stack>
</>
  )
}

export default SignIn