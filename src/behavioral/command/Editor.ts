export default class Editor {
    private content: string[] = [];
    insertFirst(content: string): void {
        this.content.unshift(content);
    }
    insertLast(content: string): void {
        this.content.push(content);
    }
    clear(): void {
        this.content = [];
    }
    setContent(content: string[]): void {
        this.content = content;
    }
    getContent(): string[] {
        return this.content;
    }
    getFromIndex(index: number): string {
        return this.content[index];
    }
    getLength(): number {
        return this.content.length;
    }
}
