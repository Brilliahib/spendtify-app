import Button from "@/components/atoms/Button/page";
import CardWallet from "@/components/atoms/CardWallet/page";
import AddItems from "@/components/molecules/Drawer/page";
import Form from "@/components/molecules/Form/page";
import Navbar from "@/components/molecules/Navbar/page";
import Table from "@/components/molecules/Table/page";

export default function Home() {
  return (
    <>
      <main className="flex flex-col w-full flex-1">
        <Navbar />
        <section className="pad-x">
          <div className="flex justify-between lg:py-8 py-4">
            <div className="flex items-center">
              <div className="flex flex-col space-y-2">
                <span className="text-lg font-bold">Your Wallet</span>
                <p className="text-sm text-foreground/60">
                  You can store in several different pockets.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex items-center grid grid-cols-2 grid-rows-2 lg:gap-8 gap-6 mb-12">
            <CardWallet variant="income">
              <span data-type="header" className="text-sm text-green-500">
                +10% vs last year
              </span>
              <p
                data-type="main"
                className="text-foreground/60 text-sm font-base"
              >
                Total Income
              </p>
              <h2
                data-type="main"
                className="lg:text-3xl text-lg font-semibold"
              >
                Rp. 250.000
              </h2>
            </CardWallet>
            <CardWallet variant="expenses">
              <span data-type="header" className="text-sm text-red-500">
                -10% vs last year
              </span>
              <p
                data-type="main"
                className="text-foreground/60 text-sm font-base"
              >
                Total Expenses
              </p>
              <h2
                data-type="main"
                className="lg:text-3xl text-lg font-semibold"
              >
                Rp. 250.000
              </h2>
            </CardWallet>
            <CardWallet variant="ballance">
              <span data-type="header" className="text-sm text-green-500">
                +10% vs last year
              </span>
              <p
                data-type="main"
                className="text-foreground/60 text-sm font-base"
              >
                Your Ballance
              </p>
              <h2
                data-type="main"
                className="lg:text-3xl text-lg font-semibold"
              >
                Rp. 250.000
              </h2>
            </CardWallet>
            <CardWallet variant="investments">
              <span data-type="header" className="text-sm text-yellow-500">
                +10% vs last year
              </span>
              <p
                data-type="main"
                className="text-foreground/60 text-sm font-base"
              >
                Your Investments
              </p>
              <h2
                data-type="main"
                className="lg:text-3xl text-lg font-semibold"
              >
                Rp. 250.000
              </h2>
            </CardWallet>
          </div>
          <div className="flex flex-col mt-12">
            <div className="flex justify-between lg:py-8 py-4">
              <div className="flex flex-col space-y-2">
                <span className="text-lg font-bold">Your Transactions</span>
                <p className="text-sm text-foreground/60">
                  You can store in several different pockets.
                </p>
              </div>
              <div className="flex flex-col">
                <AddItems />
              </div>
            </div>
            <div className="rounded-md border border-border">
              <div className="relative w-full overflow-auto">
                <Table />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
