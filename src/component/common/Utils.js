export function renderStringZeroIfUndefined(value) {
  if (value) {
    return value + '';
  } else {
    if (value === undefined || value === 0) {
      return '0';
    } else {
      return '';
    }
  }
}

export function renderStringNAIfUndefined(value) {
  if (value) {
    return value;
  } else {
    if (value === undefined) {
      return 'NA';
    } else {
      return '';
    }
  }
}
export function renderEmptyStringIfUndefined(value) {
  if (value) {
    return value;
  } else {
    return '';
  }
}

export function convertToStringIfInteger(integer) {
  if (integer && typeof integer === 'number') {
    return integer + '';
  } else {
    return '';
  }
}
