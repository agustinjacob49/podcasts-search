/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import View from './../../pages/home/view';

describe('Home view', () => {
  test('Snapshot testing', () => {
    const podcasts = [
        {
            "id": "1001659715",
            "title": "No Jumper - No Jumper",
            "cover": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/170x170bb.png",
            "author": "No Jumper"
        },
        {
            "id": "1236941416",
            "title": "Ebro in the Morning Podcast - HOT 97's Ebro in the Morning",
            "cover": "https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/0f/95/2b/0f952b75-2da3-a1a4-55ee-5e24eb34a2ed/mza_16604615367747989507.jpg/170x170bb.png",
            "author": "HOT 97's Ebro in the Morning"
        },
        {
            "id": "472939437",
            "title": "Here's The Thing with Alec Baldwin - iHeartPodcasts",
            "cover": "https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/c0/59/78/c05978e9-ced9-2d1f-b45c-0d3d229a0f5a/mza_15253999773912500974.jpg/170x170bb.png",
            "author": "iHeartPodcasts"
        },
        {
            "id": "788236947",
            "title": "Song Exploder - Hrishikesh Hirway",
            "cover": "https://is3-ssl.mzstatic.com/image/thumb/Podcasts125/v4/32/95/23/329523c9-6f91-5e7b-a33b-698f3cd83f1f/mza_7961570172365429932.png/170x170bb.png",
            "author": "Hrishikesh Hirway"
        }
    ];

    const { container } =  render(<View podcasts={podcasts}/>);
    expect(container).toMatchSnapshot();
  });

});

