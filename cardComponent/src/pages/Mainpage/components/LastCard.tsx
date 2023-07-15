import { Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function LastCard(){
    return(
    <>
    <Stack sx={{alignItems:'center'}}>
        <Typography>
            Last cards
        </Typography>
        <Stack
        sx={{flexDirection:'row', width:'fit-content', justifyContent:'center', position: 'relative'}}>
            <motion.div
            style={{
                position: 'absolute',
                x:'2em',
                rotateY:'30deg',
                width:'150px', 
                height:'150px', 
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                borderRadius:'15px',
                background:'linear-gradient(145deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'
            }}
            whileHover={{
                y:[0,-24],
                scale:1.2,
                rotateY:'0deg',
                zIndex:100
            }}>
                <Typography sx={{color:'#FFF', fontSize:'23px', userSelect:'none', fontWeight:700}} >
                    An item
                </Typography>
            </motion.div>
            <motion.div
            style={{
                position: 'absolute',
                x:'7em',
                rotateY:'30deg',
                width:'150px', 
                height:'150px', 
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                borderRadius:'15px',
                background:'linear-gradient(to right, #8e2de2, #4a00e0)'
            }}
            whileHover={{
                y:[0,-24],
                scale:1.2,
                rotateY:'0deg',
                zIndex:100
            }}>
                <Typography sx={{color:'#FFF', fontSize:'23px', userSelect:'none', fontWeight:700}} >
                    An item
                </Typography>
            </motion.div>
            <motion.div
            style={{
                position: 'absolute',
                x:'13em',
                rotateY:'30deg',
                width:'150px', 
                height:'150px', 
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                borderRadius:'15px',
                background:'linear-gradient(to right, #8360c3, #2ebf91)'
            }}
            whileHover={{
                y:[0,-24],
                scale:1.2,
                rotateY:'0deg',
                zIndex:100
            }}>
                <Typography sx={{color:'#FFF', fontSize:'23px', userSelect:'none', fontWeight:700}} >
                    An item
                </Typography>
            </motion.div>
        </Stack>
    </Stack>
    </>)
}
