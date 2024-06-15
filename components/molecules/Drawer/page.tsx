import React, { useState } from "react";
import Button from "@/components/atoms/Button/page";
import InputForm from "@/components/atoms/InputForm/page";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { useAuth } from "@/app/context/AuthContext"; // Impor hook useAuth dari modul autentikasi Firebase Anda
import { InputItems } from "@/components/InputItems/page";

interface AddItemsProps {
  onClose: () => void;
}

const AddItems: React.FC<AddItemsProps> = ({ onClose }) => {
  const { user } = useAuth(); // Dapatkan objek pengguna dari hook useAuth

  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    tag: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (!formData.amount || !formData.category || !formData.tag) {
        console.log(formData);
        alert("Please fill in all fields.");
        return;
      }

      if (!user) {
        alert("User not authenticated.");
        return;
      }

      // Mengisi field tambahan
      const newTransaction = {
        ...formData,
        timestamp: new Date(), // Tanggal dan waktu saat ini
        userId: user.uid, // Menggunakan UID pengguna yang sudah masuk
      };

      await addDoc(collection(db, "transaction"), newTransaction);

      onClose();
    } catch (error: any) {
      console.error("Error adding transaction: ", error.message);
      alert("Failed to add transaction. Please try again later.");
    }
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Add</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="max-w-sm w-full text-center">
            <DrawerTitle>Add new Transaction</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="flex flex-col gap-2 p-4 pb-8 max-w-sm w-full pt-0 mt-0 mb-auto">
            <div className="mb-4">
              <InputItems
                value={formData.amount}
                onChange={handleInputChange}
                type="text"
                name="amount"
                placeholder="Enter Amount"
              />
            </div>
            <div className="mb-4">
              <InputItems
                value={formData.category}
                onChange={handleInputChange}
                type="text"
                name="category"
                placeholder="Enter Category"
              />
            </div>
            <div className="mb-4">
              <InputItems
                value={formData.tag}
                onChange={handleInputChange}
                type="text"
                name="tag"
                placeholder="Enter Tag"
              />
            </div>
            <DrawerClose asChild>
              <Button onClick={handleSubmit}>Submit</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default AddItems;
