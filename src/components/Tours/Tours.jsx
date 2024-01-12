
import Tour from '../Tours/Tour';

const Tours = ({ data }) => {
  return <section className="tours">
    <Tour data={data} />
  </section>
}
export default Tours;