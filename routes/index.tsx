export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <input name="foo" className="peer"></input>
        <div className="peer-focus:mt-6">Should get moved down on focus</div>
      </div>
    </div>
  );
}
