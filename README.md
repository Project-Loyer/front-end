# LoyerApp

## Ejecución

Para ejecutar los comandos de react-native debemos instalar el cliente de react-native: 

`npm install -g react-native-cli`

Para levantar la app en el dispositivo, primero debemos levantar react-native desde el directorio raíz del proyecto: 

`react-native start`

Luego abrir otra terminal, también en el directorio del proyecto, y ejecutar alguno de los siguientes comandos, de acuerdo al SO del dispositivo conectado vía USB:
```
react-native run-android
react-native run-io
```

En caso de que al abrirse la app en Android salte una pantalla roja con un error de `Unable to load scripts from assets 'index.android.bundle'`, ejecutar los siguientes comandos en el directorio del proyecto:
```
mkdir android/app/src/main/assets
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```

A algunos usuarios no se les actualiza la app cada vez que la buildean de nuevo, incluso matando el server previamente.
Para solucionar esto, es necesario correr el comando de arriba antes de cada start o run-android.

Para hacer más rápido el trámite, el comando está guardado como un script dentro del package.json, que incluye el android-run. Por lo tanto, sólo se debe ejecutar `npm run android`

Una vez con la app corriendo, podemos activar el Live realod agitando el dispositivo y seleccionar la opcion correspondiente en el menu.
Esto nos permite ver los cambios reflejados en la app inmediatamente.
