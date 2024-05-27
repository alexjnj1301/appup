export interface FormRequest {
  name: string
  firstname: string
  age: number
  locationCity: LocationCity
  carToRent: CarToRent
  token: string
}

export enum LocationCity {
  PARIS = 'Paris',
  LYON = 'Lyon',
  MARSEILLE = 'Marseille'
}

export enum CarToRent {
  ASTON_MARTIN = 'Aston Martin',
  BETNLEY = 'Bentley',
  CADILLAC = 'Cadillac',
  FERRARI = 'Ferrari',
  JAGUAR = 'Jaguar'
}
