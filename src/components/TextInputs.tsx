export default function TextInputs(){
  return (
    <>
     <label htmlFor="titleIn">Title</label>
      <input id="titleIn" type="text" placeholder="title" />
      <label htmlFor="priceIn">Price</label>
      <input id="priceIn" type="number" placeholder="price" />
      <label htmlFor="categoryIn">Category</label>
      <select name="" id="categoryIn" defaultValue="0">
        <option disabled value="0">Select a Category</option>
        <option value="Electronics">Electronics</option>
        <option value="sport">Sport</option>
        <option value="real-estate">Real Estate</option>
        <option value="vehicles">Vehicles</option>
      </select>
      <label htmlFor="descriptionIn">Category</label>
      <textarea name="" id="descriptionIn" placeholder="description"></textarea>
      <label htmlFor="phoneIn">Phone Number</label>
      <textarea name="" id="phoneIn" placeholder="mobile +21622000000"></textarea>
    </>
  )
}