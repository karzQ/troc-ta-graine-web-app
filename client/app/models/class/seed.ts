export class Seed {
    id: number;
    name: string;
    catalogReference: string;


    constructor(id: number, name: string, catalogReference: string) {
        this.id = id;
        this.name = name;
        this.catalogReference = catalogReference;
    }
}
