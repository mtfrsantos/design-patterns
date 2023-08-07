import CachedYoutubeService from "../../src/structural/proxy/proxy/CachedYoutubeService";
import Spy from "../../src/structural/proxy/Spy";
import ThirdPartyYoutubeService from "../../src/structural/proxy/ThirdPartyYoutubeService";

test("Should return a video info if cached or create a new one if not", function () {
    const thirdPartyYoutubeServiceSpy = new Spy();
    const cachedYoutubeServiceSpy = new Spy();
    const youtubeService = new ThirdPartyYoutubeService(
        thirdPartyYoutubeServiceSpy
    );
    const youtubeProxy = new CachedYoutubeService(
        youtubeService,
        cachedYoutubeServiceSpy
    );
    const videoInfo = [
        youtubeProxy.getVideoInfo("9bZkp7q19f0"),
        youtubeProxy.getVideoInfo("dQw4w9WgXcQ"),
        youtubeProxy.getVideoInfo("foE1mO2yM04"),
        youtubeProxy.getVideoInfo("9bZkp7q19f0"),
        youtubeProxy.getVideoInfo("dQw4w9WgXcQ"),
        youtubeProxy.getVideoInfo("foE1mO2yM04"),
    ];
    expect(videoInfo).toEqual([
        {
            title: "PSY - GANGNAM STYLE(강남스타일) M/V",
            length: "4:12",
        },
        {
            title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
            length: "3:32",
        },
        {
            title: "Mike Posner - I Took A Pill In Ibiza (Seeb Remix) (Explicit)",
            length: "3:56",
        },
        {
            title: "PSY - GANGNAM STYLE(강남스타일) M/V",
            length: "4:12",
        },
        {
            title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
            length: "3:32",
        },
        {
            title: "Mike Posner - I Took A Pill In Ibiza (Seeb Remix) (Explicit)",
            length: "3:56",
        },
    ]);
    expect(thirdPartyYoutubeServiceSpy.getRunCount()).toEqual(3);
    expect(cachedYoutubeServiceSpy.getRunCount()).toEqual(6);
});
