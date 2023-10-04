import { StyledPageWrapper } from "./styled"

interface MainContainerProps {
    children: React.ReactNode
}
export const MainContainer = ({ children }: MainContainerProps) => {
    
    return (
        <StyledPageWrapper bgcolor="lightblue">
            {children}
        </StyledPageWrapper>
    )
}

export default MainContainer