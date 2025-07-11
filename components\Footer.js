function Footer() {
  return (
    <div className="bg-gray-200 h-screen p-4 pt-6 md:p-6 lg:p-12 text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Get in Touch</h2>
      <p className="text-gray-600">Contact us for more information</p>
      <div className="flex justify-center">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <i className="fab fa-instagram" />
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <i className="fab fa-twitter" />
        </a>
      </div>
      <p className="text-gray-600">Copyright 2023 Swat Beauty. All rights reserved.</p>
    </div>
  )
}

export default Footer