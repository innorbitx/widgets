import Link from './Link';

const Header = () => {
  return (
    <div className="p-4 flex font-bold">
      <Link href="/" className="p-2 px-3 pb-0">
        Accordion
      </Link>
      <Link href="/list" className="p-2 px-3 pb-0">
        Search
      </Link>
      <Link href="/dropdown" className="p-2 px-3 pb-0">
        Dropdown
      </Link>
      <Link href="/translate" className="p-2 px-3 pb-0">
        Translate
      </Link>
    </div>
  );
};

export default Header;
