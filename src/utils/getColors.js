export function getColors(data) {
  const colors = [
    "#0EBB69",
    "#0EF387",
    "#FAFAFA",
    "#444446",
    "#C2C2C2",
    "#6C7A89",
    "#B0B7C3",
    "#CAD1C3",
    "#B2A29F",
    "#A0B9AE",
    "#D3CBC5",
    "#6A7E73",
    "#D4D4D4",
    "#95A78D",
    "#AAB7B8",
    "#BACDB0",
    "#9CADA5",
  ];

  data.map((item, index) => {
    item.color = colors[index % colors.length];
  });

  return data;
}
