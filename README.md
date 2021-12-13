# s2maps-gl-react [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[travis-image]: https://travis-ci.org/S2-Maps/s2maps-gl-react.svg?branch=master
[travis-url]: https://travis-ci.org/S2-Maps/s2maps-gl-react
[npm-image]: https://img.shields.io/npm/v/s2maps-gl-react.svg
[npm-url]: https://npmjs.org/package/s2maps-gl-react
[downloads-image]: https://img.shields.io/npm/dm/s2maps-gl-react.svg
[downloads-url]: https://www.npmjs.com/package/s2maps-gl-react

## About

### Clone Package

```sh
# grab the package
git clone https://github.com/S2-Maps/s2maps-gl-react.git
# remove the origin
git remote rm origin
# download the dependencies
npm / yarn / pnpm
```


### Example use

```jsx
import React from 'react'
import { Map } from 's2maps-gl-react'
import style from './style.json'

const apiKey = '<insert_api_key>'

export default function App () {
  return (
    <div className='App'>
      <Map style={style} apiKey={apiKey} options={{ dark: true }} />
    </div>
  )
}
```

### Props

#### style [string | Object]

* hyperlink to a style object or JSON object describing what to draw and where to pull the data from

#### opts [MapOptions]

```js
export type MapOptions = {
  interactive?: boolean, // allow the end user to interact with the canvas
  apiKey: string,
  style: Object | string, // style object
  scrollZoom?: boolean, // allows user control over the zoom
  canvasMultiplier?: number, // defaults to window.devicePixelRatio
  attributions?: { [string]: string }, //  [name]: href
  attributionOff?: boolean, // hides the attribution symbol. If using s2maps.io data you MUST NOT turn this off.
  infoLayers?: Array<string>,
  zoomController?: boolean,
  compassController?: boolean,
  colorBlindController?: boolean,
  canZoom?: boolean,
  canMove?: boolean,
  darkMode?: boolean
}
```

#### apiKey [string]
* If using s2maps.io data, an API key is required to access.

#### ready [Function]
* Once the engine is ready to take inputs, it will fire this function

#### click [Function] (map.dispatchEvent)
* Everytime a click is dispatched from the map engine, this function will be called

#### info [Function] (map.dispatchEvent)
* Everytime a info is dispatched from the map engine, this function will be called

#### mouseenter [Function] (map.dispatchEvent)
* Everytime a mouseenter is dispatched from the map engine, this function will be called

#### mouseleave [Function] (map.dispatchEvent)
* Everytime a mouseleave is dispatched from the map engine, this function will be called

---

## License

Attribution-NonCommercial-NoDerivs 3.0 Unported (CC BY-NC-ND 3.0)

  Copyright 2021 - S2MAPS INC

  You are free to:
    - Share: copy and redistribute the material in any medium or format

  Under the following terms:
    - Attribution: You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
    - NonCommercial: You may not use the material for commercial purposes.
    - NoDerivatives: If you remix, transform, or build upon the material, you may not distribute the modified material.
    - No additional restrictions: You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

  Notices:
    - You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation.
    - No warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as publicity, privacy, or moral rights may limit how you use the material.

-------------------------------------------------------------------------------

contains code from s2maps-gl

  Copyright 2021 - S2MAPS INC

  All rights reserved.

  s2maps-gl must be used according to the S2 Maps Terms of Service. This license
  allows developers with a current active S2 Maps account to use and modify the
  S2 Maps Web SDK. Developers may modify the S2 Maps Web SDK code so long as the
  modifications do not change or interfere with marked portions of the code related
  to billing, accounting, and anonymized data collection. The S2 Maps Web SDK
  only sends anonymized usage data, which S2 Maps uses for fixing bugs and errors,
  accounting, and generating aggregated anonymized statistics. This license terminates
  automatically if a user no longer has an active S2 Maps account.

  For the full license terms, please see the S2 Maps Terms of Service at
  https://www.s2maps.io/tos/.
