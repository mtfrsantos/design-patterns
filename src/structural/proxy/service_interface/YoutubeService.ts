export default interface YoutubeService {
    getVideoInfo(
        videoId: string
    ): { title: string; length: string } | undefined;
}
