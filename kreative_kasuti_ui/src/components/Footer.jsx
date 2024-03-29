// Implemented tailwind's Default footer design
// https://flowbite.com/docs/components/footer/

const Footer = () => {
  return (
    <footer class="bg-white rounded-lg shadow dark:bg-black m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr class="my-6 border-light-gray sm:mx-auto dark:border-dark-gray lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="/">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-primary-text-color">
              Kreative Kasuti
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-medium-gray">
            <li>
              <a href="/" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="/portfolio" class="hover:underline me-4 md:me-6">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/shop" class="hover:underline me-4 md:me-6">
                Shop
              </a>
            </li>
            <li>
              <a href="/contact" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-light-gray sm:mx-auto dark:border-dark-gray lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-medium-gray">
          © 2024{" "}
          <a href="/" class="hover:underline">
            Kreative Kasuti
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
