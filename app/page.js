import Quote from "./component/Quote";

export default function Home() {
  return (
    <main className="w-full">
      <header className="fixed z-10 bg-black w-full">
        <div className="container flex justify-between">
          <h3 className="text-2xl text-left p-4 text-white">Quote Generator</h3>
        </div>

      </header>

      <Quote/>

    </main>
  );
}
