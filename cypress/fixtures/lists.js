export const nestedItems = [
  {
    listItemText: 'Nested 1',
    onClick: () => console.log('Nested'),
  },
  {
    listItemText: 'Nested 2',
    onClick: () => console.log('Wow'),
  },
];

export const lists = [
  {
    listItemText: 'Hello',
    onClick: () => console.log('No nested items!'),
  },
  {
    listItemText: 'Item with nested items',
    nestedItems,
  },
];
