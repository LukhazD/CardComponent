import { Stack } from "@mui/material";
import BasicCard from "./components/BasicCard";
import MiddleCard from "./components/MiddleCard";
import LastCard from "./components/LastCard";

export default function Mainpage(){
    return(<>
    <Stack sx={{
        width:'100%', 
        height:'100vh',
        alignItems:'center', 
        justifyContent:'center',
        flexDirection:"row",
        gap:3}}>
        <BasicCard/>
        <MiddleCard/>
        <LastCard/>
    </Stack>
    </>)
}