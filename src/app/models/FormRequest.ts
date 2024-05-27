export interface FormRequest {
  name: string
  firstname: string
  age: number
  locationCity: LocationCity
  carToRent: CarToRent
  token: string
}

enum LocationCity {
  PARIS = 'Paris',
  LYON = 'Lyon',
  MARSEILLE = 'Marseille'
}

enum CarToRent {
  ASTON_MARTIN = 'Aston Martin',
  BETNLEY = 'Bentley',
  CADILLAC = 'Cadillac',
  FERRARI = 'Ferrari',
  JAGUAR = 'Jaguar'
}
