import Button from "@/components/atoms/Button/page";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between py-4 lg:py-8 w-full pad-x">
        <div className="flex items-center">
          <span className="text-lg font-bold">Spendtify</span>
        </div>
        <div className="flex items-center">
          <Button variant="secondary">Login</Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
