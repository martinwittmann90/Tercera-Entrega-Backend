const fs = require("fs");

const createFile = async (file_path) => {
  try {
    if (!fs.existsSync(file_path)) {
      console.log("File do not exist, create file");
      await fs.promises.writeFile(file_path, "", "utf8");
    }
  } catch (err) {
    console.log("Error while creating file", err);
  }
};

const validateNumber = (number) => {
  return number && !isNaN(number) && number > 0;
};

//**Crear productos de tecnologia */
const productsIncorporated = [
        {
        title: 'Argentina',
        description: 'Camiseta',
        price: 'USD 100',
        thumbnail: 'https://i.ibb.co/4dJB6DR/camiseta-Argentina.png',
        code: 'C0001',
        stock: '5',
        id: 1
        },
        {
        title: 'Argentina',
        description: 'Pantalón corto',
        price: 'USD 100',
        thumbnail: 'https://i.ibb.co/JvbsxnS/short-argentina.png',
        code: 'C0002',
        stock: '5',
        id: 2
        },
        {
        title: 'Croacia',
        description: 'Camiseta',
        price: 'USD 100',
        thumbnail: 'https://i.ibb.co/jMmCR7f/camiseta-Croacia.png',
        code: 'C0003',
        stock: '5',
        id: 3
        },
        {
        title: 'Paises Bajos',
        description: 'Camiseta',
        price: 'USD 100',
        thumbnail: 'https://i.ibb.co/4NykKFH/camiseta-Holanda.png',
        code: 'C0004',
        stock: '5',
        id: 4
        }, 
        {
        title: 'Brasil',
        description: 'Camiseta',
        price: 'USD 100',
        thumbnail: 'https://i.ibb.co/bmccp6d/camisetas-Brasil.png',
        code: 'C0005',
        stock: '5',
        id: 5
        },
        {
        title: 'Alemania',
        description: 'Camiseta',
        price: 'USD 100',
        thumbnail: 'https://i.ibb.co/f1VRdR0/camiseta-Alemania.png',
        code: 'C0006',
        stock: '5',
        id: 6
        },
        {
        title: 'España',
        description: 'Camiseta',
        price: 'USD 90',
        thumbnail: 'https://i.ibb.co/fnyhXPj/camiseta-Espa-a.png',
        code: 'C0007',
        stock: '3',
        id: 7
        },
        {
        title: 'Portugal',
        description: 'Camiseta',
        price: 'USD 70',
        thumbnail: 'https://i.ibb.co/SVtLNvb/camiseta-Portugal.png',
        code: 'C0008',
        stock: '7',
        id: 8
        },
        {
        title: 'Francia',
        description: 'Camiseta',
        price: 'USD 70',
        thumbnail: 'https://i.ibb.co/163WFk8/camiseta-Francia.png',
        code: 'C0009',
        stock: '7',
        id: 9
        },
        {
        title: 'Francia',
        description: 'Pantalón corto',
        price: 'USD 70',
        thumbnail: 'https://i.ibb.co/p23whvt/short-francia-Photo-Room.png',
        code: 'C0010',
        stock: '7',
        id: 10
        },
];

module.exports = { createFile, productsIncorporated, validateNumber };