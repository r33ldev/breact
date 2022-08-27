export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('mcal_events');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('error loading');
    return undefined;
  }
};

export const saveState = (mcal_events) => {
  try {
    const serializedState = JSON.stringify(mcal_events);
    localStorage.saveState('mcal_events', serializedState);
    return 1;
  } catch (err) {
    console.error('error saving events');
    return undefined;
  }
};
