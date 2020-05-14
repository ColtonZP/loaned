const incKeywords = ['owes', 'took', 'borrowed', 'incurred', 'needs'];
const decKeywords = ['paid', 'gave', 'provided'];
const filterKeywords = ['me', 'another'];

export const inspectText = input => {
  let name, change, amount;

  function filter(inputText) {
    let filteredReturn;
    filterKeywords.forEach(word => {
      if (filteredReturn !== undefined) {
        filteredReturn = filteredReturn.replace(` ${word} `, ' ');
      } else filteredReturn = inputText.replace(` ${word} `, ' ');
    });
    // Shave extra spaces in front or back
    if (filteredReturn[0] === ' ') {
      filteredReturn = filteredReturn.substring(1, filteredReturn.length);
    }
    if (filteredReturn[filteredReturn.length - 1] === ' ') {
      filteredReturn = filteredReturn.substring(0, filteredReturn.length - 1);
    }
    return filteredReturn;
  }

  // return name from index
  function returnName(str, index) {
    return str.substring(0, index - 1);
  }

  // does it contain any incKeywords?
  incKeywords.forEach(word => {
    const filteredInput = filter(input);
    const index = filteredInput.indexOf(word);
    const newString = filteredInput.substring(index, filteredInput.length);
    if (index !== -1) {
      change = 'increment';
      name = returnName(filteredInput, index);
      amount = newString.substring(
        newString.indexOf(' ') + 1,
        filteredInput.length
      );
      if (amount[0] === '$') {
        amount = Number(amount.substring(1, amount.length));
      } else amount = Number(amount);
    }
  });

  // does it contain any decKeywords?
  decKeywords.forEach(word => {
    const filteredInput = filter(input);
    const index = filteredInput.indexOf(word);
    const newString = filteredInput.substring(index, filteredInput.length);
    if (index !== -1) {
      change = 'decrement';
      name = returnName(filteredInput, index);
      amount = newString.substring(
        newString.indexOf(' ') + 1,
        filteredInput.length
      );
      if (amount[0] === '$') {
        amount = Number(amount.substring(1, amount.length));
      } else amount = Number(amount);
    }
  });

  if (!change) {
    return { status: 'failed', reason: 'action' };
  } else if (!name) {
    return { status: 'failed', reason: 'name' };
  } else if (!amount) {
    return { status: 'failed', reason: 'amount' };
  } else {
    return { status: 'passed', name, change, amount };
  }
};

// just for testing :)
// console.log(inspectText('jeff owes me $200'));
// console.log(inspectText('jeff paid me $200'));

const arrOfObj = {
  jeff: { owed: 200, history: 'things' },
};
