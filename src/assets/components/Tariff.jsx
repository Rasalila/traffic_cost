import './Tariff.css';
import Card from './TariffCard.jsx';

export default function Tariff() {
  return (
    <main>
      <section className="cardList">
        <Card color="blue" tariff={300} speed={10}></Card>
        <Card color="green" tariff={450} speed={50}></Card>
        <Card color="red" tariff={550} speed={100}></Card>
        <Card color="black" tariff={1000} speed={200}></Card>
      </section>
    </main>
  );
}