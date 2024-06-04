export default function NewAdPage(){
  return (
    <form action="" className="max-w-xl mx-auto flex gap-8 bg-red-300">
      <div className="grow">
      <label htmlFor="titleIn">Title</label>
      <input id="titleIn" type="text" placeholder="title" />
      <label htmlFor="priceIn">Price</label>
      <input id="priceIn" type="number" placeholder="price" />
      <label htmlFor="categoryIn">Category</label>
      <select name="" id="categoryIn">
        <option selected disabled value="">Select a Category</option>
        <option value="Electronics">Electronics</option>
        <option value="sport">Sport</option>
        <option value="real-estate">Real Estate</option>
        <option value="vehicles">Vehicles</option>
      </select>
      <label htmlFor="descriptionIn">Category</label>
      <textarea name="" id="descriptionIn" placeholder="description"></textarea>
      <label htmlFor="phoneIn">Phone Number</label>
      <textarea name="" id="phoneIn" placeholder="mobile +21622000000"></textarea>
      </div>
      <div className="">
       imga uploading
      </div>
    </form>
  )
}