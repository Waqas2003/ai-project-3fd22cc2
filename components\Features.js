function Features() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Our Features</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white shadow-md rounded p-4">
            <h3 className="text-lg font-bold">Natural Ingredients</h3>
            <p className="text-gray-600">We use only the finest natural ingredients</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white shadow-md rounded p-4">
            <h3 className="text-lg font-bold">Cruelty-Free</h3>
            <p className="text-gray-600">We love animals and the planet</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white shadow-md rounded p-4">
            <h3 className="text-lg font-bold">Sustainable Packaging</h3>
            <p className="text-gray-600">We care about the planet's future</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features