[![NPM version](https://badge.fury.io/js/%40bharath29%2Fcrypto-sha256.svg)](https://badge.fury.io/for/js/@bharath29/crypto-sha256)

# crypto-sha256

There are several sha256 modules on npm, but none of them use the `crypto` node module.

## Usage

    npm install --save @bharath29/crypto-sha256

## API

### sha256(data, digest)

Returns a base64 sha256 hash of the buffer or string. Can return an hex digest.

-   `data`: buffer or string to hash
-   `digest`: optional digest type. Can be `base64` (default) or `hex`

```js
const sha256 = require("@bharath29/crypto-sha256");

sha256("sample data");

//.8QeqxZ3/HUnr/tt/A4d+qgKX+afTz/Ju38dUBvIiJW0=

sha256("sample data", "hex");

//.f107aac59dff1d49ebfedb7f03877eaa0297f9a7d3cff26edfc75406f222256d
```

## Contributions

Please open issues for bugs and suggestions in [github](https://github.com/bharath529/sha256/issues).
Pull requests with tests are welcome.

## Author

Bharath Bheemireddy, [@bharath.bheemireddy](https://www.facebook.com/chintu.bheemireddy)

## License

crypto-sha256 is copyright 2020 Bharath Bheemireddy and contributors.
