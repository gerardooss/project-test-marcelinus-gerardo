/* eslint-disable @next/next/no-img-element */
const Card: React.FC<Result> = ({ data }) => {

  // Month formatter -----------------
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 px-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_cC219YXyS44-l3iogAGCMMbS31nD1Hi8Sg&s"
            loading="lazy"
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-gray-500">
              {`${new Date(item.published_at).getDate()} ${
                months[new Date(item.published_at).getMonth()]
              } ${new Date(item.published_at).getFullYear()}`}
            </p>
            <h2 className="font-bold text-lg line-clamp-3">{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
