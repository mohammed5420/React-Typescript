import React from 'react';
import styled from 'styled-components';
import SectionsTitle from './SectionsTitle';

const ProjectsSection: React.FC = () => {
    return (
        <StyledDiv>
            <div className="container">
                <SectionsTitle title='Propjects' semiTitle='some of my recent work'/>
                <h1>This is the projects section</h1>
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    padding:8rem 0;
    .container {
        display:flex;
        flex-direction:column;
    }
`;
export default ProjectsSection;