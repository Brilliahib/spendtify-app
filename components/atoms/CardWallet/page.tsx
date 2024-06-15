import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase"; // Sesuaikan dengan cara Anda mengimpor Firebase Firestore

type CardWalletProps = {
  variant: "income" | "balance" | "expenses" | "investments";
};

const CardWallet: React.FC<CardWalletProps> = ({ variant }) => {
  const [totalAmount, setTotalAmount] = useState<number>(0); // Mengubah menjadi 0 sebagai default value

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "transaction")),
      (snapshot) => {
        let total = 0;
        snapshot.forEach((doc) => {
          const walletData = doc.data();
          // Tambahkan amount jika category sesuai dengan variant yang diberikan
          if (walletData.category === variant) {
            const amount = parseFloat(walletData.amount);
            total += amount;
          }
        });
        setTotalAmount(total);
      }
    );

    // Cleanup function
    return () => unsubscribe();
  }, [variant]);

  const cardColors = {
    income: "bg-[#1c2e1b]",
    balance: "bg-[#1c2e1b]",
    expenses: "bg-[#301d1d]",
    investments: "bg-[#2e2c1b]",
  };

  return (
    <div className="card p-5 bg-[#191919] rounded-xl lg:min-h-[250px] min-h-[200px] flex flex-col">
      <div className="header-status">
        <div
          className={`py-1 px-2 rounded-md text-sm inline-block ${cardColors[variant]}`}
        >
          <span className="text-sm text-white">{variant}</span>
        </div>
      </div>
      <div className="main-status flex-1 flex items-end">
        <div className="flex flex-col space-y-2">
          <h2 className="lg:text-3xl text-lg font-semibold">
            Rp. {totalAmount.toLocaleString()}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CardWallet;
