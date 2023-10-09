import { Modal, Box } from "@mui/material"
import { FunctionComponent } from "react"


interface ProjectsProps {
    visible: boolean
    setVisible: (value: boolean | ((prevValue: boolean) => boolean)) => void // accepts a setState function
}

export const Projects: FunctionComponent<ProjectsProps> = ({ visible, setVisible}) => {
    return (
        <Modal 
            open={visible} 
            onClose={() => {setVisible(false)}}
        >
            <Box bgcolor="red">
                MODAL
            </Box>
        </Modal>
    )
}

export default Projects