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

const AddItems = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Add</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="max-w-sm w-full text-center">
            <DrawerTitle>Add new Transactions</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="flex flex-col gap-2 p-4 pb-8 max-w-sm w-full pt-0 mt-0 mb-auto">
            <InputForm></InputForm>
            <Button>Submit</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default AddItems;
