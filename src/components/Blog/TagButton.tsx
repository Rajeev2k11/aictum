const TagButton = ({ href = "#0", text }: { href?: string; text: string }) => {
  return (
    <a
      href={href}
      className="mb-3 mr-3 inline-flex items-center justify-center rounded-md bg-[#473062] px-4 py-2 text-sm text-white transition duration-300 hover:bg-[#9345E0] hover:text-white"
    >
      {text}
    </a>
  );
};

export default TagButton;
