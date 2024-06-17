import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { useAuth } from "@/app/context/AuthContext";
import { SkeletonCard } from "../Skeleton/page";

type CardWalletProps = {
  variant: "income" | "balance" | "expenses" | "investments";
};

const CardWallet: React.FC<CardWalletProps> = ({ variant }) => {
  const { user } = useAuth();
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "transaction"),
      where("userId", "==", user.uid)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let total = 0;
      let latestTimestamp: Date | null = null;

      snapshot.forEach((doc) => {
        const walletData = doc.data();
        if (walletData.category === variant) {
          const amount = parseFloat(walletData.amount);
          if (!isNaN(amount)) {
            total += amount;
          }
          const timestamp = walletData.timestamp?.toDate();
          if (timestamp && (!latestTimestamp || timestamp > latestTimestamp)) {
            latestTimestamp = timestamp;
          }
        }
      });

      setTotalAmount(total);
      setLastUpdated(latestTimestamp);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user, variant]);

  const cardColors = {
    income: "bg-[#1c2e1b] text-green-500",
    balance: "bg-[#1c2e1b] text-green-500",
    expenses: "bg-[#301d1d] text-red-500",
    investments: "bg-[#2e2c1b] text-yellow-500",
  };

  const formatLastUpdated = (date: Date | null) => {
    if (!date) return "";
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
    if (diff < 60) return `Last updated ${diff} seconds ago`;
    const diffMinutes = Math.floor(diff / 60);
    if (diffMinutes < 60) return `Last updated ${diffMinutes} minutes ago`;
    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `Last updated ${diffHours} hours ago`;
    const diffDays = Math.floor(diffHours / 24);
    return `Last updated ${diffDays} days ago`;
  };

  if (loading) {
    return <SkeletonCard />;
  }

  return (
    <div className="card p-5 bg-[#191919] rounded-xl lg:min-h-[250px] min-h-[200px] flex flex-col">
      <div className="header-status">
        <div
          className={`py-1 px-2 rounded-md text-sm inline-block ${cardColors[variant]}`}
        >
          <span className="lg:text-sm text-xs">+ 20% vs last year</span>
        </div>
      </div>
      <div className="main-status flex-1 flex items-end">
        <div className="flex flex-col space-y-2">
          <p className="lg:text-sm capitalize text-xs">Total {variant}</p>
          <h2 className="lg:text-3xl text-base font-semibold">
            Rp. {totalAmount.toLocaleString()}
          </h2>
          {lastUpdated && (
            <p className="text-xs text-muted-foreground/60">
              {formatLastUpdated(lastUpdated)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardWallet;
