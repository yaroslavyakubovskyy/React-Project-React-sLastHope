import { getColors } from "./getColors.js";

export function countCategories(data, total) {
  if (!data.length || !total) return [];

  const categorySum = {};

  data.forEach((transaction) => {
    const { category, sum } = transaction;
    if (categorySum[category.categoryName]) {
      categorySum[category.categoryName] += sum;
    } else {
      categorySum[category.categoryName] = sum;
    }
  });

  const categoriesData = [];

  Object.entries(categorySum).forEach(([key, value]) => {
    let percent = Number(((value / total) * 100).toFixed(1));
    categoriesData.push({ name: key, value: percent });
  });

  const sortedCategories = categoriesData.sort((a, b) => b.value - a.value);

  return getColors(sortedCategories);
}
