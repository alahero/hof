import { BurgerBurst } from '../components/BurgerBurst';

/**
 * Food section — hamburguesa irrumpiendo con scroll scrubbing.
 * Delega toda la lógica de animación a BurgerBurst.
 */
export function FoodSection() {
  return (
    <section id="food" className="hof-food">
      <BurgerBurst />
    </section>
  );
}
