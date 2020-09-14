export const nestedItems = [
  {
    listItemText: 'Nested 1',
    onClick: () => {},
  },
  {
    listItemText: 'Nested 2',
    onClick: () => {},
  },
];

export const lists = [
  {
    listItemText: 'Just Text',
  },
  {
    listItemText: 'Hello',
    onClick: () => {},
  },
  {
    listItemText: 'Item with nested items',
    nestedItems,
  },
];
