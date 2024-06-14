import Form from "@/components/molecules/Form/page";

export default function Home() {
  return (
    <>
      <main className="flex flex-col w-full flex-1">
        <div className="flex w-full flex-1">
          <div className="w-full flex items-center justify-center grow pad-x px-4 md:px-0">
            <Form />
          </div>
        </div>
      </main>
    </>
  );
}
