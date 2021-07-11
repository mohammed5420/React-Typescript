import React from 'react';
import styled from 'styled-components';
import SectionsTitle from './SectionsTitle';

const ProjectsSection: React.FC = () => {
    return (
        <StyledDiv>
            <div className="container">
                <SectionsTitle title='Projects' semiTitle='some of my recent work' />
                <div className="buttons">
                        <div>left</div>
                        <div>rigth</div>
                </div>
                <div className="projects">
                    <div className="projects-wrapper">
                        <div className="project"></div>
                        <div className="project"></div>
                        <div className="project"></div>
                        <div className="project"></div>
                        <div className="project"></div>
                    </div>
                </div>
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    padding:8rem 0;
    .container {
        display:flex;
        flex-direction:column;
        text-align:center;
        position:relative;
    }
    .projects{
        width:100%;
        overflow: scroll;
        position:relative;
    }
    .projects-wrapper{
        height:550px;
        display: flex;
        width:2000px;
        align-items:center;
        gap:1rem;
        border:2px solid transparent;    
    }
    .project{
        width:400px;
        background:black;
        height: 100%;
        border-radius:2rem;
    }
    .buttons{
        position:absolute;
        top:0%;
        right:0;
        display: flex;
        gap:1rem;
        div{
            background:blue;
            padding:1rem;
            border-radius:1rem;
        }
    }
    .title{
        margin-bottom:2rem;
    }
`;
export default ProjectsSection;