import Contains from "../components/Contains";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-10 gap-16  font-[family-name:var(--font-geist-sans)]">
      <main className="border border-red-300">
        <div className="border flex justify-between items-center p-4 m-8 mb-16">
          <div className="flex flex-col gap-2">
            <p>Name:</p>
            <p>Current Balance:</p>
          </div>
          <div>
            <Link href="/info" className="border p-4 rounded-lg hover:bg-purple-950">Info</Link>
          </div>
        </div>
        <div className="border flex flex-col gap-20 p-4 m-8 mb-16">
          <p className="text-2xl text-center ">Transaction Today</p>
          <div className="flex justify-evenly mb-8">
            <Link className="border p-4 rounded-lg hover:bg-purple-950" href="/newTransaction">New Transaction</Link>
            <Link className="border p-4 rounded-lg hover:bg-purple-950" href="/historyTransaction">History Transaction</Link>
          </div>
        </div>

        <div className="border flex flex-col gap-8 p-4 m-8">
          <p className="text-2xl text-center">Current Status</p>
          <Contains title="Current Balance" containOne="Cash Balance" containTwo="Online Balance"/>
          <Contains title="Secondary Users" containOne="Total Debt remaining" containTwo="Total Credit Remaining"/>
        </div>
      </main>
    </div>
  );
}
