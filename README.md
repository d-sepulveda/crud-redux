# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## Iniciar la aplicacion

1. Tener instalado json-server de manera global `npm install -g json-server` y despues `npm install`
2. en db.json tener la siguiete data 
```
{
  "productos": [
    {
      "nombre": "Jugo de Zanahoria",
      "precio": "31111",
      "id": 1
    },
    {
      "nombre": "Jugo de Naranja",
      "precio": "700",
      "id": 2
    },
    {
      "nombre": "Jugo de Naranja",
      "precio": "600",
      "id": 3
    },
    {
      "nombre": "Rib Eye 800g",
      "precio": "1000",
      "id": 4
    },
    {
      "nombre": "Jugo de Fresa",
      "precio": "1500",
      "id": 5
    },
    {
      "nombre": "Jugo de Manzana",
      "precio": "300",
      "id": 6
    }
  ]
}
```

3. Iniciar servicio en una consola con el comando `json-server db.json --port 4000`
4. Iniciar la aplicacion con `npm start`
