import style from "./Header.module.css";
import { Login } from "./Login";
import { SearchBar } from "./SearchBar";
export function Header() {
  return (
    <div className={style.head}>
      <header>
        <h1 className={style.text}>Eagle</h1>
      </header>
      <Login />
      <SearchBar />
    </div>
  );
}
