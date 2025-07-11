import Image from 'next/image'

function Cards() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Our Products</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white shadow-md rounded p-4">
            <Image src="/product1.jpg" alt="Product 1" width={300} height={300} />
            <h3 className="text-lg font-bold">Product 1</h3>
            <p className="text-gray-600">Description of product 1</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white shadow-md rounded p-4">
            <Image src="/product2.jpg" alt="Product 2" width={300} height={300} />
            <h3 className="text-lg font-bold">Product 2</h3>
            <p className="text-gray-600">Description of product 2</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white shadow-md rounded p-4">
            <Image src="/product3.jpg" alt="Product 3" width={300} height={300} />
            <h3 className="text-lg font-bold">Product 3</h3>
            <p className="text-gray-600">Description of product 3</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards