Streaming Mov Api
==

0. Clona repositorio de github:  https://github.com/ymenbla/streaming-api-mongodb.git
1. Crea archivo environment `.env`. 

# Environment
El archivo en debe contener las siguientes constantes:


    PORT = PUERTO_API
    DB_URI = URI_MONGODB
    
    JWT_SECRET = KEY_SECRET
    JWT_EXPIRE_TOKEN = TIME_TOKEN
    JWT_EXPIRE_REFRESH_TOKEN = TIME_REFRESH_TOKEN
    
    API_URL_MOVIE = https://api.themoviedb.org/3/
    API_KEY_MOVIE = KEY_MOVIEDB_3





Para mas informacion sobre obtener `API_KEY_MOVIE` debes acceder: https://developers.themoviedb.org/3/getting-started/introduction

# Entorno
Esta api fue construida 
- `nodejs v16.14`
- `nestjs v9`

Maneja base de datos no relaciones `Mongodb`

## Mantente en contacto

- Author - [Yefry Mendoza](https://kamilmysliwiec.com)
- Twitter - [@ymenbla](https://twitter.com/ymenbla)

## Licensia

Stream Mov Api is [MIT licensed](LICENSE).
