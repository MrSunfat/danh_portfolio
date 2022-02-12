import { Container, Button } from 'reactstrap';
import { useGlobalContext } from '../../context';
import Skill from './Skill';

function About() {
    const { role, skills } = useGlobalContext();

    return (
        <div id="about" className="about-container option-container padding40 about-on-mobile">
            <Container fluid="md" className="about option">
                <div className="about__heading option__heading">
                    <span className="title">Giới thiệu</span>
                    <div className="line">
                        <div className="line__first"></div>
                        <div className="line__secondary"></div>
                    </div>
                </div>
                <div className="about__main">
                    <div className="about__row shadowB">
                        <h2 className="about__main__heading">{role}</h2>
                        <ul className="about__main__skills">
                            {skills.map((skill, index) => (
                                <Skill key={index}>{skill}</Skill>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="about__cv">
                        <a className='cv-btn btn' href="#">Xem CV</a>
                </div>
            </Container>
        </div>
    );
}

export default About;
