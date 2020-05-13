const incKeywords = ['owes', 'took', 'borrowed'];
const decKeywords = ['paid', 'gave'];
const filterKeywords = ['me'];

export const inspectText = input => {
  let name, change, amount;

  function filter(inputText) {
    let filteredReturn;
    filterKeywords.forEach(word => {
      filteredReturn = inputText.replace(` ${word} `, ' ');
    });
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

  if (!name) {
    return { status: 'failed', reason: 'name' };
  } else if (!name) {
    return { status: 'failed', reason: 'action' };
  } else if (!name) {
    return { status: 'failed', reason: 'amount' };
  } else {
    return { status: 'passed', name, change, amount };
  }
};

console.log(inspectText('jeff owes me $200'));
console.log(inspectText('jeff paid me $200'));
