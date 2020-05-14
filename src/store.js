import { observable, action, decorate } from 'mobx';

class OwedStore {
  records = [];

  addRecord = record => {
    const person = record;
    const records = this.records;
    delete record.status;

    !records.find(record => record.name === person.name)
      ? newPerson(person)
      : updatePerson(person);

    function newPerson(person) {
      records.push({
        name: person.name,
        amount: updateAmount(record.amount, record.change, 0),
        history: [record],
      });
    }

    function updatePerson(person) {
      const changePerson = records.find(record => record.name === person.name);
      changePerson.history = [...changePerson.history, record];
      changePerson.amount = updateAmount(
        record.amount,
        record.change,
        changePerson.amount
      );
    }

    function updateAmount(amount, change, oldAmount) {
      if (change === 'increment') {
        return amount + oldAmount;
      } else {
        return oldAmount - amount;
      }
    }
  };
}

decorate(OwedStore, {
  records: observable,
  addRecord: action,
});

const store = new OwedStore();
export default store;
