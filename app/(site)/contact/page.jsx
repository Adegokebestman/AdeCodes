"use client"
import React, {useState} from 'react'

const page = () => {
    const FORM_ENDPOINT = 'https://public.herotofu.com/v1/97624e40-3c4b-11ee-9864-53603e081af4';

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
      alert(
       ' I will be in touch soon'
    );
  }

  return (
    <div className='pt-36 pb-3'>

<div class="flex items-center justify-start rounded border-white border pt-4 pb-4">
  <div class="mx-auto w-full max-w-lg">
    <h1 class="text-4xl font-medium text-white">Contact us</h1>
    <p class="mt-3 text-white">Email me at <b className='text-green-100'>Adegokebestman@gmail.com </b>  or message me here:</p>

    <form action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST" class="mt-10">
      <div class="grid gap-6 sm:grid-cols-2">
        <div class="relative z-0">
          <input type="text" name="name" class="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-sm text-white focus:border-green-100 focus:outline-none focus:ring-0" placeholder=" " />
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-100 peer-focus:dark:text-blue-500">Your name</label>
        </div>
        <div class="relative z-0">
          <input type="text" name="email" class="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-sm text-white focus:text-green-100focus:outline-none focus:ring-0" placeholder=" " />
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-100 peer-focus:dark:text-blue-500">Your email</label>
        </div>
        <div class="relative z-0 col-span-2">
          <textarea name="message" rows="5" class="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-sm text-white focus:text-green-100 focus:outline-none focus:ring-0" placeholder=" "></textarea>
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-100 peer-focus:dark:text-blue-500">Your message</label>
        </div>
      </div>
      <button type="submit" class="mt-5 rounded-md bg-green-100 px-10 py-2 text-white">Send Message</button>
    </form>
  </div>
</div>
    </div>
  )
}

export default page