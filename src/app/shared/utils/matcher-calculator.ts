const levenshteinDistance = (a: string, b: string): number => {
  const matrix: number[][] = Array.from({ length: b.length + 1 }, (_, i) => [
    i,
  ]);
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] =
        b[i - 1] === a[j - 1]
          ? matrix[i - 1][j - 1]
          : Math.min(
              matrix[i - 1][j - 1] + 1,
              matrix[i][j - 1] + 1,
              matrix[i - 1][j] + 1,
            );
    }
  }
  return matrix[b.length][a.length];
};

const similarityPercentage = (a: string, b: string): number =>
  ((Math.max(a.length, b.length) - levenshteinDistance(a, b)) /
    Math.max(a.length, b.length)) *
  100;

export const getSimilarityPercentages = (
  input1: string,
  input2: string[],
): { [key: string]: string }[] => {
  const lowerInput1 = input1.toLowerCase();
  return input2.map((item) => {
    const lowerItem = item.toLowerCase();
    return {
      [item]: `${similarityPercentage(lowerInput1, lowerItem).toFixed(2)}`,
    };
  });
};
