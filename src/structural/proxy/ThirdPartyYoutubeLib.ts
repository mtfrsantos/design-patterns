export default interface ThirdPartyYoutubeLib {
    getVideoInfo(
        videoId: string
    ): { title: string; length: string } | undefined;
}
