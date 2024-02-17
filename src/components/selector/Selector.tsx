import styles from "./index.module.scss";

const Selector = ({ setSelectedGen }: any) => {
  return (
    <div className={styles.selector}>
      <label htmlFor="generation">Scegli la generazione </label>
      <select
        onChange={(e) => setSelectedGen(e.target.value)}
        name="generation"
        id="generation"
      >
        <option value="limit=151">I</option>
        <option value="offset=151&limit=100">II</option>
        <option value="offset=251&limit=135">III</option>
        <option value="offset=386&limit=107">IV</option>
        <option value="offset=493&limit=156">V</option>
        <option value="offset=649&limit=72">VI</option>
        <option value="offset=721&limit=87">VII</option>
        <option value="offset=809&limit=96">VIII</option>
        <option value="offset=905&limit=120">IX</option>
      </select>
    </div>
  );
};
export default Selector;
