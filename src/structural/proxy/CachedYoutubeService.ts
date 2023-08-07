import Spy from "./Spy";
import ThirdPartyYoutubeLib from "./ThirdPartyYoutubeLib";

export default class CachedYoutubeService implements ThirdPartyYoutubeLib {
    private videoCache: Map<string, { title: string; length: string }>;
    constructor(
        private youtubeService: ThirdPartyYoutubeLib,
        private spy: Spy
    ) {
        this.videoCache = new Map();
    }
    getVideoInfo(
        videoId: string
    ): { title: string; length: string } | undefined {
        this.spy.execute();
        let cachedVideoInfo = this.videoCache.get(videoId);
        if (!cachedVideoInfo) {
            cachedVideoInfo = this.youtubeService.getVideoInfo(videoId);
        }
        if (cachedVideoInfo) {
            this.videoCache.set(videoId, cachedVideoInfo);
        }
        return cachedVideoInfo;
    }
}
