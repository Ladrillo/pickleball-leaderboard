import watchGetPlayers from './sagas/getPlayers';
import { watchChallenge, watchUnchallenge } from './sagas/challenge';


export default function* rootSaga() {
    yield [
        watchGetPlayers(),
        watchChallenge(),
        watchUnchallenge()
    ];
}