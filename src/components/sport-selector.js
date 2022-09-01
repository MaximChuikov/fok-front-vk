import {Card, CardImg, Col, Container, Image, Row} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";

const rawInfo = [
    {
        header: 'Футбол',
        players: 22,
        text: 'ФЫГРВ рывфрв фыгврфыгрв фывл',
        image: require('../styles/images/football.png')},
    {
        header: 'Баскетбол',
        players: 20,
        text: 'выфдлво шофывоыфшв дыфвдл',
        image: require('../styles/images/basketball.png')},
    {
        header: 'Волейбол',
        players: 16,
        text: 'ФЫВОо фывоДдлыв ТФЫДВтЛДЫТВЫФВ ывффывфв',
        image: require('../styles/images/football.png')},
    {
        header: 'Гандбол',
        players: 18,
        text: 'ДЛФЫОВоыв бжфЫЖВЛФЫЖвл ждбФЫЛВЖыфдвлжд лфыжбвфыжжфвыл',
        image: require('../styles/images/basketball.png')},
]
const playerIcon = require('../styles/images/player-icon.png')

function SportSelector() {
    return (
        <div className={'sports-wrapper'}>
            <h2>Забронируйте зал для понравившиегося вида спорта, либо место в тренажерном
                зале</h2>

            <Container>
                <Row style={{alignItems: 'flex-start'}}>
                    {
                        rawInfo.slice(0, 2).map(el => (
                            <Col className={'d-flex align-items-center justify-content-center p-0'}>
                                <Card className={'w-75'} border={'info'}>
                                    <CardImg src={el.image} style={{backgroundColor: 'darkgrey'}}/>
                                    <CardHeader>{el.header}</CardHeader>
                                    <Card.ImgOverlay>
                                        <div className={'players-shower'}>
                                            <Image src={playerIcon} className={'player-icon'}/>
                                            <h5 className={'m-0'}>{el.players}</h5>
                                        </div>
                                    </Card.ImgOverlay>

                                    <Card.Text>{el.text}</Card.Text>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
                <Row className={'mt-4'} style={{alignItems: 'flex-start'}}>
                    {
                        rawInfo.slice(2, 5).map(el => (
                            <Col className={'d-flex align-items-center justify-content-center p-0'}>
                                <Card className={'w-75'} border={'info'}>
                                    <CardImg src={el.image} style={{backgroundColor: 'darkgrey'}}/>
                                    <CardHeader>{el.header}</CardHeader>
                                    <Card.ImgOverlay>
                                        <div className={'players-shower'}>
                                            <Image src={playerIcon} className={'player-icon'}/>
                                            <h5 className={'m-0'}>{el.players}</h5>
                                        </div>
                                    </Card.ImgOverlay>

                                    <Card.Text>{el.text}</Card.Text>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
                <Row className={'mt-4'} style={{alignItems: 'flex-start'}}>
                    <Col className={'d-flex align-items-center justify-content-center p-0'}>
                        <Card className={'w-75'} border={'info'}>
                            <CardImg src={require('../styles/images/dumbbells.png')} style={{backgroundColor: 'darkgrey'}}/>
                            <CardHeader>Тренажерный зал</CardHeader>
                            <Card.ImgOverlay>
                                <div className={'players-shower'}>
                                    <Image src={playerIcon} className={'player-icon'}/>
                                    <h5 className={'m-0'}>{15}</h5>
                                </div>
                            </Card.ImgOverlay>
                            <Card.Text>вЫФВло ьВЫОЫФР л олвыфрлорол рфылфол</Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SportSelector;