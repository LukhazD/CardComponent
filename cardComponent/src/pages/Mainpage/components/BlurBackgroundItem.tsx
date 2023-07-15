import { Box } from "@mui/material"

interface Iprops{
    height:string,
    width:string
}
export default function BlurBackgroundItem(props:Iprops){
    return(<>
        <Box sx={{
            width:props.width, 
            height:props.height, 
            borderRadius:'50%', 
            // position:'absolute',
            background:'radial-gradient(circle, rgba(131,58,180,1) 10%, transparent 70%)'}}/>
        </>)
}