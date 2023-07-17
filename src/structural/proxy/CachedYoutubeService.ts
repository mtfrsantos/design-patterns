import ThirdPartyYoutubeLib from "./ThirdPartyYoutubeLib";

export default class CachedYoutubeService implements ThirdPartyYoutubeLib {
    private videoCache: Map<string, { title: string; length: string }>;
    constructor(private youtubeService: ThirdPartyYoutubeLib) {
        this.videoCache = new Map();
    }
    getVideoInfo(videoId: string): { title: string; length: string } {
        let cachedVideoInfo = this.videoCache.get(videoId);
        if (!cachedVideoInfo) {
            cachedVideoInfo = this.youtubeService.getVideoInfo(videoId);
            this.videoCache.set(videoId, cachedVideoInfo);
        }
        return cachedVideoInfo;
    }
    downloadVideo(videoId: string): string {
        return `Downloading https://www.youtube.com/watch?v=${videoId}`;
    }
}
