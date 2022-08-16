import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Title } from '../components/title';
import { Receitas } from '../components/menu_receitas';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Receitas - Esmaltes para cerâmica" />
      </Head>
      <main className={styles.main}>
        {Title(1, 'Receitas', 'main-title', 'header', '#f6a655')}
        <br />
        {Title(1, 'Esmaltes cerâmicos', 'main', 'title-2', '#fbfbb8')}
        <br />
        {Title(2, 'Escolha sua receita:', 'main', 'menu-title', '#fff')}
        {Receitas()}
      </main>
    </div>
  )
}

export default Home
