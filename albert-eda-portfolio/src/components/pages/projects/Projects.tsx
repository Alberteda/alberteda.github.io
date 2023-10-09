import { Modal, Box, CardMedia } from "@mui/material"
import { FunctionComponent } from "react"
import OBSIDI from "../../../assets/obsidi_logo_white.png"


interface ProjectsProps {
    visible: boolean
    setVisible: (value: boolean | ((prevValue: boolean) => boolean)) => void // accepts a setState function
}

export const Projects: FunctionComponent<ProjectsProps> = ({ visible, setVisible}) => {
    return (
        <Modal 
            open={visible} 
            onClose={() => {setVisible(false)}}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Box 
                bgcolor="#232526" padding="5rem"
            >
                <Box width="12.5rem" height="12.5rem" border="4px solid #F4D03F">
                    <CardMedia 
                        sx={{
                            // backgroundColor: 'red',
                            height: "20%"
                        }}
                        component="img"
                        src={OBSIDI}
                        title="OBSIDI Logo"
                    />
                </Box>
            </Box>
        </Modal>
    )
}

export default Projects