import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import Coffee from '../../../../shared/assets/images/Coffee.jpg'
export default function BasicCard(){

    return(<>
    <Box>
        <Typography>
            Basic Card
        </Typography>
        <Box sx={{
            display:'flex', 
            flexDirection:'row', 
            width:'12rem',
            height:'17rem',
            borderRadius:'3px',
            justifyContent:'center', 
            alignItems:'flex-end', 
            backgroundPosition:'center', 
            backgroundSize:'cover',
            backgroundImage:`url(${Coffee})`,
            backgroundColor:'rgb(66, 125, 60, 0.5)'
            }}>

            <motion.div
            initial={{
                opacity:0,
                transform:'translate(0%, 10px)',
                clipPath:'inset(0%, 0%)',
            }}
            whileHover={{
                opacity:1, 
                clipPath:'inset(100%, 100%)',
                backgroundColor:'rgb(55, 0, 233, 0.4)',
                transform:'translate(0%, 0px)',
                
            }}
            transition={{
                duration:0.28,
            }}
            style={{
                width:'100%', 
                height:'100%',
                display:'flex', 
                flexDirection:'row', 
                justifyContent:'center', 
                alignItems:'flex-end', }}
            >
                <Typography sx={{position:'fixed', fontSize:'18px', color:'#FFF', fontWeight:'600', padding:'1em'}}>
                    Heres an item
                </Typography>
            </motion.div>

        </Box>
    </Box>
    </>)
}