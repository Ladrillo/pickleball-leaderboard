import React from 'react';
import renderer from 'react-test-renderer';
import Warcry from '../Warcry';


describe(`Warcry`, () => {

    it(`Renders warcry if the player is challengeable`, () => {
        const component = renderer.create(
            <Warcry
                player={{
                    "_id": "580511cdb9edbe0010bd66e8",
                    "displayName": "Darien Hess",
                    "__v": 0,
                    "stats": {
                        "locked": { "id": "" },
                        "score": 0,
                        "joined": "2016-10-17T18:00:45.253Z"
                    },
                    "google": { "id": "102827209431078726602" }
                }}
                me={{
                    "_id": "5804518e09573008c8319060",
                    "displayName": "Gabriel Cabrejas",
                    "__v": 0,
                    "stats": {
                        "locked": { "id": "" },
                        "score": 15,
                        "joined": "2016-10-17T04:20:30.942Z"
                    },
                    "google": { "id": "100217230618184900301" }
                }}
                isChallengeable={true} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(`returns null if the player is not challengeable`, () => {
        const component = renderer.create(
            <Warcry
                player={{
                    "_id": "580511cdb9edbe0010bd66e8",
                    "displayName": "Darien Hess",
                    "__v": 0,
                    "stats": {
                        "locked": { "id": "" },
                        "score": 0,
                        "joined": "2016-10-17T18:00:45.253Z"
                    },
                    "google": { "id": "102827209431078726602" }
                }}
                me={{
                    "_id": "5804518e09573008c8319060",
                    "displayName": "Gabriel Cabrejas",
                    "__v": 0,
                    "stats": {
                        "locked": { "id": "" },
                        "score": 15,
                        "joined": "2016-10-17T04:20:30.942Z"
                    },
                    "google": { "id": "100217230618184900301" }
                }}
                isChallengeable={false} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});