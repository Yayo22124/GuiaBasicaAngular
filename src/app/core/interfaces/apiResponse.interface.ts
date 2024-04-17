export interface iApiResponse {
  success: boolean;
  records: Record[];
}

export interface Record {
  _id:            string;
  arduinoIp:      ArduinoIP;
  type:           RecordType;
  name:           RecordName;
  brand:          Brand;
  model:          Model;
  specifications: Specification[];
  location:       Location;
  status:         Status;
  owner:          Owner;
  readings:       Reading[];
  actions:        any[];
  registeredDate: string;
}

export enum ArduinoIP {
  The1921680100 = "192.168.0.100",
  The1921680105 = "192.168.0.105",
  The1921680119 = "192.168.0.119",
}

export enum Brand {
  Genérico = "Genérico",
}

export enum Location {
  Recámara3 = "Recámara 3",
}

export enum Model {
  Dht11 = "DHT11",
}

export enum RecordName {
  TemperaturaYHumedad = "Temperatura y Humedad",
}

export enum Owner {
  Caorgris = "CAORGRIS",
  DJnesh = "DJnesh",
}

export interface Reading {
  name:            ReadingName;
  value:           number;
  measurementUnit: Unit;
}

export enum Unit {
  C = "°C",
  Empty = "%",
  MA = "mA",
  V = "V",
  W = "W",
}

export enum ReadingName {
  DetecciónDeHumedad = "Detección de Humedad",
  DetecciónDeTemperatura = "Detección de Temperatura",
}

export interface Specification {
  name:      SpecificationName;
  minValue?: number;
  maxValue?: number;
  unit:      Unit;
  value?:    number;
  type?:     SpecificationType;
}

export enum SpecificationName {
  ConsumoEléctrico = "Consumo eléctrico",
  CorrienteDeOperación = "Corriente de operación",
  RangoDeMediciónDeHúmedad = "Rango de medición de húmedad",
  RangoDeMediciónDeTemperatura = "Rango de medición de temperatura",
  VoltageDeOperación = "Voltage de operación",
}

export enum SpecificationType {
  Vcd = "VCD",
}

export enum Status {
  Disponible = "Disponible",
}

export enum RecordType {
  Sensor = "Sensor",
}
