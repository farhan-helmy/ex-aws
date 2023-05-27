type ReceiptProps = {
  amount: number;
  userid: string;
  merchid: string;
};

export const Receipt: React.FC<ReceiptProps> = ({
  amount,
  userid,
  merchid,
}) => {
  const currentDate = new Date();
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="rounded-lg shadow-lg p-12 text-xs mt-8 mx-4 sm:mx-0 bg-white">
        <div>
          <div className="flex flex-col">
            <div className="items-center justify-center flex">
              <img src="./assets/logo.jpeg" alt="logo" className="h-12 w-10 " />
            </div>
            <h1 className="text-gray-800 text-xl font-medium mb-2">
              Receipt for {userid}
            </h1>
            <p className="text-gray-600 text-xs">
              Date: {currentDate.toDateString()}
            </p>
            <p className="text-gray-600 text-xs">Merchant ID: {merchid}</p>
          </div>
          <div className="my-4" />
          <div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">Total</span>
              <span className="text-lg font-medium">RM {amount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
