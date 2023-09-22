// Component
export default interface Query {
    statement: string;
    parameters: string[];
    execute(): string;
}
