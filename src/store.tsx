import create from 'zustand';

export const useStore = create(set => ({
  records: [],
  addPerson: () => {},
  updatePerson: () => {},
}));
