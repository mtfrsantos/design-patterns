import CachedYoutubeService from "../../src/structural/proxy/CachedYoutubeService";
import ThirdPartyYoutubeService from "../../src/structural/proxy/ThirdPartyYoutubeService";

test("Should return a video info if cached or create a new one if not", function () {
    const youtubeService = new ThirdPartyYoutubeService();
    const youtubeProxy = new CachedYoutubeService(youtubeService);
    const videoInfo = youtubeProxy.getVideoInfo("dQw4w9WgXcQ");
    expect(videoInfo).toEqual({
        title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
        length: "3:32",
    });
    const downloadVideo = youtubeProxy.downloadVideo("dQw4w9WgXcQ");
    expect(downloadVideo).toEqual(
        "Downloading https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    );
});
