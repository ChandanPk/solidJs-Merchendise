const Card = () => {
  return (
    <div class="text-center border-2 rounded-xl">
      <img
        class="bg-clip-border"
        src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
        alt="img"
      />
      <div>Title</div>
      <button class="py-3 px-5 rounded bg-zinc-300 text-white border-2">
        View item
      </button>
    </div>
  );
};

export default Card;
