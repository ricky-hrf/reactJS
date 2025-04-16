const CardCategory = (data) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center border border-purple-600">
      <div className="mb-4 flex items-center justify-center">
        <h3 className="text-lg font-semibold">{data.category}</h3>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="mb-4 flex items-center justify-center">
          <img src={data.image} alt={data.title} className="w-16 h-16 rounded-full" />
          <span>{data.name}</span>
        </div>
      </div>
    </div>
  );
}
export default CardCategory;