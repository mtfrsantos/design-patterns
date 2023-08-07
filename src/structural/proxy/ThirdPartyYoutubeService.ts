import Spy from "./Spy";
import ThirdPartyYoutubeLib from "./service_interface/ThirdPartyYoutubeLib";
export default class ThirdPartyYoutubeService implements ThirdPartyYoutubeLib {
    private videos: Map<string, { title: string; length: string }>;

    constructor(private spy: Spy) {
        this.videos = new Map();
        this.videos.set("9bZkp7q19f0", {
            title: "PSY - GANGNAM STYLE(강남스타일) M/V",
            length: "4:12",
        });
        this.videos.set("dQw4w9WgXcQ", {
            title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
            length: "3:32",
        });
        this.videos.set("foE1mO2yM04", {
            title: "Mike Posner - I Took A Pill In Ibiza (Seeb Remix) (Explicit)",
            length: "3:56",
        });
    }
    getVideoInfo(
        videoId: string
    ): { title: string; length: string } | undefined {
        this.spy.execute();
        return this.videos.get(videoId);
    }
}
