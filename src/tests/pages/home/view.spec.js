/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import View from "../../../pages/home/view";
import * as router from 'react-router'

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})

jest.setTimeout(900000);
describe("Home view", () => {
  const podcasts = {
    feed: {
      author: {
        name: {
          label: "iTunes Store",
        },
        uri: {
          label: "http://www.apple.com/itunes/",
        },
      },
      updated: {
        label: "2022-10-11T10:02:54-07:00",
      },
      rights: {
        label: "Copyright 2008 Apple Inc.",
      },
      title: {
        label: "iTunes Store: Top Podcasts in Music",
      },
      icon: {
        label: "http://itunes.apple.com/favicon.ico",
      },
      link: [
        {
          attributes: {
            rel: "alternate",
            type: "text/html",
            href: "https://podcasts.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=us&id=179537&popId=3",
          },
        },
        {
          attributes: {
            rel: "self",
            href: "https://mzstoreservices-int-st.itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
          },
        },
      ],
      id: {
        label:
          "https://mzstoreservices-int-st.itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
      },
      entry: [
        {
          "im:name": {
            label: "No Jumper",
          },
          "im:image": [
            {
              label:
                "https://is5-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/55x55bb.png",
              attributes: {
                height: "55",
              },
            },
            {
              label:
                "https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/60x60bb.png",
              attributes: {
                height: "60",
              },
            },
            {
              label:
                "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/170x170bb.png",
              attributes: {
                height: "170",
              },
            },
          ],
          summary: {
            label:
              "The Coolest Podcast In The World. Hosted by Adam22 Watch these interviews on YouTube right here: https://www.youtube.com/nojumper",
          },
          "im:price": {
            label: "Get",
            attributes: {
              amount: "0",
              currency: "USD",
            },
          },
          "im:contentType": {
            attributes: {
              term: "Podcast",
              label: "Podcast",
            },
          },
          rights: {
            label: "© All rights reserved",
          },
          title: {
            label: "No Jumper - No Jumper",
          },
          link: {
            attributes: {
              rel: "alternate",
              type: "text/html",
              href: "https://podcasts.apple.com/us/podcast/no-jumper/id1001659715?uo=2",
            },
          },
          id: {
            label:
              "https://podcasts.apple.com/us/podcast/no-jumper/id1001659715?uo=2",
            attributes: {
              "im:id": "1001659715",
            },
          },
          "im:artist": {
            label: "No Jumper",
          },
          category: {
            attributes: {
              "im:id": "1525",
              term: "Music Interviews",
              scheme:
                "https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2",
              label: "Music Interviews",
            },
          },
          "im:releaseDate": {
            label: "2022-10-10T16:56:00-07:00",
            attributes: {
              label: "October 10, 2022",
            },
          },
        },
        {
          "im:name": {
            label: "2DO PODCAST",
          },
          "im:image": [
            {
              label:
                "https://is5-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/55x55bb.png",
              attributes: {
                height: "55",
              },
            },
            {
              label:
                "https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/60x60bb.png",
              attributes: {
                height: "60",
              },
            },
            {
              label:
                "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/170x170bb.png",
              attributes: {
                height: "170",
              },
            },
          ],
          summary: {
            label:
              "The Coolest Podcast In The World. Hosted by Adam22 Watch these interviews on YouTube right here: https://www.youtube.com/nojumper",
          },
          "im:price": {
            label: "Get",
            attributes: {
              amount: "0",
              currency: "USD",
            },
          },
          "im:contentType": {
            attributes: {
              term: "Podcast",
              label: "Podcast",
            },
          },
          rights: {
            label: "© All rights reserved",
          },
          title: {
            label: "2DO PODCAST",
          },
          link: {
            attributes: {
              rel: "alternate",
              type: "text/html",
              href: "https://podcasts.apple.com/us/podcast/no-jumper/id1001659715?uo=2",
            },
          },
          id: {
            label:
              "https://podcasts.apple.com/us/podcast/no-jumper/id1001659715?uo=2",
            attributes: {
              "im:id": "1001659715",
            },
          },
          "im:artist": {
            label: "2DO PODCAST",
          },
          category: {
            attributes: {
              "im:id": "1525",
              term: "Music Interviews",
              scheme:
                "https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2",
              label: "Music Interviews",
            },
          },
          "im:releaseDate": {
            label: "2022-10-10T16:56:00-07:00",
            attributes: {
              label: "October 10, 2022",
            },
          },
        },
        {
          "im:name": {
            label: "2DO PODCAST",
          },
          "im:image": [
            {
              label:
                "https://is5-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/55x55bb.png",
              attributes: {
                height: "55",
              },
            },
            {
              label:
                "https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/60x60bb.png",
              attributes: {
                height: "60",
              },
            },
            {
              label:
                "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/170x170bb.png",
              attributes: {
                height: "170",
              },
            },
          ],
          summary: {
            label:
              "The Coolest Podcast In The World. Hosted by Adam22 Watch these interviews on YouTube right here: https://www.youtube.com/nojumper",
          },
          "im:price": {
            label: "Get",
            attributes: {
              amount: "0",
              currency: "USD",
            },
          },
          "im:contentType": {
            attributes: {
              term: "Podcast",
              label: "Podcast",
            },
          },
          rights: {
            label: "© All rights reserved",
          },
          title: {
            label: "2DO PODCAST",
          },
          link: {
            attributes: {
              rel: "alternate",
              type: "text/html",
              href: "https://podcasts.apple.com/us/podcast/no-jumper/id1001659715?uo=2",
            },
          },
          id: {
            label:
              "https://podcasts.apple.com/us/podcast/no-jumper/id1001659715?uo=2",
            attributes: {
              "im:id": "1001659715",
            },
          },
          "im:artist": {
            label: "2DO PODCAST",
          },
          category: {
            attributes: {
              "im:id": "1525",
              term: "Music Interviews",
              scheme:
                "https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2",
              label: "Music Interviews",
            },
          },
          "im:releaseDate": {
            label: "2022-10-10T16:56:00-07:00",
            attributes: {
              label: "October 10, 2022",
            },
          },
        },
      ],
    },
  };

  beforeEach(() => {
    fetch.resetMocks();
  });

  afterAll( () => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  test("Snapshot testing", async () => {
    fetch.mockResponseOnce(JSON.stringify({ ...podcasts }));
    const loadingCallback = jest.fn();

    const { container } = render(<Router><View loadingCallback={loadingCallback}/></Router>);
    await waitFor(() => {
        expect(loadingCallback).toBeCalled();
      });

    expect(container).toMatchSnapshot();
  });


  test("Visual asserts", async () => {
    fetch.mockResponseOnce(JSON.stringify({ ...podcasts }));
    const loadingCallback = jest.fn();

    const { getByText, getAllByTestId } = render(<Router><View loadingCallback={loadingCallback}/></Router>);
    await waitFor(() => {
        expect(loadingCallback).toBeCalled();
      });

    expect(getByText("No Jumper - No Jumper")).toBeDefined();
    expect(getAllByTestId("item-card").length).toBe(3);
  });

  test("write in text input should be a filter", async () => {
    fetch.mockResponseOnce(JSON.stringify({ ...podcasts }));
    const loadingCallback = jest.fn();

    const { getByTestId, queryByText, getByText } = render(<Router><View loadingCallback={loadingCallback}/></Router>);
    await waitFor(() => {
        expect(loadingCallback).toBeCalled();
      });

    expect(getByText("No Jumper - No Jumper")).toBeDefined();

    const input = getByTestId("input-filter");
    
    act(() => {
        fireEvent.input(input, { target: { value: "xxx" } });
    });

    expect(queryByText("No Jumper - No Jumper")).toBeNull();
  });

  test("onClick on element should redirect", async () => {
    fetch.mockResponseOnce(JSON.stringify({ ...podcasts }));
    const loadingCallback = jest.fn();

    const { getByText } = render(<Router><View loadingCallback={loadingCallback}/></Router>);
    await waitFor(() => {
        expect(loadingCallback).toBeCalled();
      });

    const cover = getByText("No Jumper - No Jumper");
    
    act(() => {
        fireEvent.click(cover);
    });

    expect(navigate).toHaveBeenCalledWith("/podcast/1001659715", {"preventScrollReset": undefined, "relative": undefined, "replace": false, "state": undefined});
  });
});
