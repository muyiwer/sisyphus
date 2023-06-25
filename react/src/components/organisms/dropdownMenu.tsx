import { DropdownButton } from "../molecules/dropdownButton";

export const DropdownMenu = () => {
  return (
    <main className="dropdown-menu mobile" id="dropdown-menu">
      <DropdownButton />
      <section id="main-menu" className="main-menu bg-primary w-menu">
        <button>
          <span className="material-symbols-outlined">Exchange</span>
        </button>
        <button>
          <span className="material-symbols-outlined">Wallet</span>
        </button>
        <button>
          <span className="material-symbols-outlined">Roqqu Hub</span>
        </button>
        <button>
          <span className="material-symbols-outlined">Log Out</span>
        </button>
      </section>
    </main>
  );
};
