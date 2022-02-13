import { Container } from 'reactstrap';
import { useGlobalContext } from '../../context';
import ProjectItem from './ProjectItem';

function Projects() {
    const { info } = useGlobalContext();
    const { projects } = info;

    return (
        <div
            id="projects"
            className="projects-container option-container padding40 project-on-tablet project-on-mobile"
        >
            <Container fluid="md" className="projects option">
                <div className="projects__heading option__heading">
                    <span className="title">Projects</span>
                    <div className="line">
                        <div className="line__first"></div>
                        <div className="line__secondary"></div>
                    </div>
                </div>
                <div className="projects__main">
                    <ul className="projects__main__items">
                        {projects.map((project, index) => <ProjectItem key={index} {...project} />)}
                    </ul>
                </div>
            </Container>
        </div>
    );
}

export default Projects;
