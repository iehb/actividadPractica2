export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    stock: 5,
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    stock: 5,
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'hola perrito',
    stock: 5,
  },
  {
    id: 4,
    name: 'Minibolsa para el hombro Jackie 1961',
    price: 850000,
    description: 'hiola pajarito',
    stock: 10,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
