import { Container, Row, Col } from 'reactstrap';

function Profile({ children, img, role }) {
    return (
        <div className="profile-container padding40">
            <Container fluid="md" className="profile">
                <Row className="profile__row">
                    <div className="profile__details">
                        <h2 className="profile__details__hello">
                            Xin chào, tên tôi là
                        </h2>
                        <p className="profile__details__fullname">{children}</p>
                        <p className="profile__details__role">{`${role}`}</p>
                    </div>
                    <div className="profile__picture">
                        <img src={img} alt={children} />
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Profile;
