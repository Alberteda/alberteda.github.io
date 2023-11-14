import { StyledPageWrapper } from "./styled"

interface MainContainerProps {
    children: React.ReactNode
}
export const MainContainer = ({ children }: MainContainerProps) => {
    
    return (
        <StyledPageWrapper>
            {children}
        </StyledPageWrapper>
    )
}

export default MainContainer