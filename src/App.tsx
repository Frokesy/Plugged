import { Paginator } from "./components";
import { supabase } from "../utils/supabaseClient";
import { useEffect, useState } from "react";


function App() {
  // const [products, setProducts] = useState<ProductsProps[]>([]);
  // const [currentPage, setCurrentPage] = useState<number>(1);

  // const itemsPerPage = 3;

  // // Get data for current page
  // const indexOfLastPost = currentPage * itemsPerPage;
  // const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  // const currentData = products.slice(indexOfFirstPost, indexOfLastPost);

  // // Change page
  // const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // const fetchAllProducts = async () => {
  //   const { data, error } = await supabase.from("products").select("*");
  //   if (!error) {
  //     setProducts(data);
  //   } else {
  //     console.log("error", data);
  //   }
  // };

  // useEffect(() => {
  //   fetchAllProducts();
  // }, []);


  return (
    <>
      {/* <div className="">
        <Paginator
          itemsLength={products.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          paginate={paginate}
        >
          {currentData.map((product) => (
            <div key={product.id} className="">
              <h2>{product.name}</h2>
            </div>
          ))}
        </Paginator>
      </div> */}
    </>
  );
}

export default App;
