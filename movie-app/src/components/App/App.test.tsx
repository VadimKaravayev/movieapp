import React from "react";
import renderer from "react-test-renderer";
import { App } from './App';

describe('App ->', () => {

    it ('renders without crashing', () => {
        const props = { };
        const tree = renderer
            .create(<App {...props} />)
            .toJSON();
        console.log(tree);
        expect(tree).toMatchSnapshot();
    });
});
