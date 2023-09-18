export default function CardContent({ feature, first }) {
  return (
    <div>
      <h2 className={` ${first ? 'text-3xl' : 'text-2xl'}`}>{feature.title}</h2>
      <p>{feature.description}</p>
    </div>
  );
}
