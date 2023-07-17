export default interface ThirdPartyYoutubeLib {
    getVideoInfo(videoId: string): { title: string; length: string };
    downloadVideo(videoId: string): string;
}
