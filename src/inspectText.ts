const incKeywords = / owe | owes | owed | took | borrowed | incurred | need | needs | needed /;
const decKeywords = / paid | gave | provided | loaned | lent /;
const filterWords = / me | from | another | with | back /;
const amountReg = /(?:[0-9],*)+(?:\.[0-9]{1,2})?|\.[0-9]{1,2}/;

export const inspectText = (input: string) => {
  let name, amount, change;

  let trimmedInput: string = input.replace(filterWords, ' ').trim();

  // pull keyword
  change = (() => {
    let keyword = trimmedInput.match(incKeywords);
    if (keyword) {
      trimmedInput = trimmedInput.replace(incKeywords, '');
      return 'inc';
    } else {
      keyword = trimmedInput.match(decKeywords);
      if (keyword) {
        trimmedInput = trimmedInput.replace(decKeywords, '');
        return 'dec';
      }
    }
  })();

  //pull amount
  amount = Number((trimmedInput.match(amountReg) || [])[0].replace(/[,]/g, ''));
  trimmedInput = trimmedInput.replace(amountReg, '').trim();

  //pull name
  if (trimmedInput[0].match(/[iI]/)) {
    if (change === 'inc') {
      change = 'dec';
    } else if (change === 'dec') {
      change = 'inc';
    }
    trimmedInput = trimmedInput.replace(/[iI]/, '');
  }

  name = trimmedInput.toLowerCase();

  if (!change) {
    return { status: 'failed', reason: 'verb (ex. owes, paid, took, gave)' };
  } else if (!name) {
    return { status: 'failed', reason: 'name' };
  } else if (!amount) {
    return { status: 'failed', reason: 'amount' };
  } else {
    return { status: 'passed', name, change, amount };
  }
};
