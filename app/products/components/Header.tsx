import styles from "./Header.module.scss";
import { FaSearch } from "react-icons/fa";
import { useProductStore } from "@/store/products";

export default function Header() {
  const setSearchProduct = useProductStore((state) => state.setSearchProduct);

  const onChangeInput = (val: string) => {
    setSearchProduct(val);
  };

  return (
    <div className={styles.heading}>
      <h1>List of Products</h1>
      <div className={styles.searchInput}>
        <FaSearch className={styles.icon} />
        <input
          type="text"
          placeholder="Search Product"
          maxLength={50}
          alt="Search product"
          onChange={(e) => onChangeInput(e.currentTarget.value)}
        />
      </div>
    </div>
  );
}
