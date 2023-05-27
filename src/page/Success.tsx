import { Receipt } from "../components/Receipt";
import { useSearchParams } from "react-router-dom";


export const Success = () => {
  const [searchParams] = useSearchParams();

  return (
    <div className="flex flex-col text-center">
      <div>🥳</div>
      <div className="text-3xl font-bold">Transaction Success!</div>
      <Receipt
        amount={parseInt(searchParams.get("amount") as string)}
        userid={searchParams.get("userid") as string}
        merchid={searchParams.get("merchid") as string}
      />
    </div>
  );
};
