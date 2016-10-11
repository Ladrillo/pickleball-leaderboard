import watchHello from './sagas/hello';


export default function* rootSaga() {
    yield [
        watchHello()
    ];
}