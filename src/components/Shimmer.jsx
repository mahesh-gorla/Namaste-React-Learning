export const Shimmer = () => {
  const arr = Array(10).fill("");
  console.log(arr);
  return (
    <div className="shimmer-list">
      {arr.map((e, index) => (
        <div key={index} className="simmer-card"></div>
      ))}
    </div>
  );
};
