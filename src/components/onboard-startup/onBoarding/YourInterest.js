import Button from "../components/Button"

const YourInterest = (props) => {
  return (
    <>
      <div className="my-5 py-6 w-[500px] mx-auto">
        <h1 className="text-4xl font-bold mb-7">Your Interest</h1>
        <form>
        <fieldset className="w-full">
            <label
              htmlFor="url"
              className="block text-md font-medium mt-4 mb-2"
            >
              Website
            </label>
            <div className="flex">
              <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md bg-gray-300">
                https://
              </span>
              <input
                type="text"
                name="url"
                id="url"
                placeholder=" www.acicpropel.com"
                className="flex flex-1 border sm:text-sm rounded-r-md border-gray-300 text-gray-800 bg-gray-100 "
              />
            </div>
          </fieldset>
          <fieldset className="w-full space-y-1 mb-7">
            <label
              htmlFor="url"
              className="block text-md font-medium mt-4 mb-2"
            >
              Mobile App Link
            </label>
            <div className="flex">
              <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md bg-gray-300">
                https://
              </span>
              <input
                type="text"
                name="url"
                id="url"
                placeholder=" www.abyudhi.com"
                className="flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 text-gray-800 bg-gray-100 "
              />
            </div>
          </fieldset>
          <div className='my-5 h-64 text-sm overflow-y-scroll text-justify border px-2 py-2 border-solid border-black rounded'>
            <h2 className="font-semibold text-xl mb-3">Terms and Conditions :-</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus itaque fugit a eaque rem rerum quia! Explicabo cumque tenetur modi dolore, blanditiis molestias est nisi accusantium commodi ipsum dolores!
            </p>
            <br />
            <p>
              Repellendus, quis asperiores tempore fuga voluptatibus aspernatur blanditiis perspiciatis! Aspernatur distinctio quidem, culpa repudiandae illo perferendis corrupti in quos esse a! Consequuntur, excepturi recusandae porro vitae expedita atque cum neque?
              Quo repellat, sapiente esse vero, necessitatibus perspiciatis illo inventore accusamus dolores quas natus fugiat tempora accusantium animi ex asperiores, autem sint. Labore tempora quidem quaerat, nam voluptas veritatis obcaecati velit.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus itaque fugit a eaque rem rerum quia! Explicabo cumque tenetur modi dolore, blanditiis molestias est nisi accusantium commodi ipsum nihil dolores!
            </p>
            <br />
            <p>
              Repellendus, quis asperiores tempore fuga voluptatibus aspernatur blanditiis perspiciatis! Aspernatur distinctio quidem, culpa repudiandae illo perferendis corrupti in quos esse a! Consequuntur, excepturi recusandae porro vitae expedita atque cum neque?
              Quo repellat, sapiente esse vero, necessitatibus perspiciatis illo inventore accusamus dolores quas natus fugiat tempora accusantium animi ex asperiores, autem sint. Labore tempora quidem quaerat, nam voluptas veritatis obcaecati velit.
            </p>
          </div>
          <div className="flex items-center mb-5">
            <input type="checkbox" name="remember" id="term-privacy" aria-label="Remember me" className="mr-1 rounded-sm" />
            <label htmlFor="term-privacy" className="text-sm text-gray-600 cursor-pointer">I agree to Terms and Conditions</label>
          </div>
          <Button handleClick={props.handleClick} previous={3} next={4} />
        </form>
      </div>
    </>
  )
}

export default YourInterest