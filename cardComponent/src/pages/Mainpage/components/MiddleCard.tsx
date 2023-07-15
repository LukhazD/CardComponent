import { Stack, Typography } from "@mui/material";
import BlurBackgroundItem from "./BlurBackgroundItem";
import { motion } from "framer-motion";


export default function MiddleCard(){


    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };
    
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.5,
            staggerChildren: 0.08,
          },
        },
      };
    return(<>
    <Stack>

        <Typography>
            Middle card
        </Typography>
        <Stack sx={{
            width:'fit-content', 
            alignItems:'center', 
            justifyContent:'center', 
            maxWidth:'25em', 
            height:'fit-content'}}>
            <motion.div 
                whileHover={{
                    backgroundColor:'rgba(255, 255, 255, 0.45)',
                    backdropFilter:'blur(12px)',
                    WebkitBackdropFilter:'blur(12px)',

                }}
                transition={{
                    duration:0.28
                }}
                whileTap={{scale:1.05}}
                style={{
                    width:'20em', 
                    height:'18em', 
                    position:'fixed', 
                    zIndex:'100',
                    borderRadius:'10px',
                    border:'1px solid rgba(255, 255, 255, 0.18)',
                    backgroundColor:'rgba(255, 255, 255, 0.20)',
                    backdropFilter:'blur(4px)',
                    WebkitBackdropFilter:'blur(4px)',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'}}>
                        <motion.h3
                        variants={sentence} 
                        style={{color:'#24221E'}}
                        initial="hidden" animate="visible">
                            {
                                'Heres an item'.split('').map((char, index)=>{
                                    return(
                                        <motion.span 
                                        key={index}
                                        variants={textVariants}
                                        
                                        >
                                            {char}
                                        </motion.span>
                                    )
                                })
                            }
                        </motion.h3>
            </motion.div>
            <Stack sx={{alignContent:'center', justifyContent:'space-between', flexWrap:'wrap', flexDirection:'row', height:'fit-content', gap:'2', width:'100%'}}>
                
                <motion.div
                animate={{
                    y:[0, 24, 0],
                }}
                transition={{
                    duration:7.5,
                    repeat:Infinity,
                    ease:'easeInOut'
                }}
                initial={{
                    y:0,
                }}>
                    <BlurBackgroundItem width="250px" height="250px"/>
                </motion.div>
                <motion.div
                animate={{
                    y:[0, 12, 30, 0],
                    x:[0,14,20,0]
                }}
                transition={{
                    duration:8,
                    repeat:Infinity,
                    ease:'easeInOut'
                }}
                initial={{
                    y:0,
                    x:0
                }}>
                    <BlurBackgroundItem width="100px" height="100px"/>
                    
                </motion.div>
                <motion.div
                animate={{
                    y:[0, 24, 10, 0],
                    x:[0, 12, 20, 0]
                }}
                transition={{
                    duration:7,
                    repeat:Infinity,
                    ease:'easeInOut'
                }}
                initial={{
                    y:0,
                    x:0
                }}>
                    <BlurBackgroundItem width="140px" height="140px"/>   
                </motion.div>
                <motion.div
                animate={{
                    y:[0, 12, 0],
                }}
                transition={{
                    duration:7.5,
                    repeat:Infinity,
                    ease:'easeInOut'
                }}
                initial={{
                    y:0,
                }}>
                    <BlurBackgroundItem width="200px" height="200px"/>
                </motion.div>
            </Stack>
        </Stack>
    </Stack>
    </>)
}