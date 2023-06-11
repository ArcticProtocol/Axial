const AdminPage = () => {
  return <div></div>;
};

type AminProjectListTileParams = {
  coverImage: string;
  title: string;
  balance: string;
  onClick: () => void;
};
const AdminProjectListTile: React.FC<AminProjectListTileParams> = ({
  coverImage,
  title,
  balance,
  onClick,
}) => {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-4">
      <img
        className="w-16 h-16 rounded-md mr-4"
        src={coverImage}
        alt="Project Cover"
      />
      <div className="flex-grow">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-500">Balance: {balance}</p>
      </div>
      <button
        className="bg-green-500 rounded-md text-white px-4 py-2"
        onClick={onClick}
      >
        Manage
      </button>
    </div>
  );
};


export default AdminPage;