export const generateNewArray = (arraySize: number) => {
    return Array.from(
      { length: arraySize },
      () => Math.floor(Math.random() * 60) + 20
    );
};
