import watchGetPlayers from './sagas/getPlayers';


export default function* rootSaga() {
    yield [
        watchGetPlayers()
    ];
}