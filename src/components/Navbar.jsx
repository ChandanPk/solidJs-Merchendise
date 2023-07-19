const Navbar = () => {
  return (
    <div class="mx-auto bg-red-200 grid grid-cols-2 p-3">
      <div>Merchendise</div>
      <ul class="flex justify-end bg-slate-100 gap-x-3 hover:cursor-pointer">
        <li>Home</li>
        <li>Orders</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
