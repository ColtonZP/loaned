const incKeywords = ['owes', 'took', 'borrowed', 'incurred', 'needs'];
const decKeywords = ['paid', 'gave', 'provided', 'loaned'];

export const inspectText = (input: string) => {
  let change, verb;
  const nameReg = /^\S+/;
  const amountReg = /[0-9]+/;

  const trimmedInput: string = input.trim();
  let name: string = (trimmedInput.match(nameReg) || [])[0];
  const amount: number = Number((trimmedInput.match(amountReg) || [])[0]);

  incKeywords.forEach(word => {
    const isInc = input.includes(word);
    if (isInc) {
      change = 'inc';
      verb = word;
    }
  });

  if (!change) {
    decKeywords.forEach(word => {
      const isDec = input.includes(word);
      if (isDec) {
        change = 'dec';
        verb = word;
      }
    });
  }

  if (name === verb) {
    name = '';
  }

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
