/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import View from "../../../pages/episode-detail/view";
import * as router from 'react-router';


const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
})

jest.setTimeout(900000);
describe("Podcast detail view", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  afterAll( () => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  test("Snapshot testing", async () => {

    const responseItunes = '{"contents":"\\n\\n\\n{\\n \\"resultCount\\":1,\\n \\"results\\": [\\n{\\"wrapperType\\":\\"track\\", \\"kind\\":\\"podcast\\", \\"collectionId\\":1286770630, \\"trackId\\":1286770630, \\"artistName\\":\\"101.3 KDWB\\", \\"collectionName\\":\\"The Dave Ryan Show\\", \\"trackName\\":\\"The Dave Ryan Show\\", \\"collectionCensoredName\\":\\"The Dave Ryan Show\\", \\"trackCensoredName\\":\\"The Dave Ryan Show\\", \\"collectionViewUrl\\":\\"https://podcasts.apple.com/us/podcast/the-dave-ryan-show/id1286770630?uo=4\\", \\"feedUrl\\":\\"https://post.futurimedia.com/kdwb/playlist/rss/2.xml\\", \\"trackViewUrl\\":\\"https://podcasts.apple.com/us/podcast/the-dave-ryan-show/id1286770630?uo=4\\", \\"artworkUrl30\\":\\"https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/28/ae/ba/28aebaef-86c3-62e1-00b8-6bde0beaa85e/mza_13363439944907994191.png/30x30bb.jpg\\", \\"artworkUrl60\\":\\"https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/28/ae/ba/28aebaef-86c3-62e1-00b8-6bde0beaa85e/mza_13363439944907994191.png/60x60bb.jpg\\", \\"artworkUrl100\\":\\"https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/28/ae/ba/28aebaef-86c3-62e1-00b8-6bde0beaa85e/mza_13363439944907994191.png/100x100bb.jpg\\", \\"collectionPrice\\":0.00, \\"trackPrice\\":0.00, \\"trackRentalPrice\\":0, \\"collectionHdPrice\\":0, \\"trackHdPrice\\":0, \\"trackHdRentalPrice\\":0, \\"releaseDate\\":\\"2022-10-11T15:35:00Z\\", \\"collectionExplicitness\\":\\"cleaned\\", \\"trackExplicitness\\":\\"cleaned\\", \\"trackCount\\":2000, \\"country\\":\\"USA\\", \\"currency\\":\\"USD\\", \\"primaryGenreName\\":\\"Music\\", \\"contentAdvisoryRating\\":\\"Clean\\", \\"artworkUrl600\\":\\"https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/28/ae/ba/28aebaef-86c3-62e1-00b8-6bde0beaa85e/mza_13363439944907994191.png/600x600bb.jpg\\", \\"genreIds\\":[\\"1310\\", \\"26\\"], \\"genres\\":[\\"Music\\", \\"Podcasts\\"]}]\\n}\\n\\n\\n","status":{"url":"https://itunes.apple.com/lookup?id=1286770630","content_type":"text/javascript; charset=utf-8","content_length":1638,"http_code":200,"response_time":90}}';
    const responseRSSXML = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<rss version=\"2.0\"\r\n\txmlns:itunes=\"http:\/\/www.itunes.com\/dtds\/podcast-1.0.dtd\"\r\n\txmlns:googleplay=\"http:\/\/www.google.com\/schemas\/play-podcasts\/1.0\"\r\n\txmlns:atom=\"http:\/\/www.w3.org\/2005\/Atom\"\r\n\txmlns:media=\"http:\/\/search.yahoo.com\/mrss\/\"\r\n\txmlns:content=\"http:\/\/purl.org\/rss\/1.0\/modules\/content\/\">\r\n\t<channel>\r\n\t\t<atom:link href=\"https:\/\/feeds.megaphone.fm\/norahjonesisplayingalong\" rel=\"self\" type=\"application\/rss+xml\"\/>\r\n\t\t<title>Norah Jones Is Playing Along<\/title>\r\n\t\t<link>http:\/\/norahjonesisplayingalong.com\/<\/link>\r\n\t\t<language>en<\/language>\r\n\t\t<copyright>Gullible Jones, LLC 2022<\/copyright>\r\n\t\t<description>Norah Jones is a\u00A0multi-GRAMMY winning singer and pianist who\u00A0loves playing music with people, so she started her own podcast to do just that.\u00A0Each episode, she sits down with a different guest for impromptu musical collaborations and candid conversation. Her guests come from all walks of life and every musical style and you never know where the songs will take them. So, come hang out in the studio. Norah Jones is\u00A0Playing Along!<\/description>\r\n\t\t<image>\r\n\t\t\t<url>https:\/\/megaphone.imgix.net\/podcasts\/c315079a-2f12-11ed-9f10-9f07784415f1\/image\/NorahJones_PlayingAlong_MainCover.jpg?ixlib=rails-2.1.2&amp;max-w=3000&amp;max-h=3000&amp;fit=crop&amp;auto=format,compress<\/url>\r\n\t\t\t<title>Norah Jones Is Playing Along<\/title>\r\n\t\t\t<link>http:\/\/norahjonesisplayingalong.com\/<\/link>\r\n\t\t<\/image>\r\n\t\t<itunes:explicit>no<\/itunes:explicit>\r\n\t\t<itunes:type>episodic<\/itunes:type>\r\n\t\t<itunes:subtitle>The new podcast from Norah Jones. Each episode, she sits down with a different guest for impromptu musical collaborations and candid conversation.<\/itunes:subtitle>\r\n\t\t<itunes:author>Norah Jones<\/itunes:author>\r\n\t\t<itunes:summary>Norah Jones is a\u00A0multi-GRAMMY winning singer and pianist who\u00A0loves playing music with people, so she started her own podcast to do just that.\u00A0Each episode, she sits down with a different guest for impromptu musical collaborations and candid conversation. Her guests come from all walks of life and every musical style and you never know where the songs will take them. So, come hang out in the studio. Norah Jones is\u00A0Playing Along!<\/itunes:summary>\r\n\t\t<content:encoded>\r\n\t\t\t<![CDATA[<p>Norah Jones is a\u00A0multi-GRAMMY winning singer and pianist who\u00A0loves playing music with people, so she started her own podcast to do just that.\u00A0Each episode, she sits down with a different guest for impromptu musical collaborations and candid conversation. Her guests come from all walks of life and every musical style and you never know where the songs will take them. So, come hang out in the studio. Norah Jones is\u00A0<em>Playing Along<\/em>!<\/p>]]>\r\n\t\t<\/content:encoded>\r\n\t\t<itunes:owner>\r\n\t\t\t<itunes:name>Norah Jones<\/itunes:name>\r\n\t\t\t<itunes:email>norahjonesisplayingalong@gmail.com<\/itunes:email>\r\n\t\t<\/itunes:owner>\r\n\t\t<itunes:image href=\"https:\/\/megaphone.imgix.net\/podcasts\/c315079a-2f12-11ed-9f10-9f07784415f1\/image\/NorahJones_PlayingAlong_MainCover.jpg?ixlib=rails-2.1.2&amp;max-w=3000&amp;max-h=3000&amp;fit=crop&amp;auto=format,compress\"\/>\r\n\t\t<itunes:category text=\"Music\">\r\n\t\t\t<itunes:category text=\"Music Interviews\"\/><\/itunes:category>\r\n\t\t<item>\r\n\t\t\t<title>Tarriona \"Tank\" Ball<\/title>\r\n\t\t\t<link>https:\/\/www.norahjonesisplayingalong.com\/tarriona-tank-ball<\/link>\r\n\t\t\t<description>Tarriona \u201CTank\u201D Ball is the front woman of Tank and the Bangas who got her start in the slam poetry scene of New Orleans. Norah and Tank are by all means \u2018friend goals\u2019 so they\u00A0cover everything from the news, to cooking, writing, attending the GRAMMYs and of course love. The music in this episode takes some surprising turns while they play new versions of songs by Tank like \u2018Rollercoasters\u2019 &amp; \u2018Friend Goals,\u2019 a collaboration with Norah titled \u2018Playing Along\u2019 and in a twist, a new take on \u2018Don\u2019t Know Why.\u2019Learn more about your ad choices. Visit megaphone.fm\/adchoices<\/description>\r\n\t\t\t<pubDate>Tue, 11 Oct 2022 04:00:00 -0000<\/pubDate>\r\n\t\t\t<itunes:title>Tarriona \"Tank\" Ball<\/itunes:title>\r\n\t\t\t<itunes:episodeType>full<\/itunes:episodeType>\r\n\t\t\t<itunes:season>1<\/itunes:season>\r\n\t\t\t<itunes:episode>2<\/itunes:episode>\r\n\t\t\t<itunes:author>Norah Jones<\/itunes:author>\r\n\t\t\t<itunes:image href=\"https:\/\/megaphone.imgix.net\/podcasts\/06cf7fac-39f8-11ed-8fe0-231964566f86\/image\/NorahJones_PlayingAlong_GuestCover_2_Ball_v2_2.jpg?ixlib=rails-2.1.2&amp;max-w=3000&amp;max-h=3000&amp;fit=crop&amp;auto=format,compress\"\/>\r\n\t\t\t<itunes:subtitle>Tarriona \u201CTank\u201D Ball is the front woman of Tank and the Bangas who got her start in the slam poetry scene of New Orleans. <\/itunes:subtitle>\r\n\t\t\t<itunes:summary>Tarriona \u201CTank\u201D Ball is the front woman of Tank and the Bangas who got her start in the slam poetry scene of New Orleans. Norah and Tank are by all means \u2018friend goals\u2019 so they\u00A0cover everything from the news, to cooking, writing, attending the GRAMMYs and of course love. The music in this episode takes some surprising turns while they play new versions of songs by Tank like \u2018Rollercoasters\u2019 &amp; \u2018Friend Goals,\u2019 a collaboration with Norah titled \u2018Playing Along\u2019 and in a twist, a new take on \u2018Don\u2019t Know Why.\u2019Learn more about your ad choices. Visit megaphone.fm\/adchoices<\/itunes:summary>\r\n\t\t\t<content:encoded>\r\n\t\t\t\t<![CDATA[<p>Tarriona \u201CTank\u201D Ball is the front woman of Tank and the Bangas who got her start in the slam poetry scene of New Orleans. Norah and Tank are by all means \u2018friend goals\u2019 so they\u00A0cover everything from the news, to cooking, writing, attending the GRAMMYs and of course love. The music in this episode takes some surprising turns while they play new versions of songs by Tank like \u2018Rollercoasters\u2019 &amp; \u2018Friend Goals,\u2019 a collaboration with Norah titled \u2018Playing Along\u2019 and in a twist, a new take on \u2018Don\u2019t Know Why.\u2019<\/p><p><\/p><p>Learn more about your ad choices. Visit <a href=\"https:\/\/megaphone.fm\/adchoices\">megaphone.fm\/adchoices<\/a><\/p>]]>\r\n\t\t\t<\/content:encoded>\r\n\t\t\t<itunes:duration>3987<\/itunes:duration>\r\n\t\t\t<itunes:explicit>yes<\/itunes:explicit>\r\n\t\t\t<guid isPermaLink=\"false\">\r\n\t\t\t\t<![CDATA[06cf7fac-39f8-11ed-8fe0-231964566f86]]>\r\n\t\t\t<\/guid>\r\n\t\t\t<enclosure url=\"https:\/\/traffic.megaphone.fm\/GJLLC2702006029.mp3?updated=1665167172\" length=\"0\" type=\"audio\/mpeg\"\/>\r\n\t\t<\/item>\r\n\t<\/channel>\r\n<\/rss>";
    
    const responseRss = {
      contents : responseRSSXML,
    }
    fetch.mockResponses(
      [
        responseItunes,
        { status: 200 }
      ],
      [
        JSON.stringify(responseRss),
        { status: 200 }
      ]
    );

    const loadingCallback = jest.fn();

    const { container } = render(<Router><View loadingCallback={loadingCallback}/></Router>);
    await waitFor(() => {
        expect(loadingCallback).toBeCalledWith(false);
      });

    expect(container).toMatchSnapshot();
  });

  test("Visual asserts", async () => {
    const responseItunes = '{"contents":"\\n\\n\\n{\\n \\"resultCount\\":1,\\n \\"results\\": [\\n{\\"wrapperType\\":\\"track\\", \\"kind\\":\\"podcast\\", \\"collectionId\\":1286770630, \\"trackId\\":1286770630, \\"artistName\\":\\"101.3 KDWB\\", \\"collectionName\\":\\"The Dave Ryan Show\\", \\"trackName\\":\\"The Dave Ryan Show\\", \\"collectionCensoredName\\":\\"The Dave Ryan Show\\", \\"trackCensoredName\\":\\"The Dave Ryan Show\\", \\"collectionViewUrl\\":\\"https://podcasts.apple.com/us/podcast/the-dave-ryan-show/id1286770630?uo=4\\", \\"feedUrl\\":\\"https://post.futurimedia.com/kdwb/playlist/rss/2.xml\\", \\"trackViewUrl\\":\\"https://podcasts.apple.com/us/podcast/the-dave-ryan-show/id1286770630?uo=4\\", \\"artworkUrl30\\":\\"https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/28/ae/ba/28aebaef-86c3-62e1-00b8-6bde0beaa85e/mza_13363439944907994191.png/30x30bb.jpg\\", \\"artworkUrl60\\":\\"https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/28/ae/ba/28aebaef-86c3-62e1-00b8-6bde0beaa85e/mza_13363439944907994191.png/60x60bb.jpg\\", \\"artworkUrl100\\":\\"https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/28/ae/ba/28aebaef-86c3-62e1-00b8-6bde0beaa85e/mza_13363439944907994191.png/100x100bb.jpg\\", \\"collectionPrice\\":0.00, \\"trackPrice\\":0.00, \\"trackRentalPrice\\":0, \\"collectionHdPrice\\":0, \\"trackHdPrice\\":0, \\"trackHdRentalPrice\\":0, \\"releaseDate\\":\\"2022-10-11T15:35:00Z\\", \\"collectionExplicitness\\":\\"cleaned\\", \\"trackExplicitness\\":\\"cleaned\\", \\"trackCount\\":2000, \\"country\\":\\"USA\\", \\"currency\\":\\"USD\\", \\"primaryGenreName\\":\\"Music\\", \\"contentAdvisoryRating\\":\\"Clean\\", \\"artworkUrl600\\":\\"https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/28/ae/ba/28aebaef-86c3-62e1-00b8-6bde0beaa85e/mza_13363439944907994191.png/600x600bb.jpg\\", \\"genreIds\\":[\\"1310\\", \\"26\\"], \\"genres\\":[\\"Music\\", \\"Podcasts\\"]}]\\n}\\n\\n\\n","status":{"url":"https://itunes.apple.com/lookup?id=1286770630","content_type":"text/javascript; charset=utf-8","content_length":1638,"http_code":200,"response_time":90}}';
    const responseRSSXML = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<rss version=\"2.0\"\r\n\txmlns:itunes=\"http:\/\/www.itunes.com\/dtds\/podcast-1.0.dtd\"\r\n\txmlns:googleplay=\"http:\/\/www.google.com\/schemas\/play-podcasts\/1.0\"\r\n\txmlns:atom=\"http:\/\/www.w3.org\/2005\/Atom\"\r\n\txmlns:media=\"http:\/\/search.yahoo.com\/mrss\/\"\r\n\txmlns:content=\"http:\/\/purl.org\/rss\/1.0\/modules\/content\/\">\r\n\t<channel>\r\n\t\t<atom:link href=\"https:\/\/feeds.megaphone.fm\/norahjonesisplayingalong\" rel=\"self\" type=\"application\/rss+xml\"\/>\r\n\t\t<title>Norah Jones Is Playing Along<\/title>\r\n\t\t<link>http:\/\/norahjonesisplayingalong.com\/<\/link>\r\n\t\t<language>en<\/language>\r\n\t\t<copyright>Gullible Jones, LLC 2022<\/copyright>\r\n\t\t<description>Norah Jones is a\u00A0multi-GRAMMY winning singer and pianist who\u00A0loves playing music with people, so she started her own podcast to do just that.\u00A0Each episode, she sits down with a different guest for impromptu musical collaborations and candid conversation. Her guests come from all walks of life and every musical style and you never know where the songs will take them. So, come hang out in the studio. Norah Jones is\u00A0Playing Along!<\/description>\r\n\t\t<image>\r\n\t\t\t<url>https:\/\/megaphone.imgix.net\/podcasts\/c315079a-2f12-11ed-9f10-9f07784415f1\/image\/NorahJones_PlayingAlong_MainCover.jpg?ixlib=rails-2.1.2&amp;max-w=3000&amp;max-h=3000&amp;fit=crop&amp;auto=format,compress<\/url>\r\n\t\t\t<title>Norah Jones Is Playing Along<\/title>\r\n\t\t\t<link>http:\/\/norahjonesisplayingalong.com\/<\/link>\r\n\t\t<\/image>\r\n\t\t<itunes:explicit>no<\/itunes:explicit>\r\n\t\t<itunes:type>episodic<\/itunes:type>\r\n\t\t<itunes:subtitle>The new podcast from Norah Jones. Each episode, she sits down with a different guest for impromptu musical collaborations and candid conversation.<\/itunes:subtitle>\r\n\t\t<itunes:author>Norah Jones<\/itunes:author>\r\n\t\t<itunes:summary>Norah Jones is a\u00A0multi-GRAMMY winning singer and pianist who\u00A0loves playing music with people, so she started her own podcast to do just that.\u00A0Each episode, she sits down with a different guest for impromptu musical collaborations and candid conversation. Her guests come from all walks of life and every musical style and you never know where the songs will take them. So, come hang out in the studio. Norah Jones is\u00A0Playing Along!<\/itunes:summary>\r\n\t\t<content:encoded>\r\n\t\t\t<![CDATA[<p>Norah Jones is a\u00A0multi-GRAMMY winning singer and pianist who\u00A0loves playing music with people, so she started her own podcast to do just that.\u00A0Each episode, she sits down with a different guest for impromptu musical collaborations and candid conversation. Her guests come from all walks of life and every musical style and you never know where the songs will take them. So, come hang out in the studio. Norah Jones is\u00A0<em>Playing Along<\/em>!<\/p>]]>\r\n\t\t<\/content:encoded>\r\n\t\t<itunes:owner>\r\n\t\t\t<itunes:name>Norah Jones<\/itunes:name>\r\n\t\t\t<itunes:email>norahjonesisplayingalong@gmail.com<\/itunes:email>\r\n\t\t<\/itunes:owner>\r\n\t\t<itunes:image href=\"https:\/\/megaphone.imgix.net\/podcasts\/c315079a-2f12-11ed-9f10-9f07784415f1\/image\/NorahJones_PlayingAlong_MainCover.jpg?ixlib=rails-2.1.2&amp;max-w=3000&amp;max-h=3000&amp;fit=crop&amp;auto=format,compress\"\/>\r\n\t\t<itunes:category text=\"Music\">\r\n\t\t\t<itunes:category text=\"Music Interviews\"\/><\/itunes:category>\r\n\t\t<item>\r\n\t\t\t<title>Tarriona \"Tank\" Ball<\/title>\r\n\t\t\t<link>https:\/\/www.norahjonesisplayingalong.com\/tarriona-tank-ball<\/link>\r\n\t\t\t<description>Tarriona \u201CTank\u201D Ball is the front woman of Tank and the Bangas who got her start in the slam poetry scene of New Orleans. Norah and Tank are by all means \u2018friend goals\u2019 so they\u00A0cover everything from the news, to cooking, writing, attending the GRAMMYs and of course love. The music in this episode takes some surprising turns while they play new versions of songs by Tank like \u2018Rollercoasters\u2019 &amp; \u2018Friend Goals,\u2019 a collaboration with Norah titled \u2018Playing Along\u2019 and in a twist, a new take on \u2018Don\u2019t Know Why.\u2019Learn more about your ad choices. Visit megaphone.fm\/adchoices<\/description>\r\n\t\t\t<pubDate>Tue, 11 Oct 2022 04:00:00 -0000<\/pubDate>\r\n\t\t\t<itunes:title>Tarriona \"Tank\" Ball<\/itunes:title>\r\n\t\t\t<itunes:episodeType>full<\/itunes:episodeType>\r\n\t\t\t<itunes:season>1<\/itunes:season>\r\n\t\t\t<itunes:episode>2<\/itunes:episode>\r\n\t\t\t<itunes:author>Norah Jones<\/itunes:author>\r\n\t\t\t<itunes:image href=\"https:\/\/megaphone.imgix.net\/podcasts\/06cf7fac-39f8-11ed-8fe0-231964566f86\/image\/NorahJones_PlayingAlong_GuestCover_2_Ball_v2_2.jpg?ixlib=rails-2.1.2&amp;max-w=3000&amp;max-h=3000&amp;fit=crop&amp;auto=format,compress\"\/>\r\n\t\t\t<itunes:subtitle>Tarriona \u201CTank\u201D Ball is the front woman of Tank and the Bangas who got her start in the slam poetry scene of New Orleans. <\/itunes:subtitle>\r\n\t\t\t<itunes:summary>Tarriona \u201CTank\u201D Ball is the front woman of Tank and the Bangas who got her start in the slam poetry scene of New Orleans. Norah and Tank are by all means \u2018friend goals\u2019 so they\u00A0cover everything from the news, to cooking, writing, attending the GRAMMYs and of course love. The music in this episode takes some surprising turns while they play new versions of songs by Tank like \u2018Rollercoasters\u2019 &amp; \u2018Friend Goals,\u2019 a collaboration with Norah titled \u2018Playing Along\u2019 and in a twist, a new take on \u2018Don\u2019t Know Why.\u2019Learn more about your ad choices. Visit megaphone.fm\/adchoices<\/itunes:summary>\r\n\t\t\t<content:encoded>\r\n\t\t\t\t<![CDATA[<p>Tarriona \u201CTank\u201D Ball is the front woman of Tank and the Bangas who got her start in the slam poetry scene of New Orleans. Norah and Tank are by all means \u2018friend goals\u2019 so they\u00A0cover everything from the news, to cooking, writing, attending the GRAMMYs and of course love. The music in this episode takes some surprising turns while they play new versions of songs by Tank like \u2018Rollercoasters\u2019 &amp; \u2018Friend Goals,\u2019 a collaboration with Norah titled \u2018Playing Along\u2019 and in a twist, a new take on \u2018Don\u2019t Know Why.\u2019<\/p><p><\/p><p>Learn more about your ad choices. Visit <a href=\"https:\/\/megaphone.fm\/adchoices\">megaphone.fm\/adchoices<\/a><\/p>]]>\r\n\t\t\t<\/content:encoded>\r\n\t\t\t<itunes:duration>3987<\/itunes:duration>\r\n\t\t\t<itunes:explicit>yes<\/itunes:explicit>\r\n\t\t\t<guid isPermaLink=\"false\">\r\n\t\t\t\t<![CDATA[06cf7fac-39f8-11ed-8fe0-231964566f86]]>\r\n\t\t\t<\/guid>\r\n\t\t\t<enclosure url=\"https:\/\/traffic.megaphone.fm\/GJLLC2702006029.mp3?updated=1665167172\" length=\"0\" type=\"audio\/mpeg\"\/>\r\n\t\t<\/item>\r\n\t<\/channel>\r\n<\/rss>";
    
    const responseRss = {
      contents : responseRSSXML,
    }
    fetch.mockResponses(
      [
        responseItunes,
        { status: 200 }
      ],
      [
        JSON.stringify(responseRss),
        { status: 200 }
      ]
    );

    const loadingCallback = jest.fn();

    const { getByText, getAllByTestId } = render(<Router><View loadingCallback={loadingCallback}/></Router>);
    await waitFor(() => {
        expect(loadingCallback).toBeCalledWith(false);
      });

    expect(getByText("The Dave Ryan Show")).toBeDefined();
    expect(getByText("by 101.3 KDWB")).toBeDefined();
    
    expect(getAllByTestId("player").length).toBe(1);
  });

  test("onClick on img should redirect", async () => {
    const responseItunes = '{"contents":"\\n\\n\\n{\\n \\"resultCount\\":1,\\n \\"results\\": [\\n{\\"wrapperType\\":\\"track\\", \\"kind\\":\\"podcast\\", \\"collectionId\\":1286770630, \\"trackId\\":1286770630, \\"artistName\\":\\"101.3 KDWB\\", \\"collectionName\\":\\"The Dave Ryan Show\\", \\"trackName\\":\\"The Dave Ryan Show\\", \\"collectionCensoredName\\":\\"The Dave Ryan Show\\", \\"trackCensoredName\\":\\"The Dave Ryan Show\\", \\"collectionViewUrl\\":\\"https://podcasts.apple.com/us/podcast/the-dave-ryan-show/id1286770630?uo=4\\", \\"feedUrl\\":\\"https://post.futurimedia.com/kdwb/playlist/rss/2.xml\\", \\"trackViewUrl\\":\\"https://podcasts.apple.com/us/podcast/the-dave-ryan-show/id1286770630?uo=4\\", \\"artworkUrl30\\":\\"https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/28/ae/ba/28aebaef-86c3-62e1-00b8-6bde0beaa85e/mza_13363439944907994191.png/30x30bb.jpg\\", \\"artworkUrl60\\":\\"https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/28/ae/ba/28aebaef-86c3-62e1-00b8-6bde0beaa85e/mza_13363439944907994191.png/60x60bb.jpg\\", \\"artworkUrl100\\":\\"https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/28/ae/ba/28aebaef-86c3-62e1-00b8-6bde0beaa85e/mza_13363439944907994191.png/100x100bb.jpg\\", \\"collectionPrice\\":0.00, \\"trackPrice\\":0.00, \\"trackRentalPrice\\":0, \\"collectionHdPrice\\":0, \\"trackHdPrice\\":0, \\"trackHdRentalPrice\\":0, \\"releaseDate\\":\\"2022-10-11T15:35:00Z\\", \\"collectionExplicitness\\":\\"cleaned\\", \\"trackExplicitness\\":\\"cleaned\\", \\"trackCount\\":2000, \\"country\\":\\"USA\\", \\"currency\\":\\"USD\\", \\"primaryGenreName\\":\\"Music\\", \\"contentAdvisoryRating\\":\\"Clean\\", \\"artworkUrl600\\":\\"https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/28/ae/ba/28aebaef-86c3-62e1-00b8-6bde0beaa85e/mza_13363439944907994191.png/600x600bb.jpg\\", \\"genreIds\\":[\\"1310\\", \\"26\\"], \\"genres\\":[\\"Music\\", \\"Podcasts\\"]}]\\n}\\n\\n\\n","status":{"url":"https://itunes.apple.com/lookup?id=1286770630","content_type":"text/javascript; charset=utf-8","content_length":1638,"http_code":200,"response_time":90}}';
    const responseRSSXML = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<rss version=\"2.0\"\r\n\txmlns:itunes=\"http:\/\/www.itunes.com\/dtds\/podcast-1.0.dtd\"\r\n\txmlns:googleplay=\"http:\/\/www.google.com\/schemas\/play-podcasts\/1.0\"\r\n\txmlns:atom=\"http:\/\/www.w3.org\/2005\/Atom\"\r\n\txmlns:media=\"http:\/\/search.yahoo.com\/mrss\/\"\r\n\txmlns:content=\"http:\/\/purl.org\/rss\/1.0\/modules\/content\/\">\r\n\t<channel>\r\n\t\t<atom:link href=\"https:\/\/feeds.megaphone.fm\/norahjonesisplayingalong\" rel=\"self\" type=\"application\/rss+xml\"\/>\r\n\t\t<title>Norah Jones Is Playing Along<\/title>\r\n\t\t<link>http:\/\/norahjonesisplayingalong.com\/<\/link>\r\n\t\t<language>en<\/language>\r\n\t\t<copyright>Gullible Jones, LLC 2022<\/copyright>\r\n\t\t<description>Norah Jones is a\u00A0multi-GRAMMY winning singer and pianist who\u00A0loves playing music with people, so she started her own podcast to do just that.\u00A0Each episode, she sits down with a different guest for impromptu musical collaborations and candid conversation. Her guests come from all walks of life and every musical style and you never know where the songs will take them. So, come hang out in the studio. Norah Jones is\u00A0Playing Along!<\/description>\r\n\t\t<image>\r\n\t\t\t<url>https:\/\/megaphone.imgix.net\/podcasts\/c315079a-2f12-11ed-9f10-9f07784415f1\/image\/NorahJones_PlayingAlong_MainCover.jpg?ixlib=rails-2.1.2&amp;max-w=3000&amp;max-h=3000&amp;fit=crop&amp;auto=format,compress<\/url>\r\n\t\t\t<title>Norah Jones Is Playing Along<\/title>\r\n\t\t\t<link>http:\/\/norahjonesisplayingalong.com\/<\/link>\r\n\t\t<\/image>\r\n\t\t<itunes:explicit>no<\/itunes:explicit>\r\n\t\t<itunes:type>episodic<\/itunes:type>\r\n\t\t<itunes:subtitle>The new podcast from Norah Jones. Each episode, she sits down with a different guest for impromptu musical collaborations and candid conversation.<\/itunes:subtitle>\r\n\t\t<itunes:author>Norah Jones<\/itunes:author>\r\n\t\t<itunes:summary>Norah Jones is a\u00A0multi-GRAMMY winning singer and pianist who\u00A0loves playing music with people, so she started her own podcast to do just that.\u00A0Each episode, she sits down with a different guest for impromptu musical collaborations and candid conversation. Her guests come from all walks of life and every musical style and you never know where the songs will take them. So, come hang out in the studio. Norah Jones is\u00A0Playing Along!<\/itunes:summary>\r\n\t\t<content:encoded>\r\n\t\t\t<![CDATA[<p>Norah Jones is a\u00A0multi-GRAMMY winning singer and pianist who\u00A0loves playing music with people, so she started her own podcast to do just that.\u00A0Each episode, she sits down with a different guest for impromptu musical collaborations and candid conversation. Her guests come from all walks of life and every musical style and you never know where the songs will take them. So, come hang out in the studio. Norah Jones is\u00A0<em>Playing Along<\/em>!<\/p>]]>\r\n\t\t<\/content:encoded>\r\n\t\t<itunes:owner>\r\n\t\t\t<itunes:name>Norah Jones<\/itunes:name>\r\n\t\t\t<itunes:email>norahjonesisplayingalong@gmail.com<\/itunes:email>\r\n\t\t<\/itunes:owner>\r\n\t\t<itunes:image href=\"https:\/\/megaphone.imgix.net\/podcasts\/c315079a-2f12-11ed-9f10-9f07784415f1\/image\/NorahJones_PlayingAlong_MainCover.jpg?ixlib=rails-2.1.2&amp;max-w=3000&amp;max-h=3000&amp;fit=crop&amp;auto=format,compress\"\/>\r\n\t\t<itunes:category text=\"Music\">\r\n\t\t\t<itunes:category text=\"Music Interviews\"\/><\/itunes:category>\r\n\t\t<item>\r\n\t\t\t<title>Tarriona \"Tank\" Ball<\/title>\r\n\t\t\t<link>https:\/\/www.norahjonesisplayingalong.com\/tarriona-tank-ball<\/link>\r\n\t\t\t<description>Tarriona \u201CTank\u201D Ball is the front woman of Tank and the Bangas who got her start in the slam poetry scene of New Orleans. Norah and Tank are by all means \u2018friend goals\u2019 so they\u00A0cover everything from the news, to cooking, writing, attending the GRAMMYs and of course love. The music in this episode takes some surprising turns while they play new versions of songs by Tank like \u2018Rollercoasters\u2019 &amp; \u2018Friend Goals,\u2019 a collaboration with Norah titled \u2018Playing Along\u2019 and in a twist, a new take on \u2018Don\u2019t Know Why.\u2019Learn more about your ad choices. Visit megaphone.fm\/adchoices<\/description>\r\n\t\t\t<pubDate>Tue, 11 Oct 2022 04:00:00 -0000<\/pubDate>\r\n\t\t\t<itunes:title>Tarriona \"Tank\" Ball<\/itunes:title>\r\n\t\t\t<itunes:episodeType>full<\/itunes:episodeType>\r\n\t\t\t<itunes:season>1<\/itunes:season>\r\n\t\t\t<itunes:episode>2<\/itunes:episode>\r\n\t\t\t<itunes:author>Norah Jones<\/itunes:author>\r\n\t\t\t<itunes:image href=\"https:\/\/megaphone.imgix.net\/podcasts\/06cf7fac-39f8-11ed-8fe0-231964566f86\/image\/NorahJones_PlayingAlong_GuestCover_2_Ball_v2_2.jpg?ixlib=rails-2.1.2&amp;max-w=3000&amp;max-h=3000&amp;fit=crop&amp;auto=format,compress\"\/>\r\n\t\t\t<itunes:subtitle>Tarriona \u201CTank\u201D Ball is the front woman of Tank and the Bangas who got her start in the slam poetry scene of New Orleans. <\/itunes:subtitle>\r\n\t\t\t<itunes:summary>Tarriona \u201CTank\u201D Ball is the front woman of Tank and the Bangas who got her start in the slam poetry scene of New Orleans. Norah and Tank are by all means \u2018friend goals\u2019 so they\u00A0cover everything from the news, to cooking, writing, attending the GRAMMYs and of course love. The music in this episode takes some surprising turns while they play new versions of songs by Tank like \u2018Rollercoasters\u2019 &amp; \u2018Friend Goals,\u2019 a collaboration with Norah titled \u2018Playing Along\u2019 and in a twist, a new take on \u2018Don\u2019t Know Why.\u2019Learn more about your ad choices. Visit megaphone.fm\/adchoices<\/itunes:summary>\r\n\t\t\t<content:encoded>\r\n\t\t\t\t<![CDATA[<p>Tarriona \u201CTank\u201D Ball is the front woman of Tank and the Bangas who got her start in the slam poetry scene of New Orleans. Norah and Tank are by all means \u2018friend goals\u2019 so they\u00A0cover everything from the news, to cooking, writing, attending the GRAMMYs and of course love. The music in this episode takes some surprising turns while they play new versions of songs by Tank like \u2018Rollercoasters\u2019 &amp; \u2018Friend Goals,\u2019 a collaboration with Norah titled \u2018Playing Along\u2019 and in a twist, a new take on \u2018Don\u2019t Know Why.\u2019<\/p><p><\/p><p>Learn more about your ad choices. Visit <a href=\"https:\/\/megaphone.fm\/adchoices\">megaphone.fm\/adchoices<\/a><\/p>]]>\r\n\t\t\t<\/content:encoded>\r\n\t\t\t<itunes:duration>3987<\/itunes:duration>\r\n\t\t\t<itunes:explicit>yes<\/itunes:explicit>\r\n\t\t\t<guid isPermaLink=\"false\">\r\n\t\t\t\t<![CDATA[06cf7fac-39f8-11ed-8fe0-231964566f86]]>\r\n\t\t\t<\/guid>\r\n\t\t\t<enclosure url=\"https:\/\/traffic.megaphone.fm\/GJLLC2702006029.mp3?updated=1665167172\" length=\"0\" type=\"audio\/mpeg\"\/>\r\n\t\t<\/item>\r\n\t<\/channel>\r\n<\/rss>";
    
    const responseRss = {
      contents : responseRSSXML,
    }
    fetch.mockResponses(
      [
        responseItunes,
        { status: 200 }
      ],
      [
        JSON.stringify(responseRss),
        { status: 200 }
      ]
    );

    const loadingCallback = jest.fn();

    const { getAllByTestId } = render(<Router><View loadingCallback={loadingCallback}/></Router>);
    await waitFor(() => {
        expect(loadingCallback).toBeCalledWith(false);
    });

    const episode =  getAllByTestId("img")[0];
    
    act(() => {
        fireEvent.click(episode);
    });

    expect(navigate).toHaveBeenCalledWith("/podcast/1286770630", {"preventScrollReset": undefined, "relative": undefined, "replace": false, "state": undefined});
  });
});
