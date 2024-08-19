import { Paginator } from "./components"

function App() {

  return (
    <>
      <div className="">
        <h2 className="text-3xl text-red-500">Hello world</h2>
        <Paginator totalPages={10} currentPage={1} />
      </div>
    </>
  )
}

export default App
