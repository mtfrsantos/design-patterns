import ThirdPartyYoutubeLib from "./ThirdPartyYoutubeLib";
export default class ThirdPartyYoutubeService implements ThirdPartyYoutubeLib {
    getVideoInfo(videoId: string): { title: string; length: string } {
        return {
            title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
            length: "3:32",
        };
    }
    downloadVideo(videoId: string): string {
        return `Downloading https://www.youtube.com/watch?v=${videoId}`;
    }
}
