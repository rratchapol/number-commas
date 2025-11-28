# number-commas

A simple and lightweight JavaScript library to format numbers with comma separators.

## Installation

```bash
npm install number-commas
```

## Usage

### ES Module (import)

```javascript
import numberCommas from 'number-commas';

console.log(numberCommas(1000));       // "1,000"
console.log(numberCommas(1000000));    // "1,000,000"
console.log(numberCommas(123456789));  // "123,456,789"
console.log(numberCommas(1234.567));   // "1,234.567"
```

### CommonJS (require)

```javascript
const numberCommas = require('number-commas');

console.log(numberCommas(1000));       // "1,000"
console.log(numberCommas(1000000));    // "1,000,000"
```

## API

### numberCommas(num)

Formats a number by adding comma separators for thousands.

#### Parameters

- `num` (Number): The number to format

#### Returns

- (String): The formatted number with commas

## Example

```javascript
import numberCommas from 'number-commas';

const price = 1234567;
console.log(`Price: $${numberCommas(price)}`); // "Price: $1,234,567"

const decimal = 12345.6789;
console.log(`Value: ${numberCommas(decimal)}`); // "Value: 12,345.6789"
```

## Developer
rratchapol
