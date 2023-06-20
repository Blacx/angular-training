class Vehicle implements movement {

    private _color: string;
    private _myroperty: string = 'secret';

    constructor(
        public wheel: number,
        public brand: string,
    ){}

    speed: number;
    move(): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }
    setSpeed(speed: number): void {
        throw new Error("Method not implemented.");
    }
    getSpeed(): number {
        throw new Error("Method not implemented.");
    }
    

    getColor() {
        return this._color;
    }

    setColor(color: string) {
        this._color = color;
    }

    get myProperty(): string {
        return this._myroperty;
    }

    set myProperty(value: string) {
        this._myroperty = value;
    }

}

let kendaraan1 = new Vehicle(4, 'Toyota');
kendaraan1.wheel = 4;
//console.log(kendaraan1.color);
kendaraan1.setColor('Blue');
console.log(kendaraan1.getColor());

kendaraan1.myProperty = 'Test';
console.log(kendaraan1.myProperty);


interface movement {
    speed: number;
    move(): void;
    stop(): void;
    setSpeed(speed: number): void;
    getSpeed(): number;
}